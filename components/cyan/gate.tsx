'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { works, PASSPHRASE, Work, SilKind } from '@/lib/content';
import { CyanLabel } from '@/components/cyan/marks';
import { SurfCurl, RopeCoil, Scallop, Sandpiper, Eelgrass } from '@/components/cyan/marks';

// ── Silhouette helpers ─────────────────────────────────────────────────────

function SilhouetteIcon({ kind, color }: { kind: SilKind; color: string }) {
  const wrap: React.CSSProperties = { width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' };
  switch (kind) {
    case 'curl':      return <div style={wrap}><SurfCurl color={color} width={36} /></div>;
    case 'rope':      return <div style={wrap}><RopeCoil color={color} size={32} /></div>;
    case 'scallop':   return <div style={wrap}><Scallop  color={color} size={32} /></div>;
    case 'sandpiper': return <div style={wrap}><Sandpiper color={color} size={34} /></div>;
    case 'eelgrass':  return <div style={wrap}><Eelgrass color={color} height={36} /></div>;
  }
}

function SilhouetteWatermark({ kind, color }: { kind: SilKind; color: string }) {
  const wrap: React.CSSProperties = { position: 'absolute', top: -20, right: -30, opacity: 0.55, pointerEvents: 'none' };
  switch (kind) {
    case 'curl':      return <div style={wrap}><SurfCurl color={color} width={260} /></div>;
    case 'rope':      return <div style={wrap}><RopeCoil color={color} size={170} /></div>;
    case 'scallop':   return <div style={wrap}><Scallop  color={color} size={170} /></div>;
    case 'sandpiper': return <div style={wrap}><Sandpiper color={color} size={150} /></div>;
    case 'eelgrass':  return <div style={{ position: 'absolute', top: -20, right: 0, opacity: 0.55, pointerEvents: 'none' }}><Eelgrass color={color} height={220} /></div>;
  }
}

// ── Latent card ────────────────────────────────────────────────────────────

function LatentCard({ t, w, unlocked }: { t: Tokens; w: Work; unlocked: boolean }) {
  return (
    <div style={{
      position: 'relative',
      border: `1px solid ${t.creamDim}`,
      padding: 28, minHeight: 240,
      display: 'flex', flexDirection: 'column', gap: 14,
      background: t.cream, color: t.blueDeep,
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 25% 35%, ${t.creamSoft} 0%, transparent 55%), radial-gradient(ellipse at 75% 90%, ${t.creamDim}55 0%, transparent 70%)`,
        opacity: 0.7,
      }} />
      <SilhouetteWatermark kind={w.sil} color="#C9D9E6" />
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 16, fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.2em', color: t.blueMid }}>
        <span>{w.code}</span>
        <span style={{ color: t.accent, whiteSpace: 'nowrap' }}>{unlocked ? w.domain.toUpperCase() : '◌ LATENT'}</span>
      </div>
      <div style={{ position: 'relative', marginTop: 4 }}>
        <div style={{
          fontFamily: f.newsreader, fontSize: 22, lineHeight: 1.25,
          color: t.blueDeep, fontWeight: 400,
          filter: unlocked ? 'none' : 'blur(5px)',
          transition: 'filter 0.6s',
          userSelect: unlocked ? 'auto' : 'none',
          overflowWrap: 'break-word', wordBreak: 'normal', hyphens: 'none',
          maxWidth: '85%',
        }}>
          {unlocked ? w.title : '████ ███ ██████ ██ █████ ████████ ████'}
        </div>
      </div>
      <div style={{ position: 'relative', marginTop: 'auto', fontFamily: f.ibmPlexMono, fontSize: 9, letterSpacing: '0.2em', color: t.accent }}>
        {unlocked ? `${w.client} · ${w.tag}` : w.tag}
      </div>
    </div>
  );
}

// ── Request-access form ────────────────────────────────────────────────────

function RequestForm({ t, onBack, onClose }: { t: Tokens; onBack: () => void; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: `1px solid ${t.blueMid}55`, padding: '12px 0',
    fontFamily: f.ibmPlexSans, fontSize: 15, color: t.blueDeep, outline: 'none',
  };
  const lbl: React.CSSProperties = {
    fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em',
    textTransform: 'uppercase', color: t.blueMid, display: 'block',
  };
  if (sent) {
    return (
      <div>
        <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.accent, marginBottom: 14 }}>☼ Exposing</div>
        <div style={{ fontFamily: f.newsreader, fontSize: 28, lineHeight: 1.25, color: t.blueDeep, fontWeight: 300 }}>
          Request received.<br />
          <em style={{ fontFamily: f.instrumentSerif, color: t.blueMid }}>I'll send a passphrase within a day or two.</em>
        </div>
        <button onClick={onClose} style={{ marginTop: 32, fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '12px 18px', background: 'transparent', color: t.blueDeep, border: `1px solid ${t.blueDeep}`, cursor: 'pointer' }}>Close</button>
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.accent, marginBottom: 14 }}>Request access</div>
      <div style={{ fontFamily: f.newsreader, fontSize: 28, lineHeight: 1.2, color: t.blueDeep, fontWeight: 300, marginBottom: 22 }}>
        A short note, please.
      </div>
      <label style={lbl}>Name & company</label>
      <input required style={inputStyle} />
      <label style={{ ...lbl, marginTop: 20 }}>Email</label>
      <input required type="email" style={inputStyle} />
      <label style={{ ...lbl, marginTop: 20 }}>Which domain? (aviation / healthcare / cyber / other)</label>
      <input required style={inputStyle} />
      <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between' }}>
        <button type="button" onClick={onBack} style={{ background: 'transparent', border: 'none', color: t.blueMid, fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer' }}>← back</button>
        <button type="submit" style={{ fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '14px 24px', background: t.blueDeep, color: t.cream, border: 'none', cursor: 'pointer' }}>Send request →</button>
      </div>
    </form>
  );
}

// ── Gate modal ─────────────────────────────────────────────────────────────

type Mode = 'closed' | 'gate' | 'denied' | 'request' | 'open';

function GateModal({ t, mode, setMode }: { t: Tokens; mode: Exclude<Mode, 'closed' | 'open'>; setMode: (m: Mode) => void }) {
  const [pw, setPw]     = useState('');
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (inputRef.current) inputRef.current.focus(); }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw.trim().toLowerCase() === PASSPHRASE) {
      setMode('open');
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setMode('denied');
    }
  };

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: `${t.blueDeep}E0`, backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}
      onClick={() => setMode('closed')}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 540, background: t.cream, padding: 44, position: 'relative',
          animation: shake ? 'shakeX 0.4s' : 'none',
          border: `1px solid ${t.blueDeep}`,
          color: t.blueDeep,
        }}
      >
        {(mode === 'gate' || mode === 'denied') && (
          <form onSubmit={submit}>
            <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.accent, marginBottom: 14 }}>◌ Plate latent</div>
            <div style={{ fontFamily: f.newsreader, fontSize: 32, lineHeight: 1.2, color: t.blueDeep, fontWeight: 300, marginBottom: 28 }}>Enter the passphrase.</div>
            <input
              ref={inputRef}
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="passphrase"
              style={{
                width: '100%', padding: '14px 0',
                background: 'transparent', border: 'none',
                borderBottom: `1px solid ${mode === 'denied' ? '#B63A2E' : t.blueDeep}`,
                fontFamily: f.ibmPlexMono, fontSize: 16, letterSpacing: '0.3em', color: t.blueDeep, outline: 'none',
              }}
            />
            {mode === 'denied' && (
              <div style={{ marginTop: 14, fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.14em', color: '#B63A2E' }}>
                Underexposed. The image won't develop with that.
              </div>
            )}
            <div style={{ marginTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button type="button" onClick={() => setMode('request')} style={{ background: 'transparent', border: 'none', color: t.blueMid, fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4 }}>Request access</button>
              <button type="submit" style={{ fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '14px 24px', background: t.blueDeep, color: t.cream, border: 'none', cursor: 'pointer' }}>Develop →</button>
            </div>
          </form>
        )}
        {mode === 'request' && (
          <RequestForm t={t} onBack={() => setMode('gate')} onClose={() => setMode('closed')} />
        )}
      </div>
    </div>
  );
}

// ── Main gate section ──────────────────────────────────────────────────────

export function CyanWorkGate({ t }: { t: Tokens }) {
  const [mode, setMode] = useState<Mode>('closed');

  return (
    <section id="work" style={{ padding: '60px 56px 110px', borderBottom: `1px solid ${t.bluePale}33`, position: 'relative' }}>
      <CyanLabel t={t} num="01" label="Catalogue — under embargo" />

      <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: f.newsreader, fontSize: 46, lineHeight: 1.05, color: t.cream, letterSpacing: '-0.02em', fontWeight: 300 }}>
            The catalogue is kept in a <em style={{ fontFamily: f.instrumentSerif, color: t.accent, fontWeight: 400 }}>flat file</em>.
          </div>
          <p style={{ fontFamily: f.ibmPlexSans, fontSize: 17, lineHeight: 1.65, color: t.bluePale, marginTop: 28, maxWidth: 480 }}>
            Most of my work lives under NDA — aviation tools, clinical workflows, defense programs. Enter the passphrase from our conversation to view exposures, or request access below.
          </p>
          <button
            onClick={() => setMode('gate')}
            style={{
              marginTop: 36, fontFamily: f.ibmPlexMono, fontSize: 11,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              padding: '16px 24px', background: t.cream, color: t.blueDeep,
              border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 12,
            }}
          >
            ◌ Develop the prints
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {works.map((w, i) => {
            const card = <LatentCard t={t} w={w} unlocked={mode === 'open'} />;
            if (mode === 'open' && w.href) {
              return (
                <Link key={i} href={w.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  {card}
                </Link>
              );
            }
            return <div key={i}>{card}</div>;
          })}
        </div>
      </div>

      {mode !== 'closed' && mode !== 'open' && (
        <GateModal t={t} mode={mode as Exclude<Mode, 'closed' | 'open'>} setMode={setMode} />
      )}

      {mode === 'open' && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, background: t.cream, color: t.blueDeep, padding: '12px 18px', fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'flex', gap: 14, alignItems: 'center', zIndex: 40 }}>
          <span style={{ color: t.accent }}>☼</span> Catalogue exposed
          <button onClick={() => setMode('closed')} style={{ background: 'transparent', border: 'none', color: t.blueDeep, cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', borderLeft: `1px solid ${t.creamDim}`, paddingLeft: 14 }}>
            Re-cover
          </button>
        </div>
      )}
    </section>
  );
}
