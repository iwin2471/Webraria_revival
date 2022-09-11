var Keyboard = function () {
  this.left = false;
  this.right = false;
  this.up = false;
  this.down = false;
  this.w = false;
  this.s = false;
  this.a = false;
  this.d = false;
};

const KEYObj = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  W: 87,
  S: 83,
  A: 65,
  D: 68,
};

// ASCII codes
var KEY_W = 87;
var KEY_S = 83;
var KEY_A = 65;
var KEY_D = 68;

var DIR_E = 1;
var DIR_NE = 2;
var DIR_N = 4;
var DIR_NW = 8;
var DIR_W = 16;
var DIR_SW = 32;
var DIR_S = 64;
var DIR_SE = 128;

var isShift = false;
window.key = null;

function InitializeKeyboard() {
  window.key = new Keyboard();

  $(document).keydown(function ({keyCode}) {
    if (keyCode == 16) isShift = true;
    if (keyCode == KEYObj.LEFT) {
      key.left = true;
    }
    if (keyCode == KEYObj.RIGHT) {
      key.right = true;
    }
    if (keyCode == KEYObj.UP) {
      key.up = true;
    }
    if (keyCode == KEYObj.DOWN) {
      key.down = true;
    }
    if (keyCode == KEYObj.W) {
      key.w = true;
    }
    if (keyCode == KEYObj.S) {
      key.s = true;
    }
    if (keyCode == KEYObj.A) {
      key.a = true;
    }
    if (keyCode == KEYObj.D) {
      key.d = true;
    }
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 16) isShift = false;
    if (e.keyCode == KEYObj.LEFT) {
      key.left = false;
    }
    if (e.keyCode == KEYObj.RIGHT) {
      key.right = false;
    }
    if (e.keyCode == KEYObj.UP) {
      key.up = false;
    }
    if (e.keyCode == KEYObj.DOWN) {
      key.down = false;
    }
    if (e.keyCode == KEYObj.W) {
      key.w = false;
    }
    if (e.keyCode == KEYObj.S) {
      key.s = false;
    }
    if (e.keyCode == KEYObj.A) {
      key.a = false;
    }
    if (e.keyCode == KEYObj.D) {
      key.d = false;
    }
  });
}
