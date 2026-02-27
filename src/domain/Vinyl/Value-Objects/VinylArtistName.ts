export class VinylArtistName {
  private readonly value: string

  constructor(value: string) {
    this.ensureIsNotEmpty(value)
    this.value = value.trim()
  }

  private ensureIsNotEmpty(value: string): void {
    if (!value || value.trim().length === 0) {
      throw new Error("The artist name cannot be empty")
    }
  }

  getValue(): string {
    return this.value
  }
}
