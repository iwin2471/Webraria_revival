window.addEventListener('keydown',onKeyDown);
window.addEventListener('keyup',onKeyUp);
  
    var playerx;
    var playery;
    var player = new Player("JohnSoo", "Resource/Character/3.png");
    
    var framesPerSecond = 30;
    
    function startGame(){
        player.xPos = 0;
        player.yPos = 2400;

        //몇가지 오류수정
        setInterval(function(){
            Context.context.clearRect(player.xPos, player.yPos, 8, 16);

            console.log(lastLayer[Math.floor(player.xPos / 8)].toString());

            if(player.yPos < lastLayer[Math.floor(player.xPos / 8)] - 16){
                player.yPos+=1;
            } else {
                player.canJump = true;
            }
                
            
            Context.context.rect(player.xPos,player.yPos,8,16);
            Context.context.fillStyle = "skyblue";
            Context.context.fill();
            
            Context.context.drawImage(player.sprite, player.xPos, player.yPos, 8, 16);
            console.log("Player Drawn Loc X : " + player.xPos + " Loc Y : " + player.yPos + " CanJump : " + player.canJump);
        }, 1000 * 1/framesPerSecond);
    }

function onKeyDown(e){
   keyCode = e.keyCode;
   eventType = e.type;
    
   if(e.keyCode == 37){
        if(lastLayer[Math.floor(player.xPos / 8) - 1] >= player.yPos + 16){
            playerx = player.xPos;
            player.xPos -= 8;    
        }
   }
   else if(e.keyCode == 38){
       if(player.canJump){
           playery = player.yPos;
           player.yPos -= 16;
           player.canJump = false;
       }
   }
   else if(e.keyCode == 39){
       if(lastLayer[Math.floor(player.xPos / 8) + 1] >= player.yPos + 16){
            playerx = player.xPos;
            player.xPos += 8;   
       }
   }
 }
 
 function onKeyUp(e){
   keyCode = e.keyCode;
   eventType = e.type;
 }