export class VinylTitle {
  private readonly value: string

  constructor(value: string) {
    this.ensureIsNotEmpty(value)
    this.value = value.trim()
  }

  private ensureIsNotEmpty(value: string): void {
    if (!value || value.trim().length === 0) {
      throw new Error("The vinyl title cannot be empty")
    }
  }

  getValue(): string {
    return this.value
  }
}
