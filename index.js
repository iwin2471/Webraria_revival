var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var Sprite = function(filename, spritename){
    this.image = new Image();
    this.image.src = filename;
    this.name = spritename;
};

setup = function(){
    var image01 = new Sprite("Resource/KakaoTalk_Photo_2016-10-18-22-34-04.png", "First Image");
    console.log(image01.name + " Loaded");
    context.drawImage(image01.image, 50, 50);
};