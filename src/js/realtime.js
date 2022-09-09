import Player from "./player.mts";
import Canvas from "./canvas";
import { worldTerrainSave } from "./tilemap";

const player = new Player("JohnSoo", "Resource/Character/3.png");
const framesPerSecond = 60;

function startGame() {
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  const context = Canvas.getInstance().getContext();

  player.xPos = 0;
  player.yPos = 2400;

  //몇가지 오류수정
  setInterval(function () {
    context.clearRect(player.xPos, player.yPos, 8, 16);

    // console.log(lastLayer[Math.floor(player.xPos / 8)].toString());

    if (worldTerrainSave[player.xPos][player.yPos + 16] == false) {
      player.yPos += 2;
    } else {
      player.canJump = true;
    }

    context.rect(player.xPos, player.yPos, 8, 15);
    context.fillStyle = "skyblue";
    context.fill();

    context.drawImage(player.sprite, player.xPos, player.yPos, 8, 16);
    //console.log("Player Drawn Loc X : " + player.xPos + " Loc Y : " + player.yPos + " CanJump : " + player.canJump);
    //            console.log("Left : " + worldTerrainSave[player.xPos - 8][player.yPos + 15]);
    //            console.log("Right : " + worldTerrainSave[player.xPos + 8][player.yPos + 15]);
  }, (1000 * 1) / framesPerSecond);
}

function onKeyDown({ keyCode }) {
  switch (keyCode) {
    case 37:
      if (
        !worldTerrainSave[player.xPos - player.sideMovementSpeed][
          player.yPos + 15
        ]
      ) {
        player.xPos -= player.sideMovementSpeed;
      }
      break;
    case 32:
    case 38:
      if (!player.canJump) break;
      player.yPos -= player.jumpForce;
      player.canJump = false;
      break;
    case 39:
      if (
        worldTerrainSave[player.xPos + player.sideMovementSpeed][
          player.yPos + 15
        ] == false
      ) {
        player.xPos += player.sideMovementSpeed;
      }
      break;
    case 40:
      player.yPos += 10;
      break;
  }
}

function onKeyUp({ keyCode, type }) {}

export { startGame, onKeyDown, onKeyUp, player };
