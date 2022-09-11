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
    console.log(Canvas.getInstance().getElement());
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

  private generateWorld() {
    const noises: Array<number> = this.makeSomeNoise();
    const element: HTMLCanvasElement = this.canvas.getElement();
    const context: CanvasRenderingContext2D = this.canvas.getContext();
    let mapHeight = element.height * 5;
    let mapWidth = element.width * 5;
    let height = mapHeight / 2;

    for (let i = 0; i < mapWidth; i += 8) {}
  }

  public drawWorld() {
    const element: HTMLCanvasElement = this.canvas.getElement();
    const context: CanvasRenderingContext2D = this.canvas.getContext();
    let tileMapString = "";
    let perc = 0.1;
    let height;
    let heightCnt = 0;
    let firstCnt = 0;
    let mapHeight = element.height * 5;
    let mapWidth = element.width * 5;
    let heightDiffValue = 0;
    //터레인 오브젝트화
    //단위 바꿔야

    var orePercentage;

    setInterval(() => {
      while (this.cnt == 0) {
        context.clearRect(0, 0, mapWidth, mapHeight);

        height = mapHeight / 2;

        for (var i = 0; i < mapWidth; i += 8) {
          if (Math.floor(Math.random() * 2) == 0) {
            heightDiffValue = Math.ceil(Math.random() * 2);
            height -= Math.ceil(Math.random() * heightDiffValue * 8);
          } else {
            height += Math.ceil(Math.random() * heightDiffValue * 8);
          }

          firstCnt = 0;

          for (var j = 0; j < mapHeight; j += 1) {
            worldTerrainSave[i][j] = false;
            if (j > height) {
              if (firstCnt == 0) {
                if (j % 8 == 0) {
                  let randomTop = Math.floor(Math.random() * 3);
                  context.drawImage(
                    this.terrain.tileMap["tile"]["dirt"][randomTop],
                    i,
                    j
                  );
                  worldTerrainSave[i][j] = true;
                  firstCnt++;
                }
              } else {
                worldTerrainSave[i][j] = true;
                if (j % 8 == 0) {
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
        console.log("World Loading Complete");
        this.cnt++;
      }
    }, 500);
  }
}
