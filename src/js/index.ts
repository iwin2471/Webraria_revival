import Canvas from "./engine/canvas";
import Game from "./engine/game";

function init() {
  const game = new Game();
  Canvas.getInstance().initElement("main_canvas");
  game.startGame("Johnsu");
}

init();
