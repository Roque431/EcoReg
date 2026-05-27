import { useState } from 'react';
import { tokens as t } from '../styles/tokens';
import { MAP_PINS } from '../data/content';

export default function MapaSection() {
  const [hov, setHov] = useState(null);

  return (
    <section id="mapa" style={{ padding: '6rem 1.5rem', background: t.bgCard, borderTop: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '3rem', alignItems: 'center' }} className="map-grid">

        {/* ─── Columna izquierda: descripción ─── */}
        <div>
          <div className="section-tag">Red de reciclaje</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '0.02em', color: t.textPri, marginBottom: '1.25rem', lineHeight: 0.95 }}>
            Conexión<br /><span style={{ color: t.blue }}>Geoespacial</span><br />PostGIS
          </h2>
          <p style={{ color: t.textSec, lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.9rem' }}>
            Optimizamos rutas de reciclaje para que el aceite quemado tenga una segunda vida útil y{' '}
            <strong style={{ color: t.textPri }}>nunca termine en el drenaje</strong>.
          </p>

          {/* Leyenda */}
          {[
            { c: t.red,  label: 'Talleres con contenedor lleno',  sub: 'Requieren recolección prioritaria' },
            { c: t.blue, label: 'Centros autorizados SEMARNAT',   sub: 'Certificados para residuos peligrosos' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: i > 0 ? 12 : 0 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.c, boxShadow: `0 0 8px ${item.c}66`, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: t.textPri }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', color: t.textMuted }}>{item.sub}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '1.75rem', padding: '1rem 1.25rem', background: t.bg, border: `1px solid ${t.blue}22`, borderRadius: 4 }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: t.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
              Rutas activas — Mérida
            </div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: t.blue, letterSpacing: '0.03em' }}>
              24 <span style={{ fontSize: '1rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, color: t.textSec }}>talleres conectados</span>
            </div>
          </div>
        </div>

        {/* ─── Mapa simulado ─── */}
        <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', border: `1px solid ${t.border}`, aspectRatio: '16/10' }}>
          <div style={{
            width: '100%', height: '100%', background: '#030a12',
            backgroundImage: `linear-gradient(${t.border}33 1px, transparent 1px), linear-gradient(90deg, ${t.border}33 1px, transparent 1px)`,
            backgroundSize: '22px 22px', position: 'relative',
          }}>
            {/* Calles SVG */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
              <line x1="0"   y1="30%" x2="100%" y2="30%" stroke={t.border} strokeWidth="2"   opacity="0.6" />
              <line x1="0"   y1="55%" x2="100%" y2="55%" stroke={t.border} strokeWidth="1.5" opacity="0.4" />
              <line x1="0"   y1="75%" x2="100%" y2="75%" stroke={t.border} strokeWidth="1"   opacity="0.3" />
              <line x1="25%" y1="0"   x2="25%"  y2="100%" stroke={t.border} strokeWidth="1.5" opacity="0.5" />
              <line x1="50%" y1="0"   x2="50%"  y2="100%" stroke={t.border} strokeWidth="2"   opacity="0.5" />
              <line x1="72%" y1="0"   x2="72%"  y2="100%" stroke={t.border} strokeWidth="1"   opacity="0.3" />
              <line x1="0"   y1="85%" x2="50%"  y2="30%"  stroke={t.border} strokeWidth="1.5" opacity="0.3" />
              {/* Rutas de recolección */}
              <polyline points="28%,38% 39%,46% 63%,31%" stroke={t.blue} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" fill="none" />
              <polyline points="53%,22% 63%,31%"          stroke={t.blue} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" fill="none" />
              <polyline points="70%,56% 55%,67%"          stroke={t.blue} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4" fill="none" />
            </svg>

            {/* Pines interactivos */}
            {MAP_PINS.map((pin, i) => (
              <div
                key={i}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  position: 'absolute', left: pin.x, top: pin.y,
                  transform: 'translate(-50%, -100%)', cursor: 'pointer',
                  animation: `pinFloat ${1.6 + i * 0.15}s ease-in-out infinite`,
                  zIndex: hov === i ? 10 : 1,
                }}
              >
                {/* Tooltip */}
                {hov === i && (
                  <div style={{
                    position: 'absolute', bottom: 'calc(100% + 3px)', left: '50%', transform: 'translateX(-50%)',
                    background: t.bgCard, border: `1px solid ${pin.type === 'w' ? t.red : t.blue}55`,
                    borderRadius: 4, padding: '4px 10px', whiteSpace: 'nowrap',
                    fontSize: '0.7rem', color: t.textPri, fontFamily: "'Space Mono', monospace",
                    pointerEvents: 'none',
                  }}>
                    {pin.label}
                  </div>
                )}
                <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
                  <path d="M9 1C5.1 1 2 4.1 2 8C2 13 9 23 9 23C9 23 16 13 16 8C16 4.1 12.9 1 9 1Z" fill={pin.type === 'w' ? t.red : t.blue} opacity="0.85" />
                  <circle cx="9" cy="8" r="3" fill="rgba(0,0,0,0.45)" />
                </svg>
              </div>
            ))}

            <div style={{ position: 'absolute', bottom: 8, right: 10, fontSize: '0.6rem', color: t.textMuted, fontFamily: "'Space Mono', monospace", letterSpacing: '0.1em' }}>
              ECOREG-AI POSTGIS • MÉRIDA, YUC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
