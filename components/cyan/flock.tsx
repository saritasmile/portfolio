// Pure-SVG bird flock — no hooks, deterministic layout.

const wings = [
  'M0 0 Q -6 -8 -14 -3 Q -8 -1 0 0 Q 8 -1 14 -3 Q 6 -8 0 0 Z',
  'M0 0 Q -7 -10 -16 -2 Q -9 -3 0 0 Q 9 -3 16 -2 Q 7 -10 0 0 Z',
  'M0 0 Q -5 -6 -12 -4 Q -7 0 0 0 Q 7 0 12 -4 Q 5 -6 0 0 Z',
];

function Bird({ x, y, scale = 1, rotate = 0, opacity = 1, ink = '#1B3A66' }: {
  x: number; y: number; scale?: number; rotate?: number; opacity?: number; ink?: string;
}) {
  const variant = Math.abs(Math.round((x * 13 + y * 7)) % 3);
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} opacity={opacity}>
      <path d={wings[variant]} fill={ink} />
    </g>
  );
}

type BirdData = { x: number; y: number; scale: number; rotate: number; opacity: number };

function generateBirds(width: number, height: number): BirdData[] {
  let s = 7;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const birds: BirdData[] = [];
  for (let i = 0; i < 90; i++) {
    rnd();
    birds.push({
      x: width * (0.45 + rnd() * 0.55),
      y: height * (rnd() * 0.6),
      scale: 0.5 + rnd() * 0.7,
      rotate: -25 + rnd() * 50,
      opacity: 0.55 + rnd() * 0.45,
    });
  }
  for (let i = 0; i < 22; i++) {
    birds.push({
      x: width * (0.05 + rnd() * 0.7),
      y: height * (0.55 + rnd() * 0.4),
      scale: 0.35 + rnd() * 0.4,
      rotate: -15 + rnd() * 30,
      opacity: 0.4 + rnd() * 0.4,
    });
  }
  for (let i = 0; i < 4; i++) {
    birds.push({
      x: width * (0.55 + rnd() * 0.35),
      y: height * (0.05 + rnd() * 0.3),
      scale: 1.0 + rnd() * 0.6,
      rotate: -30 + rnd() * 60,
      opacity: 0.85 + rnd() * 0.15,
    });
  }
  return birds;
}

export function Flock({ ink = '#1B3A66', width = 1600, height = 460 }: { ink?: string; width?: number; height?: number }) {
  const birds = generateBirds(width, height);
  return (
    <svg
      width="100%" height="100%"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      {birds.map((b, i) => <Bird key={i} ink={ink} {...b} />)}
    </svg>
  );
}
