'use client';

import { useId } from 'react';
import { Tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';

// ── Silhouettes ──────────────────────────────────────────────────────────────

export function Eelgrass({ color, height = 380, style }: { color: string; height?: number; style?: React.CSSProperties }) {
  return (
    <svg width={height * 0.55} height={height} viewBox="0 0 110 380" style={style} aria-hidden="true">
      <g fill={color}>
        <path d="M40 380 C 38 300, 30 220, 36 140 C 40 90, 46 50, 50 10 L 53 10 C 49 50, 43 90, 39 140 C 33 220, 41 300, 43 380 Z" />
        <path d="M58 380 C 56 310, 50 230, 58 160 C 64 110, 72 70, 80 30 L 83 30 C 75 70, 67 110, 61 160 C 53 230, 59 310, 61 380 Z" />
        <path d="M22 380 C 22 320, 18 260, 24 200 C 28 160, 34 120, 38 90 L 41 90 C 37 120, 31 160, 27 200 C 21 260, 25 320, 25 380 Z" />
        <path d="M70 380 C 72 320, 78 250, 86 190 C 92 150, 98 120, 100 90 L 103 90 C 101 120, 95 150, 89 190 C 81 250, 75 320, 73 380 Z" opacity="0.85" />
        <path d="M10 380 C 12 340, 16 300, 14 260 C 12 220, 8 180, 6 150 L 9 150 C 11 180, 15 220, 17 260 C 19 300, 15 340, 13 380 Z" opacity="0.7" />
      </g>
    </svg>
  );
}

const p = (n: number) => Math.round(n * 1e4) / 1e4;

export function RopeCoil({ color, size = 140, style }: { color: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" style={style} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="6" strokeLinecap="round">
        <circle cx="70" cy="70" r="58" />
        <circle cx="70" cy="70" r="42" />
        <circle cx="70" cy="70" r="26" />
        <circle cx="70" cy="70" r="10" />
      </g>
      <g fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round">
        {Array.from({ length: 32 }).map((_, i) => {
          const a = (i / 32) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={p(70 + Math.cos(a) * 12)} y1={p(70 + Math.sin(a) * 12)}
              x2={p(70 + Math.cos(a) * 64)} y2={p(70 + Math.sin(a) * 64)}
              opacity="0.4"
            />
          );
        })}
      </g>
    </svg>
  );
}

export function SurfCurl({ color, width = 360, style }: { color: string; width?: number; style?: React.CSSProperties }) {
  return (
    <svg width={width} height={width * 0.55} viewBox="0 0 360 200" style={style} aria-hidden="true">
      <g fill={color}>
        <path d="M0 200 C 30 180, 60 140, 110 130 C 160 122, 200 150, 240 130 C 280 110, 300 70, 330 60 C 348 54, 360 60, 360 60 L 360 200 Z" opacity="0.85" />
        <path d="M40 180 C 70 168, 120 150, 160 156 C 196 162, 220 178, 250 174 C 274 170, 290 158, 310 152" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M70 168 C 100 158, 130 152, 170 158" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="220" cy="115" r="3" opacity="0.7" />
        <circle cx="200" cy="100" r="2" opacity="0.6" />
        <circle cx="180" cy="92" r="2.5" opacity="0.7" />
        <circle cx="240" cy="105" r="2" opacity="0.5" />
      </g>
    </svg>
  );
}

export function Scallop({ color, size = 90, style }: { color: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" style={style} aria-hidden="true">
      <g fill={color}>
        <path d="M45 8 C 28 8, 12 22, 8 50 C 6 62, 14 78, 28 82 L 45 84 L 62 82 C 76 78, 84 62, 82 50 C 78 22, 62 8, 45 8 Z" />
      </g>
      <g fill="none" stroke="#0B254566" strokeWidth="1.5">
        {Array.from({ length: 9 }).map((_, i) => {
          const a = (-Math.PI / 2) + ((i - 4) / 9) * Math.PI * 0.85;
          return (
            <line key={i} x1="45" y1="20" x2={p(45 + Math.cos(a) * 60)} y2={p(20 + Math.sin(a) * 60 + 50)} opacity="0.5" />
          );
        })}
      </g>
    </svg>
  );
}

