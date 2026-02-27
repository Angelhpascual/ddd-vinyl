export class VinylPreviewURL {
  private readonly value: string

  constructor(value: string) {
    this.ensureIsValidURL(value)
    this.value = value
  }

  private ensureIsValidURL(value: string): void {
    try {
      new URL(value)
    } catch {
      throw new Error("Invalid URL")
    }
  }

  getValue(): string {
    return this.value
  }
}
