import { useState } from 'react';
import { tokens as t } from '../styles/tokens';

const DEMO_STEPS = [
  'Envasa en tambos herméticos de acero o HDPE.',
  'Etiqueta tu contenedor: residuo, fecha, volumen estimado.',
  'Máximo 6 meses para traslado a centro autorizado.',
];

const DEMO_TAGS = ['CRETIP', 'Inflamable', 'Tóxico', 'Corrosivo'];

/**
 * Sección interactiva: simula el chatbot de clasificación de residuos.
 * El usuario edita el texto y al presionar "Analizar" aparece la respuesta animada.
 */
export default function DemoSection() {
  const [text, setText] = useState(
    'Cambié el aceite a tres carros y me quedó una cubeta de líquido negro y unas estopas con grasa.',
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const handleAnalyze = () => {
    if (result) { setResult(false); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setResult(true); }, 1500);
  };

  const statusColor = loading ? t.orange : result ? t.blue : t.textMuted;
  const statusLabel = loading ? 'PROCESANDO…' : result ? 'CLASIFICADO' : 'LISTO';

  return (
    <section id="demo" className="dot-bg" style={{ padding: '6rem 1.5rem', borderTop: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Asistente en vivo</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.02em', color: t.textPri }}>
            Prueba el asistente IA
          </h2>
          <p style={{ color: t.textSec, fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Escribe como le hablarías a un cuate. La IA entiende el lenguaje del taller.
          </p>
        </div>

        {/* Terminal container */}
        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 8, overflow: 'hidden' }}>

          {/* Terminal titlebar */}
          <div style={{ background: t.bgCardAlt, borderBottom: `1px solid ${t.border}`, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {[t.red, t.orange, t.blue].map((c, i) => (
                <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
              ))}
            </div>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: t.textMuted, marginLeft: 6, letterSpacing: '0.1em' }}>
              ECOREG-AI — clasificador de residuos v1.0
            </span>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: statusColor, animation: loading ? 'pulse-orange 1s infinite' : 'none' }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: statusColor }}>{statusLabel}</span>
            </div>
          </div>

          <div style={{ padding: '1.5rem' }}>
            {/* Input */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: t.orange, marginBottom: 6, letterSpacing: '0.08em' }}>
                $ DESCRIPCIÓN DE RESIDUOS
              </div>
              <textarea
                value={text}
                onChange={e => { setText(e.target.value); setResult(false); }}
                rows={3}
                style={{ width: '100%', background: '#050c15', border: `1px solid ${t.border}`, borderRadius: 4, padding: '0.875rem 1rem', color: t.textPri, fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', lineHeight: 1.6, resize: 'vertical', outline: 'none' }}
                onFocus={e => (e.target.style.borderColor = t.orange)}
                onBlur={e => (e.target.style.borderColor = t.border)}
                placeholder="Describe los residuos de hoy…"
              />
            </div>

            {/* Botón */}
            <button
              className="btn-primary"
              onClick={handleAnalyze}
              disabled={loading}
              style={{ marginBottom: result ? '1.5rem' : 0, opacity: loading ? 0.6 : 1 }}
            >
              {loading ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 14 14" style={{ animation: 'spin 1s linear infinite' }}>
                    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" strokeDasharray="20" strokeDashoffset="5" fill="none" />
                  </svg>
                  Analizando…
                </>
              ) : result ? 'Nueva consulta' : (
                <>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L9 5H13L10 8L11 12L7 10L3 12L4 8L1 5H5L7 1Z" fill="currentColor" /></svg>
                  Analizar con IA Local
                </>
              )}
            </button>

            {/* Resultado */}
            {result && (
              <div style={{ animation: 'fadeUp 0.4s ease', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Alerta */}
                <div style={{ background: '#1a0e00', border: `1px solid ${t.orange}55`, borderRadius: 4, padding: '1rem 1.25rem', display: 'flex', gap: '0.875rem' }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>⚠️</span>
                  <div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '0.82rem', color: t.orange, letterSpacing: '0.04em', marginBottom: 4 }}>
                      ¡ALERTA! No mezcles las estopas con basura común ni con agua.
                    </div>
                    <div style={{ fontSize: '0.83rem', color: '#c9913a' }}>
                      Los trapos con aceite pueden generar calor espontáneo y provocar incendios.
                    </div>
                  </div>
                </div>

                {/* Clasificación */}
                <div style={{ background: t.bgCardAlt, border: `1px solid ${t.border}`, borderRadius: 4, padding: '1rem 1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
                    <div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: t.textMuted, letterSpacing: '0.14em', marginBottom: 3 }}>
                        CLASIFICACIÓN NOM-052-SEMARNAT-2005
                      </div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: t.textPri }}>
                        Aceite lubricante usado
                      </div>
                    </div>
                    <div style={{ background: `${t.red}20`, border: `1px solid ${t.red}55`, borderRadius: 3, padding: '3px 10px' }}>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '0.72rem', color: t.red, letterSpacing: '0.05em' }}>PELIGROSO</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {DEMO_TAGS.map(tag => (
                      <span key={tag} style={{ background: `${t.orange}18`, border: `1px solid ${t.orange}44`, borderRadius: 2, padding: '2px 10px', fontSize: '0.72rem', color: t.orange, fontFamily: "'Space Mono', monospace", fontWeight: 600 }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Plan de acción */}
                  <div style={{ borderTop: `1px solid ${t.border}`, paddingTop: '0.875rem' }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: t.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.625rem' }}>
                      Plan de acción — LGPGIR
                    </div>
                    {DEMO_STEPS.map((step, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: i > 0 ? 8 : 0 }}>
                        <div style={{ width: 20, height: 20, borderRadius: 3, background: `${t.blue}20`, border: `1px solid ${t.blue}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '0.72rem', color: t.blue }}>
                          {i + 1}
                        </div>
                        <span style={{ fontSize: '0.88rem', color: t.textPri, lineHeight: 1.55 }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contador de kilos */}
                <div style={{ background: `${t.blue}08`, border: `1px solid ${t.blue}22`, borderRadius: 4, padding: '0.875rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: t.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Acumulado estimado este mes
                    </div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: t.blue, letterSpacing: '0.03em' }}>
                      ~12.5 kg{' '}
                      <span style={{ fontSize: '0.85rem', color: t.textSec, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}>
                        / 400 kg límite anual
                      </span>
                    </div>
                  </div>
                  <a href="#mapa" className="btn-secondary" style={{ fontSize: '0.78rem', padding: '0.5rem 1rem' }}>
                    Ver centros de acopio →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
