import BasePlayer from "./base_player";

export default class Player extends BasePlayer {
  sideMovementSpeed: number = 8;
  jumpForce: number = 8;
  canJump: boolean = false;

  constructor(playerName: string, spriteSrc: string) {
    super(playerName, spriteSrc);
  }
}
