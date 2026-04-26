'use client';

import { useState } from 'react';

const p = (n: number) => Math.round(n * 1e4) / 1e4;
import { Tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { personal, hero as heroContent, about } from '@/lib/content';
import { CyanLabel, CyanoPortrait, Scallop } from '@/components/cyan/marks';
import { Flock } from '@/components/cyan/flock';

// ── Hero ──────────────────────────────────────────────────────────────────

export function CyanHero({ t, onUnlock }: { t: Tokens; onUnlock: () => void }) {
  const birdInk = '#A8C3DD';
  return (
    <section style={{
      position: 'relative',
      padding: '56px 56px 80px',
      background: `linear-gradient(to bottom, ${t.blueMid} 0%, ${t.blueDeep} 65%, ${t.blueDeep} 100%)`,
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.85, zIndex: 1 }}>
        <Flock ink={birdInk} width={1600} height={760} />
      </div>
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: 220,
        pointerEvents: 'none', zIndex: 2,
        background: `linear-gradient(to bottom, transparent 0%, ${t.blueDeep} 85%)`,
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', mixBlendMode: 'overlay', opacity: 0.25,
        backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.7   0 0 0 0 0.85   0 0 0 0 1   0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`)}")`,
      }} />

      {/* Masthead */}
      <div style={{ position: 'relative', zIndex: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.cream, marginBottom: 96 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: t.blueDeep, padding: '8px 14px', border: `1px solid ${t.bluePale}55` }}>
          <span style={{ color: t.accent }}>☼</span>
          <span style={{ fontWeight: 500 }}>{heroContent.masthead}</span>
        </div>
        <nav style={{ display: 'flex', gap: 4, background: t.blueDeep, padding: '6px 8px', border: `1px solid ${t.bluePale}55` }}>
          {heroContent.nav.map((item) => (
            <a key={item.href} href={item.href} style={{ color: t.cream, textDecoration: 'none', fontWeight: 600, padding: '6px 12px' }}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main grid */}
      <div style={{ position: 'relative', zIndex: 3, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end' }}>
        <div>
          <div style={{ fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.accent, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 22, height: 1, background: t.accent, display: 'inline-block' }} />
            {heroContent.eyebrow}
          </div>
          <h1 style={{ fontFamily: f.newsreader, fontWeight: 300, fontSize: 'clamp(60px, 7.4vw, 116px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0, color: t.cream }}>
            {heroContent.headlineLine1}<br />
            {heroContent.headlineLine2}<br />
            {heroContent.headlineLine3}<em style={{ fontFamily: f.instrumentSerif, fontStyle: 'italic', color: t.accent, fontWeight: 400 }}>{heroContent.accentWord}</em><br />
            {heroContent.headlineLine4}
          </h1>
          <p style={{ fontFamily: f.ibmPlexSans, fontSize: 18, lineHeight: 1.55, color: t.bluePale, maxWidth: 520, marginTop: 40, marginBottom: 0 }}>
            {heroContent.subhead}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 22 }}>
          <div style={{ position: 'relative' }}>
            <CyanoPortrait ink={t.blueDeep} paper={t.cream} size={240} />
            <div style={{ position: 'absolute', bottom: -34, right: 0, textAlign: 'right', fontFamily: f.ibmPlexMono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.cream, lineHeight: 1.6 }}>
              <div>{heroContent.portraitCaption.line1}</div>
              <div style={{ fontFamily: f.instrumentSerif, fontStyle: 'italic', textTransform: 'none', letterSpacing: '0.02em', fontSize: 13, color: t.bluePale }}>
                {heroContent.portraitCaption.line2}
              </div>
            </div>
          </div>
          <button
            onClick={onUnlock}
            style={{
              marginTop: 28, fontFamily: f.ibmPlexMono, fontSize: 11,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '14px 22px', background: t.cream, color: t.blueDeep,
              border: `1px solid ${t.cream}`, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 12,
            }}
          >
            {heroContent.ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────

function CyanBlock({ t, title, children }: { t: Tokens; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: t.accent, marginBottom: 14 }}>{title}</div>
      <p style={{ fontFamily: f.ibmPlexSans, fontSize: 15.5, lineHeight: 1.65, color: t.bluePale, margin: 0 }}>{children}</p>
    </div>
  );
}

export function CyanAbout({ t }: { t: Tokens }) {
  return (
    <section id="about" style={{ padding: '110px 56px', position: 'relative', borderBottom: `1px solid ${t.bluePale}33` }}>
      <CyanLabel t={t} num="02" label="On the practice" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, marginTop: 64 }}>
        <div>
          <div style={{ fontFamily: f.newsreader, fontSize: 30, lineHeight: 1.25, color: t.cream, fontWeight: 300, letterSpacing: '-0.01em' }}>
            {about.pullQuote}<em style={{ fontFamily: f.instrumentSerif, color: t.accent }}>{about.accentWord}</em>{about.pullQuoteRest}
          </div>
          <div style={{ marginTop: 48, opacity: 0.6 }}>
            <Scallop color={t.cream} size={120} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          {about.blocks.map((b) => (
            <CyanBlock key={b.title} t={t} title={b.title}>{b.body}</CyanBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────

function FieldLabel({ t, mt, children }: { t: Tokens; mt?: boolean; children: React.ReactNode }) {
  return (
    <label style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: t.bluePale, marginTop: mt ? 22 : 12, display: 'block' }}>
      {children}
    </label>
  );
}

export function CyanContact({ t }: { t: Tokens }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', note: '' });
  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: `1px solid ${t.bluePale}66`,
    padding: '14px 0', fontFamily: f.ibmPlexSans,
    fontSize: 16, color: t.cream, outline: 'none',
  };
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" style={{ padding: '110px 56px', borderBottom: `1px solid ${t.bluePale}33`, position: 'relative', overflow: 'hidden' }}>
      {/* Sand-track pattern */}
      <svg width="100%" height="100%" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMax slice"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.55 }} aria-hidden="true">
        <defs>
          <linearGradient id="ridgeFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#C9D9E6" stopOpacity="0" />
            <stop offset="30%"  stopColor="#C9D9E6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#E8DFC8" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="ridgeWet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1F3A5C" stopOpacity="0" />
            <stop offset="40%"  stopColor="#1F3A5C" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1F3A5C" stopOpacity="0.30" />
          </linearGradient>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => {
          const r = (n: number) => { const x = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453; return x - Math.floor(x); };
          const startX = -40 + i * 22 + r(0) * 30;
          const startY = 340 + r(1) * 14;
          const drift = 320 + r(2) * 480 + i * 30;
          const seg = 5;
          let d = `M ${p(startX)} ${p(startY)}`;
          for (let s = 1; s <= seg; s++) {
            const t01 = s / seg;
            const yEnd = p(startY + t01 * (1000 - startY) + r(10 + s) * 8);
            const xEnd = p(startX + drift * (t01 * t01) + Math.sin(t01 * 6 + i) * (14 + t01 * 36) + (r(20 + s) - 0.5) * 28);
            const t0 = (s - 1) / seg;
            const yC1 = p(startY + (t0 + 0.33 / seg) * (1000 - startY));
            const xC1 = p(startX + drift * (t0 * t0 + 0.05) + Math.sin((t0 + 0.2) * 8 + i * 1.7) * (20 + t0 * 56));
            const yC2 = p(startY + (t01 - 0.33 / seg) * (1000 - startY));
            const xC2 = p(startX + drift * (t01 * t01 - 0.05) + Math.sin((t01 - 0.1) * 8 + i * 2.3) * (20 + t01 * 56));
            d += ` C ${xC1} ${yC1}, ${xC2} ${yC2}, ${xEnd} ${yEnd}`;
          }
          return <path key={`r-${i}`} d={d} stroke="url(#ridgeFade)" strokeWidth={p(0.5 + r(4) * 1.1)} fill="none" strokeLinecap="round" opacity={p(0.55 + r(5) * 0.35)} />;
        })}
        {Array.from({ length: 3 }).map((_, i) => {
          const r = (n: number) => { const x = Math.sin((i + 50) * 12.9898 + n * 78.233) * 43758.5453; return x - Math.floor(x); };
          const startX = -20 + i * 90;
          const startY = 360 + r(1) * 10;
          const drift = 380 + i * 90 + r(2) * 160;
          const seg = 6;
          let d = `M ${p(startX)} ${p(startY)}`;
          for (let s = 1; s <= seg; s++) {
            const t01 = s / seg;
            const yEnd = p(startY + t01 * (1000 - startY));
            const xEnd = p(startX + drift * (t01 * t01) + Math.sin(t01 * 5 + i * 1.4) * (24 + t01 * 70));
            const t0 = (s - 1) / seg;
            const yC1 = p(startY + (t0 + 0.4 / seg) * (1000 - startY));
            const xC1 = p(startX + drift * (t0 * t0 + 0.05) + Math.sin((t0 + 0.3) * 6 + i) * (28 + t0 * 80));
            const yC2 = p(startY + (t01 - 0.4 / seg) * (1000 - startY));
            const xC2 = p(startX + drift * (t01 * t01 - 0.05) + Math.sin(t01 * 6 + i * 1.9) * (28 + t01 * 80));
            d += ` C ${xC1} ${yC1}, ${xC2} ${yC2}, ${xEnd} ${yEnd}`;
          }
          return <path key={`wet-${i}`} d={d} stroke="url(#ridgeWet)" strokeWidth={p(2 + r(3) * 1.4)} fill="none" strokeLinecap="round" opacity={0.5} />;
        })}
        {Array.from({ length: 30 }).map((_, i) => {
          const r = (n: number) => { const x = Math.sin((i + 200) * 12.9898 + n * 78.233) * 43758.5453; return x - Math.floor(x); };
          const x = r(0) * 1600; const y = 640 + r(1) * 340;
          const len = 8 + r(2) * 22; const angle = 25 + r(3) * 25; const rad = (angle * Math.PI) / 180;
          return <line key={`rip-${i}`} x1={p(x)} y1={p(y)} x2={p(x + Math.cos(rad) * len)} y2={p(y + Math.sin(rad) * len)} stroke="#1F3A5C" strokeWidth="0.6" opacity={p(0.16 + r(4) * 0.12)} strokeLinecap="round" />;
        })}
        {Array.from({ length: 10 }).map((_, i) => {
          const t01 = i / 9;
          const x = p(200 + t01 * 480 + Math.sin(i * 1.7) * 22);
          const y = p(700 - t01 * 60 + Math.cos(i * 1.1) * 12);
          return <ellipse key={`f-${i}`} cx={x} cy={y} rx={p(5 + t01 * 5)} ry={p(3 + t01 * 2)} fill="#1F3A5C" opacity={p(0.18 - t01 * 0.05)} transform={`rotate(${p(22 + Math.sin(i) * 8)} ${x} ${y})`} />;
        })}
        {Array.from({ length: 90 }).map((_, i) => {
          const x = (i * 137) % 1600 + ((i * 53) % 23);
          const y = 700 + ((i * 91) % 300);
          return <circle key={`g-${i}`} cx={x} cy={y} r={0.7 + (i % 3) * 0.4} fill="#1F3A5C" opacity="0.13" />;
        })}
      </svg>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <CyanLabel t={t} num="04" label="Correspondence" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80, marginTop: 64 }}>
          <div>
            <div style={{ fontFamily: f.newsreader, fontSize: 46, lineHeight: 1.05, color: t.cream, letterSpacing: '-0.02em', fontWeight: 300 }}>
              Send a note.<br />
              <em style={{ fontFamily: f.instrumentSerif, color: t.accent, fontWeight: 400 }}>I read every one.</em>
            </div>
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 18, fontFamily: f.ibmPlexMono, fontSize: 12, letterSpacing: '0.08em', color: t.cream }}>
              <a href={`mailto:${personal.email}`} style={{ color: t.cream, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ color: t.accent }}>✉</span> {personal.email}
              </a>
              <a href={`https://${personal.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: t.cream, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ color: t.accent }}>in</span> {personal.linkedin}
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: t.bluePale }}>
                <span style={{ color: t.accent }}>◉</span> {personal.location}
              </div>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column' }}>
            {!sent ? (
              <>
                <FieldLabel t={t}>Name</FieldLabel>
                <input style={inputStyle} value={form.name} onChange={update('name')} />
                <FieldLabel t={t} mt>Email</FieldLabel>
                <input type="email" style={inputStyle} value={form.email} onChange={update('email')} />
                <FieldLabel t={t} mt>Subject</FieldLabel>
                <textarea rows={4} style={{ ...inputStyle, resize: 'vertical' }} value={form.note} onChange={update('note')} />
                <button type="submit" style={{ marginTop: 36, alignSelf: 'flex-start', fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '16px 26px', background: t.cream, color: t.blueDeep, border: 'none', cursor: 'pointer' }}>
                  Lay in the sun →
                </button>
              </>
            ) : (
              <div style={{ padding: '48px 0', fontFamily: f.newsreader, fontSize: 30, color: t.cream, lineHeight: 1.3 }}>
                <span style={{ color: t.accent, fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.22em', display: 'block', marginBottom: 16 }}>☼ EXPOSING</span>
                Your note is in the tray.<br />
                <em style={{ fontFamily: f.instrumentSerif, color: t.bluePale }}>I'll be in touch within a few days.</em>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// ── Colophon ──────────────────────────────────────────────────────────────

export function CyanColophon({ t, onHint }: { t: Tokens; onHint: () => void }) {
  return (
    <footer style={{ padding: '40px 56px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: t.bluePale }}>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        <span>© {personal.year}</span>
        <span>Cyanotype on cotton paper · in the browser</span>
        <span style={{ color: t.cream }}>{personal.coordinates}</span>
      </div>
      <button
        onClick={onHint}
        style={{ background: 'transparent', border: 'none', color: t.bluePale, fontFamily: 'inherit', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}
      >
        <span style={{ color: t.accent }}>▲▲▼▼◀▶◀▶BA</span>
        <span style={{ opacity: 0.6 }}>· try it</span>
      </button>
    </footer>
  );
}
