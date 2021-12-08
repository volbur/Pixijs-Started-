let app;
let player;
let enemy;
let speed = 4;

window.onload = function () {
  app = new PIXI.Application({
    width: 800,
    heigth: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.querySelector('#gameDiv').appendChild(app.view);
  app.stage.interactive = true;

  // player object
  player = new PIXI.Sprite.from('images/player.png');
  player.anchor.set(0.5);
  player.x = 16;
  player.y = app.view.height / 2;
  app.stage.addChild(player);

  enemy = new PIXI.Sprite.from('images/player.png');
  enemy.anchor.set(0.5);
  enemy.x = app.view.width - 16;
  enemy.y = app.view.height / 2;
  app.stage.addChild(enemy);

  app.ticker.add(gameLoop);
};

function gameLoop(delta) {
  player.x += speed;
  enemy.x -= speed;

  if (rectsIntersect(player, enemy)) {
    console.log('done: speed = 0');
    speed = 0;
  } 
}

function rectsIntersect(a, b) {
  let aBox = a.getBounds();
  let bBox = b.getBounds();

  return aBox.x + aBox.width > bBox.x &&
         aBox.x < bBox.x + bBox.width &&
         aBox.y + aBox.heigth > bBox.y &&
         aBox.y < bBox.y + bBox.heigth;
}
