// All editable content — swap placeholders for real info before shipping.

export const personal = {
  name:        'Sara Bielagus',
  location:    'Boston · remote-friendly',
  coordinates: 'Lat 42.36° N · Lon 71.06° W',
  studio:      'Applied Research & Design',
  email:       'sara.bielagus@gmail.com',
  linkedin:    'https://www.linkedin.com/in/sarabielagus/',
  year:        'MMXXVI',
};

export const hero = {
  eyebrow:     'Applied Research & Strategic Design',
  headlineLine1: 'I expose',
  headlineLine2: 'what the problem',
  headlineLine3: '',
  accentWord:  'actually',
  headlineLine4: 'is, then bring the answer into the light.',
  subhead:     'A principal-level researcher working across product, design, and strategy — fifteen years at the join of aviation, healthcare, and cybersecurity, turning high-stakes ambiguity into decisions teams can act on, from the engineering floor to the VP suite.',
  ctaLabel:    '◌ View the catalogue',
  masthead:    'Sara Bielagus · Cyanotype Inspired · MMXXVI',
  portraitCaption: {
    line1: 'Subject · self',
    line2: 'exposed 14 min · spring tide',
  },
  nav: [
    { label: 'Projects',    href: '#work' },
    { label: 'Timeline',    href: '#timeline' },
    { label: 'My Approach', href: '#about' },
    { label: 'Contact',     href: '#contact' },
  ],
};

export const about = {
  pullQuote:    'I help teams take a concept from ',
  accentWord:   'unexposed',
  pullQuoteRest:' to a working, defensible launch — in domains where being wrong is expensive.',
  blocks: [
    {
      title: 'Method',
      body:  'I work in fast, cheap iterations. The first pass is rough on purpose; each one after costs less and gets sharper. I plan the test prints, not the finished image — so the team learns what\'s true before it commits real money.',
    },
    {
      title: 'Domains exposed',
      body:  'Remote support, dashboarding, and decision-making for command centers. Remote-vehicle assistance. Radiology command centers. Patient navigation. Human–AI teaming for Kessel Run and DARPA. Oral-health AI portfolios.',
    },
    {
      title: 'What I bring',
      body:  'Product, design, and research in one seat. Mixed-method work kept fast and applied — translated for the engineers, PMs, and VPs who have to act on it. A bias toward prototypes that survive first contact with reality.',
    },
    {
      title: 'Off the bench',
      body:  'Outside work: a small darkroom of cyanotype experiments, and a shelf of restored handheld consoles — Game Boys, Game Boy Colors, PS Vitas, and PSPs. Swapping faceplates, custom firmware, games, backgrounds, and themes, and reviving the most broken of the bunch.',
    },
  ],
};

export type TimelineEntry = {
  years:   string;
  state:   string;
  company: string;
  role:    string;
  detail:  string;
  outcome: string;
};

