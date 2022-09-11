import Canvas from "../../canvas";
import { worldTerrainSave } from "./tilemap";
import { Perlin } from "../../utils/math";
import { Terrain } from "./tilemap";

export default class WorldGen {
  private canvas: Canvas = Canvas.getInstance();
  private terrain: Terrain;
  cnt = 0;

  //Polish 하기
  //동굴 및 바다 강, 돌과 오어
  //저장하는거

  lastLayer = [];
  layerCnt = 0;

  constructor() {
    this.terrain = Terrain.getInstance();
  }

  private makeSomeNoise(): Array<number> {
    const perlin: Perlin = new Perlin(
      128,
      128,
      Canvas.getInstance().getElement().width * 5
    );
    const result = perlin.combineNoise(
      perlin.generateNoise(128, 128, 8, 2, this.canvas.getElement().width * 5)
    );
    return result;
  }

  public generateWorld() {
    const noises: Array<number> = this.makeSomeNoise();
    const element: HTMLCanvasElement = this.canvas.getElement();
    const context: CanvasRenderingContext2D = this.canvas.getContext();
    let mapHeight = element.height * 5;
    let mapWidth = element.width * 5;
    let height = mapHeight / 2;
    let isTopSet = false;
    context.clearRect(0, 0, mapWidth, mapHeight);

    setTimeout(() => {
      for (let i = 0; i < mapWidth; i += Terrain.tileSize) {
        let top = height + noises[i];
        isTopSet = false;
        for (let j = 0; j < mapHeight; j++) {
          worldTerrainSave[i][j] = false;
          if (j <= top) continue;
          if (j % Terrain.tileSize == 0) {
            if (!isTopSet) {
              worldTerrainSave[i][j] = true;
              let randomTop = Math.floor(Math.random() * 3);
              context.drawImage(
                this.terrain.tileMap["tile"]["dirt"][randomTop],
                i,
                j
              );
              isTopSet = true;
            } else {
              worldTerrainSave[i][j] = true;
              context.drawImage(this.terrain.tileMap["tile"]["dirt"][3], i, j);
            }
          }
        }
      }
    }, 500);
  }
}
