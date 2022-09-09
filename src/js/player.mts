import Position from "./Position.mts";
export default class Player {
    name: string;
    sprite: HTMLImageElement = new Image();
    loaded: boolean = false;
    position: Position = new Position();
    sideMovementSpeed: number = 8;
    jumpForce: number = 24;
    canJump: boolean = false;


    constructor(playerName: string, spriteSrc: string) {
        this.name = playerName;
        this.sprite.src = spriteSrc;
        this.sprite.onload = ()=> {
            this.loaded = true;
        }
    }
}

