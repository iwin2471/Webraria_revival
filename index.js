var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var Sprite = function(filename, is_pattern){
    this.image = null;
    this.pattern = null;

    if(filename != undefined){
        this.image = new Image();
        this.image.src = filename;
    } else {
        console.log("형식에 맞게 호출되지 않았습니다");
    }

    this.draw = function(x, y, w, h){
          if(w == undefined || h == undefined){
              context.drawImage(this.image, x, y, this.image.width, this.image.height);
          } else {
              context.drawImage(this.image, x, y, w, h);
          }
    };

    this.drawPattern = function(x, y, w, h){
        if(is_pattern){
            this.pattern = context.createPattern(this.image, 'repeat');
        }
         context.fillStyle = this.pattern;
         context.fillRect(x, y, w, h);
    };
};

//In-Game Settings
var gameTimeScale = 1;
var camScale = 1;

var tilemap = [,];
var row = 0;
var col = 0;

var tileMapSets = new Array();
tileMapSets[0] = new Image();
tileMapSets[0].src = "Resource/Tiles/dirt/floor_dirt01.png";
tileMapSets[1] = new Image();
tileMapSets[1].src = "Resource/Tiles/liquid/water opacity 90.png";

function Initialize(){
    context.beginPath();
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var dirt = new Sprite("Resource/Tiles/dirt/floor_dirt01.png", true);


    document.addEventListener('keydown', function(event){
        if(event.keyCode == 37){
          camScale--;
          alert(camScale);
        }
        if(event.keyCode == 39){
          camScale++;
          alert(camScale);
        }
    });

    //게임 리얼타임 시스템부분
    setInterval(function(){
      context.scale(camScale, camScale);
    }, gameTimeScale);

    //월드생성 및 타일맵 저장 부분, 변수 등 정리 필요, 튜토리얼처럼 나누기(함수, 자스)
    var cnt = 0;
    var tilemapString = "";
    var frac = new Image();
    frac.src = "Resource/Tiles/fracture/fracture5.png";

    setInterval(function(){
        while(cnt == 0){
            for(var i = 0; i < 1280; i += 8){
                for(var j = 0; j < 720; j += 8){
                    var random = Math.floor(Math.random() * 10);
                    var randomFrac = Math.floor(Math.random() * 2);
                    var randomSel;

                    if(random >= 2){
                      randomSel = 0;
                    } else {
                      randomSel = 1;
                    }

                    context.drawImage(tileMapSets[randomSel], i, j);

                    if(randomFrac == 1){
                      context.drawImage(frac, i, j);
                    }
                    tilemap[row, col] = random;
                    tilemapString += random.toString();
                    col++;
                }
                tilemapString += "\n";
                row++;
                col = 0;
            }
            console.log(tilemapString);
            cnt++;
        }
    }, 1);
};
