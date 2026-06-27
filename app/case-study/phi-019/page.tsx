import { tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { StudyHeader, StudySection, TwoCol, PullQuote } from '@/components/study/cover';
import { StudyColophon } from '@/components/study/body';

const t = tokens;

export const metadata = {
  title: 'PHI-019 — Remote Radiology Command Center',
  description: 'Case study: Remote reading command center. Philips Radiology, 2022.',
};

function CoverPlate() {
  return (
    <svg viewBox="0 0 420 320" width="100%" style={{ display: 'block' }} aria-hidden="true">
      <text x="20" y="20" fontFamily="IBM Plex Mono, monospace" fontSize="8" letterSpacing="2" fill={t.accent}>PHI-019 · REMOTE READ</text>
      {/* CT scan rings (left) */}
      {[110, 80, 55, 34, 18, 7].map((r, i) => (
        <circle key={i} cx="155" cy="175" r={r}
          fill="none" stroke={t.cream} strokeWidth={i === 0 ? 1 : 0.6}
          opacity={0.15 + i * 0.12} />
      ))}
      {/* Anomaly highlight */}
      <circle cx="170" cy="150" r="14" fill="none" stroke={t.accent} strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
      <text x="186" y="145" fontFamily="IBM Plex Mono, monospace" fontSize="6" fill={t.accent}>ROI</text>
      {/* Reading crosshair */}
      <line x1="148" y1="168" x2="162" y2="168" stroke={t.accent} strokeWidth="0.8" opacity="0.9" />
      <line x1="155" y1="161" x2="155" y2="175" stroke={t.accent} strokeWidth="0.8" opacity="0.9" />
      {/* Scan metadata */}
      <text x="20" y="290" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill={t.bluePale}>CT CHEST · 2.0mm · LUNG W/L</text>
      <text x="20" y="304" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill={t.bluePale} opacity="0.6">STAT · DR CHEN · 08:14</text>
      {/* Worklist (right) */}
      <text x="270" y="50" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="1.5" fill={t.bluePale}>WORKLIST</text>
      {[
        { label: 'CT CHEST STAT', tag: 'DR CHEN', accent: true },
        { label: 'MR BRAIN', tag: 'DR OKAFOR', accent: false },
        { label: 'XR CHEST', tag: 'DR PATEL', accent: false },
        { label: 'CT ABD/PELVIS', tag: 'DR REYES', accent: false },
        { label: 'MR SPINE', tag: 'DR CHEN', accent: false },
        { label: 'CT HEAD', tag: 'DR OKAFOR', accent: false },
      ].map((item, i) => (
        <g key={i}>
          <rect x="270" y={62 + i * 38} width="132" height="30"
            fill={item.accent ? t.accent : t.blueMid}
            opacity={item.accent ? 0.25 : 0.12}
            stroke={item.accent ? t.accent : t.bluePale}
            strokeWidth="0.6" strokeOpacity="0.5" />
          <text x="280" y={80 + i * 38} fontFamily="IBM Plex Mono, monospace" fontSize="7"
            fill={item.accent ? t.cream : t.bluePale}>{item.label}</text>
          <text x="280" y={89 + i * 38} fontFamily="IBM Plex Mono, monospace" fontSize="5.5"
            fill={item.accent ? t.accent : t.bluePale} opacity="0.7">{item.tag}</text>
        </g>
      ))}
      {/* Divider */}
      <line x1="252" y1="40" x2="252" y2="310" stroke={t.bluePale} strokeWidth="0.5" opacity="0.3" />
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

export default function CaseStudyPHI019() {
  return (
    <div style={{ minHeight: '100vh', background: t.blueDeep, color: t.cream, position: 'relative' }}>
      <StudyHeader t={t} code="PHI-019" domain="Healthcare" year="2022" />

      <section style={{ padding: '40px 56px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: f.ibmPlexMono, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: t.accent, marginBottom: 28 }}>
              Plate 03 · Case study
            </div>
            <h1 style={{ fontFamily: f.newsreader, fontSize: 'clamp(48px, 6.4vw, 96px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: t.cream, fontWeight: 300, margin: 0 }}>
              Reading the image<br />
              <em style={{ fontFamily: f.instrumentSerif, color: t.accent, fontWeight: 400 }}>from anywhere.</em>
            </h1>
            <p style={{ fontFamily: f.ibmPlexSans, fontSize: 19, lineHeight: 1.6, color: t.bluePale, marginTop: 36, maxWidth: 640 }}>
              A unified remote reading command center for Philips Radiology — collapsing the worklist, diagnostic viewer, and reporting workflow into a single surface a radiologist can use from any room. Built across 4 hospitals and 3 weeks of contextual inquiry, then taken through 510(k) clearance.
            </p>
          </div>
          <div style={{ position: 'relative', minHeight: 280 }}>
            <CoverPlate />
          </div>
        </div>

        <dl style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, paddingTop: 28, borderTop: `1px solid ${t.bluePale}33` }}>
          {[
            ['Role',     'Lead researcher · service design lead'],
            ['Team',     '3 researchers · 2 designers · 4 engineers · regulatory'],
            ['Duration', '18 months (Jan 2021 → Jun 2022)'],
            ['Status',   '510(k) cleared · 62-radiologist pilot'],
          ].map(([k, v]) => (
            <div key={k}>
              <dt style={{ fontFamily: f.ibmPlexMono, fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.bluePale, marginBottom: 10 }}>{k}</dt>
              <dd style={{ fontFamily: f.newsreader, fontSize: 17, lineHeight: 1.45, color: t.cream, margin: 0 }}>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <StudySection t={t} num="02" label="Context">
        <TwoCol t={t} headline="Eleven switches." italic="Four hours.">
          Radiologists reading from remote locations face a workflow that was never designed for them. Studies arrive from disparate hospital systems, the worklist lives in one application, the diagnostic viewer in another, and reporting in a third. We observed a standard 4-hour reading session and counted <span style={{ color: t.cream }}>11 context switches</span> between applications — each one an opportunity for a missed handoff or a wrong-patient error. Philips' brief was to build a unified remote reading command center that could carry a full session without a radiologist ever switching windows.
          <br /><br />
          We found that the fragmentation wasn't only a UI problem. It was a workflow problem that the UI had made invisible.
        </TwoCol>
      </StudySection>

      <StudySection t={t} num="02b" label="Constraints">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { k: 'Hard', v: 'FDA-regulated device, 510(k) pathway. No diagnostic workflow changes that require new radiologist training certifications. HIPAA-compliant data handling throughout.' },
            { k: 'Soft', v: 'Integrates with six different PACS systems. Runs on commodity hardware — no dedicated diagnostic workstation assumptions. Works on consumer-grade monitors.' },
            { k: 'Self-imposed', v: 'Every UI decision must be defensible under radiologist testimony in a regulatory review. No feature that prioritizes speed over diagnostic integrity.' },
          ].map((c) => (
            <div key={c.k} style={{ paddingTop: 24, borderTop: `1px solid ${t.bluePale}33` }}>
              <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.accent, marginBottom: 16 }}>{c.k}</div>
              <p style={{ fontFamily: f.newsreader, fontSize: 19, lineHeight: 1.5, color: t.cream, fontWeight: 300, margin: 0 }}>{c.v}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection t={t} num="03" label="Process · exposures">
        <TwoCol t={t} headline="Four hospitals." italic="Eleven context switches.">
          The research team spent <span style={{ color: t.cream }}>three weeks in reading rooms</span> across four hospital systems — sitting with radiologists as they worked, mapping every tool transition in a standard session. The number we kept coming back to was 11. Eleven context switches in four hours. Each one a seam where things could fall through.
        </TwoCol>
        <div style={{ marginTop: 72 }}>
          <ProcessRow num="03.1" title="Contextual inquiry"
            body="Embedded with 14 radiologists across 4 hospitals over 3 weeks. Observed in-room and remote reading sessions side by side. Filmed the tool transitions, not the images — the diagnostic content was incidental. The workflow was the subject."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>FIELD SITES · N=4</text>
                {['MASS GENERAL', 'BRIGHAM', 'YALE-NH', 'JEFFERSON'].map((label, i) => (
                  <g key={i}>
                    <rect x="10" y={22 + i * 20} width={50 + i * 14} height="14" fill={t.bluePale} opacity="0.15" stroke={t.bluePale} strokeWidth="0.5" />
                    <text x="16" y={33 + i * 20} fontFamily="IBM Plex Mono, monospace" fontSize="5.5" fill={t.bluePale}>{label}</text>
                    <text x={66 + i * 14} y={33 + i * 20} fontFamily="IBM Plex Mono, monospace" fontSize="5.5" fill={t.accent}>{3 - i + 2} RADIOLOGISTS</text>
                  </g>
                ))}
              </svg>
            } />
          <ProcessRow num="03.2" title="Journey mapping"
            body="Documented all 11 context switches in a standard 4-hour session, classifying each by cause: missing data, tool gap, or workflow habit. Seven were tool gaps. Four were workflow habits the tool was reinforcing. We rewrote the brief halfway through this phase."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>CONTEXT SWITCHES · N=11</text>
                <polyline fill="none" stroke={t.accent} strokeWidth="1.5"
                  points="10,90 30,70 50,80 70,50 90,65 110,40 130,55 150,30 170,45 190,25" />
                {[10,30,50,70,90,110,130,150,170,190].map((x, i) => (
                  <circle key={i} cx={x} cy={[90,70,80,50,65,40,55,30,45,25][i]} r="3"
                    fill={[3,5,7].includes(i) ? t.accent : t.cream} opacity="0.9" />
                ))}
                <line x1="10" y1="100" x2="190" y2="100" stroke={t.bluePale} strokeWidth="0.5" opacity="0.4" />
              </svg>
            } />
          <ProcessRow num="03.3" title="Expert advisory board"
            body="Ran weekly sessions with a 6-radiologist advisory board throughout prototype development. Each session: show what we built, hear what's wrong, identify what would disqualify it clinically. This board became de facto the product specification."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>ADVISORY BOARD · WK 1–18</text>
                {Array.from({ length: 18 }).map((_, i) => (
                  <rect key={i} x={10 + i * 10} y={i % 3 === 0 ? 40 : i % 3 === 1 ? 55 : 70}
                    width="7" height={i % 3 === 0 ? 50 : i % 3 === 1 ? 35 : 20}
                    fill={i % 3 === 0 ? t.accent : t.bluePale} opacity={0.7 - i * 0.015} />
                ))}
                <line x1="10" y1="95" x2="190" y2="95" stroke={t.bluePale} strokeWidth="0.5" opacity="0.4" />
              </svg>
            } />
          <ProcessRow num="03.4" title="Regulatory mapping"
            body="Worked alongside Philips' regulatory team to classify every UI component by risk level under FDA 21 CFR Part 11. This was not a checkbox exercise — it changed the design. Three features were descoped because the risk classification made the test burden untenable within the program timeline."
            plate={
              <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                <text x="6" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="7" letterSpacing="2" fill={t.bluePale}>RISK CLASSIFICATION</text>
                {[
                  { label: 'CLASS I (LOW)', count: 24, color: t.accent },
                  { label: 'CLASS II (MOD)', count: 11, color: t.bluePale },
                  { label: 'CLASS III (HIGH)', count: 3, color: '#B63A2E' },
                ].map((row, i) => (
                  <g key={i}>
                    <text x="10" y={35 + i * 24} fontFamily="IBM Plex Mono, monospace" fontSize="6" fill={row.color}>{row.label}</text>
                    <rect x="10" y={40 + i * 24} width={row.count * 3} height="10" fill={row.color} opacity="0.7" />
                    <text x={14 + row.count * 3} y={50 + i * 24} fontFamily="IBM Plex Mono, monospace" fontSize="6" fill={row.color}>{row.count}</text>
                  </g>
                ))}
              </svg>
            } />
        </div>
      </StudySection>

      <StudySection t={t} num="04" label="The system">
        <TwoCol t={t} headline="One surface," italic="from anywhere.">
          The command center collapsed the 11-switch workflow into a single persistent session. The worklist, viewer, and reporting panel share the same window — each accessible without leaving the others. A <span style={{ color: t.cream }}>study triage layer</span> surfaces the highest-urgency items automatically, sorted by SLA, modality, and referring physician priority, so radiologists don't start a session by building their own queue.
        </TwoCol>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { label: 'Triage worklist', range: 'Session start', desc: 'Persistent sidebar with studies sorted by urgency, SLA, and modality. STAT studies rise automatically. Unread prior studies surface alongside the active study.', op: 0.55 },
            { label: 'Diagnostic viewer', range: 'Active read', desc: 'Full-screen viewer with embedded measurement tools and annotation layer. No context switch to a second application. Prior studies open in a pinned split-pane.', op: 0.8 },
            { label: 'Reporting panel', range: 'Dictation & sign-off', desc: 'Voice-to-text reporting with structured template suggestions. Critical findings flag automatically and route to the referring team before the report signs.', op: 1 },
          ].map((s) => (
            <div key={s.label} style={{ border: `1px solid ${t.bluePale}33`, padding: 28, background: '#0B254520' }}>
              <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.22em', color: t.accent, marginBottom: 14 }}>{s.range}</div>
              <h3 style={{ fontFamily: f.newsreader, fontSize: 28, color: t.cream, fontWeight: 400, margin: 0, opacity: s.op }}>{s.label}</h3>
              <p style={{ fontFamily: f.ibmPlexSans, fontSize: 14, lineHeight: 1.6, color: t.bluePale, marginTop: 16 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <PullQuote t={t} attribution="Radiologist, 14-year reader, 90-day pilot participant">
          I didn't realize how much of my session was spent managing the tools instead of reading the images.
        </PullQuote>
      </StudySection>

      <StudySection t={t} num="05" label="Impact">
        <TwoCol t={t} headline="Measured in the" italic="90-day pilot.">
          Across <span style={{ color: t.cream }}>62 radiologists</span> at three health systems, over 90 days. All metrics independently audited against the prior workflow before the program office accepted them. 510(k) cleared 3 months ahead of schedule.
        </TwoCol>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { n: '−52%', l: 'Average context switches per 4-hour reading session' },
            { n: '−18%', l: 'Time-to-first-read on STAT studies' },
            { n: '4.8',  l: 'Radiologist satisfaction score out of 5 (N=62)' },
            { n: '11mo', l: '510(k) clearance — 3 months ahead of program schedule' },
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
          <p style={{ marginTop: 0 }}>We underestimated how different it is to read in a quiet home office versus a hospital reading room. Our early prototypes were tuned for the room — high-contrast, sound alerts, large interaction targets. Radiologists reading at home wanted quieter alerts, smaller UI density, and better keyboard ergonomics.</p>
          <p>We shipped a "context mode" toggle four months in that should have been a first-class design decision from week one. The research was there — we just hadn't weighted the remote-reader data heavily enough when writing the initial specification.</p>
          <p>The regulatory mapping process was the most valuable thing we did and the last thing we scheduled. We treated it as a compliance step. It should have been a design step from the beginning.</p>
        </TwoCol>
      </StudySection>

      <StudyColophon t={t} code="PHI-019" plate="Plate 03" />
    </div>
  );
}
