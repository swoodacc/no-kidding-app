"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Upload, Camera, Trash2, Volume2, VolumeX } from "lucide-react"

interface VideoProfileProps {
  videoUrl?: string
  isOwner?: boolean
  onVideoUpload?: (file: File) => void
  onVideoDelete?: () => void
}

export function VideoProfile({ videoUrl, isOwner = false, onVideoUpload, onVideoDelete }: VideoProfileProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const videoRef = useRef<HTMLVideoElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && onVideoUpload) {
      // Validate file
      if (file.size > 50 * 1024 * 1024) {
        // 50MB limit
        alert("Video file must be less than 50MB")
        return
      }

      if (!file.type.startsWith("video/")) {
        alert("Please select a video file")
        return
      }

      setIsUploading(true)
      setUploadProgress(0)

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            onVideoUpload(file)
            return 100
          }
          return prev + 10
        })
      }, 200)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (!videoUrl && !isOwner) {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center h-48 text-muted-foreground">
          <div className="text-center">
            <Camera className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No video profile available</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!videoUrl && isOwner) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Video Profile</CardTitle>
          <CardDescription>Add a 30-second video to showcase your personality</CardDescription>
        </CardHeader>
        <CardContent>
          {isUploading ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center h-48 bg-muted rounded-lg">
                <div className="text-center">
                  <Upload className="h-12 w-12 mx-auto mb-2 animate-pulse" />
                  <p>Uploading video...</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Upload Progress</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center h-48 bg-muted rounded-lg border-2 border-dashed">
                <div className="text-center">
                  <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">Upload your video profile</p>
                  <Button onClick={() => fileInputRef.current?.click()}>
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Video
                  </Button>
                </div>
              </div>

              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Maximum 30 seconds</p>
                <p>• File size limit: 50MB</p>
                <p>• Supported formats: MP4, MOV, AVI</p>
                <p>• Keep it authentic and engaging!</p>
              </div>

              <input ref={fileInputRef} type="file" accept="video/*" onChange={handleFileSelect} className="hidden" />
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Video Profile</CardTitle>
            <CardDescription>{duration > 0 && `${formatTime(duration)} video`}</CardDescription>
          </div>
          {isOwner && (
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                <Upload className="h-4 w-4 mr-2" />
                Replace
              </Button>
              <Button variant="outline" size="sm" onClick={onVideoDelete}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-64 object-cover rounded-lg bg-black"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            muted={isMuted}
            playsInline
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center group">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={handlePlayPause}
                className="bg-black bg-opacity-70 hover:bg-opacity-90"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={handleMuteToggle}
                className="bg-black bg-opacity-70 hover:bg-opacity-90"
              >
                {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-4 left-4 right-4">
            <Progress value={progress} className="h-1" />
          </div>

          {/* Verified Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-green-500 text-white">
              Verified
            </Badge>
          </div>
        </div>

        {isOwner && (
          <input ref={fileInputRef} type="file" accept="video/*" onChange={handleFileSelect} className="hidden" />
        )}
      </CardContent>
    </Card>
  )
}
