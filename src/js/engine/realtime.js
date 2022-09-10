import Player from "../player/player.mts";
import Canvas from "../canvas";
import { worldTerrainSave } from "./tilemap";

const player = new Player("JohnSoo", "Resource/Character/3.png");
const framesPerSecond = 60;

function startGame() {
  const canvas = Canvas.getInstance();
  const context = canvas.getContext();
  const element = canvas.getElement();

  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  let elemLeft = element.offsetLeft + element.clientLeft;
  let elemTop = element.offsetTop + element.clientTop;

  element.onclick = ({ pageX, pageY }) => {
    const x = pageX - elemLeft;
    const y = pageY - elemTop;
    console.log(x, y);

    console.log(worldTerrainSave[x][y]);
  };

  player.setPosition(0, 2400);

  //몇가지 오류수정
  setInterval(function () {
    player.clearRect();

    // console.log(lastLayer[Math.floor(player.xPos / 8)].toString());

    if (!worldTerrainSave[player.position.x][player.position.y + 16]) {
      player.position.y += 2;
    } else {
      player.canJump = true;
    }

    context.rect(
      player.position.y,
      player.position.y,
      player.width,
      player.height
    );
    context.fillStyle = "rgba(0,0,0,0)";
    context.fill();

    context.drawImage(
      player.sprite,
      player.position.x,
      player.position.y,
      player.width,
      player.height
    );
    //console.log("Player Drawn Loc X : " + player.xPos + " Loc Y : " + player.yPos + " CanJump : " + player.canJump);
    //            console.log("Left : " + worldTerrainSave[player.xPos - 8][player.yPos + 15]);
    //            console.log("Right : " + worldTerrainSave[player.xPos + 8][player.yPos + 15]);
  }, (1000 * 1) / framesPerSecond);
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

export { startGame, onKeyDown, onKeyUp, player };
