import { tokens as t } from '../styles/tokens';
import { PROBLEMA_STATS, PROBLEMA_ITEMS } from '../data/content';

export default function ProblemaSection() {
  return (
    <section id="problema" style={{ padding: '6rem 1.5rem', background: t.bgCard, borderTop: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="two-col">

          {/* ─── Columna izquierda: texto ─── */}
          <div>
            <div className="section-tag">Planteamiento del problema</div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.02em', color: t.textPri, lineHeight: 0.95, marginBottom: '1.5rem' }}>
              El taller de la<br />
              esquina contamina<br />
              <span style={{ color: t.orange }}>sin querer.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PROBLEMA_ITEMS.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 6, background: `${t.orange}15`, border: `1px solid ${t.orange}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: t.textSec, lineHeight: 1.7, paddingTop: '0.4rem' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Columna derecha: stats ─── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {PROBLEMA_STATS.map((s, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem 1.25rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: s.color, opacity: 0.7 }} />
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', letterSpacing: '0.05em', color: s.color, lineHeight: 1, marginBottom: '0.5rem' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '0.8rem', color: t.textSec, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
