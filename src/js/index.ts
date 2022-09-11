import Canvas from "./canvas";
import { Game } from "./engine/game";

function init() {
  const game = new Game();
  Canvas.getInstance().initElement("mainCanvas");
  game.startGame();
}

init();
