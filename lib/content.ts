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
  headlineLine1: 'Fifteen years',
  headlineLine2: 'laid in the sun',
  headlineLine3: 'until the ',
  accentWord:  'shape',
  headlineLine4: 'came clear.',
  subhead:     'A principal applied researcher working at the join of aviation, healthcare, and cybersecurity — taking the unexposed problem, holding it to light, and waiting for the image to develop.',
  ctaLabel:    '◌ View the catalogue',
  masthead:    'Sara Bielagus · Exposed VI · MMXXVI',
  portraitCaption: {
    line1: 'Subject · self',
    line2: 'exposed 14 min · spring tide',
  },
  nav: [
    { label: 'About',       href: '#about' },
    { label: 'Catalogue',   href: '#work' },
    { label: 'Field notes', href: '#timeline' },
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
      body:  'Each zero-to-one is a contact print. The first exposure is muddy — too long here, too short there. Each test print costs less than the last. I plan the test prints, not the finished image.',
    },
    {
      title: 'Domains exposed',
      body:  'Flight decks and ATC tools. Remote-vehicle assistance. Radiology command centers. Patient navigation. Human–AI teaming for Kessel Run and DARPA. Oral-health AI portfolios.',
    },
    {
      title: 'What I bring',
      body:  'Human factors. Mixed-method research. Service design across long, knotted journeys. A bias toward prototypes that survive first contact with reality.',
    },
    {
      title: 'Off the bench',
      body:  'A small darkroom of cyanotype trials. A shelf of restored consoles — a Famicom with fresh caps, a IIgs that boots cleanly, a Saturn waiting on a battery.',
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
    detail:  'Aviation, Cybersecurity, Analytics · Protovibing CoP Lead',
    outcome: "Running a prototyping community of practice across mission areas; pulling fast proofs for sponsors who can't afford a bad image.",
  },
  {
    years:   '2023 — 2024',
    state:   'Print VI',
    company: 'Motional',
    role:    'Principal Product Researcher',
    detail:  'Remote Vehicle Assistance & Fleet Management',
    outcome: 'Shaped the operator-facing product for remote AV assistance from the first driven mile through public-road deployment.',
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
  { code: 'MOT-007', client: 'Motional',            title: 'Remote vehicle assistance operator suite',              tag: '2024', domain: 'Autonomy',   sil: 'rope' },
  { code: 'PHI-019', client: 'Philips Radiology',   title: 'Remote reading command center',                        tag: '2022', domain: 'Healthcare', sil: 'scallop' },
  { code: 'DRP-004', client: 'Draper · Kessel Run', title: 'Human-AI teaming for air mobility planning',           tag: '2018', domain: 'Defense',    sil: 'eelgrass' },
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
