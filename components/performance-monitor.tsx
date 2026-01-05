"use client"

// Thresholds for performance metrics
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint (ms)
  FID: { good: 100, poor: 300 }, // First Input Delay (ms)
  CLS: { good: 0.1, poor: 0.25 }, // Cumulative Layout Shift
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte (ms)
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint (ms)
}

export function PerformanceMonitor() {
  // Visual-only mode - no actual performance tracking
  return null
}
