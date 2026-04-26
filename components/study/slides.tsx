import { Tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { StudySection, TwoCol } from '@/components/study/cover';

function SlideFrame({ t, label, caption, height = 400, children }: {
  t: Tokens; label: string; caption: string; height?: number; children: React.ReactNode;
}) {
  return (
    <figure style={{ margin: '64px 0 0' }}>
      <div style={{ position: 'relative', background: '#FFFFFF', border: `1px solid ${t.bluePale}55`, padding: 14, boxShadow: '0 24px 48px rgba(0,0,0,0.28)' }}>
        <div style={{ background: '#FFFFFF', height, overflow: 'hidden', position: 'relative' }}>
          {children}
        </div>
      </div>
      <figcaption style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24 }}>
        <span style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: t.accent }}>Fig. {label}</span>
        <span style={{ fontFamily: f.newsreader, fontStyle: 'italic', fontSize: 16, color: t.bluePale, textAlign: 'right', maxWidth: 560 }}>{caption}</span>
      </figcaption>
    </figure>
  );
}

function SlideArch() {
  return (
    <svg viewBox="0 0 1200 600" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <text x="40" y="56" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#1F2937">Arrival Sequencing System — Architecture</text>
      <text x="40" y="86" fontFamily="Arial, sans-serif" fontSize="14" fill="#6B7280">Internal · MITRE / FAA · Draft v3 · Sep 2024</text>
      {[
        { x: 60,  label: 'Data Sources',      items: ['ASDE-X', 'STARS feed', 'Weather (WAFS)', 'Schedule (TFM)'] },
        { x: 460, label: 'Sequencing Engine', items: ['Conflict predictor', 'Load balancer', 'Constraint solver', 'Conformance check'] },
        { x: 860, label: 'Console UI',        items: ['Strategic band', 'Tactical band', 'Immediate band', 'Coord. comms'] },
      ].map((l) => (
        <g key={l.label}>
          <rect x={l.x} y={130} width={300} height={400} fill="#F3F4F6" stroke="#9CA3AF" strokeWidth={1} />
          <rect x={l.x} y={130} width={300} height={42}  fill="#2563EB" />
          <text x={l.x + 16} y={158} fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#FFFFFF">{l.label}</text>
          {l.items.map((it, j) => (
            <g key={j}>
              <rect x={l.x + 20} y={200 + j * 70} width={260} height={50} fill="#FFFFFF" stroke="#3B82F6" strokeWidth={1.5} />
              <text x={l.x + 32} y={230 + j * 70} fontFamily="Arial, sans-serif" fontSize="14" fill="#1F2937">{it}</text>
            </g>
          ))}
        </g>
      ))}
      {[225, 260, 295, 330, 365, 400, 435, 470].map((y, i) => (
        <line key={i} x1={360} y1={y} x2={460} y2={y} stroke="#3B82F6" strokeWidth={1.5} markerEnd="url(#arr)" />
      ))}
      {[225, 260, 295, 330, 365, 400, 435, 470].map((y, i) => (
        <line key={`b-${i}`} x1={760} y1={y} x2={860} y2={y} stroke="#3B82F6" strokeWidth={1.5} markerEnd="url(#arr)" />
      ))}
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
        </marker>
      </defs>
    </svg>
  );
}

