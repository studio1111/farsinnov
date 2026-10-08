import test from "node:test";
import assert from "node:assert/strict";
import {
  clamp01,
  getHeroCamera,
  getHeroAssemblyProgress,
  getHeroInteractionStrength,
  getHeroPointer,
} from "../src/heroBehavior.js";

test("hero assembly is clamped and reaches the formed state", () => {
  assert.equal(getHeroAssemblyProgress(-1), 0);
  assert.equal(getHeroAssemblyProgress(0.5), 0.5);
  assert.equal(getHeroAssemblyProgress(2), 1);
});

test("hero camera maps scroll to bounded cinematic movement", () => {
  assert.deepEqual(getHeroCamera(0), { x: 0, y: 0, z: 0 });
  const camera = getHeroCamera(0.5);
  assert.equal(camera.x, -2.5);
  assert.equal(camera.y, 1.5);
  assert.equal(camera.z, -5);
  assert.deepEqual(getHeroCamera(2), { x: -5, y: 3, z: -10 });
});

test("hero interaction is stronger only during direct interaction", () => {
  assert.equal(getHeroInteractionStrength(0, false), 0.55);
  assert.equal(getHeroInteractionStrength(0.5, false), 0.55);
  assert.equal(getHeroInteractionStrength(0.5, true), 1);
  assert.equal(getHeroInteractionStrength(2, true), 1);
});

test("hero pointer values are normalized and bounded", () => {
  assert.deepEqual(getHeroPointer(0, 0, 100, 100), { x: -1, y: -1 });
  assert.deepEqual(getHeroPointer(50, 50, 100, 100), { x: 0, y: 0 });
  assert.deepEqual(getHeroPointer(100, 100, 100, 100), { x: 1, y: 1 });
  assert.deepEqual(getHeroPointer(150, -50, 100, 100), { x: 1, y: -1 });
});

test("clamp01 handles invalid and finite values safely", () => {
  assert.equal(clamp01(-3), 0);
  assert.equal(clamp01(3), 1);
  assert.equal(clamp01(0.3), 0.3);
});
