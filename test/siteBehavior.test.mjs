import test from "node:test";
import assert from "node:assert/strict";
import { validateProjectForm, getRevealThreshold } from "../src/siteBehavior.js";

test("project form validation returns no errors for a complete request", () => {
  assert.deepEqual(validateProjectForm({
    name: "سارا",
    email: "sara@example.com",
    type: "وب‌سایت",
    budget: "پروژه متوسط",
    message: "یک وب‌سایت معرفی محصول می‌خواهم."
  }), {});
});

test("project form validation rejects missing required fields", () => {
  const errors = validateProjectForm({ name: "", email: "bad", type: "", budget: "", message: "" });
  assert.equal(errors.name, "نام را وارد کنید.");
  assert.equal(errors.email, "ایمیل معتبر وارد کنید.");
  assert.equal(errors.type, "نوع پروژه را انتخاب کنید.");
  assert.equal(errors.budget, "بودجه تقریبی را انتخاب کنید.");
  assert.equal(errors.message, "توضیح کوتاهی درباره پروژه بنویسید.");
});

test("reveal threshold stays within a safe observer range", () => {
  assert.equal(getRevealThreshold(-1), 0.1);
  assert.equal(getRevealThreshold(0.25), 0.25);
  assert.equal(getRevealThreshold(2), 1);
});
