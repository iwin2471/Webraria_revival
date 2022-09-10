import Player from "./player.mts";
import Canvas from "./canvas";
import WorldGen from "./engine/worldgen";
import { startGame } from "./engine/realtime";

function init() {
  const world = new WorldGen();
  Canvas.getInstance().initElement("mainCanvas");
  world.drawWorld();
  startGame();
}

init();
