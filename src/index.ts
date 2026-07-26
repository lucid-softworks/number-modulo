/** Returns a modulo divisor, unlike JavaScript's signed remainder. */
export function modulo(value: number, divisor: number): number {
  if (!Number.isFinite(value) || !Number.isFinite(divisor) || divisor === 0) {
    throw new RangeError("Value and non-zero divisor must be finite");
  }
  return ((value % divisor) + divisor) % divisor;
}