export function Sandpiper({ color, size = 60, style }: { color: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 60 42" style={style} aria-hidden="true">
      <g fill={color}>
        <ellipse cx="30" cy="22" rx="14" ry="8" />
        <circle cx="42" cy="16" r="4" />
        <line x1="46" y1="16" x2="54" y2="14" stroke={color} strokeWidth="1.5" />
        <line x1="26" y1="28" x2="22" y2="40" stroke={color} strokeWidth="1.2" />
        <line x1="32" y1="28" x2="34" y2="40" stroke={color} strokeWidth="1.2" />
      </g>
    </svg>
  );
}

// ── Portrait ─────────────────────────────────────────────────────────────────

export function CyanoPortrait({ ink, paper, size = 240 }: { ink: string; paper: string; size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 200 250" aria-hidden="true">
      <defs>
        <filter id={`mott-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="2" />
          <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1   0 0 0 0.4 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <clipPath id={`head-${id}`}>
          <path d="M100 38 C 138 38, 156 64, 156 96 C 156 120, 144 138, 130 144 L 130 162 C 130 168, 138 172, 154 176 C 178 182, 194 198, 198 228 L 198 250 L 2 250 L 2 228 C 6 198, 22 182, 46 176 C 62 172, 70 168, 70 162 L 70 144 C 56 138, 44 120, 44 96 C 44 64, 62 38, 100 38 Z" />
        </clipPath>
      </defs>
      <rect width="200" height="250" fill={ink} />
      <g clipPath={`url(#head-${id})`}>
        <rect width="200" height="250" fill={paper} />
        <rect width="200" height="250" fill={ink} opacity="0.18" filter={`url(#mott-${id})`} />
        <path d="M 50 78 C 56 50, 78 36, 100 36 C 130 36, 154 56, 156 90 C 148 70, 130 60, 110 60 C 88 60, 70 70, 58 88 Z" fill={ink} opacity="0.85" />
        <ellipse cx="100" cy="148" rx="48" ry="6" fill={ink} opacity="0.18" />
        <ellipse cx="84"  cy="98"  rx="2.5" ry="1" fill={ink} opacity="0.6" />
        <ellipse cx="116" cy="98"  rx="2.5" ry="1" fill={ink} opacity="0.6" />
      </g>
      <path d="M100 38 C 138 38, 156 64, 156 96 C 156 120, 144 138, 130 144 L 130 162 C 130 168, 138 172, 154 176 C 178 182, 194 198, 198 228 L 198 250 L 2 250 L 2 228 C 6 198, 22 182, 46 176 C 62 172, 70 168, 70 162 L 70 144 C 56 138, 44 120, 44 96 C 44 64, 62 38, 100 38 Z"
        fill="none" stroke={paper} strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}

// ── UI primitives ─────────────────────────────────────────────────────────────

export function CyanLabel({ t, num, label }: { t: Tokens; num: string; label: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 20,
      fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.22em',
      textTransform: 'uppercase', color: t.bluePale,
    }}>
      <span style={{ color: t.accent }}>№ {num}</span>
      <span style={{ flex: 1, height: 1, background: t.bluePale, opacity: 0.4 }} />
      <span style={{ color: t.cream }}>{label}</span>
    </div>
  );
}

export function SpecimenTag({ t, label, latin, style }: { t: Tokens; label: string; latin?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      fontFamily: f.ibmPlexMono, fontSize: 9, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: t.bluePale, lineHeight: 1.6, ...style,
    }}>
      <div style={{ color: t.cream }}>{label}</div>
      {latin && (
        <div style={{ fontFamily: f.instrumentSerif, fontStyle: 'italic', textTransform: 'none', letterSpacing: '0.02em', fontSize: 13 }}>
          {latin}
        </div>
      )}
    </div>
  );
}
