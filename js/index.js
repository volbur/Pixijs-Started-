let app;
let pointerIsDown = false;
let pointerIsOver = false;
const NORMAL = 0xffffff;
const OVER = 0x00ff00;
const DOWN = 0xff0000;

window.onload = function() {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xbbbbbb,
  });

  document.body.appendChild(app.view);

  let rect = new PIXI.Graphics();
  rect.beginFill(NORMAL);
  rect.drawRect(app.view.width / 2 - 100, app.view.height / 2 - 100, 200, 200);
  rect.endFill();
  rect.interactive = true;
  rect.buttonMode = true;
  rect.on("pointerup", doPointerUp);
  rect.on("pointerdown", doPointerDown);
  rect.on("pointerover", doPointerOver);
  rect.on("pointerout", doPointerOut);
  rect.on("pointerupoutside", doPointerUpOutside);
  let rectShadow = new PIXI.Graphics();
  rectShadow.beginFill(0x555555);
  rectShadow.drawRect(
    app.view.width / 2 - 92,
    app.view.height / 2 - 92,
    200,
    200,
  );
  rectShadow.endFill();
  rectShadow.alpha = 0.4;
  rectShadow.blendMode = PIXI.BLEND_MODES.EXCLUSION;
  app.stage.addChild(rectShadow);
  app.stage.addChild(rect);

  console.log(app.stage);
  app.ticker.add(gameLoop);
};

function gameLoop(delta) {}

function doPointerUp() {
  pointerIsDown = false;
  if (!pointerIsOver) {
    this.tint = NORMAL;
  } else {
    this.tint = OVER;
  }
}

function doPointerDown() {
  this.tint = DOWN;
  pointerIsDown = true;
}

function doPointerOver() {
  if (!pointerIsDown) {
    this.tint = OVER;
    pointerIsOver = true;
  }
}

function doPointerOut() {
  pointerIsOver = false;
  if (!pointerIsDown) {
    this.tint = NORMAL;
  }
}

function doPointerUpOutside() {
  this.tint = NORMAL;
  pointerIsOver = false;
  pointerIsDown = false;
}