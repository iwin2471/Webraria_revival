import Position from "./Position.mts";

export default interface Movable {
  readonly position: Position;
  movementSpeed: number;

  setPosition(x: number, y: number): void;
  get speed(): number;
}
