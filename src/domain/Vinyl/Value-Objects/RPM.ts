export enum RPMValue {
  _33 = 33.3,
  _45 = 45,
}

export class RPM {
  private readonly value: RPMValue

  constructor(value: RPMValue) {
    if (!Object.values(RPMValue).includes(value)) {
      throw new Error(`Invalid RPM value : ${value}`)
    }
    this.value = value
  }

  getValue(): RPMValue {
    return this.value
  }

  static create33() {
    return new RPM(RPMValue._33)
  }

  static create45() {
    return new RPM(RPMValue._45)
  }
}
