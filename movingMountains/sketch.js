var vehicles = [];
var interval = 6;
var startAngle = 0;
var attractor;
var cirAngle = 0;


function setup() {

  createCanvas(windowWidth,windowHeight);

  for (var i = 0; i < 20; i++) {
    var xCircle = cos(i) * 200;
    var yCircle = sin(i) * 200;
    vehicles.push(new Vehicle(xCircle+width/2,yCircle+height/3,random(5,8)));
  }

  attractor = new Attractor();
}

function draw() {
  background(255);
  startAngle += interval/width

for (var x = -300; x < width+200; x += interval) {
    var angle = 3*TWO_PI * x / width + startAngle;
    var y = sin(angle) * 80 * noise(angle) + height/4*3
    noFill();
    stroke(0,70);
    strokeCap(ROUND);
    line(x,y,x+300,y+200)
  }
  
  for (var i = 0; i < vehicles.length; i++) {

    var force = attractor.calculateAttraction(vehicles[i]);
    vehicles[i].separate(vehicles);
    vehicles[i].connect(vehicles);
    vehicles[i].applyForce(force);
    vehicles[i].update();
    vehicles[i].display();

    if (vehicles[i].isDead()) {
      this.vehicles.splice(i,1);
    } 
  }
}


function mouseClicked() {
  for (var i = 0; i < 8; i++) {
    var xCircle = cos(i) * 30;
    var yCircle = sin(i) * 30;
    vehicles.push(new Vehicle(xCircle+mouseX,yCircle+mouseY,random(3,8)));
  }
}


