export enum VinylRPM {
  _33 = 33.3,
  _45 = 45,
}

export class RPM {
  private readonly value: VinylRPM

  constructor(value: VinylRPM) {
    if (!Object.values(VinylRPM).includes(value)) {
      throw new Error(`Invalid RPM value : ${value}`)
    }
    this.value = value
  }

  getValue(): VinylRPM {
    return this.value
  }

  static create33() {
    return new RPM(VinylRPM._33)
  }

  static create45() {
    return new RPM(VinylRPM._45)
  }
}
