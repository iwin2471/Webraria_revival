import BasePlayer from "./base_player";

export default class UserPlayer extends BasePlayer {
  sideMovementSpeed: number = 8;
  jumpForce: number = 16;

  constructor(playerName: string, spriteSrc: string) {
    super(playerName, spriteSrc);
  }

  onUpdate(): void {
     
  }
}
