import Position from "./Position.mts";
import Movable from "./movable";
import Drawable from "../engine/drawable";
import Canvas from "../canvas";

export default abstract class BasePlayer implements Movable, Drawable {
  name: String;
  sprite: HTMLImageElement = new Image();
  loaded: boolean = false;
  movementSpeed: number = 8;
  readonly position: Position = new Position();
  readonly width: number = 8;
  readonly height: number = 16;

  constructor(name: string, spriteURL: string) {
    this.name = name;
    this.sprite.src = spriteURL;

    this.sprite.onload = () => {
      this.loaded = true;
    };
  }
  get speed(): number {
    return this.movementSpeed;
  }

  public setPosition(x: number, y: number) {
    this.position.setXY(x, y);
  }

  public get x(): number {
    return this.position.x;
  }

  public get y(): number {
    return this.position.y;
  }

  public clearRect(): void {
    Canvas.getInstance()
      .getContext()
      .clearRect(this.x, this.y, this.width, this.height);
  }

  protected isMonster(): boolean {
    return false;
  }
}
