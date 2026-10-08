import test from "node:test";
import assert from "node:assert/strict";
import { getHeaderMode, getHeaderProgress } from "../src/headerBehavior.js";

test("header stays in hero mode near the top", () => {
  assert.equal(getHeaderMode(0), "hero");
  assert.equal(getHeaderMode(40), "hero");
});

test("header transitions through floating mode", () => {
  assert.equal(getHeaderMode(41), "floating");
  assert.equal(getHeaderMode(220), "floating");
});

test("header becomes compact after the cinematic transition", () => {
  assert.equal(getHeaderMode(221), "compact");
});

test("header progress is clamped between zero and one", () => {
  assert.equal(getHeaderProgress(-20), 0);
  assert.equal(getHeaderProgress(110), 0.5);
  assert.equal(getHeaderProgress(999), 1);
});
