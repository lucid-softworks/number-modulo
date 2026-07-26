import { describe, expect, it } from "vitest";

import { modulo } from "../src/index.js";

describe("modulo", () => {
  it("normalizes using the divisor sign", () => {
    expect(modulo(-1, 5)).toBe(4);
    expect(modulo(6, 5)).toBe(1);
    expect(modulo(1, -5)).toBe(-4);
  });
  it.each([
    [1, 0],
    [Number.NaN, 2],
    [1, Infinity],
  ])("rejects invalid values", (value, divisor) => {
    expect(() => modulo(value, divisor)).toThrow(RangeError);
  });
});
