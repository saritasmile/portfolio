import { tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { StudyHeader, StudySection, TwoCol, PullQuote } from '@/components/study/cover';
import { StudyColophon } from '@/components/study/body';

const t = tokens;

export const metadata = {
  title: 'DRP-004 — Human-AI Teaming for Air Mobility Planning',
  description: 'Case study: Human-AI teaming for air mobility planning. Draper · Kessel Run, 2018.',
};

function CoverPlate() {
  const waypoints = [
    { x: 60,  y: 240, label: 'ORIGIN' },
    { x: 130, y: 170, label: 'CHARLIE' },
    { x: 210, y: 220, label: 'DELTA' },
    { x: 290, y: 130, label: 'ECHO' },
    { x: 370, y: 190, label: 'DEST' },
  ];
  const aiRoute = [
    { x: 60, y: 240 }, { x: 150, y: 140 }, { x: 260, y: 110 }, { x: 370, y: 190 },
  ];
  return (
    <svg viewBox="0 0 420 320" width="100%" style={{ display: 'block' }} aria-hidden="true">
      <text x="20" y="20" fontFamily="IBM Plex Mono, monospace" fontSize="8" letterSpacing="2" fill={t.accent}>DRP-004 · AIR MOBILITY</text>
      {/* Grid */}
      {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((x) => (
        <line key={`v${x}`} x1={x} y1="34" x2={x} y2="300" stroke={t.bluePale} strokeWidth="0.4" opacity="0.18" />
      ))}
      {[60, 90, 120, 150, 180, 210, 240, 270, 300].map((y) => (
        <line key={`h${y}`} x1="20" y1={y} x2="410" y2={y} stroke={t.bluePale} strokeWidth="0.4" opacity="0.18" />
      ))}
      {/* Human-planned route (solid) */}
      <polyline
        points={waypoints.map((w) => `${w.x},${w.y}`).join(' ')}
        fill="none" stroke={t.cream} strokeWidth="1.4" opacity="0.7" />
      {/* AI-recommended route (dashed) */}
      <polyline
        points={aiRoute.map((p) => `${p.x},${p.y}`).join(' ')}
        fill="none" stroke={t.accent} strokeWidth="1.2" strokeDasharray="5 3" opacity="0.85" />
      {/* Waypoints */}
      {waypoints.map((w, i) => (
        <g key={i}>
          <circle cx={w.x} cy={w.y} r="5" fill={t.blueDeep} stroke={t.cream} strokeWidth="1.2" />
          <text x={w.x + 8} y={w.y + 4} fontFamily="IBM Plex Mono, monospace" fontSize="6"
            fill={t.bluePale}>{w.label}</text>
        </g>
      ))}
      {/* AI waypoints */}
      {aiRoute.slice(1, -1).map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill={t.blueDeep} stroke={t.accent} strokeWidth="1" strokeDasharray="2 1" />
      ))}
      {/* Legend */}
      <line x1="20" y1="308" x2="46" y2="308" stroke={t.cream} strokeWidth="1.4" opacity="0.7" />
      <text x="50" y="312" fontFamily="IBM Plex Mono, monospace" fontSize="6" fill={t.bluePale}>HUMAN PLAN</text>
      <line x1="140" y1="308" x2="166" y2="308" stroke={t.accent} strokeWidth="1.2" strokeDasharray="4 2" />
      <text x="170" y="312" fontFamily="IBM Plex Mono, monospace" fontSize="6" fill={t.accent}>AI RECOMMEND</text>
      {/* Confidence band on AI route */}
      <path d="M 60 250 Q 150 150 260 120 L 260 100 Q 150 130 60 230 Z"
        fill={t.accent} opacity="0.07" />
    </svg>
  );
}

