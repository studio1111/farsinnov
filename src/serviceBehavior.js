const SERVICE_STORY = [
  { key: "discover", title: "ایده", phase: "01" },
  { key: "design", title: "طراحی", phase: "02" },
  { key: "experience", title: "تجربه", phase: "03" },
  { key: "build", title: "ساخت", phase: "04" },
  { key: "launch", title: "انتشار", phase: "05" },
  { key: "grow", title: "رشد", phase: "06" },
];

export function getServiceStory(index) {
  const safeIndex = Math.min(Math.max(Number.isFinite(index) ? Math.trunc(index) : 0, 0), SERVICE_STORY.length - 1);
  return SERVICE_STORY[safeIndex];
}

export function getServiceDepth(value) {
  const number = Number.isFinite(value) ? value : 0;
  return Math.min(Math.max(number, 0), 1);
}
