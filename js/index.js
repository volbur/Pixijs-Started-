let app,
  bgBack,
  bgMiddle,
  bgFront,
  bgX = 0,
  bgSpeed = 1;

window.onload = function () {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.body.appendChild(app.view);

  app.loader.baseUrl = '../assets/forest_pack';
  app.loader
    .add('bgBack', 'trees-back.png')
    .add('bgMiddle', 'trees-middle.png')
    .add('bgFront', 'trees-front.png');
  app.loader.onComplete.add(initLevel);
  app.loader.load();
};

function gameLoop(delta) {
  updateBg();
}

function initLevel() {
  bgBack = createBg(app.loader.resources['bgBack'].texture);
  bgMiddle = createBg(app.loader.resources['bgMiddle'].texture);
  bgFront = createBg(app.loader.resources['bgFront'].texture);

  document.addEventListener('keyup', switchDir);

  app.ticker.add(gameLoop);
}

function createBg(texture) {
  let tiling = new PIXI.TilingSprite(texture, 800, 600);
  tiling.position.set(0, 0);
  tiling.scale.x = 3.4;
  tiling.scale.y = 3.75;
  app.stage.addChild(tiling);

  return tiling;
}

function updateBg() {
  bgX = bgX + bgSpeed;
  bgFront.tilePosition.x = bgX;
  bgMiddle.tilePosition.x = bgX / 2;
  bgBack.tilePosition.x = bgX / 4;
}

function switchDir(e) {
  switch (e.keyCode) {
    case 37:
      // think it's better to just invert the direction
      bgSpeed = bgSpeed * -1;
      break;
    case 39:
      bgSpeed = bgSpeed * -1;
      break;
    case 32:
      // bit of an extra here, stops and plays.
      bgSpeed = Math.abs(Math.abs(bgSpeed) - 1);
      break;
  }
}