export const timeline: TimelineEntry[] = [
  {
    years:   '2025 — Present',
    state:   'Latest exposure',
    company: 'MITRE',
    role:    'Lead Human Factors Engineer',
    detail:  'Large-scale transportation platforms · whole-system HSI · AI adoption measurement',
    outcome: "I lead human-systems work on a ground-up transportation platform — designing for a whole building of people in different jobs, and the scenarios, language, and iconography it takes to make it work together. I arrived part-time and grew the footprint to a full role, now building toward a team. When HSI drove the cybersecurity effort, we set the scale and scope of the first prototype and kept it at the PMO's level. Alongside it: AI-adoption measurement, prototyping-tool evaluation, and quick-turn work on public-facing aviation safety (ASIAS).",
  },
  {
    years:   '2023 — 2024',
    state:   'Print VI',
    company: 'Motional',
    role:    'Principal Product Researcher',
    detail:  'Remote vehicle assistance · fleet management · rider-experience measurement',
    outcome: 'I shaped the operator-facing product for remote AV assistance — turning a finnicky vector-drawing interface into point-and-click pathing, and readying the simulator for real use. My biggest bet was unassigned: with a rider-rated Uber partnership coming, I flagged we measured the car and computer but not the rider\'s experience — a gap that could sink launch. I built the measurement from scratch, scrappy at first (Forms, Slack, notes), then Qualtrics against drivelogs — 54 rider logs tied to car-and-computer behavior, engineering scoping a permanent, streamed version.',
  },
  {
    years:   '2020 — 2023',
    state:   'Print V',
    company: 'Philips',
    role:    'Lead Product Researcher & Service Designer',
    detail:  'Remote Radiology Command Center · Ventures · Digital & AI for Oral Health',
    outcome: 'Stood up a 0→1 radiology command center and an AI portfolio for oral health, working across three business units.',
  },
  {
    years:   '2019 — 2020',
    state:   'Print IV',
    company: 'Medumo (acquired by Philips)',
    role:    'UX Lead',
    detail:  'Content and Design for Patient Navigation Platform',
    outcome: "Led the product's design through acquisition; navigated more than a million patients through pre-procedure journeys.",
  },
  {
    years:   '2016 — 2018',
    state:   'Print III',
    company: 'Charles Stark Draper Laboratory',
    role:    'HCI Researcher & Designer',
    detail:  'Kessel Run · DARPA · IR&D · Collaborative AI & Human Cooperation',
    outcome: 'Designed human-AI teaming tooling for DoD programs; early exposures of what later became a ten-year thread.',
  },
];

export type SilKind = 'curl' | 'rope' | 'scallop' | 'sandpiper' | 'eelgrass';

export type Work = {
  code:   string;
  client: string;
  title:  string;
  tag:    string;
  domain: string;
  sil:    SilKind;
  href?:  string;
};

export const works: Work[] = [
  { code: 'MTR-012', client: 'MITRE · FAA',        title: 'Arrival-sequencing console for high-density airspace', tag: '2025', domain: 'Aviation',   sil: 'curl',     href: '/case-study/mtr-012' },
  { code: 'MOT-007', client: 'Motional',            title: 'Remote vehicle assistance operator suite',              tag: '2024', domain: 'Autonomy',   sil: 'rope',     href: '/case-study/mot-007' },
  { code: 'PHI-019', client: 'Philips Radiology',   title: 'Remote reading command center',                        tag: '2022', domain: 'Healthcare', sil: 'scallop',  href: '/case-study/phi-019' },
  { code: 'DRP-004', client: 'Draper · Kessel Run', title: 'Human-AI teaming for air mobility planning',           tag: '2018', domain: 'Defense',    sil: 'eelgrass', href: '/case-study/drp-004' },
];

export const PASSPHRASE = 'eelgrass';

export type KonamiConsole = {
  name:  string;
  latin: string;
  year:  string;
  note:  string;
};

export const konamiConsoles: KonamiConsole[] = [
  { name: 'FAMICOM AV',   latin: 'Nintendinus japonicus',  year: '1983', note: 'Recapped main board. Fresh 72-pin connector. Plays Mother cleanly.' },
  { name: 'APPLE IIgs',   latin: 'Pomum cyaneum',          year: '1986', note: 'New ROM 03 battery. Boots GS/OS without complaint.' },
  { name: 'SEGA SATURN',  latin: 'Saturnis sega',          year: '1994', note: 'Pseudo-battery mod. Fan quieted. Bomberman runs.' },
  { name: 'DREAMCAST',    latin: 'Somnium iactus',         year: '1998', note: 'GDEMU installed. PSU recapped. 50/60 Hz switch.' },
  { name: 'GAME BOY DMG', latin: 'Puer ludens dot-matrix', year: '1989', note: 'IPS panel. Bivert. New buttons. Pink shell.' },
  { name: 'PC-8801 mkII', latin: 'Fundus computorum NEC',  year: '1983', note: 'Two drives working. Reads its own diskettes now.' },
];
