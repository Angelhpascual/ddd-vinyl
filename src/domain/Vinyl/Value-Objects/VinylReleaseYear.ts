export class VinylReleaseYear {
  private readonly value: number

  constructor(value: number) {
    this.ensureIsValidYear(value)
    this.value = value
  }

  private ensureIsValidYear(value: number): void {
    if (value < 1900 || value > new Date().getFullYear()) {
      throw new Error("Invalid year")
    }
  }

  getValue(): number {
    return this.value
  }
}
