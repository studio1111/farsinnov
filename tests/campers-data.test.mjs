import test from "node:test";
import assert from "node:assert/strict";
import { CAMPERS, getFeaturedCampers, validateBooking } from "../src/lib/campers-data.js";

test("home page exposes exactly three featured campers", () => {
  assert.equal(getFeaturedCampers(3).length, 3);
});

test("all campers page exposes every camper without duplicates", () => {
  const ids = CAMPERS.map((camper) => camper.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(getFeaturedCampers(3).length < CAMPERS.length, true);
});

test("booking validation requires a name, destination, date and people count", () => {
  assert.deepEqual(
    validateBooking({
      name: "",
      destination: "",
      people: 0,
      startDate: "",
      endDate: "",
      message: "",
    }),
    {
      valid: false,
      message: "نام، مقصد، تعداد نفرات و تاریخ شروع الزامی است.",
    },
  );
});

test("booking validation accepts a complete request", () => {
  assert.deepEqual(
    validateBooking({
      name: "سارا",
      destination: "پاتاگونیا",
      people: 4,
      startDate: "2026-10-30",
      endDate: "2026-12-01",
      message: "تور طبیعت‌گردی",
    }),
    { valid: true, message: "درخواست آماده ثبت است." },
  );
});
