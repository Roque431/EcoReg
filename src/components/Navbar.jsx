import { useState, useEffect } from 'react';
import Logo from './Logo';
import { tokens as t } from '../styles/tokens';
import { NAV_LINKS } from '../data/content';

/**
 * Navbar fija con efecto blur al hacer scroll.
 * Colapsa en hamburger en mobile (≤768px).
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    transition: 'all 0.3s',
    background: scrolled ? 'rgba(7,13,20,0.96)' : 'transparent',
    borderBottom: `1px solid ${scrolled ? t.border : 'transparent'}`,
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
  };

  return (
    <nav style={navStyle}>
      {/* ─── Barra principal ─── */}
      <div style={{
        maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 62,
      }}>
        {/* Brand */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Logo size={32} />
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.45rem', letterSpacing: '0.1em', color: t.textPri }}>
            ECOREG<span style={{ color: t.orange }}>—</span><span style={{ color: t.blue }}>AI</span>
          </span>
        </a>

        {/* Links desktop */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '1.75rem' }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ color: t.textSec, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.target.style.color = t.blue)}
              onMouseLeave={e => (e.target.style.color = t.textSec)}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a href="#demo" className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.5rem 1.1rem' }}>
            Acceso Talleres
          </a>
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: `1px solid ${t.border}`, borderRadius: 3, width: 36, height: 36, cursor: 'pointer', color: t.textPri }}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ─── Menú mobile ─── */}
      {open && (
        <div style={{ background: t.bgCard, borderTop: `1px solid ${t.border}`, padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: t.textPri, textDecoration: 'none', fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', letterSpacing: '0.1em' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
