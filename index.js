var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var Sprite = function(filename, spritename){
    this.image = new Image();
    this.image.src = filename;
    this.name = spritename;
};

setup = function(){
    var image01 = new Sprite("http://www.w3schools.com/css/trolltunga.jpg", "First Image");
    
    context.drawImage(image01.image, 0, 0);
    
    context.beginPath();
    context.rect(50, 50, 50, 50);
    context.fillStyle = "black";
    context.fill();
    
    context.beginPath();
    context.rect(100, 100, 50, 50);
    context.fillStyle = "red";
    context.fill();
    
    console.log(image01.name + " Loaded");
};