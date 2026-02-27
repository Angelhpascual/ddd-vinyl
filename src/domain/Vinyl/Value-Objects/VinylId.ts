import { v4 as uuidv4, validate } from "uuid"

export class VinylId {
  private readonly value: string

  constructor(value: string) {
    this.ensureIsValidUuid(value)
    this.value = value
  }

  static create(): VinylId {
    return new VinylId(uuidv4())
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new Error("Invalid UUID")
    }
  }

  getValue(): string {
    return this.value
  }
}
