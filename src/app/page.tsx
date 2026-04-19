'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const LINKS = [
  { label: 'Production Dashboard', url: '/dashboard', icon: '📊', desc: 'Live engine status — daily audit report', internal: true },
  { label: 'Creator Console', url: 'https://creator-console-steel.vercel.app', icon: '🎛️', desc: 'Platform stats and engine management' },
  { label: 'Queen Bee', url: 'https://queen-bee-v1.vercel.app', icon: '👑', desc: 'AI orchestration and routing layer' },
  { label: 'Hive Engine Builder', url: 'https://heb.hive.baby', icon: '⚙️', desc: 'Build and configure new engines' },
  { label: 'hive.baby', url: 'https://hive.baby', icon: '🌍', desc: 'The planet — front door to the Hive' },
]

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.8 + 0.4,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}))

const PW = 'hivebees'

export default function StationPage() {
  const router = useRouter()
  const [locked, setLocked] = useState(true)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('hive_station_authed') === 'true') setLocked(false)
  }, [])

  function unlock() {
    if (input.toLowerCase() === PW) {
      sessionStorage.setItem('hive_station_authed', 'true')
      setLocked(false)
      setError(false)
    } else {
      setError(true)
    }
  }

  function lock() {
    sessionStorage.removeItem('hive_station_authed')
    setLocked(true)
    setInput('')
  }

  if (locked) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {STARS.map(s => (
        <div key={s.id} className="star" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, '--d': `${s.duration}s`, '--delay': `${s.delay}s` } as React.CSSProperties} />
      ))}
      <div className="station-card" style={{ textAlign: 'center', zIndex: 10, minWidth: '280px' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>🛸</div>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(200,214,240,0.4)', marginBottom: '24px', textTransform: 'uppercase' }}>HIVE STATION</div>
        <input
          type="password"
          placeholder="password"
          value={input}
          onChange={e => { setInput(e.target.value); setError(false) }}
          onKeyDown={e => e.key === 'Enter' && unlock()}
          style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${error ? '#e24b4a' : 'rgba(200,214,240,0.15)'}`, borderRadius: '8px', padding: '10px 16px', color: '#c8d6f0', fontSize: '13px', width: '100%', marginBottom: '12px', outline: 'none', textAlign: 'center', letterSpacing: '0.15em' }}
        />
        {error && <div style={{ fontSize: '11px', color: '#e24b4a', marginBottom: '10px' }}>Incorrect password</div>}
        <button onClick={unlock} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,214,240,0.15)', borderRadius: '8px', padding: '10px 24px', color: '#c8d6f0', fontSize: '13px', cursor: 'pointer', letterSpacing: '0.1em', width: '100%' }}>
          ENTER
        </button>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {STARS.map(s => (
        <div key={s.id} className="star" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, '--d': `${s.duration}s`, '--delay': `${s.delay}s` } as React.CSSProperties} />
      ))}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '560px', margin: '0 auto', padding: '80px 24px 60px' }} className="station-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span style={{ fontSize: '28px' }}>🛸</span>
          <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#c8d6f0', letterSpacing: '0.05em' }}>Hive Station</h1>
        </div>
        <p style={{ fontSize: '12px', color: 'rgba(200,214,240,0.35)', letterSpacing: '0.15em', marginBottom: '48px', textTransform: 'uppercase' }}>Internal Operations Hub</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {LINKS.map(link => (
            <a
              key={link.url}
              href={link.url}
              target={link.internal ? '_self' : '_blank'}
              rel={link.internal ? undefined : 'noopener noreferrer'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(200,214,240,0.08)',
                borderRadius: '10px',
                padding: '16px 20px',
                textDecoration: 'none',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,214,240,0.2)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,214,240,0.08)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'
              }}
            >
              <span style={{ fontSize: '22px', flexShrink: 0 }}>{link.icon}</span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#c8d6f0', marginBottom: '3px' }}>{link.label}</div>
                <div style={{ fontSize: '12px', color: 'rgba(200,214,240,0.4)' }}>{link.desc}</div>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: '14px', color: 'rgba(200,214,240,0.25)' }}>→</span>
            </a>
          ))}
        </div>

        <div style={{ marginTop: '48px', borderTop: '1px solid rgba(200,214,240,0.06)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', color: 'rgba(200,214,240,0.2)', letterSpacing: '0.2em' }}>HIVE · INTERNAL</span>
          <button
            onClick={lock}
            style={{ background: 'none', border: 'none', fontSize: '11px', color: 'rgba(200,214,240,0.25)', cursor: 'pointer', letterSpacing: '0.1em' }}
          >
            LOCK
          </button>
        </div>
      </div>
    </div>
  )
}
