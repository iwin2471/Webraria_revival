import WorldGen from "./worldgen";

export default class World {
  private worldgen: WorldGen = new WorldGen();
  public terrainSave: object;

  constructor() {}

  public generateWorld() {
    this.worldgen.generateWorld();
  }
}
