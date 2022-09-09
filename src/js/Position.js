class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static Position() {
    return new Position(0, 0);
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }
}
