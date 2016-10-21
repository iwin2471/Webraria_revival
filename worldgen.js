var Context = new HTML("mainCanvas");
var cnt = 0;



function drawWorld(){
    var tileMapString = "";
    var perc = 11;
    var height;
    
    setInterval(function(){
        while(cnt==0){
            for(var i = 0; i < Context.canvas.width; i+=8){
                
                var heightCnt = 0;
                
                if(Math.ceil(Math.random() * 10) > perc){
                    if(Math.floor(Math.random() * 2) == 0){
                        height -= Math.ceil(Math.random() * 20);
                    } else {
                        height += Math.ceil(Math.random() * 20);
                    }
                } else {
                    height = Math.floor(Math.random() * Context.canvas.height);
                    if(height > Context.canvas.height / 2){
                        height += 50;
                    } else {
                        height -= 50;
                    }
                    
                    if(heightCnt == 0){
                        perc = 0.1;
                    }
                    heightCnt++;
                }
                
                var firstCnt = 0;
                
                for(var j = 0; j < Context.canvas.height; j+=8){
                    //var terrainType = Math.floor(Math.random() * 2); //Dirt or Water
                    //var terrainTypeNum = Math.floor(Math.random() * 4); //Layer Number
                    //tileMapString += terrainType.toString() + "(" + terrainTypeNum + ") ";
                    //Context.context.drawImage(tileSet[0][terrainType, terrainTypeNum + (terrainType * 4)], j, i);
                    
                    if(j > height){
                        if(firstCnt == 0){
                            var randomTop = Math.floor(Math.random() * 3);
                            Context.context.drawImage(tileSet[0][0, randomTop], i, j);
                        } else {
                            Context.context.drawImage(tileSet[0][0, 3], i, j);
                        }
                        firstCnt++;
                    }
            }
            tileMapString += "\n";
        }
        console.log("World Loading Complete");
        //console.log(tileMapString);
        cnt++;
        }
    }, 1);
}