var debug = false;
var flowfield;
var vehicles = [];
var magnet = [];
var c;

function setup() {

  c = createCanvas(windowWidth, windowHeight);
  flowfield = new FlowField(20);

  flowfield.init();
  background(0);

  // saveCanvas(c,'myCanvas','jpg');
}

function draw() {
  background(0,3);

  if (debug) flowfield.display();

  for(var i = 0; i<20; i++) {
  vehicles.push(new Vehicle(random(width), random(height), random(1,4), random(0.1, 0.5)));
  }

  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].follow(flowfield);
    vehicles[i].run();

    if(vehicles[i].isDead()) {
      vehicles.splice(i,1);
    }
  }

}


function keyPressed() {
  if (key == ' ') {
    // debug = !debug;
    saveCanvas(c,'myCanvas','jpg');
  }
}

function mousePressed() {
  if(mouseButton == LEFT)
    flowfield.update();
  if(mouseButton == RIGHT)
    flowfield.updateSwap();
}


