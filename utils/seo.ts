export function normalizeDescription(text: string, min = 120, max = 250): string {
  if (!text) return ''
  let s = String(text).replace(/\s+/g, ' ').trim()

  // Clamp to max using sentence boundary; avoid ellipses and end cleanly
  if (s.length > max) {
    const slice = s.slice(0, max)
    const lastSentenceEnd = Math.max(slice.lastIndexOf('.'), Math.max(slice.lastIndexOf('!'), slice.lastIndexOf('?')))
    if (lastSentenceEnd >= min * 0.6) {
      s = slice.slice(0, lastSentenceEnd + 1).trim()
    } else {
      const lastSpace = slice.lastIndexOf(' ')
      const base = (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trimEnd()
      s = /[.!?]$/.test(base) ? base : (base.length < max ? base + '.' : base.slice(0, Math.max(0, base.length - 1)) + '.')
    }
  }

  // Ensure minimum length by appending a short generic extension
  if (s.length < min) {
    const tail = ' Learn more about our accounting, HR & payroll, company registration (S24, CIDG), and transport management services.'
    s = (s + tail).replace(/\s+/g, ' ').trim()
    if (s.length > max) {
      const slice = s.slice(0, max)
      const lastSentenceEnd = Math.max(slice.lastIndexOf('.'), Math.max(slice.lastIndexOf('!'), slice.lastIndexOf('?')))
      if (lastSentenceEnd >= min * 0.6) {
        s = slice.slice(0, lastSentenceEnd + 1).trim()
      } else {
        const lastSpace = slice.lastIndexOf(' ')
        const base = (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trimEnd()
        s = /[.!?]$/.test(base) ? base : (base.length < max ? base + '.' : base.slice(0, Math.max(0, base.length - 1)) + '.')
      }
    }
  }

  return s
}
