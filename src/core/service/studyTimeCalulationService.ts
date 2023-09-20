
const addHours = (date: Date, hours: number): Date => {
  return new Date(date.getTime() + (hours * 60 * 60 * 1000));
}

export const LEVEL_DELAY_MAP: number[] = [
  1,
  22,
  2 * 24 - 2,
  4 * 24 - 2,
  8 * 24 - 2,
  16 * 24 - 2,
  32 * 24 - 2
]

export const getNextStudyDate = (level: number): Date => {
  const now: Date = new Date();
  return addHours(now, LEVEL_DELAY_MAP[level])
}

