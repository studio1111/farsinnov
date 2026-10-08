const PORTFOLIO_PROJECTS = [
  { number: "01", title: "فروشگاه نسل جدید" },
  { number: "02", title: "پلتفرم خدمات دیجیتال" },
  { number: "03", title: "برند سینمایی" },
];

export function getPortfolioProgress(value) {
  const number = Number.isFinite(value) ? value : 0;
  return Math.min(Math.max(number, 0), 1);
}

export function getPortfolioProject(index) {
  const safeIndex = Math.min(
    Math.max(Number.isFinite(index) ? Math.trunc(index) : 0, 0),
    PORTFOLIO_PROJECTS.length - 1
  );
  return PORTFOLIO_PROJECTS[safeIndex];
}

export function getPortfolioTransform(progress) {
  const p = getPortfolioProgress(progress);
  return {
    scale: 0.94 + (0.06 * p),
    y: 40 - (40 * p),
    rotate: -1.5 + (1.5 * p),
    opacity: 0.72 + (0.28 * p),
  };
}
