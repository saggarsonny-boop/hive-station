'use client'
import { useState } from 'react'

const LINKS = [
  { label: 'Creator Console', url: 'https://creator-console-steel.vercel.app', icon: '🎛️', desc: 'Platform stats and engine management' },
  { label: 'Queen Bee', url: 'https://queen-bee-v1.vercel.app', icon: '👑', desc: 'AI orchestration and routing layer' },
  { label: 'Hive Engine Builder', url: 'https://heb.hive.baby', icon: '⚙️', desc: 'Build and configure new engines' },
  { label: 'Stats', url: 'https://creator-console-steel.vercel.app/dashboard', icon: '📊', desc: 'Live platform metrics' },
]

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.8 + 0.4,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}))

export default function StationPage() {
  const [locked, setLocked] = useState(false)

  if (locked) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {STARS.map(s => (
        <div key={s.id} className="star" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, '--d': `${s.duration}s`, '--delay': `${s.delay}s` } as React.CSSProperties} />
      ))}
      <div className="station-card" style={{ textAlign: 'center', zIndex: 10 }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>🛸</div>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(200,214,240,0.4)', marginBottom: '24px', textTransform: 'uppercase' }}>HIVE STATION</div>
        <button onClick={() => setLocked(false)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,214,240,0.15)', borderRadius: '8px', padding: '10px 24px', color: '#c8d6f0', fontSize: '13px', cursor: 'pointer', letterSpacing: '0.1em' }}>
          UNLOCK
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
              target="_blank"
              rel="noopener noreferrer"
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
            onClick={() => setLocked(true)}
            style={{ background: 'none', border: 'none', fontSize: '11px', color: 'rgba(200,214,240,0.25)', cursor: 'pointer', letterSpacing: '0.1em' }}
          >
            LOCK
          </button>
        </div>
      </div>
    </div>
  )
}
