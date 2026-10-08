export function getHeaderMode(scrollY) {
  if (scrollY <= 40) return "hero";
  if (scrollY <= 220) return "floating";
  return "compact";
}

export function getHeaderProgress(scrollY) {
  return Math.min(Math.max(scrollY / 220, 0), 1);
}
