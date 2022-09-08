//Objects
var HTML = function(canvasId){
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.context.imageSmoothingEnabled = false;
};
//In-Game Settings - 아래에서 어느정도 작성한 뒤 변수 정리