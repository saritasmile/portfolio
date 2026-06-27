'use client';

import { useEffect, useCallback } from 'react';
import { Tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';

export function Cyanotype101({ t, onClose }: { t: Tokens; onClose: () => void }) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: `${t.blueDeep}E8`,
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '64px 32px', overflowY: 'auto',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 920, width: '100%',
          background: t.cream, color: t.blueDeep,
          padding: '56px 64px 48px',
          position: 'relative',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 20, right: 24,
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: f.ibmPlexMono, fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: t.blueDeep, padding: 8,
          }}
        >
          ✕ Close
        </button>

        {/* Masthead row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderBottom: `1px solid ${t.creamDim}`, paddingBottom: 18, marginBottom: 36,
          fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
        }}>
          <span style={{ color: t.accent }}>☼ Specimen 001 · colophon</span>
          <span style={{ color: '#7a6c4a' }}>On the cyanotype</span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: f.newsreader, fontWeight: 300,
          fontSize: 'clamp(40px, 4.6vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.02em', margin: 0, color: t.blueDeep,
        }}>
          On <em style={{ fontFamily: f.instrumentSerif, color: t.accent, fontWeight: 400 }}>the cyanotype.</em>
        </h2>
        <p style={{ fontFamily: f.ibmPlexSans, fontSize: 14, lineHeight: 1.6, marginTop: 14, color: '#5a4f36', maxWidth: 600 }}>
          A small field note on the photographic process this site borrows its language from.
        </p>

        {/* Two-column body */}
        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <h3 style={h3Style(t)}>The process</h3>
            <p style={pStyle}>
              A cyanotype is a photographic print made by coating paper in iron salts, laying objects on top,
              and leaving the paper in the sun. Where light strikes the paper, it turns deep{' '}
              <em style={{ color: t.accent, fontFamily: f.instrumentSerif }}>Prussian blue</em>.
              Where the object blocks the light, the paper stays pale — a white silhouette of whatever sat there.
            </p>
            <p style={pStyle}>
              No darkroom. No chemistry beyond a rinse in cold water. The print develops itself, slowly, in
              whatever light the day gives you.
            </p>

            <h3 style={h3Style(t)}>1842 · Sir John Herschel</h3>
            <p style={pStyle}>
              Invented the process. He used it for blueprints — engineering drawings copied from a master,
              rolled out by the dozen. Hence the word.
            </p>

            <h3 style={h3Style(t)}>1843 · Anna Atkins</h3>
            <p style={pStyle}>
              Used it to record British algae. Her{' '}
              <em>Photographs of British Algae: Cyanotype Impressions</em> is generally considered the first
              photographically illustrated book — a botanical archive made entirely of light, water, and patience.
            </p>
          </div>

          <div>
            <h3 style={h3Style(t)}>Why this site uses it</h3>
            <p style={pStyle}>
              Applied research is also a slow exposure. You set up the conditions, hold something to the light,
              and wait for the image to come clear. Sometimes the print is muddy and you start over. Sometimes
              a single shape catches and the rest of the work is just developing.
            </p>
            <p style={pStyle}>
              The vocabulary maps neatly.{' '}
              <em style={{ color: t.accent, fontFamily: f.instrumentSerif }}>Exposed</em> work is finished and
              visible. <em style={{ color: t.accent, fontFamily: f.instrumentSerif }}>Latent</em> work has been
              imaged but not developed.{' '}
              <em style={{ color: t.accent, fontFamily: f.instrumentSerif }}>Underexposed</em> means the wrong
              passphrase. A <em style={{ color: t.accent, fontFamily: f.instrumentSerif }}>specimen</em> is a
              single project. A <em style={{ color: t.accent, fontFamily: f.instrumentSerif }}>plate</em> is a
              finished page.
            </p>

            <h3 style={h3Style(t)}>Nantucket, specifically</h3>
            <p style={pStyle}>
              The flock of birds in the hero, the eelgrass and rope-coil silhouettes on the catalogue cards,
              the wind-and-tide ridges in the correspondence section — those are inspired by contemporary
              Nantucket cyanotype work, in particular Blueprint Nantucket, who lay objects from the island's
              beaches onto paper and let the spring tide of sunlight do the rest.
            </p>

            <h3 style={h3Style(t)}>Try it yourself</h3>
            <p style={pStyle}>
              Sun-print kits are about $15. The instructions fit on a postcard. The ten-year-old in your life
              will love it.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 48, paddingTop: 24, borderTop: `1px solid ${t.creamDim}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#7a6c4a',
        }}>
          <span>
            Press{' '}
            <kbd style={{
              fontFamily: f.ibmPlexMono, background: '#fff',
              border: '1px solid #c4b78f', padding: '1px 7px',
              fontSize: 10, letterSpacing: '0.05em', margin: '0 4px',
            }}>
              Esc
            </kbd>
            {' '}to re-cover the print
          </span>
          <span style={{ color: t.accent }}>☼ MMXXVI</span>
        </div>
      </div>
    </div>
  );
}

const h3Style = (t: Tokens): React.CSSProperties => ({
  fontFamily: 'var(--font-ibm-plex-mono), "Courier New", monospace',
  fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase',
  color: t.accent, marginTop: 32, marginBottom: 14,
});

const pStyle: React.CSSProperties = {
  fontFamily: 'var(--font-newsreader), Georgia, serif',
  fontSize: 17, lineHeight: 1.55,
  color: '#2D2418', margin: '0 0 14px',
};
