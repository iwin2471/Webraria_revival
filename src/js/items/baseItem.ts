import Drawable from "../engine/drawable";

export default abstract class BaseItem implements Drawable {
  sprite: HTMLImageElement;
  loaded: boolean;
  name: string;
  maxStack: number = 64;

  constructor(name: string, spriteURL: string) {
    this.name = name;
    this.sprite.src = spriteURL;
    this.sprite.onload = () => {
      this.loaded = true;
    };
  }

  clearRect(): void {
    throw new Error("Method not implemented.");
  }
}
