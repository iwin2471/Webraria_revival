var player = new Player(
  "JohnSoo",
  "Resource/Character/KakaoTalk_Photo_2016-10-18-22-33-59.png"
);

function startGame() {
  player.position.setX(0);
  player.position.setY(2400)

  //몇가지 오류수정
  setInterval(function () {
    Context.context.clearRect(player.xPos, player.yPos, 8, 16);

    console.log(lastLayer[Math.floor(player.xPos / 8)].toString());

    if (player.position.y <= lastLayer[Math.floor(player.xPos / 8)] - 10)
      player.position.y += 1;
    if (player.loaded)
      Context.context.drawImage(player.sprite, player.position.x, player.position.y, 8, 16);

    console.log(
      "Player Drawn Loc X : " + player.position.x + " Loc Y : " + player.position.y
    );
  }, 1000);
}

function onKeyDown({ keyCode, type }) {
  switch (keyCode) {
    case 37:
      player.xPos -= 9;
      break;
    case 38:
      player.yPos -= 20;
      break;
    case 39:
      player.xPos = 9;
      break;
    case 40:
      player.yPos += 10;
      break;
  }
}

function onKeyUp(e) {
  keyCode = e.keyCode;
  eventType = e.type;
}
