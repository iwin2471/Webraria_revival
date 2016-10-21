var Context = new HTML("mainCanvas");
var cnt = 0;



function drawWorld(){
    var tileMapString = "";
    
    setInterval(function(){
        while(cnt==0){
            for(var i = 0; i < Context.canvas.height; i+=8){
                for(var j = 0; j < Context.canvas.width; j+=8){
                    var terrainType = Math.floor(Math.random() * 2); //Dirt or Water
                    var terrainTypeNum = Math.floor(Math.random() * 4); //Layer Number
                    tileMapString += terrainType.toString() + "(" + terrainTypeNum + ") ";
                    
                    Context.context.drawImage(tileSet[0][terrainType, terrainTypeNum + (terrainType * 4)], j, i);
            }
            tileMapString += "\n";
        }
        console.log("World Loading Complete");
        console.log(tileMapString);
        cnt++;
        }
    }, 1);
}