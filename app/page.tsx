'use client';

import { useState, useCallback } from 'react';
import { tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { CyanHero, CyanAbout, CyanContact, CyanColophon } from '@/components/cyan/sections';
import { CyanWorkGate } from '@/components/cyan/gate';
import { CyanTimeline } from '@/components/cyan/timeline';
import { KonamiLayer, useKonami } from '@/components/cyan/konami';

const t = tokens;

export default function PortfolioPage() {
  const [konami, setKonami]     = useState(false);
  const [hintSeen, setHintSeen] = useState(false);

  const fireKonami = useCallback(() => setKonami(true), []);
  useKonami(fireKonami);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ minHeight: '100vh', background: t.blueDeep, color: t.cream, position: 'relative' }}>
      <CyanHero     t={t} onUnlock={scrollToWork} />
      <CyanWorkGate t={t} />
      <CyanTimeline t={t} />
      <CyanAbout    t={t} />
      <CyanContact  t={t} />
      <CyanColophon t={t} onHint={() => setHintSeen(true)} />

      {hintSeen && !konami && (
        <div style={{
          position: 'fixed', bottom: 24, left: 24,
          background: t.cream, color: t.blueDeep,
          padding: '14px 18px', fontFamily: f.ibmPlexMono, fontSize: 11,
          letterSpacing: '0.16em', textTransform: 'uppercase', maxWidth: 280, zIndex: 40,
        }}>
          Tap the arrows on your keyboard — the sequence above. Open the field log.
          <button
            onClick={() => setHintSeen(false)}
            style={{ marginLeft: 12, background: 'transparent', border: 'none', color: '#B63A2E', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11 }}
          >
            ×
          </button>
        </div>
      )}

      {konami && <KonamiLayer t={t} onExit={() => setKonami(false)} />}
    </div>
  );
}
