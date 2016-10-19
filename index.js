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
var camScale = 2;

var tileMapSets = new Array();
tileMapSets[0] = new Image();
tileMapSets[0].src = "Resource/Tiles/dirt/floor_dirt01.png";
tileMapSets[1] = new Image();
tileMapSets[1].src = "Resource/Tiles/liquid/water opacity 90.png";
tileMapSets[2] = new Image();
tileMapSets[2].src = "Resource/Tiles/object/glass opacity 80.png";

function Initialize(){
    context.beginPath();
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.scale(camScale, camScale);
    
    var dirt = new Sprite("Resource/Tiles/dirt/floor_dirt01.png", true);
    
    setInterval(function(){
        /*for(var i = 0; i < 1280; i += 8){
            for(var j = 0; j < 720; j += 8){
                context.drawImage(tileMapSets[Math.floor(Math.random() * 3)], i, j);
                //dirt.draw(i, j);
            }
        }*/
    }, gameTimeScale);
    
    setInterval(function(){
        for(var i = 0; i < 1280; i += 8){
            for(var j = 0; j < 720; j += 8){
                context.drawImage(tileMapSets[Math.floor(Math.random() * 3)], i, j);
                //dirt.draw(i, j);
            }
        }
    }, 2000);
};
