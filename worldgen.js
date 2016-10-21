var Context = new HTML("mainCanvas");
var cnt = 0;



function drawWorld(){
    var tileMapString = "";
    
    setInterval(function(){
        while(cnt==0){
            for(var i = 0; i < Context.canvas.width; i+=8){
                
                var height = Math.floor(Math.random() * Context.canvas.height);
                var firstCnt = 0;
                
                for(var j = 0; j < Context.canvas.height; j+=8){
                    //var terrainType = Math.floor(Math.random() * 2); //Dirt or Water
                    //var terrainTypeNum = Math.floor(Math.random() * 4); //Layer Number
                    //tileMapString += terrainType.toString() + "(" + terrainTypeNum + ") ";
                    //Context.context.drawImage(tileSet[0][terrainType, terrainTypeNum + (terrainType * 4)], j, i);
                    
                    if(j > height){
                        if(firstCnt == 0){
                            Context.context.drawImage(tileSet[0][0, 1], i, j);
                            console.log("First Added");
                        } else {
                            Context.context.drawImage(tileSet[0][0, 3], i, j);
                            console.log("Now Else Added");
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