function SlideBeforeAfter({ side }: { side: 'before' | 'after' }) {
  return (
    <svg viewBox="0 0 800 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="800" height="500" fill="#F9FAFB" />
      <text x="32" y="42" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#111827">{side === 'before' ? 'Legacy console (1998)' : 'New console (2025)'}</text>
      <text x="32" y="68" fontFamily="Arial, sans-serif" fontSize="13" fill="#6B7280">{side === 'before' ? 'Strip stack + 4:3 radar' : 'Three-tempo timeline + radar overlay'}</text>
      {side === 'before' ? (
        <g>
          <rect x="32" y="92" width="500" height="380" fill="#0F172A" />
          <circle cx="282" cy="282" r="160" fill="none" stroke="#22C55E" strokeWidth="1" />
          <circle cx="282" cy="282" r="100" fill="none" stroke="#22C55E" strokeWidth="0.7" opacity="0.6" />
          <circle cx="282" cy="282" r="50"  fill="none" stroke="#22C55E" strokeWidth="0.5" opacity="0.4" />
          {Array.from({ length: 18 }).map((_, i) => {
            const a = (i / 18) * Math.PI * 2;
            return <circle key={i} cx={282 + Math.cos(a) * (60 + (i % 5) * 22)} cy={282 + Math.sin(a) * (60 + (i % 5) * 22)} r="2" fill="#22C55E" />;
          })}
          {Array.from({ length: 14 }).map((_, i) => <rect key={i} x="552" y={94 + i * 27} width="216" height="22" fill="#FBBF24" stroke="#92400E" strokeWidth="0.5" />)}
          {Array.from({ length: 14 }).map((_, i) => <text key={i} x="558" y={110 + i * 27} fontFamily="Courier New, monospace" fontSize="11" fill="#451A03">{`AAL${1000 + i * 13}  ILS22L  ${10 + i}:${String((i * 7) % 60).padStart(2,'0')}`}</text>)}
        </g>
      ) : (
        <g>
          <rect x="32" y="92" width="736" height="380" fill="#0B1220" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="32" y={92 + i * 127} width="736" height="125" fill={i === 2 ? '#0F1A2C' : '#0B1220'} stroke="#1E293B" />
              <text x="44" y={118 + i * 127} fontFamily="Arial, sans-serif" fontSize="10" letterSpacing="2" fill="#60A5FA">{['STRATEGIC · T+90→20m', 'TACTICAL · T+20→4m', 'IMMEDIATE · T+4→NOW'][i]}</text>
              {Array.from({ length: 24 }).map((_, j) => <line key={j} x1={64 + j * 30} y1={130 + i * 127} x2={64 + j * 30} y2={210 + i * 127} stroke="#1E293B" strokeWidth="0.5" />)}
              {Array.from({ length: 6 }).map((_, j) => <rect key={j} x={70 + j * 110 + i * 18} y={148 + i * 127} width={94} height={20} fill={i === 1 ? '#FBBF24' : '#3B82F6'} opacity={0.85} rx="2" />)}
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}

function SlideChart() {
  return (
    <svg viewBox="0 0 1200 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <text x="40" y="50" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fill="#111827">Time-to-commit: legacy vs. new console</text>
      <text x="40" y="78" fontFamily="Arial, sans-serif" fontSize="13" fill="#6B7280">N=4,200 logged arrivals · parallel-run window · Apr–Jun 2025</text>
      <line x1="80" y1="120" x2="80" y2="420" stroke="#9CA3AF" strokeWidth="1" />
      <line x1="80" y1="420" x2="1140" y2="420" stroke="#9CA3AF" strokeWidth="1" />
      {[0, 10, 20, 30, 40, 50].map((v, i) => (
        <g key={i}>
          <line x1="76" y1={420 - v * 6} x2="80" y2={420 - v * 6} stroke="#9CA3AF" />
          <text x="68" y={424 - v * 6} fontFamily="Arial, sans-serif" fontSize="11" fill="#6B7280" textAnchor="end">{v}s</text>
        </g>
      ))}
      {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d, i) => <text key={i} x={130 + i * 145} y="442" fontFamily="Arial, sans-serif" fontSize="11" fill="#6B7280" textAnchor="middle">{d}</text>)}
      <polyline fill="none" stroke="#EF4444" strokeWidth="2.5" points={[39,42,38,44,41,45,40].map((v, i) => `${130 + i * 145},${420 - v * 6}`).join(' ')} />
      <polyline fill="none" stroke="#10B981" strokeWidth="2.5" points={[26,24,25,23,22,24,23].map((v, i) => `${130 + i * 145},${420 - v * 6}`).join(' ')} />
      {[39,42,38,44,41,45,40].map((v, i) => <circle key={`l-${i}`} cx={130 + i * 145} cy={420 - v * 6} r="4" fill="#EF4444" />)}
      {[26,24,25,23,22,24,23].map((v, i) => <circle key={`n-${i}`} cx={130 + i * 145} cy={420 - v * 6} r="4" fill="#10B981" />)}
      <rect x="900" y="120" width="14" height="14" fill="#EF4444" />
      <text x="922" y="132" fontFamily="Arial, sans-serif" fontSize="13" fill="#111827">Legacy console</text>
      <rect x="900" y="146" width="14" height="14" fill="#10B981" />
      <text x="922" y="158" fontFamily="Arial, sans-serif" fontSize="13" fill="#111827">New console</text>
    </svg>
  );
}

function SlidePortrait() {
  return (
    <svg viewBox="0 0 600 800" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="600" height="800" fill="#FFFFFF" />
      <rect x="0" y="0" width="600" height="80" fill="#1E40AF" />
      <text x="40" y="50" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#FFFFFF">Constraint stack</text>
      {[
        { c: '#FEE2E2', e: '#B91C1C', label: 'HARD', body: 'Air-traffic-grade reliability', y: 130 },
        { c: '#FEF3C7', e: '#B45309', label: 'HARD', body: 'No new training certifications', y: 240 },
        { c: '#DBEAFE', e: '#1D4ED8', label: 'SOFT', body: 'Specialists own the rollout', y: 350 },
        { c: '#D1FAE5', e: '#047857', label: 'SOFT', body: 'Familiar instrument, not replacement', y: 460 },
        { c: '#EDE9FE', e: '#5B21B6', label: 'SELF', body: "No metric we can't hear in words", y: 570 },
        { c: '#FCE7F3', e: '#9D174D', label: 'SELF', body: 'No screen a 26-year vet calls "clever"', y: 680 },
      ].map((b) => (
        <g key={b.y}>
          <rect x="40" y={b.y} width="520" height="90" fill={b.c} stroke={b.e} strokeWidth="1.5" rx="8" />
          <text x="60" y={b.y + 30} fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill={b.e} letterSpacing="2">{b.label}</text>
          <text x="60" y={b.y + 62} fontFamily="Arial, sans-serif" fontSize="18" fill="#111827">{b.body}</text>
        </g>
      ))}
    </svg>
  );
}

export function SlidesSection({ t }: { t: Tokens }) {
  return (
    <StudySection t={t} num="04b" label="Imported materials">
      <TwoCol t={t} headline="Mocked up:" italic="how slides would embed.">
        A preview of how PowerPoint exports look set against the cyanotype page. The plates sit on a thin cream mount with a soft drop-shadow, so they read as <span style={{ color: t.cream }}>imported artifacts</span> rather than something that broke the system. Captions stay in the page voice.
      </TwoCol>

      <SlideFrame t={t} label="04b.1"
        caption="A high-level architecture pulled from the FAA program review deck. White ground reads as foreign material on the cyanotype page; the cream mount and Fig. label keep it part of the catalogue."
        height={520}>
        <SlideArch />
      </SlideFrame>

      <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <SlideFrame t={t} label="04b.2a"
          caption="Legacy console — strip stack and 4:3 scope. Pulled from a 2024 stakeholder briefing."
          height={300}>
          <SlideBeforeAfter side="before" />
        </SlideFrame>
        <SlideFrame t={t} label="04b.2b"
          caption="The new console — three time-horizon bands. From the same deck, side-by-side for the rollout meeting."
          height={300}>
          <SlideBeforeAfter side="after" />
        </SlideFrame>
      </div>

      <SlideFrame t={t} label="04b.3"
        caption="Internal chart from the program-office quarterly review. The cream mount carries the foreign style without fighting it."
        height={460}>
        <SlideChart />
      </SlideFrame>

      <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'start' }}>
        <SlideFrame t={t} label="04b.4"
          caption="Constraint stack — pulled from the kickoff deck."
          height={680}>
          <SlidePortrait />
        </SlideFrame>
        <div style={{ paddingTop: 64 }}>
          <p style={{ fontFamily: f.newsreader, fontSize: 24, lineHeight: 1.4, color: t.cream, fontWeight: 300, margin: 0 }}>
            Portrait-orientation slides sit naturally beside body text, so the page can <em style={{ color: t.accent, fontFamily: f.instrumentSerif }}>annotate</em> rather than caption.
          </p>
          <p style={{ fontFamily: f.ibmPlexSans, fontSize: 15, lineHeight: 1.7, color: t.bluePale, marginTop: 24 }}>
            Use this layout for kickoff decks, constraint stacks, and any artifact that's already vertical. The body type carries the analysis; the slide carries the source.
          </p>
          <p style={{ fontFamily: f.ibmPlexSans, fontSize: 15, lineHeight: 1.7, color: t.bluePale, marginTop: 18 }}>
            For wider artifacts (architecture diagrams, dashboards), let the plate go full-width with caption beneath.
          </p>
        </div>
      </div>
    </StudySection>
  );
}
