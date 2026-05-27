import Logo from './Logo';
import { tokens as t } from '../styles/tokens';
import { PHONE_STEPS } from '../data/content';

/**
 * Simulación de la app móvil Flutter mostrando el chatbot IA.
 * Usado dentro de HeroSection.
 */
export default function PhoneMockup() {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      {/* Glow de fondo */}
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: 280, height: 280,
        background: `radial-gradient(circle, ${t.blueGlow} 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Marco del teléfono */}
      <div style={{
        width: 270, background: '#050c15',
        border: `1.5px solid ${t.border}`, borderRadius: 28, overflow: 'hidden',
        boxShadow: `0 0 60px rgba(0,0,0,0.7), 0 0 120px ${t.blueGlow}`,
      }}>
        {/* Header de la app */}
        <div style={{ background: t.bgCard, padding: '10px 16px 8px', borderBottom: `1px solid ${t.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Logo size={20} />
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', fontWeight: 700, color: t.textPri, letterSpacing: '0.05em' }}>ECOREG-AI</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: t.blue, animation: 'pulse-blue 2s infinite' }} />
              <span style={{ fontSize: 9, color: t.blue, fontFamily: "'Space Mono', monospace" }}>IA LOCAL ACTIVA</span>
            </div>
          </div>
        </div>

        {/* Chat */}
        <div style={{ background: t.bg, padding: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* Mensaje del usuario */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{
              background: '#0d2236', border: `1px solid ${t.blue}33`,
              borderRadius: '10px 10px 2px 10px', padding: '7px 11px',
              maxWidth: '85%', fontSize: 10.5, color: t.textPri, lineHeight: 1.5,
            }}>
              Me quedó una cubeta de aceite negro y unas estopas con grasa.
            </div>
          </div>

          {/* Respuesta de la IA */}
          <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: '2px 10px 10px 10px', padding: '9px 11px' }}>
            <div style={{ background: '#1f1000', border: `1px solid ${t.orange}44`, borderRadius: 3, padding: '4px 8px', marginBottom: 7, fontSize: 9.5, color: t.orange, fontFamily: "'Space Mono', monospace", fontWeight: 700 }}>
              ⚠ NO MEZCLES CON BASURA COMÚN
            </div>
            <div style={{ fontSize: 10, color: t.cyan, fontWeight: 700, marginBottom: 4 }}>Aceite lubricante usado — NOM-052</div>
            <div style={{ fontSize: 9.5, color: t.textSec, marginBottom: 7 }}>CRETIP: Inflamable / Tóxico</div>
            {PHONE_STEPS.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 6, marginTop: 4, alignItems: 'flex-start' }}>
                <div style={{ width: 14, height: 14, borderRadius: 2, background: `${t.orange}22`, border: `1px solid ${t.orange}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: t.orange, fontWeight: 700, flexShrink: 0 }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: 9.5, color: t.textPri, lineHeight: 1.4 }}>{s}</span>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 18, padding: '5px 10px' }}>
            <span style={{ flex: 1, fontSize: 9.5, color: t.textMuted }}>Describe tus residuos de hoy…</span>
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: t.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1 8L8 1M8 1H3M8 1V6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div style={{ background: t.bgCard, padding: 7, display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 70, height: 3.5, background: t.textMuted, borderRadius: 99 }} />
        </div>
      </div>

      {/* Badges flotantes */}
      <div style={{ position: 'absolute', top: 70, right: -16, background: t.bgCard, border: `1px solid ${t.blue}44`, borderRadius: 7, padding: '5px 11px', display: 'flex', alignItems: 'center', gap: 5 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: t.blue, animation: 'pulse-blue 2s infinite' }} />
        <span style={{ fontSize: 10, color: t.blue, fontFamily: "'Space Mono', monospace", fontWeight: 700 }}>SIN INTERNET</span>
      </div>
      <div style={{ position: 'absolute', bottom: 90, left: -22, background: t.bgCard, border: `1px solid ${t.orange}44`, borderRadius: 7, padding: '5px 11px' }}>
        <div style={{ fontSize: 9.5, color: t.orange, fontFamily: "'Space Mono', monospace", fontWeight: 700 }}>⚡ CRETIP</div>
        <div style={{ fontSize: 8.5, color: t.textSec }}>Inflamable detectado</div>
      </div>
    </div>
  );
}
