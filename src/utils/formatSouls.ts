export function formatSouls(value: number) {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M souls`
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K souls`
  }
  return `${value} souls`
}
