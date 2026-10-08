import test from "node:test";
import assert from "node:assert/strict";
import { CAMPERS, getCamperById, getFeaturedCampers, validateBooking } from "../src/lib/campers-data.js";

test("home page exposes three featured campers", () => {
  assert.equal(getFeaturedCampers(3).length, 3);
});

test("every camper has a unique id and detail lookup works", () => {
  const ids = CAMPERS.map((camper) => camper.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(getCamperById("andes"));
  assert.equal(getCamperById("missing"), undefined);
});

test("booking validation rejects incomplete requests", () => {
  assert.deepEqual(
    validateBooking({name:"",destination:"",people:0,startDate:"",endDate:"",message:""}),
    {valid:false,message:"نام، مقصد، تعداد نفرات و تاریخ شروع الزامی است."}
  );
});

test("booking validation accepts a complete request", () => {
  assert.deepEqual(
    validateBooking({name:"سارا",destination:"پاتاگونیا",people:4,startDate:"2026-10-30",endDate:"2026-12-01",message:""}),
    {valid:true,message:"درخواست آماده ثبت است."}
  );
});