function ProcessRow({ num, title, body, plate }: { num: string; title: string; body: string; plate: React.ReactNode }) {
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

export default function CaseStudyDRP004() {
  return (
    <div style={{ minHeight: '100vh', background: t.blueDeep, color: t.cream, position: 'relative' }}>
      <StudyHeader t={t} code="DRP-004" domain="Defense" year="2018" />

      <section style={{ padding: '40px 56px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: t.accent, marginBottom: 28 }}>
              Plate 04 · Case study
            </div>
            <h1 style={{ fontFamily: f.newsreader, fontSize: 'clamp(48px, 6.4vw, 96px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: t.cream, fontWeight: 300, margin: 0 }}>
              Teaming the planner<br />
              <em style={{ fontFamily: f.instrumentSerif, color: t.accent, fontWeight: 400 }}>with the machine.</em>
            </h1>
            <p style={{ fontFamily: f.ibmPlexSans, fontSize: 19, lineHeight: 1.6, color: t.bluePale, marginTop: 36, maxWidth: 640 }}>
              An interface between AI planning recommendations and the human operators who retain authority over every air mobility mission. Built embedded at AMC Scott AFB, tested in tabletop exercises and simulator studies, fielded across three follow-on Kessel Run programs.
            </p>
          </div>
          <div style={{ position: 'relative', minHeight: 280 }}>
            <CoverPlate />
          </div>
        </div>

        <dl style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, paddingTop: 28, borderTop: `1px solid ${t.bluePale}33` }}>
          {[
            ['Role',     'HCI researcher · interaction design lead'],
            ['Team',     '2 researchers · 1 designer · AI engineering team'],
            ['Duration', '22 months (Mar 2016 → Dec 2018)'],
            ['Status',   'Fielded · used as model for 3 follow-on programs'],
          ].map(([k, v]) => (
            <div key={k}>
              <dt style={{ fontFamily: f.ibmPlexMono, fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.bluePale, marginBottom: 10 }}>{k}</dt>
              <dd style={{ fontFamily: f.newsreader, fontSize: 17, lineHeight: 1.45, color: t.cream, margin: 0 }}>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <StudySection t={t} num="02" label="Context">
        <TwoCol t={t} headline="Hundreds of constraints." italic="Eight planners.">
          The Air Force's air mobility mission — moving cargo, personnel, and medical cases across a theater — is planned by a small team of operators balancing hundreds of simultaneous constraints: aircraft availability, fuel burn, overflight clearances, priority payload timelines, and weather windows. Kessel Run was building AI tools capable of suggesting optimized plans. The question we were asked to answer was harder than the algorithm: <span style={{ color: t.cream }}>how do you design the surface between an AI recommendation and the human who has to sign for the mission?</span>
          <br /><br />
          The planner must retain authority. The AI must be legible. Neither can undermine the other.
        </TwoCol>
      </StudySection>

      <StudySection t={t} num="02b" label="Constraints">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { k: 'Hard', v: 'Classified environment — no internet, no cloud, no external dependencies. All AI inference runs on-premise hardware. Nothing leaves the SCIF.' },
            { k: 'Soft', v: 'Operators must be able to override any AI recommendation in under 3 keystrokes. Planners must retain a mental model of the full plan, not just the recommended changes.' },
            { k: 'Self-imposed', v: 'The system must never present AI confidence as certainty. Every recommendation must show its reasoning in plain language, not a score. Planners read words, not percentages.' },
          ].map((c) => (
            <div key={c.k} style={{ paddingTop: 24, borderTop: `1px solid ${t.bluePale}33` }}>
              <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.accent, marginBottom: 16 }}>{c.k}</div>
              <p style={{ fontFamily: f.newsreader, fontSize: 19, lineHeight: 1.5, color: t.cream, fontWeight: 300, margin: 0 }}>{c.v}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection t={t} num="03" label="Process · exposures">
        <TwoCol t={t} headline="Five weeks embedded." italic="Eight operators, forty-four failures.">
          The team spent <span style={{ color: t.cream }}>five weeks embedded at AMC Scott AFB</span>, working alongside planners through actual planning cycles — not simulations. We catalogued 44 types of planning failures in the legacy system and asked a simple question about each: could the AI have caught this? Could the interface have surfaced it in time?
        </TwoCol>
        <div style={{ marginTop: 72 }}>
          <ProcessRow num="03.1" title="Embedded observation"
            body="Spent five weeks at AMC Scott AFB working alongside planners through live planning cycles. Transcribed the questions they asked aloud, the moments they hesitated, and the decisions they logged before they were confident. The hesitation log became our design specification."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>AMC SCOTT AFB · WK 1–5</text>
                {Array.from({ length: 5 }).map((_, week) => (
                  <g key={week}>
                    <rect x={10 + week * 36} y="24" width="30" height="70" fill={t.blueMid} opacity="0.15" stroke={t.bluePale} strokeWidth="0.5" />
                    {Array.from({ length: 5 }).map((_, day) => (
                      <rect key={day} x={12 + week * 36} y={26 + day * 13} width="26" height="10"
                        fill={t.accent} opacity={0.4 + day * 0.08} />
                    ))}
                    <text x={25 + week * 36} y="100" fontFamily="IBM Plex Mono, monospace" fontSize="5"
                      textAnchor="middle" fill={t.bluePale}>W{week + 1}</text>
                  </g>
                ))}
              </svg>
            } />
          <ProcessRow num="03.2" title="Failure taxonomy"
            body="Catalogued 44 types of planning failures from 18 months of incident logs. Mapped each to a category: data gap, reasoning error, constraint violation, or handoff failure. Asked of each: could the AI have caught it? The answer was yes for 31. For 13, the AI would have made it worse."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>FAILURE TYPES · N=44</text>
                {[
                  { label: 'DATA GAP', n: 12, color: t.accent },
                  { label: 'REASONING', n: 11, color: t.bluePale },
                  { label: 'CONSTRAINT', n: 9, color: t.cream },
                  { label: 'HANDOFF', n: 12, color: '#B63A2E' },
                ].map((row, i) => (
                  <g key={i}>
                    <rect x="10" y={24 + i * 18} width={row.n * 5} height="12" fill={row.color} opacity="0.65" />
                    <text x={14 + row.n * 5} y={34 + i * 18} fontFamily="IBM Plex Mono, monospace" fontSize="5.5"
                      fill={row.color}>{row.label} · {row.n}</text>
                  </g>
                ))}
              </svg>
            } />
          <ProcessRow num="03.3" title="Teaming workshop"
            body="Ran a 3-day workshop with planners and AI engineers together, building a shared vocabulary for 'what the AI knows.' The engineers discovered that planners couldn't interpret probability scores. The planners discovered that the AI was reasoning about constraints they'd never seen written down."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>VOCABULARY GAPS · WS</text>
                {[
                  'Confidence score', 'P(failure)', 'Constraint weight',
                  'Route feasibility', 'Fuel margin'
                ].map((term, i) => (
                  <g key={i}>
                    <rect x="10" y={22 + i * 16} width="170" height="12" fill={t.bluePale} opacity="0.08" />
                    <rect x="10" y={22 + i * 16} width={i < 3 ? 60 : 140} height="12"
                      fill={i < 3 ? '#B63A2E' : t.accent} opacity="0.4" />
                    <text x="14" y={32 + i * 16} fontFamily="IBM Plex Mono, monospace" fontSize="5.5" fill={t.cream}>{term}</text>
                  </g>
                ))}
                <text x="10" y="106" fontFamily="IBM Plex Mono, monospace" fontSize="5.5" fill="#B63A2E">■ PLANNER MISREAD</text>
              </svg>
            } />
          <ProcessRow num="03.4" title="Simulator study"
            body="Ran 8 operators through a 2-day tabletop exercise against paper prototypes, then a full simulator study in a classified environment. Measured plan quality (constraint violations, SLA hits) and planner trust calibration — the degree to which operator confidence matched actual plan accuracy."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>TRUST CALIBRATION</text>
                <line x1="20" y1="95" x2="190" y2="95" stroke={t.bluePale} strokeWidth="0.5" opacity="0.4" />
                <line x1="20" y1="25" x2="20" y2="95" stroke={t.bluePale} strokeWidth="0.5" opacity="0.4" />
                {/* Ideal line */}
                <line x1="20" y1="95" x2="190" y2="25" stroke={t.bluePale} strokeWidth="0.6" strokeDasharray="3 2" opacity="0.4" />
                {/* Actual scatter (before) */}
                {[[30,40],[50,70],[80,55],[110,35],[140,65],[170,45]].map(([x, y], i) => (
                  <circle key={i} cx={20 + x * 0.9} cy={95 - y * 0.7} r="3" fill="#B63A2E" opacity="0.7" />
                ))}
                {/* After */}
                {[[30,34],[50,54],[80,62],[110,68],[140,72],[170,76]].map(([x, y], i) => (
                  <circle key={i} cx={20 + x * 0.9} cy={95 - y * 0.7} r="3" fill={t.accent} opacity="0.85" />
                ))}
                <text x="22" y="106" fontFamily="IBM Plex Mono, monospace" fontSize="5" fill="#B63A2E">■ BEFORE</text>
                <text x="70" y="106" fontFamily="IBM Plex Mono, monospace" fontSize="5" fill={t.accent}>■ AFTER</text>
              </svg>
            } />
        </div>
      </StudySection>

      <StudySection t={t} num="04" label="The system">
        <TwoCol t={t} headline="Recommendation plus" italic="reasoning.">
          The planning canvas separates what the AI suggests from why it suggests it. Every recommended route, sequence, or resource reallocation appears alongside a plain-language rationale — not a confidence score. Planners see the constraint the AI is optimizing for, and the constraint it is trading away. The system never presents a single recommendation as the answer; it presents <span style={{ color: t.cream }}>the tradeoff.</span>
        </TwoCol>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { label: 'Planning canvas', range: 'Mission layout', desc: 'A spatial mission map with draggable assets, constraint overlays, and a persistent conflict-detection layer. Planners can build the full mission without switching applications.', op: 0.55 },
            { label: 'AI recommendation layer', range: 'Suggestions', desc: 'Recommended changes appear as a distinct visual layer, never overwriting the human plan. Each carries a plain-language rationale: "Rerouting CHARLIE avoids the 2-hour overflight window opening at 14:00."', op: 0.8 },
            { label: 'Confidence window', range: 'Uncertainty', desc: 'AI recommendations show a range, not a point. The planner sees the envelope within which the AI believes the plan will succeed — and the edge cases it cannot account for.', op: 1 },
          ].map((s) => (
            <div key={s.label} style={{ border: `1px solid ${t.bluePale}33`, padding: 28, background: '#0B254520' }}>
              <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', color: t.accent, marginBottom: 14 }}>{s.range}</div>
              <h3 style={{ fontFamily: f.newsreader, fontSize: 28, color: t.cream, fontWeight: 400, margin: 0, opacity: s.op }}>{s.label}</h3>
              <p style={{ fontFamily: f.ibmPlexSans, fontSize: 14, lineHeight: 1.6, color: t.bluePale, marginTop: 16 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <PullQuote t={t} attribution="AMC mission planner, 11 years, simulator study participant">
          When it tells me why, I can push back. When it just tells me what, I don't know if it's smarter than me or broken.
        </PullQuote>
      </StudySection>

      <StudySection t={t} num="05" label="Impact">
        <TwoCol t={t} headline="Measured in the" italic="60-day fielding.">
          Across <span style={{ color: t.cream }}>8 planners over 60 days</span> of fielding against live planning cycles. Plan quality metrics audited against historical baseline by the Kessel Run program office. Trust calibration measured using an adapted Situation Awareness Global Assessment Technique protocol.
        </TwoCol>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { n: '−29%', l: 'Average planning cycle time vs. legacy baseline' },
            { n: '+41%', l: 'Planner-reported ability to catch constraint violations before commit' },
            { n: '94%',  l: 'AI recommendations accepted or modified (vs. discarded outright)' },
            { n: '3',    l: 'Follow-on Kessel Run programs modeled on this human-machine teaming approach' },
          ].map((m, i) => (
            <div key={i} style={{ borderTop: `1px solid ${t.accent}`, paddingTop: 24 }}>
              <div style={{ fontFamily: f.instrumentSerif, fontSize: 64, lineHeight: 1, color: t.cream, fontWeight: 400, letterSpacing: '-0.02em' }}>{m.n}</div>
              <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.bluePale, marginTop: 14, lineHeight: 1.5 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection t={t} num="06" label="Reflection">
        <TwoCol t={t} headline="What I'd do" italic="differently.">
          <p style={{ marginTop: 0 }}>The hardest design challenge wasn't the interface — it was the epistemology. Planners kept asking "how does it know what it knows?" and the first version of the system had no good answer. We spent the last three months of the program building explainability into the AI layer, not the UI.</p>
          <p>The interface only worked once the model could tell a planner, in plain language, why it was suggesting a reroute. We should have made that a launch prerequisite, not a Q4 sprint.</p>
          <p>The second thing: we overcorrected on override friction. We wanted planners to take the AI seriously, so we added a confirmation step to every override. What we got was planners learning to click through the confirmation without reading it. Less friction, better outcomes.</p>
        </TwoCol>
      </StudySection>

      <StudyColophon t={t} code="DRP-004" plate="Plate 04" />
    </div>
  );
}
