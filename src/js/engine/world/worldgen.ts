import Canvas from "../canvas";
import { Perlin } from "../../utils/math";
import Terrain from "./tilemap";

export default class WorldGen {
  private canvas: Canvas = Canvas.getInstance();
  private terrain: Terrain;
  cnt = 0;

  //Polish 하기
  //동굴 및 바다 강, 돌과 오어
  //저장하는거

  lastLayer = [];
  layerCnt = 0;

  private makeSomeNoise(): Array<number> {
    const perlin: Perlin = new Perlin(
      128,
      128,
      Canvas.getInstance().getElement().width
    );
    const result = perlin.combineNoise(
      perlin.generateNoise(128, 128, 8, 2, this.canvas.getElement().width)
    );
    return result;
  }

  public generateWorld() {
    this.terrain = Terrain.getInstance();
    const noises: Array<number> = this.makeSomeNoise();
    const element: HTMLCanvasElement = this.canvas.getElement();
    const context: WebGL2RenderingContext = this.canvas.getContext();
    const terrain: Terrain = Terrain.getInstance();
    let mapHeight = element.height;
    let mapWidth = element.width;
    let height = mapHeight / 2;
    let isTopSet = false;
    // context.clearRect(0, 0, mapWidth, mapHeight);

    setTimeout(() => {
      for (let i = 0; i < mapWidth; i++) {
        let top = height + noises[i];
        isTopSet = false;
        for (let j = 0; j < mapHeight; j++) {
          terrain.worldTerrainSave[i][j] = false;

          if (j > top) {
            terrain.worldTerrainSave[i][j] = true;

            if (i % Terrain.tileSize == 0 && j % Terrain.tileSize == 0) {
              if (!isTopSet) {
                let randomTop = Math.floor(Math.random() * 3);
                context.drawImage(
                  this.terrain.tileMap["tile"]["dirt"][randomTop],
                  i,
                  j
                );
                isTopSet = true;
              } else {
                context.drawImage(
                  this.terrain.tileMap["tile"]["dirt"][3],
                  i,
                  j
                );
              }
            }
          }
        }
      }
    }, 500);
  }
}
