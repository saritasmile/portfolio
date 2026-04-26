'use client';

import { useState, useEffect, useRef } from 'react';
import { Tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { konamiConsoles } from '@/lib/content';

const SEQUENCE = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

export function useKonami(onFire: () => void) {
  const buf = useRef<string[]>([]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      buf.current.push(k);
      if (buf.current.length > SEQUENCE.length) buf.current.shift();
      if (buf.current.length === SEQUENCE.length && buf.current.every((v, i) => v === SEQUENCE[i])) {
        buf.current = [];
        onFire();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onFire]);
}

export function KonamiLayer({ t, onExit }: { t: Tokens; onExit: () => void }) {
  const [phase, setPhase] = useState<'boot' | 'exposing' | 'ready'>('boot');
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exposing'), 800);
    const t2 = setTimeout(() => setPhase('ready'), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onExit(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onExit]);

  const c = konamiConsoles[selected];

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: t.blueDeep, color: t.cream, fontFamily: f.ibmPlexMono, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: `radial-gradient(ellipse at 30% 30%, ${t.blueHi}55, transparent 60%), radial-gradient(ellipse at 70% 80%, ${t.blueDeep}, transparent 70%)` }} />

      <div style={{ position: 'relative', zIndex: 5, padding: '32px 48px', borderBottom: `1px solid ${t.bluePale}33`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ color: t.accent }}>☼</span>
          <span>Field Log · workshop specimens</span>
        </div>
        <button onClick={onExit} style={{ background: 'transparent', border: `1px solid ${t.bluePale}66`, color: t.cream, padding: '6px 14px', fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.22em', cursor: 'pointer' }}>
          CLOSE · ESC
        </button>
      </div>

      <div style={{ flex: 1, display: 'flex', position: 'relative', zIndex: 5 }}>
        {phase === 'boot' && (
          <div style={{ padding: 56, fontSize: 13, lineHeight: 1.9, letterSpacing: '0.06em', color: t.bluePale }}>
            <div>FIELD LOG — WORKSHOP SHELF</div>
            <div>— mixing potassium ferricyanide</div>
            <div>— mixing ferric ammonium citrate</div>
            <div>— coating paper</div>
            <div style={{ marginTop: 12, color: t.cream }}>READY TO EXPOSE<span className="blink">_</span></div>
          </div>
        )}
        {phase === 'exposing' && (
          <div style={{ padding: 56, fontSize: 13, lineHeight: 1.9, color: t.bluePale }}>
            <div>EXPOSING IN SUNLIGHT...</div>
            <div style={{ marginTop: 12, color: t.cream }}>{'█'.repeat(28)}{'░'.repeat(8)}</div>
            <div style={{ marginTop: 8 }}>14 MINUTES · DO NOT MOVE THE FRAME</div>
          </div>
        )}
        {phase === 'ready' && (
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '320px 1fr' }}>
            <div style={{ borderRight: `1px solid ${t.bluePale}33`, padding: '36px 28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 10, letterSpacing: '0.24em', color: t.accent, marginBottom: 16 }}>▼ SPECIMENS · SELECT</div>
              {konamiConsoles.map((k, i) => (
                <button key={i} onClick={() => setSelected(i)}
                  style={{
                    textAlign: 'left', background: i === selected ? `${t.bluePale}1A` : 'transparent',
                    border: 'none', color: i === selected ? t.cream : t.bluePale,
                    padding: '12px 10px', fontFamily: 'inherit', cursor: 'pointer',
                    fontSize: 12, letterSpacing: '0.08em',
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4,
                    borderTop: `1px solid ${t.bluePale}22`,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span>{i === selected ? '▶' : ' '} {k.name}</span>
                    <span style={{ color: t.accent }}>{k.year}</span>
                  </div>
                  <span style={{ fontFamily: f.instrumentSerif, fontStyle: 'italic', fontSize: 12, color: t.bluePale, textTransform: 'none', letterSpacing: 0 }}>{k.latin}</span>
                </button>
              ))}
              <div style={{ marginTop: 'auto', fontSize: 10, letterSpacing: '0.22em', color: t.bluePale, paddingTop: 24 }}>↑↓ SELECT · ESC TO EXIT</div>
            </div>

            <div style={{ padding: '56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.24em', color: t.bluePale }}>SPECIMEN № {String(selected + 1).padStart(2, '0')} / {String(konamiConsoles.length).padStart(2, '0')}</div>
                <div style={{ fontFamily: f.newsreader, fontSize: 80, lineHeight: 1, color: t.cream, marginTop: 24, letterSpacing: '-0.02em', fontWeight: 300 }}>{c.name}</div>
                <div style={{ fontFamily: f.instrumentSerif, fontStyle: 'italic', fontSize: 26, color: t.accent, marginTop: 14 }}>{c.latin}</div>
                <div style={{ fontSize: 12, letterSpacing: '0.2em', color: t.bluePale, marginTop: 14 }}>◆ EST. {c.year} · RESTORED ON THE BENCH</div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: t.cream, marginTop: 32, maxWidth: 520, fontFamily: f.ibmPlexSans }}>{c.note}</div>
              </div>
              <svg width="380" height="130" viewBox="0 0 380 130" style={{ alignSelf: 'flex-end', opacity: 0.85 }} aria-hidden="true">
                <g fill={t.cream}>
                  <rect x="20" y="50" width="240" height="60" />
                  <rect x="290" y="20" width="60" height="50" />
                </g>
                <g fill={t.blueDeep}>
                  <rect x="40" y="64" width="42" height="30" />
                  <circle cx="120" cy="80" r="4" />
                  <circle cx="142" cy="80" r="4" />
                  <rect x="170" y="68" width="70" height="20" />
                  <line x1="298" y1="32" x2="342" y2="32" stroke={t.blueDeep} strokeWidth="2" />
                  <line x1="298" y1="42" x2="342" y2="42" stroke={t.blueDeep} strokeWidth="2" />
                  <line x1="298" y1="52" x2="332" y2="52" stroke={t.blueDeep} strokeWidth="2" />
                </g>
              </svg>
              <div style={{ fontSize: 11, letterSpacing: '0.22em', color: t.bluePale }}>─── WORKSHOP FIELD LOG · cyanotype on cotton · MMXXVI ───</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
