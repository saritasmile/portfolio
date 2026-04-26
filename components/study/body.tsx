import { Tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import Link from 'next/link';
import { StudySection, TwoCol, PullQuote } from '@/components/study/cover';

// ── Process ───────────────────────────────────────────────────────────────

function ProcessRow({ t, num, title, body, plate }: { t: Tokens; num: string; title: string; body: string; plate: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1.2fr', gap: 40, padding: '36px 0', borderTop: `1px solid ${t.bluePale}22` }}>
      <div style={{ fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.24em', color: t.accent }}>{num}</div>
      <div>
        <h3 style={{ fontFamily: f.newsreader, fontSize: 24, lineHeight: 1.25, color: t.cream, fontWeight: 400, margin: 0 }}>{title}</h3>
        <p style={{ fontFamily: f.ibmPlexSans, fontSize: 15, lineHeight: 1.65, color: t.bluePale, marginTop: 14 }}>{body}</p>
      </div>
      <div style={{ background: '#1F3A5C20', border: `1px solid ${t.bluePale}22`, padding: 20, minHeight: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {plate}
      </div>
    </div>
  );
}

function FieldPlate({ t }: { t: Tokens }) {
  return (
    <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
      <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>FIELD NOTES · N90</text>
      {[18, 32, 46, 60, 74, 88].map((y, i) => <line key={i} x1="6" y1={y} x2={180 - i * 18} y2={y} stroke={t.bluePale} strokeWidth="0.5" opacity="0.5" />)}
      <circle cx="170" cy="46" r="3" fill={t.accent} />
      <circle cx="155" cy="60" r="2.5" fill={t.accent} opacity="0.7" />
    </svg>
  );
}

function WalkthroughPlate({ t }: { t: Tokens }) {
  return (
    <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
      <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>SCENARIO · HURRICANE</text>
      <path d="M 20 80 Q 100 30, 180 80" stroke={t.cream} strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M 20 80 Q 100 50, 180 80" stroke={t.accent} strokeWidth="1" fill="none" strokeDasharray="3 3" />
      {[40, 80, 120, 160].map((x) => <circle key={x} cx={x} cy={x === 40 || x === 160 ? 80 : 50} r="2" fill={t.cream} />)}
    </svg>
  );
}

function TimelinePlate({ t }: { t: Tokens }) {
  return (
    <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
      <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>STRIP TIMELINE · v14</text>
      {[24, 40, 56, 72, 88].map((y, i) => (
        <g key={y}>
          <rect x="10" y={y} width="160" height="10" fill="none" stroke={t.bluePale} strokeWidth="0.6" opacity="0.6" />
          <rect x={12 + i * 18} y={y + 1} width={32 + i * 4} height="8" fill={t.accent} opacity={0.7 - i * 0.1} />
          <text x="174" y={y + 8} fontFamily="IBM Plex Mono, monospace" fontSize="5" fill={t.bluePale}>{(1000 + i * 13).toString()}</text>
        </g>
      ))}
    </svg>
  );
}

function ShadowPlate({ t }: { t: Tokens }) {
  return (
    <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
      <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>BUG COUNT · 21 DAYS</text>
      {Array.from({ length: 21 }).map((_, i) => {
        const v = Math.max(2, Math.round(38 * Math.exp(-i * 0.2)));
        return <rect key={i} x={10 + i * 8.5} y={100 - v * 2} width="6" height={v * 2} fill={t.accent} opacity={0.85} />;
      })}
      <line x1="10" y1="100" x2="190" y2="100" stroke={t.bluePale} strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

export function Process({ t }: { t: Tokens }) {
  return (
    <StudySection t={t} num="03" label="Process · exposures">
      <TwoCol t={t} headline="Five trips to the floor." italic="Twelve consoles redrawn.">
        The team spent <span style={{ color: t.cream }}>43 days at N90</span> across five visits — sitting next to traffic-flow specialists, transcribing what they read off paper strips, and watching how their attention shifted in the seconds before a STAR change. Most of the design happened on the long tables behind the scopes.
      </TwoCol>
      <div style={{ marginTop: 72 }}>
        <ProcessRow t={t} num="03.1" title="Field study"
          body="Shadowed 11 specialists across day, swing, and mid shifts. Recorded 90+ hours of console work, focusing on the moments where the existing tools dropped them out of the loop."
          plate={<FieldPlate t={t} />} />
        <ProcessRow t={t} num="03.2" title="Cognitive walkthroughs"
          body="Walked each specialist through a hypothetical reroute — a hurricane day, an unplanned military movement — using paper mockups. Every protest from a specialist became a constraint."
          plate={<WalkthroughPlate t={t} />} />
        <ProcessRow t={t} num="03.3" title="Console prototype"
          body="Built a clickable timeline-and-strip prototype that ran on the actual radar feed (replayed, not live). Iterated 14 times. Two of those rounds happened in a hotel room near Westbury."
          plate={<TimelinePlate t={t} />} />
        <ProcessRow t={t} num="03.4" title="Operational shadow run"
          body="Three weeks running the new console alongside the old one — same data, no authority. Specialists told us where it was wrong. We changed 38 things, then the count dropped to single digits."
          plate={<ShadowPlate t={t} />} />
      </div>
    </StudySection>
  );
}

// ── The system ────────────────────────────────────────────────────────────

export function TheSystem({ t }: { t: Tokens }) {
  return (
    <StudySection t={t} num="04" label="The system">
      <TwoCol t={t} headline="One surface," italic="three tempos.">
        The console split a controller's attention into <span style={{ color: t.cream }}>three nested time horizons</span> — strategic (next 90 minutes), tactical (next 20), and immediate (next 4) — each rendered as its own band on the same display so a specialist could glance up the stack without looking away from the live feed.
      </TwoCol>
      <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {[
          { tempo: 'Strategic', range: 'T+90m → T+20m', desc: 'Forecast and weather overlay. Sector load curves. Scheduled diversions.', op: 0.55 },
          { tempo: 'Tactical',  range: 'T+20m → T+4m',  desc: 'Sequencing list with drag-to-reorder. Conflict prediction. Coordination calls.', op: 0.75 },
          { tempo: 'Immediate', range: 'T+4m → now',    desc: 'Radar tracks. Strip stack. The traffic on the floor right now.', op: 1 },
        ].map((s) => (
          <div key={s.tempo} style={{ border: `1px solid ${t.bluePale}33`, padding: 28, background: '#0B254520' }}>
            <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', color: t.accent, marginBottom: 14 }}>{s.range}</div>
            <h3 style={{ fontFamily: f.newsreader, fontSize: 28, color: t.cream, fontWeight: 400, margin: 0, opacity: s.op }}>{s.tempo}</h3>
            <p style={{ fontFamily: f.ibmPlexSans, fontSize: 14, lineHeight: 1.6, color: t.bluePale, marginTop: 16 }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <PullQuote t={t} attribution="N90 specialist, 26 years on the floor">
        It's the first tool in a long time that doesn't make me look twice. I look once, I know.
      </PullQuote>
    </StudySection>
  );
}

// ── Impact ────────────────────────────────────────────────────────────────

export function Impact({ t }: { t: Tokens }) {
  return (
    <StudySection t={t} num="05" label="Impact">
      <TwoCol t={t} headline="Measured against" italic="the prior console.">
        Across <span style={{ color: t.cream }}>4,200 logged arrivals</span> during the parallel-run window. All numbers below were independently verified by the FAA program office before publication.
      </TwoCol>
      <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {[
          { n: '−38%', l: 'Median time to commit a sequence change' },
          { n: '+22%', l: 'Specialist-reported confidence at handoff' },
          { n: '−61%', l: 'Avoidable conflict callouts (per shift)' },
          { n: '0',    l: 'Reverts to the legacy system after 90 days' },
        ].map((m, i) => (
          <div key={i} style={{ borderTop: `1px solid ${t.accent}`, paddingTop: 24 }}>
            <div style={{ fontFamily: f.instrumentSerif, fontSize: 64, lineHeight: 1, color: t.cream, fontWeight: 400, letterSpacing: '-0.02em' }}>{m.n}</div>
            <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.bluePale, marginTop: 14, lineHeight: 1.5 }}>{m.l}</div>
          </div>
        ))}
      </div>
    </StudySection>
  );
}

// ── Reflection ────────────────────────────────────────────────────────────

export function Reflection({ t }: { t: Tokens }) {
  return (
    <StudySection t={t} num="06" label="Reflection">
      <TwoCol t={t} headline="What I'd do" italic="differently.">
        <p style={{ marginTop: 0 }}>The first three months were too quiet. We built a fast prototype before understanding the ritual of the morning briefing — by the time we'd corrected for it, two designers had drawn a console that didn't fit the room.</p>
        <p>Next time I'd put a designer in the briefing on day one, even if they understand none of it. Sit with the tempo before drawing a frame.</p>
        <p>The second thing: pair every metric with a quote. The 38% number means very little until you hear a specialist say <em style={{ color: t.cream, fontFamily: f.instrumentSerif }}>"I look once, I know."</em></p>
      </TwoCol>
    </StudySection>
  );
}

// ── Colophon ──────────────────────────────────────────────────────────────

export function StudyColophon({ t }: { t: Tokens }) {
  return (
    <footer style={{ padding: '60px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: t.bluePale, borderTop: `1px solid ${t.bluePale}33` }}>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        <span>MTR-012 · Plate 01</span>
        <span>Cyanotype on cotton paper · in the browser</span>
        <Link href="/#work" style={{ color: t.cream, textDecoration: 'none' }}>← Catalogue</Link>
      </div>
      <Link href="/#contact" style={{ color: t.accent, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
        Send a note →
      </Link>
    </footer>
  );
}
