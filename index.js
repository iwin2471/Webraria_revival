var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var Sprite = function(filename, is_pattern){
    this.image = null;
    this.pattern = null;
    
    if(filename != undefined && filename != "" && filename != null){
        this.image = new Image();
        this.image.src = filename;
    } else {
        console.log('Unable to load sprite');
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

function Initialize(){
    context.beginPath();
    context.fillStyle = "black";
    context.rect(0, 0, 1280, 720);
    context.fill();
    
    var WALL = "http://gamedesign.wdfiles.com/local--files/spriteart:sprite-art-101-brick-wall-i/sprite_bricks_tutorial_1.png";
    var CRATE = "http://gamedesign.wdfiles.com/local--files/spriteart:sprite-art-101-brick-wall-i/brick_wall_tiled_perfect.png"
    
    var angle = 0;
    var image = new Sprite(WALL, false);
    var pattern = new Sprite(CRATE, true);
    
    setInterval(function(){
        image.draw(10, 400);
        image.draw(0, 0, 1280, 50);
        pattern.drawPattern(0, 720 - 50, 1280, 50);
    }, 1);
};