const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateProjectForm(values = {}) {
  const errors = {};
  const name = String(values.name ?? "").trim();
  const email = String(values.email ?? "").trim();
  const type = String(values.type ?? "").trim();
  const budget = String(values.budget ?? "").trim();
  const message = String(values.message ?? "").trim();

  if (!name) errors.name = "نام را وارد کنید.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "ایمیل معتبر وارد کنید.";
  if (!type) errors.type = "نوع پروژه را انتخاب کنید.";
  if (!budget) errors.budget = "بودجه تقریبی را انتخاب کنید.";
  if (message.length < 10) errors.message = "توضیح کوتاهی درباره پروژه بنویسید.";

  return errors;
}

export function getRevealThreshold(value) {
  const number = Number.isFinite(value) ? value : 0.1;
  return Math.min(Math.max(number, 0.1), 1);
}
