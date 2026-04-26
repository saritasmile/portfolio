export const tokens = {
  blueDeep:  '#3A5F86',
  blueMid:   '#5A7FA3',
  blueHi:    '#85A6C5',
  bluePale:  '#C9D9E6',
  cream:     '#F6EFD8',
  creamSoft: '#EDE2C2',
  creamDim:  '#B8A77A',
  ink:       '#2D4A6B',
  accent:    '#D4923A',
  err:       '#B63A2E',
} as const;

export type Tokens = typeof tokens;
