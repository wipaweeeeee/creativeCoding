//modified from Shiffman's Nature of Code

var movers = [];

var attractor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 500; i++) {
    movers[i] = new Mover(random(0.25,1), random(width), random(height));
  }
  attractor = new Attractor();
}

function draw() {
  background(0);

  attractor.display();

  for (var i = 0; i < movers.length; i++) {
    var force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].display();
  }
}