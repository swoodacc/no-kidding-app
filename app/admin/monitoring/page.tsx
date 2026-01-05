"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, AlertTriangle, Activity, Database, Clock, Server } from "lucide-react"

interface HealthStatus {
  status: "healthy" | "degraded" | "unhealthy"
  database: {
    status: "connected" | "error"
    latency?: number
    message?: string
  }
  api: {
    status: "ok" | "error"
    version: string
    uptime: number
  }
  timestamp: string
}

export default function MonitoringPage() {
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastChecked, setLastChecked] = useState<Date | null>(null)

  const fetchHealthStatus = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/health", {
        cache: "no-store",
      })

      const data = await response.json()
      setHealthStatus(data)
      setLastChecked(new Date())
    } catch (err) {
      setError("Failed to fetch health status")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHealthStatus()

    // Refresh every 60 seconds
    const interval = setInterval(fetchHealthStatus, 60000)

    return () => clearInterval(interval)
  }, [])

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)

    return `${days}d ${hours}h ${minutes}m`
  }

  const getStatusColor = (status: "healthy" | "degraded" | "unhealthy") => {
    switch (status) {
      case "healthy":
        return "bg-green-500"
      case "degraded":
        return "bg-yellow-500"
      case "unhealthy":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusBadge = (status: "healthy" | "degraded" | "unhealthy") => {
    switch (status) {
      case "healthy":
        return <Badge className="bg-green-500 hover:bg-green-600">Healthy</Badge>
      case "degraded":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Degraded</Badge>
      case "unhealthy":
        return <Badge className="bg-red-500 hover:bg-red-600">Unhealthy</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Activity className="h-6 w-6 mr-2 text-primary" />
          <h1 className="text-3xl font-bold">System Monitoring</h1>
        </div>
        <Button onClick={fetchHealthStatus} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {error && (
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center text-red-600">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <p>{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              {healthStatus ? (
                <>
                  <div className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(healthStatus.status)}`}></div>
                  <span className="font-medium capitalize">{healthStatus.status}</span>
                </>
              ) : (
                <span className="text-muted-foreground">Loading...</span>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Database className="h-4 w-4 mr-2" />
              Database
            </CardTitle>
          </CardHeader>
          <CardContent>
            {healthStatus ? (
              <div className="space-y-1">
                <div className="flex items-center">
                  <span className="text-muted-foreground mr-2">Status:</span>
                  <span className={healthStatus.database.status === "connected" ? "text-green-600" : "text-red-600"}>
                    {healthStatus.database.status}
                  </span>
                </div>
                {healthStatus.database.latency && (
                  <div className="flex items-center">
                    <span className="text-muted-foreground mr-2">Latency:</span>
                    <span>{healthStatus.database.latency}ms</span>
                  </div>
                )}
              </div>
            ) : (
              <span className="text-muted-foreground">Loading...</span>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Server className="h-4 w-4 mr-2" />
              API
            </CardTitle>
          </CardHeader>
          <CardContent>
            {healthStatus ? (
              <div className="space-y-1">
                <div className="flex items-center">
                  <span className="text-muted-foreground mr-2">Version:</span>
                  <span>{healthStatus.api.version}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-muted-foreground mr-2">Uptime:</span>
                  <span>{formatUptime(healthStatus.api.uptime)}</span>
                </div>
              </div>
            ) : (
              <span className="text-muted-foreground">Loading...</span>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Health Details</CardTitle>
          <CardDescription>
            {lastChecked ? (
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Last checked: {lastChecked.toLocaleTimeString()}
              </span>
            ) : (
              "Loading health data..."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {healthStatus ? (
            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="api">API</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="text-sm font-medium text-muted-foreground mb-1">Status</div>
                      <div className="flex items-center">{getStatusBadge(healthStatus.status)}</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-sm font-medium text-muted-foreground mb-1">Last Updated</div>
                      <div>{new Date(healthStatus.timestamp).toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">System Components</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Database</span>
                        <Badge variant={healthStatus.database.status === "connected" ? "outline" : "destructive"}>
                          {healthStatus.database.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>API</span>
                        <Badge variant={healthStatus.api.status === "ok" ? "outline" : "destructive"}>
                          {healthStatus.api.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="database">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Database Status</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Connection</span>
                        <Badge variant={healthStatus.database.status === "connected" ? "outline" : "destructive"}>
                          {healthStatus.database.status}
                        </Badge>
                      </div>
                      {healthStatus.database.latency && (
                        <div className="flex items-center justify-between">
                          <span>Query Latency</span>
                          <span className={healthStatus.database.latency > 1000 ? "text-yellow-600" : "text-green-600"}>
                            {healthStatus.database.latency}ms
                          </span>
                        </div>
                      )}
                      {healthStatus.database.message && (
                        <div className="flex items-center justify-between">
                          <span>Message</span>
                          <span className="text-yellow-600">{healthStatus.database.message}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="api">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">API Status</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Status</span>
                        <Badge variant={healthStatus.api.status === "ok" ? "outline" : "destructive"}>
                          {healthStatus.api.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Version</span>
                        <span>{healthStatus.api.version}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Uptime</span>
                        <span>{formatUptime(healthStatus.api.uptime)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="flex justify-center py-8">
              <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={fetchHealthStatus} className="w-full bg-transparent">
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh Health Status
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
