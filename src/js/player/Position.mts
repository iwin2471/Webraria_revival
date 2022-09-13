export default class Position {
  x: number;
  y: number;

  constructor();
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  public setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public toString() {
    return `${this.x} ${this.y}`
  }
}
