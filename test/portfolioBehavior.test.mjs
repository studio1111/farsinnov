import test from "node:test";
import assert from "node:assert/strict";
import {
  getPortfolioProgress,
  getPortfolioProject,
  getPortfolioTransform,
} from "../src/portfolioBehavior.js";

test("portfolio progress clamps and selects a project deterministically", () => {
  assert.equal(getPortfolioProgress(-1), 0);
  assert.equal(getPortfolioProgress(0.5), 0.5);
  assert.equal(getPortfolioProgress(2), 1);
  assert.equal(getPortfolioProject(0).number, "01");
  assert.equal(getPortfolioProject(99).number, "03");
});

test("portfolio transform interpolates from gallery to cinematic focus", () => {
  assert.deepEqual(getPortfolioTransform(0), { scale: 0.94, y: 40, rotate: -1.5, opacity: 0.72 });
  assert.deepEqual(getPortfolioTransform(1), { scale: 1, y: 0, rotate: 0, opacity: 1 });
});
