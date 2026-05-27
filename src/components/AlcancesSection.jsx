import { tokens as t } from '../styles/tokens';
import { ALCANCES } from '../data/content';

export default function AlcancesSection() {
  return (
    <section id="alcances" style={{ padding: '6rem 1.5rem', background: t.bgCard, borderTop: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Alcances del proyecto</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.02em', color: t.textPri }}>
            Qué <span style={{ color: t.blue }}>incluye</span> y qué{' '}
            <span style={{ color: t.textMuted }}>no incluye</span> el MVP
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="two-col">
          {ALCANCES.map((item, i) => (
            <div key={i} className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              {/* Ícono IN / OUT */}
              <div style={{
                width: 28, height: 28, borderRadius: 4, flexShrink: 0,
                background: item.status === 'IN' ? `${t.blue}20` : `${t.textMuted}15`,
                border: `1px solid ${item.status === 'IN' ? t.blue + '44' : t.textMuted + '33'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.7rem', fontWeight: 700, fontFamily: "'Space Mono', monospace",
                color: item.color,
              }}>
                {item.status === 'IN' ? '✓' : '✕'}
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: item.status === 'IN' ? t.textPri : t.textMuted, marginBottom: 3 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: t.textMuted, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
