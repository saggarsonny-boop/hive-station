'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    if (sessionStorage.getItem('hive_station_authed') !== 'true') {
      router.replace('/')
    }
  }, [router])

  return (
    <iframe
      src="/dashboard-content.html"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', border: 'none' }}
      title="Hive Production Dashboard"
    />
  )
}
