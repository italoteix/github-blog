const units = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
}

const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' })

export function getRelativeTime(d1: Date, d2 = new Date()) {
  const elapsed = d1.valueOf() - d2.valueOf()

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (const u in units) {
    if (Math.abs(elapsed) > units[u as keyof typeof units] || u === 'second')
      return rtf.format(
        Math.round(elapsed / units[u as keyof typeof units]),
        u as Intl.RelativeTimeFormatUnit,
      )
  }
}
