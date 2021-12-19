let app, knight, wolf;

class Monster extends PIXI.Sprite {
  constructor(x = 0, y = 0, texture, name = 'none', hp =  100, speed = 5) {
    super(texture);
    this.anchor.set(0.5);
    this.name = name;
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.speed = speed;
  }

  status() {
    return this.name + ' has ' + this.hp + ' hitpoints ';
  }

  move() {
    this.x = this.x + this.speed;
    if (this.x > app.view.width - this.width / 2 || this.x < this.width / 2) {
      this.speed = -this.speed;
    }
  }
}

window.onload = function () {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.body.appendChild(app.view);

  app.loader.baseUrl = '../sprites';
  app.loader.add('knight', 'knight.png').add('wolf', 'wolf.png');
  app.loader.onComplete.add(doneLoading);
  app.loader.load();
};

function doneLoading() {
  createMonsters();
  app.ticker.add(gameLoop);
}

function gameLoop(delta) {
  knight.move();
  wolf.move();
}

function createMonsters() {
  knight = new Monster(
    100,
    100,
    app.loader.resources['knight'].texture,
    'Knight',
    200,
    6
  );
  wolf = new Monster(
    100,
    500,
    app.loader.resources['wolf'].texture,
    'Wolf',
    100,
    10
  );
  wolf.scale.set(-0.4, 0.4);
  app.stage.addChild(knight);
  app.stage.addChild(wolf);
}

console.log('PIXI.Sprite********: ', PIXI.Sprite.texture);