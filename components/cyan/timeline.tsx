'use client';

import { useState } from 'react';
import { Tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { timeline } from '@/lib/content';
import { CyanLabel, RopeCoil } from '@/components/cyan/marks';

function TimelineRow({ t, r, open, onToggle, last }: {
  t: Tokens;
  r: typeof timeline[0];
  open: boolean;
  onToggle: () => void;
  last: boolean;
}) {
  return (
    <div style={{ position: 'relative', borderTop: `1px solid ${t.bluePale}40`, padding: '30px 0 30px 56px' }}>
      <div style={{ position: 'absolute', top: -10, left: 10, width: 18, height: 18, borderRadius: '50%', background: t.accent, opacity: 0.85 }} />
      {!last && <div style={{ position: 'absolute', top: 12, left: 18, bottom: -30, width: 1, background: `${t.bluePale}40` }} />}

      <button
        onClick={onToggle}
        style={{ background: 'transparent', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', width: '100%', display: 'grid', gridTemplateColumns: '160px 1fr auto', gap: 32, alignItems: 'baseline', color: 'inherit' }}
      >
        <div style={{ fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.14em', color: t.bluePale }}>
          {r.years}
          <div style={{ color: t.accent, marginTop: 6, fontSize: 10, letterSpacing: '0.22em' }}>{r.state}</div>
        </div>

        <div>
          <div style={{ fontFamily: f.newsreader, fontSize: 30, lineHeight: 1.15, color: t.cream, letterSpacing: '-0.01em', fontWeight: 400 }}>
            {r.role} <span style={{ color: t.accent, fontStyle: 'italic', fontFamily: f.instrumentSerif }}>at {r.company}</span>
          </div>
          <div style={{ fontFamily: f.ibmPlexSans, fontSize: 14, color: t.bluePale, marginTop: 8 }}>
            {r.detail}
          </div>
          <div style={{
            maxHeight: open ? 200 : 0, overflow: 'hidden',
            transition: 'max-height 0.45s cubic-bezier(0.2, 0.7, 0.1, 1), margin-top 0.3s',
            marginTop: open ? 18 : 0,
          }}>
            <div style={{ fontFamily: f.newsreader, fontSize: 18, lineHeight: 1.55, color: t.cream, fontStyle: 'italic', fontWeight: 300, maxWidth: 660, paddingLeft: 16, borderLeft: `2px solid ${t.accent}` }}>
              {r.outcome}
            </div>
          </div>
        </div>

        <div style={{ fontFamily: f.ibmPlexMono, fontSize: 18, color: t.bluePale, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</div>
      </button>
    </div>
  );
}

export function CyanTimeline({ t }: { t: Tokens }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="timeline" style={{ padding: '110px 56px', borderBottom: `1px solid ${t.bluePale}33`, position: 'relative' }}>
      <CyanLabel t={t} num="03" label="Field notes — a working catalogue" />

      <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 64 }}>
        <div style={{ position: 'sticky', top: 40, alignSelf: 'start' }}>
          <div style={{ fontFamily: f.newsreader, fontSize: 56, lineHeight: 1, color: t.cream, fontWeight: 300, letterSpacing: '-0.02em' }}>15</div>
          <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: t.bluePale, marginTop: 12 }}>years on the tray</div>
          <div style={{ marginTop: 24, fontFamily: f.ibmPlexSans, fontSize: 13.5, lineHeight: 1.6, color: t.bluePale }}>
            Five exposures. Each plate a different subject; the chemistry holds.
          </div>
          <div style={{ marginTop: 32, opacity: 0.5 }}>
            <RopeCoil color={t.cream} size={140} />
          </div>
        </div>

        <div>
          {timeline.map((r, i) => (
            <TimelineRow
              key={i}
              t={t}
              r={r}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
              last={i === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
