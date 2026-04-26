import Link from 'next/link';
import { Tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { CyanLabel } from '@/components/cyan/marks';

export function StudyHeader({ t }: { t: Tokens }) {
  return (
    <header style={{ padding: '32px 56px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: t.bluePale }}>
      <Link href="/#work" style={{ color: t.bluePale, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
        ← Back to Catalogue
      </Link>
      <div style={{ display: 'flex', gap: 24 }}>
        <span>MTR-012</span>
        <span style={{ color: t.accent }}>Aviation</span>
        <span>Exposed · 2025</span>
      </div>
    </header>
  );
}

function CoverPlate({ t }: { t: Tokens }) {
  return (
    <svg viewBox="0 0 420 320" width="100%" style={{ display: 'block' }} aria-hidden="true">
      <path d="M 30 280 Q 210 40, 390 280" stroke={t.bluePale} strokeWidth="1" strokeDasharray="3 5" fill="none" opacity="0.4" />
      <rect x="195" y="270" width="30" height="6" fill={t.cream} opacity="0.6" />
      {[
        { d: 'M 40 60 Q 140 120, 210 270', op: 0.7 },
        { d: 'M 100 30 Q 170 130, 210 270', op: 0.55 },
        { d: 'M 380 60 Q 280 120, 210 270', op: 0.7 },
        { d: 'M 320 30 Q 250 130, 210 270', op: 0.55 },
        { d: 'M 220 20 Q 215 140, 210 270', op: 0.6 },
      ].map((p, i) => <path key={i} d={p.d} stroke={t.cream} strokeWidth="1.2" fill="none" opacity={p.op} />)}
      {[
        { x: 70, y: 80 }, { x: 120, y: 60 }, { x: 350, y: 80 }, { x: 300, y: 60 }, { x: 218, y: 50 },
        { x: 175, y: 160 }, { x: 250, y: 165 }, { x: 205, y: 200 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`}>
          <polygon points="0,-4 -3,3 0,1 3,3" fill={t.accent} />
          <text x="6" y="3" fontFamily="IBM Plex Mono, monospace" fontSize="6" fill={t.bluePale}>{`AAL${1000 + i * 13}`}</text>
        </g>
      ))}
      <text x="30" y="20" fontFamily="IBM Plex Mono, monospace" fontSize="8" letterSpacing="2" fill={t.accent}>N90 · ARRIVALS</text>
    </svg>
  );
}

export function StudyCover({ t }: { t: Tokens }) {
  return (
    <section style={{ padding: '40px 56px 64px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end' }}>
        <div>
          <div style={{ fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: t.accent, marginBottom: 28 }}>
            Plate 01 · Case study
          </div>
          <h1 style={{ fontFamily: f.newsreader, fontSize: 'clamp(48px, 6.4vw, 96px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: t.cream, fontWeight: 300, margin: 0 }}>
            Arrival-sequencing<br />
            <em style={{ fontFamily: f.instrumentSerif, color: t.accent, fontWeight: 400 }}>for high-density airspace.</em>
          </h1>
          <p style={{ fontFamily: f.ibmPlexSans, fontSize: 19, lineHeight: 1.6, color: t.bluePale, marginTop: 36, maxWidth: 640 }}>
            A console for FAA traffic-flow specialists managing arrivals into the New York metroplex. Built from observation rooms in N90, then taken 0→1 with three control facilities over 14 months.
          </p>
        </div>
        <div style={{ position: 'relative', minHeight: 280 }}>
          <CoverPlate t={t} />
        </div>
      </div>

      <dl style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, paddingTop: 28, borderTop: `1px solid ${t.bluePale}33` }}>
        {[
          ['Role',     'Principal applied researcher · design lead'],
          ['Team',     '2 researchers · 3 designers · 6 engineers'],
          ['Duration', '14 months (May 2024 → Jul 2025)'],
          ['Status',   'Pilot at N90 · ZNY · ZBW'],
        ].map(([k, v]) => (
          <div key={k}>
            <dt style={{ fontFamily: f.ibmPlexMono, fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.bluePale, marginBottom: 10 }}>{k}</dt>
            <dd style={{ fontFamily: f.newsreader, fontSize: 17, lineHeight: 1.45, color: t.cream, margin: 0 }}>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function StudySection({ t, num, label, children }: { t: Tokens; num: string; label: string; children: React.ReactNode }) {
  return (
    <section style={{ padding: '90px 56px', borderTop: `1px solid ${t.bluePale}33` }}>
      <CyanLabel t={t} num={num} label={label} />
      <div style={{ marginTop: 56 }}>{children}</div>
    </section>
  );
}

export function TwoCol({ t, headline, italic, children }: { t: Tokens; headline: string; italic?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
      <h2 style={{ fontFamily: f.newsreader, fontSize: 'clamp(34px, 3.6vw, 50px)', lineHeight: 1.08, color: t.cream, letterSpacing: '-0.02em', fontWeight: 300, margin: 0 }}>
        {headline}
        {italic && <><br /><em style={{ fontFamily: f.instrumentSerif, color: t.accent, fontWeight: 400 }}>{italic}</em></>}
      </h2>
      <div style={{ fontFamily: f.ibmPlexSans, fontSize: 17, lineHeight: 1.7, color: t.bluePale }}>
        {children}
      </div>
    </div>
  );
}

export function PullQuote({ t, children, attribution }: { t: Tokens; children: React.ReactNode; attribution: string }) {
  return (
    <blockquote style={{ margin: '64px 0 0', padding: '0 0 0 32px', borderLeft: `2px solid ${t.accent}` }}>
      <p style={{ fontFamily: f.instrumentSerif, fontSize: 32, lineHeight: 1.35, color: t.cream, fontWeight: 400, margin: 0 }}>
        "{children}"
      </p>
      <cite style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: t.bluePale, fontStyle: 'normal', marginTop: 18, display: 'block' }}>
        — {attribution}
      </cite>
    </blockquote>
  );
}
