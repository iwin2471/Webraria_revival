import Player from "../player/player.mts";
import Canvas from "../canvas";
import { worldTerrainSave } from "./world/tilemap";

const player = new Player("JohnSoo", "Resource/Character/3.png");
const framesPerSecond = 60;

class Game {
  private canvas = Canvas.getInstance();
  private element = this.canvas.getElement();
  private context = this.canvas.getContext();
  elemLeft: number;
  elemTop: number;

  constructor() {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
  }

  startGame() {
    this.canvas = Canvas.getInstance();
    this.element = this.canvas.getElement();
    this.context = this.canvas.getContext();
    this.elemLeft = this.element.offsetLeft + this.element.clientLeft;
    this.elemTop = this.element.offsetTop + this.element.clientTop;
    this.element.onclick = ({ pageX, pageY }) => {
      const x = pageX - this.elemLeft;
      const y = pageY - this.elemTop;
      console.log(x, y);

      console.log(worldTerrainSave[x][y]);
    };

    player.setPosition(0, 2400);
    this.loop();
  }

  private loop() {
    window.requestAnimationFrame(() => this.loop());
    //몇가지 오류수정
    player.clearRect();
    // console.log(lastLayer[Math.floor(player.xPos / 8)].toString());

    if (!worldTerrainSave[player.position.x][player.position.y + 16]) {
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
}

function onKeyDown({ keyCode }) {
  switch (keyCode) {
    case 37:
      if (
        !worldTerrainSave[player.position.x - player.speed][
          player.position.y + 15
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
        !worldTerrainSave[player.position.x + player.speed][
          player.position.y + 15
        ]
      ) {
        player.clearRect();
        player.position.x += player.speed;
      }
      break;
    case 40:
      player.clearRect();
      player.position.y += 10;
      break;
  }
}

function onKeyUp({ keyCode, type }) {}

export { Game, player };
