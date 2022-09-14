import Behavior from "./behaviorable";
import Canvas from "./canvas";
import BasePlayer from "../player/base_player";
import Terrain from "./world/tilemap";

export default class PlayerControll implements Behavior {
  private canvas = Canvas.getInstance();
  private element = this.canvas.getElement();
  private context = this.canvas.getContext();
  private playerList = new Array<BasePlayer>();

  onMainPlayerEnter(player: BasePlayer) {
    this.canvas = Canvas.getInstance();
    this.element = this.canvas.getElement();
    this.context = this.canvas.getContext();
    window.addEventListener("keydown", ({ code }) => this.movement(player, code));
    window.addEventListener("keyup", this.onKeyUp);
    this.onWorldEnter(player);
  }

  onWorldEnter(player: BasePlayer) {
    this.playerList.push(player);
  }

  movement(player, code) {
    switch (code) {
      case "ArrowLeft":
        if (
          !Terrain.getInstance().worldTerrainSave[player.position.x - player.speed][
            player.position.y
          ]
        ) {
          player.clearRect();
          player.position.x -= player.speed;
        }
        break;
      case "Space":
      case "ArrowUp":
        if (!player.canJump) break;
        player.clearRect();
        player.position.y -= player.jumpForce;
        player.canJump = false;
        break;
      case "ArrowRight":
        if (
          !Terrain.getInstance().worldTerrainSave[player.position.x + player.speed][
            player.position.y
          ]
        ) {
          player.clearRect();
          player.position.x += player.speed;
        }
        break;
      case "ArrowDown":
        player.clearRect();
        player.position.y += player.jumpForce;
        break;
    }
  }

  onKeyUp({ keyCode, type }) {}

  
  onUpdate(frame): void {
    this.playerList.forEach((player) => {
      player.clearRect();
      // console.log(lastLayer[Math.floor(player.xPos / 8)].toString());

      if (
        !Terrain.getInstance().worldTerrainSave[player.position.x][player.position.y + 16]
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
    });
    //console.log("Player Drawn Loc X : " + player.xPos + " Loc Y : " + player.yPos + " CanJump : " + player.canJump);
    //            console.log("Left : " + worldTerrainSave[player.xPos - 8][player.yPos + 15]);
    //            console.log("Right : " + worldTerrainSave[player.xPos + 8][player.yPos + 15]);
  }
}
