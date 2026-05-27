import { tokens as t } from '../styles/tokens';
import { PRICING_TIERS, B2B_STREAMS } from '../data/content';

export default function MonetizacionSection() {
  return (
    <section id="monetizacion" style={{ padding: '6rem 1.5rem', background: t.bgCard, borderTop: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Propuesta de monetización</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.02em', color: t.textPri }}>
            Cómo genera<br /><span style={{ color: t.orange }}>ingresos EcoReg-AI</span>
          </h2>
          <p style={{ color: t.textSec, maxWidth: 540, margin: '0.75rem auto 0', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Modelo freemium que garantiza acceso gratuito para el mecánico de barrio mientras construye ingresos desde los actores con mayor capacidad de pago.
          </p>
        </div>

        {/* ─── Tiers de precio ─── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginBottom: '3rem' }} className="three-col">
          {PRICING_TIERS.map((tier, i) => (
            <div
              key={i}
              style={{
                background: tier.featured ? `${t.orange}0a` : t.bg,
                border: `${tier.featured ? '2px' : '1px'} solid ${tier.featured ? t.orange + '66' : t.border}`,
                borderRadius: 8, padding: '2rem 1.5rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.25s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {tier.featured && (
                <div style={{ position: 'absolute', top: 12, right: 12, background: t.orange, borderRadius: 3, padding: '2px 10px', fontSize: '0.68rem', fontFamily: "'Space Mono', monospace", fontWeight: 700, color: '#fff', letterSpacing: '0.08em' }}>
                  MÁS POPULAR
                </div>
              )}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: tier.color }} />

              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', color: tier.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {tier.name}
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', letterSpacing: '0.03em', color: t.textPri, lineHeight: 1, marginBottom: '0.3rem' }}>
                {tier.price}
              </div>
              <div style={{ fontSize: '0.78rem', color: t.textMuted, marginBottom: '1.5rem' }}>Para: {tier.target}</div>

              {tier.features.map((f, j) => (
                <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: j > 0 ? 8 : 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke={tier.color} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontSize: '0.83rem', color: t.textSec }}>{f}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ─── Fuentes B2B ─── */}
        <div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: t.textMuted, letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.5rem' }}>
            Fuentes de ingresos adicionales B2B
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }} className="four-col">
            {B2B_STREAMS.map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem 1.25rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: item.color, opacity: 0.7 }} />
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: t.textPri, marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.8rem', color: t.textSec, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
