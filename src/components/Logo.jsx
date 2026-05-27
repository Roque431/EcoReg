import { tokens as t } from '../styles/tokens';

/**
 * Logo de EcoReg-AI: hexágono (tech) + gota de aceite/hoja (eco)
 * @param {number} size - Tamaño en px (default 34)
 */
export default function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="EcoReg-AI logo">
      <rect width="40" height="40" rx="8" fill={t.bgCard} stroke={t.border} strokeWidth="1" />
      {/* Hexágono — estructura tecnológica */}
      <polygon
        points="20,5 31,11.5 31,24.5 20,31 9,24.5 9,11.5"
        stroke={t.blue}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Gota de aceite / hoja — símbolo eco */}
      <path
        d="M20 26C20 26 14 20 16 15C18 10 24 12 22 17C21 20 20 26 20 26Z"
        fill={t.orange}
      />
      {/* Punto central — IA */}
      <circle cx="20" cy="15" r="2" fill={t.blue} />
    </svg>
  );
}
