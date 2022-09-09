var Context = new HTML("mainCanvas");
var cnt = 0;

//Polish 하기
//동굴 및 바다 강, 돌과 오어
//저장하는거

var lastLayer = [];
var layerCnt = 0;

function drawWorld() {
  var tileMapString = "";
  var perc = 0.1;
  var height;
  var heightCnt = 0;
  var firstCnt = 0;
  var mapHeight = Context.canvas.height * 5;
  var mapWidth = Context.canvas.width * 5;
  var heightDiffValue = 0;
  //터레인 오브젝트화
  //단위 바꿔야

  var orePercentage;

  setInterval(function () {
    while (cnt == 0) {
      Context.context.clearRect(0, 0, mapWidth, mapHeight);

      height = mapHeight / 2;

      for (var i = 0; i < mapWidth; i += 8) {
        if (Math.floor(Math.random() * 2) == 0) {
          heightDiffValue = Math.ceil(Math.random() * 2);
          height -= Math.ceil(Math.random() * heightDiffValue * 8);
        } else {
          height += Math.ceil(Math.random() * heightDiffValue * 8);
        }

        firstCnt = 0;

        for (var j = 0; j < mapHeight; j += 1) {
          worldTerrainSave[i][j] = false;
          if (j > height) {
            if (firstCnt == 0) {
              if (j % 8 == 0) {
                var randomTop = Math.floor(Math.random() * 3);
                Context.context.drawImage(tileSet[0][(0, randomTop)], i, j);
                worldTerrainSave[i][j] = true;
                firstCnt++;
              }
            } else {
              worldTerrainSave[i][j] = true;
              if (j % 8 == 0) {
                Context.context.drawImage(tileSet[0][(0, 3)], i, j);
              }
            }
          }
        }
      }
      console.log("World Loading Complete");
      cnt++;
    }
  }, 500);
}
