var terrainTileSet = [,];
var tileSet;

//Dirt Images
    terrainTileSet[0, 0] = new Image();
    terrainTileSet[0, 0].src = "Resource/Tiles/dirt/floor_dirt01.png";
    terrainTileSet[0, 1] = new Image();
    terrainTileSet[0, 1].src = "Resource/Tiles/dirt/floor_dirt02.png";
    terrainTileSet[0, 2] = new Image();
    terrainTileSet[0, 2].src = "Resource/Tiles/dirt/floor_dirt03.png";
    terrainTileSet[0, 3] = new Image();
    terrainTileSet[0, 3].src = "Resource/Tiles/dirt/floor_dirt04.png";

//Water Images
    terrainTileSet[1, 4] = new Image();
    terrainTileSet[1, 4].src = "Resource/Tiles/liquid/water opacity 90.png";
    terrainTileSet[1, 5] = new Image();
    terrainTileSet[1, 5].src = "Resource/Tiles/liquid/water opacity 95.png";
    terrainTileSet[1, 6] = new Image();
    terrainTileSet[1, 6].src = "Resource/Tiles/liquid/water surface opacity 90.png";
    terrainTileSet[1, 7] = new Image();
    terrainTileSet[1, 7].src = "Resource/Tiles/liquid/water surface opacity 95.png";

var oreTileSet = [,];


tileSet = [terrainTileSet, oreTileSet];