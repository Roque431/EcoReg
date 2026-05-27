import { tokens as t } from '../styles/tokens';
import { TECH_STACK, HOW_IT_WORKS } from '../data/content';

export default function SolucionSection() {
  return (
    <section id="solucion" className="dot-bg" style={{ padding: '6rem 1.5rem', borderTop: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Propuesta de solución</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.02em', color: t.textPri, marginBottom: '0.75rem' }}>
            Una plataforma que habla<br /><span style={{ color: t.blue }}>el idioma del mecánico</span>
          </h2>
          <p style={{ color: t.textSec, maxWidth: 600, margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            EcoReg-AI es un ecosistema completo: app móvil + panel web + IA local. Sin APIs de paga, sin depender de internet, protegiendo la privacidad del negocio.
          </p>
        </div>

        {/* Stack tecnológico */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', marginBottom: '3rem' }} className="four-col">
          {TECH_STACK.map((layer, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem 1.25rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: layer.color }} />
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', fontWeight: 700, color: layer.color, letterSpacing: '0.12em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                {layer.layer}
              </div>
              {layer.items.map((item, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: j > 0 ? 7 : 0 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: layer.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.82rem', color: t.textSec }}>{item}</span>
                </div>
              ))}
              {i < TECH_STACK.length - 1 && (
                <div className="hide-mobile" style={{ position: 'absolute', right: -14, top: '50%', transform: 'translateY(-50%)', zIndex: 2, color: t.textMuted, fontSize: '1.1rem' }}>→</div>
              )}
            </div>
          ))}
        </div>

        {/* Cómo funciona */}
        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 8, padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }} className="three-col">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3.5rem', color: `${t.blue}30`, lineHeight: 1, marginBottom: '0.25rem' }}>{step.num}</div>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{step.icon}</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem', color: t.textPri, marginBottom: '0.5rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.85rem', color: t.textSec, lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
