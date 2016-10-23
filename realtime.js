
function startGame(){
    var player = new Player("JohnSoo", "Resource/Character/KakaoTalk_Photo_2016-10-18-22-33-59.png");
    player.xPos = 0;
    player.yPos = 0;
    
    setInterval(function(){
        Context.context.clearRect(player.xPos, player.yPos, 8, 16);
        
        player.yPos+=16;
        
        Context.context.drawImage(player.sprite, player.xPos, player.yPos, 8, 16);
        
        console.log("Player Drawn Loc X : " + player.xPos + " Loc Y : " + player.yPos);
    }, 100);
}