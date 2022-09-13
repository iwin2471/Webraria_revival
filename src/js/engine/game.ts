import Player from "../player/player.mts";
import World from "./world/world";
import Canvas from "../canvas";
import Terrain from "./world/tilemap";

const player = new Player("JohnSoo", "Resource/Character/3.png");
const framesPerSecond = 60;

class Game {
  private canvas = Canvas.getInstance();
  private element = this.canvas.getElement();
  private context = this.canvas.getContext();
  private world = new World();
  private frame = 0;
  private terrian;
  elemLeft: number;
  elemTop: number;

  startGame() {
    this.terrian = Terrain.getInstance();
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);

    this.canvas = Canvas.getInstance();
    this.element = this.canvas.getElement();
    this.context = this.canvas.getContext();
    this.elemLeft = this.element.offsetLeft + this.element.clientLeft;
    this.elemTop = this.element.offsetTop + this.element.clientTop;
    this.element.onclick = ({ clientX, clientY }) => {
      const x = clientX - this.element.getBoundingClientRect().left;
      const y = clientY - this.element.getBoundingClientRect().top;
      console.log(x,y);

      console.log(this.terrian.worldTerrainSave[x][y]);
    };
 
    player.setPosition(0, 0);
    this.world.generateWorld();
    this.loop();
  }

  private loop() {
    window.requestAnimationFrame(() => this.loop());
    this.frame++;

    //몇가지 오류수정
    player.clearRect();
    // console.log(lastLayer[Math.floor(player.xPos / 8)].toString());

    if (
      !this.terrian.worldTerrainSave[player.position.x][player.position.y + 16]
    ) {
      player.position.y += 2;
    } else {
      player.canJump = true;
    }

    this.context.rect(
      player.position.y,
      player.position.y,
      player.width,
      player.height
    );
    this.context.fillStyle = "rgba(0,0,0,0)";
    this.context.fill();

    this.context.drawImage(
      player.sprite,
      player.position.x,
      player.position.y,
      player.width,
      player.height
    );
    //console.log("Player Drawn Loc X : " + player.xPos + " Loc Y : " + player.yPos + " CanJump : " + player.canJump);
    //            console.log("Left : " + worldTerrainSave[player.xPos - 8][player.yPos + 15]);
    //            console.log("Right : " + worldTerrainSave[player.xPos + 8][player.yPos + 15]);
  }

  onKeyDown({ keyCode }) {
    switch (keyCode) {
      case 37:
        if (
          !Terrain.getInstance().worldTerrainSave[player.position.x - player.speed][
            player.position.y
          ]
        ) {
          player.clearRect();
          player.position.x -= player.speed;
        }
        break;
      case 32:
      case 38:
        if (!player.canJump) break;
        player.clearRect();
        player.position.y -= player.jumpForce;
        player.canJump = false;
        break;
      case 39:
        if (
          !Terrain.getInstance().worldTerrainSave[player.position.x + player.speed][
            player.position.y
          ]
        ) {
          player.clearRect();
          player.position.x += player.speed;
        }
        break;
      case 40:
        player.clearRect();
        player.position.y += player.jumpForce;
        break;
    }
  }

  onKeyUp({ keyCode, type }) {}
}

export { Game, player };
