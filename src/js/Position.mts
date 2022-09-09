export default class Position {
  public x: number;
  public y: number;

  constructor();
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  };

  setX(x: number) {
    this.x = x;
  }

  setY(y: number) {
    this.y = y;
  }
}
