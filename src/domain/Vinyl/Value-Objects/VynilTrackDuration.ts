export class VynilTrackDuration {
  private readonly value: string

  constructor(value: string) {
    this.ensureIsPositive(value)
    this.value = value
  }

  private ensureIsPositive(value: string): void {
    if (Number(value) < 0) {
      throw new Error("The duration cannot be negative")
    }
  }

  getValue(): string {
    return this.value
  }
}
