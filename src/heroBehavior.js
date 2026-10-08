export function clamp01(value) {
  const number = Number.isFinite(value) ? value : 0;
  return Math.min(Math.max(number, 0), 1);
}

export function getHeroAssemblyProgress(progress) {
  return clamp01(progress);
}

export function getHeroCamera(progress) {
  const p = clamp01(progress);
  return {
    x: -5 * p,
    y: 3 * p,
    z: -10 * p,
  };
}

export function getHeroInteractionStrength(progress, interacting) {
  return interacting ? 1 : 0.55;
}

export function getHeroPointer(clientX, clientY, width, height) {
  const safeWidth = Math.max(Number(width) || 1, 1);
  const safeHeight = Math.max(Number(height) || 1, 1);
  return {
    x: clamp01((clientX / safeWidth) * 2 - 1),
    y: clamp01((clientY / safeHeight) * 2 - 1),
  };
}
