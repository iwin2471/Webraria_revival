import Player from "../player/user_player.mts";
import PlayerControll from "./player_controll";
import World from "./world/world";
import Canvas from "./canvas";
import Terrain from "./world/tilemap";
import Behavior from "./behaviorable";

export default class Game {
  private canvas = Canvas.getInstance();
  private element = this.canvas.getElement();
  private context = this.canvas.getContext();
  private world = new World();
  private frame = 0;
  private terrian;
  private test = new PlayerControll();
  private readonly registeredControllers: Array<Behavior> = new Array<Behavior>(this.test)
  elemLeft: number;
  elemTop: number;

  startGame(name: string) {
    const player = new Player(name, "Resource/Character/3.png");
    this.terrian = Terrain.getInstance();
    this.canvas = Canvas.getInstance();
    this.element = this.canvas.getElement();
    this.context = this.canvas.getContext();
    this.elemLeft = this.element.offsetLeft + this.element.clientLeft;
    this.elemTop = this.element.offsetTop + this.element.clientTop;
    this.element.onclick = ({ clientX, clientY }) => {
      const x = clientX - this.element.getBoundingClientRect().left;
      const y = clientY - this.element.getBoundingClientRect().top;
      console.log(x,y);

      console.log(this.terrian.worldTerrainSave[x][y]);
    };
 
    player.setPosition(0, 0);
    this.test.onMainPlayerEnter(player);
    this.world.generateWorld();
    this.onUpdate(this.frame);
  }

  private onUpdate(frame:number): void {
    this.frame = frame
    this.registeredControllers.forEach(controller => {
      controller.onUpdate(frame);
    });

    window.requestAnimationFrame(() => this.onUpdate(++frame));
  }
}

