import { tokens } from '@/lib/tokens';
import { f } from '@/lib/fonts';
import { StudyHeader, StudyCover, StudySection, TwoCol } from '@/components/study/cover';
import { Process, TheSystem, Impact, Reflection, StudyColophon } from '@/components/study/body';
import { SlidesSection } from '@/components/study/slides';

const t = tokens;

export const metadata = {
  title: 'MTR-012 — Arrival-Sequencing Console',
  description: 'Case study: Arrival-sequencing console for high-density airspace. MITRE · FAA, 2025.',
};

export default function CaseStudyMTR012() {
  return (
    <div style={{ minHeight: '100vh', background: t.blueDeep, color: t.cream, position: 'relative' }}>
      <StudyHeader t={t} />
      <StudyCover  t={t} />

      <StudySection t={t} num="02" label="Context">
        <TwoCol t={t} headline="Twelve airports," italic="one tempo.">
          The New York TRACON (N90) hands off to LaGuardia, Kennedy, Newark, Teterboro, and eight smaller fields. On a busy weekday they sequence <span style={{ color: t.cream }}>~5,200 arrivals</span> through five sectors of overlapping airspace. The legacy console grew up around printed strips and a 4:3 radar display; the working surface had not changed since 1998.
          <br /><br />
          The FAA's brief asked for "a modern arrival manager." We rewrote the brief by the end of the second week.
        </TwoCol>
      </StudySection>

      <StudySection t={t} num="02b" label="Constraints">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { k: 'Hard', v: 'Air-traffic-grade reliability. No new training certifications. Backwards-compatible with paper strips for one full season.' },
            { k: 'Soft', v: 'Specialists must own the rollout. The console should feel like an upgrade to a familiar instrument, not a replacement.' },
            { k: 'Self-imposed', v: "No metric we couldn't hear in a specialist's words. No screen a 26-year veteran would call clever." },
          ].map((c) => (
            <div key={c.k} style={{ paddingTop: 24, borderTop: `1px solid ${t.bluePale}33` }}>
              <div style={{ fontFamily: f.ibmPlexMono, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: t.accent, marginBottom: 16 }}>{c.k}</div>
              <p style={{ fontFamily: f.newsreader, fontSize: 19, lineHeight: 1.5, color: t.cream, fontWeight: 300, margin: 0 }}>{c.v}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <Process     t={t} />
      <TheSystem   t={t} />
      <SlidesSection t={t} />
      <Impact      t={t} />
      <Reflection  t={t} />
      <StudyColophon t={t} />
    </div>
  );
}
