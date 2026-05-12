/** Maps schema.org day abbreviations to short labels for display. */
export const dayLabel: Record<string, string> = {
  Mo: 'Mon',
  Tu: 'Tue',
  We: 'Wed',
  Th: 'Thu',
  Fr: 'Fri',
  Sa: 'Sat',
  Su: 'Sun'
};

export function formatDays(days: readonly string[]): string {
  if (days.length === 1) return dayLabel[days[0]] ?? days[0];
  return `${dayLabel[days[0]] ?? days[0]} to ${dayLabel[days[days.length - 1]] ?? days[days.length - 1]}`;
}

export function formatTime(t: string): string {
  const [h, m] = t.split(':').map((x) => parseInt(x, 10));
  const suffix = h >= 12 ? 'pm' : 'am';
  const h12 = h % 12 || 12;
  return m === 0 ? `${h12}${suffix}` : `${h12}:${String(m).padStart(2, '0')}${suffix}`;
}
