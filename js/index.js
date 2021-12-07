let app;
let player;
let keys = {};

window.onload = function () {
  app = new PIXI.Application({
    width: 800,
    heigth: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.querySelector('#gameDiv').appendChild(app.view);

  player = new PIXI.Sprite.from('images/player.png');
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;

  app.stage.addChild(player);

  window.addEventListener('keydown', keysDown);
  window.addEventListener('keyup', keysUp);

  keysDiv = document.querySelector('#keys');

  app.ticker.add(gameLoop);

  function keysDown(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = true;
    console.log(keys);
  }

  function keysUp(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = false;
    console.log(keys);
  }

  function gameLoop() {
    keysDiv.innerHTML = JSON.stringify(keys);

    if (keys['87']) {
      player.y -= 5;
    }
    if (keys['68']) {
      player.x += 5;
    }
    if (keys['65']) {
      player.x -= 5;
    }
    if (keys['83']) {
      player.y += 5;
    }
  }
};
