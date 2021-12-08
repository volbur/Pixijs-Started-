let app;
let player;
let bullets = [];

window.onload = function () {
  app = new PIXI.Application({
    width: 800,
    heigth: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.querySelector('#gameDiv').appendChild(app.view);
  app.stage.interactive = true;
//   app.stage.on("pointerdown", fireBullet);
  document.querySelector("#gameDiv").addEventListener("pointerdown", fireBullet);

  player = new PIXI.Sprite.from('images/player.png');
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;

  app.stage.addChild(player);

  app.ticker.add(gameLoop);
}

function fireBullet(e) {
    console.log('FIRE');
}
