let app;

window.onload = function() {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xAAAAAA,
  });

  document.body.appendChild(app.view);
}