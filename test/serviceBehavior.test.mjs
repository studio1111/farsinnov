import test from "node:test";
import assert from "node:assert/strict";
import { getServiceStory, getServiceDepth } from "../src/serviceBehavior.js";

test("service story follows the idea-to-growth journey", () => {
  assert.deepEqual(
    getServiceStory(0),
    { key: "discover", title: "ایده", phase: "01" }
  );
  assert.deepEqual(
    getServiceStory(3),
    { key: "build", title: "ساخت", phase: "04" }
  );
  assert.deepEqual(
    getServiceStory(5),
    { key: "grow", title: "رشد", phase: "06" }
  );
});

test("service story index is clamped safely", () => {
  assert.equal(getServiceStory(-2).key, "discover");
  assert.equal(getServiceStory(99).key, "grow");
});

test("service depth responds to hover intensity without exceeding bounds", () => {
  assert.equal(getServiceDepth(0), 0);
  assert.equal(getServiceDepth(0.5), 0.5);
  assert.equal(getServiceDepth(2), 1);
  assert.equal(getServiceDepth(-1), 0);
});
