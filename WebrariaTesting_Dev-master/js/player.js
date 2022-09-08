class Player {
    constructor(playerName, spriteSrc) {
        this.name = playerName;
        this.sprite = new Image();
        this.sprite.src = spriteSrc;
        this.loaded = false;
        this.sprite.onload = ()=> {
            this.loaded = true;
        }
        this.position = new Position();
        this.sideMovementSpeed = 8;
        this.jumpForce = 24;
        this.canJump = false;
    }
}

