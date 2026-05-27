import { tokens as t } from '../styles/tokens';
import { USERS } from '../data/content';

export default function UsuariosSection() {
  return (
    <section id="usuarios" className="dot-bg" style={{ padding: '6rem 1.5rem', borderTop: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Usuarios de la plataforma</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.02em', color: t.textPri }}>
            Tres tipos de usuario,<br /><span style={{ color: t.orange }}>un mismo objetivo</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="three-col">
          {USERS.map((u, i) => (
            <div
              key={i}
              style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 8, padding: '2rem 1.5rem', position: 'relative', overflow: 'hidden', transition: 'all 0.25s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = u.color + '66'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Barra de color superior */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: u.color }} />

              <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{u.icon}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: u.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                {u.subtitle}
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: t.textPri, marginBottom: '1.25rem', lineHeight: 1.3 }}>
                {u.title}
              </h3>

              {u.features.map((f, j) => (
                <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: j > 0 ? 8 : 0 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: u.color, flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: '0.82rem', color: t.textSec, lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
