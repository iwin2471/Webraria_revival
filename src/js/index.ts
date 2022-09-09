import Player from "./player.mts";
import Canvas from "./canvas";
import { drawWorld } from "./worldgen";
import { startGame } from "./realtime";

function init() {
  Canvas.getInstance().initElement("mainCanvas");
  drawWorld();
  startGame();
}

init();
