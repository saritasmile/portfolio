import { tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { StudyHeader, StudySection, TwoCol, PullQuote } from '@/components/study/cover';
import { StudyColophon } from '@/components/study/body';

const t = tokens;

export const metadata = {
  title: 'MOT-007 — Remote Vehicle Assistance Operator Suite',
  description: 'Case study: Remote vehicle assistance operator suite. Motional, 2024.',
};

function CoverPlate() {
  return (
    <svg viewBox="0 0 420 320" width="100%" style={{ display: 'block' }} aria-hidden="true">
      <text x="20" y="20" fontFamily="IBM Plex Mono, monospace" fontSize="8" letterSpacing="2" fill={t.accent}>MOT-007 · ESCALATION</text>
      {/* Road grid */}
      <rect x="0" y="138" width="420" height="44" fill={t.blueMid} opacity="0.18" />
      <rect x="188" y="0" width="44" height="320" fill={t.blueMid} opacity="0.18" />
      {/* Center-line dashes */}
      {[0,36,72,108,144,180,216,252,288,324,360].map((x, i) => (
        <line key={i} x1={x} y1="160" x2={x + 18} y2="160" stroke={t.cream} strokeWidth="0.8" opacity="0.25" />
      ))}
      {[0,36,72,108,144,180,216,252,288].map((y, i) => (
        <line key={i} x1="210" y1={y} x2="210" y2={y + 18} stroke={t.cream} strokeWidth="0.8" opacity="0.25" />
      ))}
      {/* Surrounding vehicles */}
      {[
        { x: 88, y: 146, w: 26, h: 16 },
        { x: 300, y: 146, w: 26, h: 16 },
        { x: 160, y: 60, w: 16, h: 26 },
        { x: 196, y: 220, w: 16, h: 26 },
        { x: 240, y: 145, w: 24, h: 16 },
      ].map((v, i) => (
        <rect key={i} x={v.x} y={v.y} width={v.w} height={v.h} rx="2" fill={t.cream} opacity="0.35" />
      ))}
      {/* AV under escalation — highlighted */}
      <rect x="194" y="144" width="32" height="22" rx="3" fill={t.accent} opacity="0.9" />
      <text x="210" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="5.5" textAnchor="middle" fill={t.blueDeep} fontWeight="700">RVA</text>
      {/* Escalation radius */}
      <circle cx="210" cy="155" r="52" fill="none" stroke={t.accent} strokeWidth="1" strokeDasharray="4 3" opacity="0.55" />
      {/* Lines to operator HUD preview */}
      <line x1="262" y1="140" x2="336" y2="32" stroke={t.accent} strokeWidth="0.8" opacity="0.45" />
      <line x1="262" y1="170" x2="336" y2="82" stroke={t.accent} strokeWidth="0.8" opacity="0.45" />
      {/* Operator HUD preview boxes */}
      <rect x="336" y="20" width="74" height="74" fill="none" stroke={t.accent} strokeWidth="0.8" opacity="0.5" />
      <text x="373" y="36" fontFamily="IBM Plex Mono, monospace" fontSize="6" textAnchor="middle" fill={t.accent}>FEED 1</text>
      <rect x="336" y="100" width="74" height="50" fill="none" stroke={t.bluePale} strokeWidth="0.6" opacity="0.4" />
      <text x="373" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="6" textAnchor="middle" fill={t.bluePale}>FEED 2</text>
      {/* Intervention timer */}
      <text x="210" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="9" textAnchor="middle" fill={t.cream} opacity="0.75">12.3s</text>
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

export default function CaseStudyMOT007() {
  return (
    <div style={{ minHeight: '100vh', background: t.blueDeep, color: t.cream, position: 'relative' }}>
      <StudyHeader t={t} code="MOT-007" domain="Autonomy" year="2024" />

      <section style={{ padding: '40px 56px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: t.accent, marginBottom: 28 }}>
              Plate 02 · Case study
            </div>
            <h1 style={{ fontFamily: f.newsreader, fontSize: 'clamp(48px, 6.4vw, 96px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: t.cream, fontWeight: 300, margin: 0 }}>
              Remote assistance<br />
              <em style={{ fontFamily: f.instrumentSerif, color: t.accent, fontWeight: 400 }}>for an autonomous fleet.</em>
            </h1>
            <p style={{ fontFamily: f.ibmPlexSans, fontSize: 19, lineHeight: 1.6, color: t.bluePale, marginTop: 36, maxWidth: 640 }}>
              A console for Motional's remote vehicle assistance operators — the humans behind the robotaxi that handles what the machine cannot. Built from 400+ hours inside the Las Vegas operations center, across four rounds of live-scenario testing.
            </p>
          </div>
          <div style={{ position: 'relative', minHeight: 280 }}>
            <CoverPlate />
          </div>
        </div>

        <dl style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, paddingTop: 28, borderTop: `1px solid ${t.bluePale}33` }}>
          {[
            ['Role',     'Principal researcher · design lead'],
            ['Team',     '2 researchers · 2 designers · 5 engineers'],
            ['Duration', '11 months (Apr 2023 → Feb 2024)'],
            ['Status',   'Commercial pilot · Las Vegas, Boston'],
          ].map(([k, v]) => (
            <div key={k}>
              <dt style={{ fontFamily: f.ibmPlexMono, fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.bluePale, marginBottom: 10 }}>{k}</dt>
              <dd style={{ fontFamily: f.newsreader, fontSize: 17, lineHeight: 1.45, color: t.cream, margin: 0 }}>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <StudySection t={t} num="02" label="Context">
        <TwoCol t={t} headline="Twelve seconds to decide." italic="Zero margin.">
          Motional's robotaxi fleet escalates to a human operator whenever the vehicle encounters a scenario it can't resolve autonomously — a pedestrian stepping unexpectedly into the lane, a confusing construction zone, an ambiguous signal. Operators have a narrow window, often under <span style={{ color: t.cream }}>15 seconds</span>, to assess and guide the vehicle safely. The legacy console was built for a fleet of 40 vehicles; by 2023, Motional was scaling toward several hundred for commercial launch. The gap between the tool and the workload was becoming the ceiling on how many vehicles a single operator could safely supervise.
          <br /><br />
          Our brief was simple: design a console an operator could use to supervise more vehicles without losing situational awareness of any one.
        </TwoCol>
      </StudySection>

      <StudySection t={t} num="02b" label="Constraints">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { k: 'Hard', v: 'Sub-500ms command latency. No physical controls — all digital. Full audit trail for every intervention, filed within 200ms of action.' },
            { k: 'Soft', v: 'Operators handle 10-hour shifts. The interface cannot fatigue. Night-shift operators cannot rely on dark-mode-only tooling — ambient light varies.' },
            { k: 'Self-imposed', v: "No feature that requires taking eyes off the video feeds during an active case. No animation while an intervention is in progress." },
          ].map((c) => (
            <div key={c.k} style={{ paddingTop: 24, borderTop: `1px solid ${t.bluePale}33` }}>
              <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.accent, marginBottom: 16 }}>{c.k}</div>
              <p style={{ fontFamily: f.newsreader, fontSize: 19, lineHeight: 1.5, color: t.cream, fontWeight: 300, margin: 0 }}>{c.v}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection t={t} num="03" label="Process · exposures">
        <TwoCol t={t} headline="Six weeks on the floor." italic="Nine console rounds.">
          The team spent <span style={{ color: t.cream }}>six weeks inside the Las Vegas operations center</span> across three visits — sitting beside operators during live escalation windows and watching how attention shifted across the monitoring wall when multiple vehicles triggered simultaneously. We also rode in the vehicles themselves, building a picture of the gap between what the operator sees on camera and what the AV's sensors actually understand.
        </TwoCol>
        <div style={{ marginTop: 72 }}>
          <ProcessRow num="03.1" title="Operator ride-along"
            body="Spent 14 sessions in the back seat of AVs navigating the Strip during peak hours, then debriefed with operators on what we'd observed. The gap between the vehicle's lidar picture and the operator's camera view was immediately alarming — and the basis for nearly every design decision that followed."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>RIDE-ALONG · N=14</text>
                <rect x="10" y="24" width="180" height="76" fill={t.blueMid} opacity="0.12" stroke={t.bluePale} strokeWidth="0.5" />
                {[0,1,2,3,4].map((i) => (
                  <g key={i}>
                    <rect x="18" y={30 + i * 13} width={120 + i * 10} height="9" fill={t.bluePale} opacity={0.18 + i * 0.04} />
                    <circle cx={148 + i * 10} cy={34 + i * 13} r="4" fill={t.accent} opacity="0.8" />
                  </g>
                ))}
              </svg>
            } />
          <ProcessRow num="03.2" title="Escalation taxonomy"
            body="Catalogued 23 recurring escalation types from 90 days of incident logs. Mapped each to the operator's decision sequence and found 7 where the console required looking away from video feeds at the critical moment — a constraint that drove the layout redesign."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>TYPES · N=23</text>
                {['PEDESTRIAN', 'INTERSECTION', 'LANE BLOCK', 'SIGNAL', 'OTHER'].map((label, i) => (
                  <g key={i}>
                    <rect x="10" y={22 + i * 16} width={30 + i * 22} height="11" fill={t.accent} opacity={0.85 - i * 0.1} />
                    <text x={44 + i * 22} y={32 + i * 16} fontFamily="IBM Plex Mono, monospace" fontSize="5" fill={t.bluePale}>{label}</text>
                  </g>
                ))}
                <text x="10" y="106" fontFamily="IBM Plex Mono, monospace" fontSize="6" fill={t.accent}>7 REQUIRE EYES OFF VIDEO</text>
              </svg>
            } />
          <ProcessRow num="03.3" title="Console prototype"
            body="Built a full-resolution prototype running against a 6-camera replay harness. Tested with 9 operators across 4 rounds of escalation scenarios, each run on real incident recordings from the ops log. The camera layout moved three times before operators stopped reaching for the wrong feed."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>CONSOLE PROTOTYPE · v9</text>
                {[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]].map(([c, r], i) => (
                  <rect key={i} x={10 + c * 58} y={22 + r * 38} width="52" height="32" fill={t.blueMid} opacity="0.2" stroke={t.bluePale} strokeWidth="0.5" />
                ))}
                <rect x="68" y="60" width="52" height="32" fill={t.accent} opacity="0.3" stroke={t.accent} strokeWidth="0.8" />
                <text x="94" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="5" textAnchor="middle" fill={t.cream}>CMD PANEL</text>
              </svg>
            } />
          <ProcessRow num="03.4" title="Full-shift simulation"
            body="Ran two operators through simulated 10-hour shifts — 40 escalation events distributed across realistic lull periods. Measured error rate, intervention time, and self-reported fatigue at 2-hour intervals. The second hour was fine; the eighth was not."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>FATIGUE SCORE · 10HR</text>
                <polyline fill="none" stroke="#EF4444" strokeWidth="1.5"
                  points="10,90 30,88 50,87 70,86 90,88 110,84 130,79 150,72 170,62 190,50" />
                <polyline fill="none" stroke={t.accent} strokeWidth="1.5" strokeDasharray="3 2"
                  points="10,90 30,89 50,90 70,88 90,89 110,88 130,87 150,86 170,85 190,84" />
                <line x1="10" y1="100" x2="190" y2="100" stroke={t.bluePale} strokeWidth="0.5" opacity="0.5" />
                <text x="6" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="5" fill="#EF4444">LEGACY</text>
                <text x="6" y="56" fontFamily="IBM Plex Mono, monospace" fontSize="5" fill={t.accent}>NEW</text>
              </svg>
            } />
        </div>
      </StudySection>

      <StudySection t={t} num="04" label="The system">
        <TwoCol t={t} headline="See everything," italic="act on one thing.">
          The console was built around a single organizing principle: at any given moment, an operator should be able to identify their <span style={{ color: t.cream }}>highest-priority active vehicle</span> in under two seconds, and complete any intervention without ever leaving the primary panel. The fleet view and the escalation panel are not the same screen — but moving between them requires one key, not a click sequence.
        </TwoCol>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { label: 'Fleet view', range: 'All active vehicles', desc: 'Map and list of the full fleet. Escalation states surface automatically. Operator supervision ratio visible at a glance. Vehicles sorted by intervention urgency, not geography.', op: 0.55 },
            { label: 'Escalation panel', range: 'Active case', desc: 'Six-camera view, sensor overlay with highlighted anomaly, reason-code input. The only panel an operator needs during an active case. Nothing animates while it is open.', op: 0.8 },
            { label: 'Command log', range: 'Post-intervention', desc: 'Logged interventions with outcome codes and a free-text annotation field. Feeds the AI training pipeline. Operators flag edge cases for model review directly from the log.', op: 1 },
          ].map((s) => (
            <div key={s.label} style={{ border: `1px solid ${t.bluePale}33`, padding: 28, background: '#0B254520' }}>
              <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', color: t.accent, marginBottom: 14 }}>{s.range}</div>
              <h3 style={{ fontFamily: f.newsreader, fontSize: 28, color: t.cream, fontWeight: 400, margin: 0, opacity: s.op }}>{s.label}</h3>
              <p style={{ fontFamily: f.ibmPlexSans, fontSize: 14, lineHeight: 1.6, color: t.bluePale, marginTop: 16 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <PullQuote t={t} attribution="RVA operator, Las Vegas ops center, 18 months on the console">
          Before this, I felt like I was playing catch-up. Now I see the problem before the car does.
        </PullQuote>
      </StudySection>

      <StudySection t={t} num="05" label="Impact">
        <TwoCol t={t} headline="Measured across" italic="the commercial pilot.">
          Across <span style={{ color: t.cream }}>six months of commercial service</span> in Las Vegas. Numbers independently reviewed by Motional's safety board and a third-party human factors audit firm before internal publication.
        </TwoCol>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { n: '−44%', l: 'Median intervention time (22s → 12.3s)' },
            { n: '+31%', l: 'Operator-reported situational confidence at handoff' },
            { n: '1:12',  l: 'Operator-to-vehicle supervision ratio (was 1:6)' },
            { n: '0',    l: 'Class 1 incidents during 6-month commercial pilot' },
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
          <p style={{ marginTop: 0 }}>We almost shipped a heads-up-display metaphor borrowed from fighter-pilot interfaces. It looked authoritative. The operators told us it made them feel like they were flying the car — which was exactly wrong. The goal is to coach the vehicle through an edge case, not to take it over.</p>
          <p>The most important design move was removing the steering-wheel icon from the action panel entirely. The operator's job is to guide, not to drive. Every affordance in the interface should reinforce that distinction.</p>
          <p>The second thing: we should have started the full-shift fatigue simulation earlier. We found serious issues at hour eight that would have been visible at week six had we not waited for a "complete" prototype before running the long test.</p>
        </TwoCol>
      </StudySection>

      <StudyColophon t={t} code="MOT-007" plate="Plate 02" />
    </div>
  );
}
