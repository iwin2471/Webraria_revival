window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

var player = new Player("JohnSoo", "Resource/Character/3.png");

var framesPerSecond = 60;

function startGame() {
  player.xPos = 0;
  player.yPos = 2400;

  //몇가지 오류수정
  setInterval(function () {
    Context.context.clearRect(player.xPos, player.yPos, 8, 16);

    //console.log(lastLayer[Math.floor(player.xPos / 8)].toString());

    if (worldTerrainSave[player.xPos][player.yPos + 16] == false) {
      player.yPos += 2;
    } else {
      player.canJump = true;
    }

    Context.context.rect(player.xPos, player.yPos, 8, 15);
    Context.context.fillStyle = "skyblue";
    Context.context.fill();

    Context.context.drawImage(player.sprite, player.xPos, player.yPos, 8, 16);
    //console.log("Player Drawn Loc X : " + player.xPos + " Loc Y : " + player.yPos + " CanJump : " + player.canJump);
    //            console.log("Left : " + worldTerrainSave[player.xPos - 8][player.yPos + 15]);
    //            console.log("Right : " + worldTerrainSave[player.xPos + 8][player.yPos + 15]);
  }, (1000 * 1) / framesPerSecond);
}

function onKeyDown(e) {
  keyCode = e.keyCode;
  eventType = e.type;

  if (e.keyCode == 37) {
    if (
      worldTerrainSave[player.xPos - player.sideMovementSpeed][
        player.yPos + 15
      ] == false
    ) {
      player.xPos -= player.sideMovementSpeed;
    }
  } else if (e.keyCode == 38) {
    if (player.canJump) {
      player.yPos -= player.jumpForce;
      player.canJump = false;
    }
  } else if (e.keyCode == 39) {
    if (
      worldTerrainSave[player.xPos + player.sideMovementSpeed][
        player.yPos + 15
      ] == false
    ) {
      player.xPos += player.sideMovementSpeed;
    }
  }
}

function onKeyUp(e) {
  keyCode = e.keyCode;
  eventType = e.type;
}
