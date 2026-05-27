import PhoneMockup from './PhoneMockup';
import { tokens as t } from '../styles/tokens';
import { HERO_BADGES } from '../data/content';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="dot-bg"
      style={{ minHeight: '100vh', paddingTop: 80, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
    >
      {/* Glow decorativo */}
      <div style={{ position: 'absolute', top: '10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${t.blueGlow} 0%, transparent 65%)`, pointerEvents: 'none' }} />

      <div
        style={{ maxWidth: 1240, margin: '0 auto', padding: '4rem 1.5rem', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}
        className="two-col"
      >
        {/* ─── Columna izquierda: copy ─── */}
        <div>
          <div className="section-tag anim-0">Plataforma para talleres mecánicos de barrio</div>

          <h1
            className="anim-1"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '0.02em', color: t.textPri, lineHeight: 0.95, marginBottom: '1.25rem' }}
          >
            ¿No sabes qué hacer<br />
            con los residuos<br />
            <span style={{ color: t.orange }}>de tu taller?</span>
          </h1>

          <p className="anim-2" style={{ fontSize: '1rem', color: t.textSec, maxWidth: 500, lineHeight: 1.75, marginBottom: '2rem' }}>
            Describe lo que te sobró hoy en tu idioma. La IA local de EcoReg te dice cómo resguardarlo bajo la ley,
            calcula kilos acumulados y te libra de multas SEMARNAT.{' '}
            <strong style={{ color: t.textPri }}>Gratis, sin internet, sin enredos.</strong>
          </p>

          {/* CTAs */}
          <div className="anim-3 cta-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#demo" className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2L12 7L2 12V2Z" fill="currentColor" /></svg>
              Iniciar Asistente Gratis
            </a>
            <a href="#mapa" className="btn-secondary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1C4.8 1 3 2.8 3 5C3 8 7 13 7 13C7 13 11 8 11 5C11 2.8 9.2 1 7 1ZM7 6.5C6.2 6.5 5.5 5.8 5.5 5C5.5 4.2 6.2 3.5 7 3.5C7.8 3.5 8.5 4.2 8.5 5C8.5 5.8 7.8 6.5 7 6.5Z" fill="currentColor" /></svg>
              Ver Centros de Acopio
            </a>
          </div>

          {/* Badges de normativa */}
          <div className="anim-4" style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {HERO_BADGES.map(({ label, sub }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 5, background: `${t.orange}18`, border: `1px solid ${t.orange}44`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L4.5 8.5L10 3" stroke={t.orange} strokeWidth="2" strokeLinecap="round" /></svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '0.75rem', color: t.textPri, lineHeight: 1.1 }}>{label}</div>
                  <div style={{ fontSize: '0.65rem', color: t.textMuted }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Columna derecha: mockup ─── */}
        <div className="anim-2">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
