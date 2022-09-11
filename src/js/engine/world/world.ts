import WorldGen from "./worldgen";
import { Terrain } from "./tilemap";

export default class World {
  private worldgen: WorldGen = new WorldGen();
  public terrainSave: object;

  constructor() {}

  public generateWorld() {
    this.worldgen.drawWorld();
  }
}
