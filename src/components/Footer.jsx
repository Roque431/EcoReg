import Logo from './Logo';
import { tokens as t } from '../styles/tokens';
import { FOOTER_COLS } from '../data/content';

export default function Footer() {
  return (
    <footer style={{ background: '#040810', borderTop: `1px solid ${t.border}`, padding: '3.5rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        {/* Grid principal */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-inner">

          {/* Columna brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <Logo size={30} />
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.1em', color: t.textPri }}>
                ECOREG<span style={{ color: t.orange }}>—</span><span style={{ color: t.blue }}>AI</span>
              </span>
            </div>
            <p style={{ fontSize: '0.83rem', color: t.textMuted, lineHeight: 1.7, maxWidth: 260, marginBottom: '1rem' }}>
              Tecnología local para proteger el trabajo de nuestra gente y el futuro de nuestro entorno.
            </p>
            {['SEMARNAT', 'NOM-052', 'LGPGIR'].map(b => (
              <span key={b} style={{ display: 'inline-block', marginRight: 6, marginBottom: 4, background: `${t.blue}10`, border: `1px solid ${t.blue}22`, borderRadius: 3, padding: '2px 8px', fontSize: '0.62rem', color: t.blue, fontFamily: "'Space Mono', monospace", fontWeight: 700, letterSpacing: '0.08em' }}>
                {b}
              </span>
            ))}
          </div>

          {/* Columnas de links */}
          {FOOTER_COLS.map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: t.textPri, marginBottom: '1rem' }}>
                {col.title}
              </div>
              {col.links.map(l => (
                <div key={l} style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ fontSize: '0.82rem', color: t.textMuted, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.target.style.color = t.blue)}
                    onMouseLeave={e => (e.target.style.color = t.textMuted)}>
                    {l}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: `1px solid ${t.border}`, paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.78rem', color: t.textMuted }}>
            © 2026 EcoReg-AI. Todos los derechos reservados.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: t.blue, animation: 'pulse-blue 2s infinite' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', color: t.textMuted, letterSpacing: '0.1em' }}>
              SISTEMAS ACTIVOS — IA LOCAL OPERANDO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
