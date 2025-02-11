const worldTerrainSave = new Array();

for (let i = 0; i < 1920 * 5; i++) {
  worldTerrainSave[i] = new Array();
}

class Terrain {
  private static instance: Terrain = new Terrain();
  static readonly tileSize = 8;
  readonly tileMap: object = {
    tile: {
      dirt: [new Image(), new Image(), new Image(), new Image()],
      water: [new Image(), new Image(), new Image(), new Image()],
    },
    ore: [new Image(), new Image(), new Image(), new Image(), new Image()],
  };

  private constructor() {
    //Dirt Images
    this.tileMap["tile"]["dirt"][0].src =
      "Resource/Tiles/dirt/floor_dirt01.png";
    this.tileMap["tile"]["dirt"][1].src =
      "Resource/Tiles/dirt/floor_dirt02.png";
    this.tileMap["tile"]["dirt"][2].src =
      "Resource/Tiles/dirt/floor_dirt03.png";
    this.tileMap["tile"]["dirt"][3].src =
      "Resource/Tiles/dirt/floor_dirt04.png";

    //Water Images
    this.tileMap["tile"]["water"][0].src =
      "Resource/Tiles/liquid/water_opacity_90.png";
    this.tileMap["tile"]["water"][0].src =
      "Resource/Tiles/liquid/water_opacity_95.png";
    this.tileMap["tile"]["water"][0].src =
      "Resource/Tiles/liquid/water_surface_opacity_90.png";
    this.tileMap["tile"]["water"][0].src =
      "Resource/Tiles/liquid/water_surface_opacity_95.png";

    //Object Images
    this.tileMap["ore"][0].src = "Resource/Tiles/Mineral/copperS.png";
    this.tileMap["ore"][1].src = "Resource/Tiles/Mineral/iro.png";
    this.tileMap["ore"][2].src = "Resource/Tiles/Mineral/dia2.png";
    this.tileMap["ore"][3].src = "Resource/Tiles/object/stone.png";
    this.tileMap["ore"][4].src = "Resource/Tiles/dirt/floor_dirt04.png";
  }

  public static getInstance() {
    return this.instance;
  }
}

export { worldTerrainSave, Terrain };
