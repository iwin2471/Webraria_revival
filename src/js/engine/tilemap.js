var terrainTileSet = [,];
var terrainOreSet = [,];

var worldTerrainSave = new Array();

for (var i = 0; i < 1920 * 5; i++) {
  worldTerrainSave[i] = new Array();
}

//Dirt Images
terrainTileSet[(0, 0)] = new Image();
terrainTileSet[(0, 0)].src = "Resource/Tiles/dirt/floor_dirt01.png";
terrainTileSet[(0, 1)] = new Image();
terrainTileSet[(0, 1)].src = "Resource/Tiles/dirt/floor_dirt02.png";
terrainTileSet[(0, 2)] = new Image();
terrainTileSet[(0, 2)].src = "Resource/Tiles/dirt/floor_dirt03.png";
terrainTileSet[(0, 3)] = new Image();
terrainTileSet[(0, 3)].src = "Resource/Tiles/dirt/floor_dirt04.png";

//Water Images
terrainTileSet[(1, 4)] = new Image();
terrainTileSet[(1, 4)].src = "Resource/Tiles/liquid/water_opacity_90.png";
terrainTileSet[(1, 5)] = new Image();
terrainTileSet[(1, 5)].src = "Resource/Tiles/liquid/water_opacity_95.png";
terrainTileSet[(1, 6)] = new Image();
terrainTileSet[(1, 6)].src =
  "Resource/Tiles/liquid/water_surface_opacity_90.png";
terrainTileSet[(1, 7)] = new Image();
terrainTileSet[(1, 7)].src =
  "Resource/Tiles/liquid/water_surface_opacity_95.png";

//Object Images
terrainOreSet[0] = new Image();
terrainOreSet[0].src = "Resource/Tiles/Mineral/copperS.png";

terrainOreSet[1] = new Image();
terrainOreSet[1].src = "Resource/Tiles/Mineral/iro.png";

terrainOreSet[2] = new Image();
terrainOreSet[2].src = "Resource/Tiles/Mineral/dia2.png";

terrainOreSet[3] = new Image();
terrainOreSet[3].src = "Resource/Tiles/object/stone.png";

terrainOreSet[4] = new Image();
terrainOreSet[4].src = "Resource/Tiles/dirt/floor_dirt04.png";

var oreTileSet = [,];

var tileSet = [terrainTileSet, oreTileSet];

export { tileSet, worldTerrainSave, terrainTileSet, oreTileSet };
