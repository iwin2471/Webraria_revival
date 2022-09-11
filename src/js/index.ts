import Player from "./player.mts";
import Canvas from "./canvas";
import World from "./engine/world/world";
import { Game } from "./engine/game";

function init() {
  const world = new World();
  const game = new Game();
  Canvas.getInstance().initElement("mainCanvas");
  world.generateWorld();
  game.startGame();
}

init();
