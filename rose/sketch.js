var k;
var n;
var d;
var angle = 0;
var radius;
var offset;


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(252,211,206);
  // n = random(1,9);
  // d = random(1,9);
  radius = 60;
  offset = height/2;
  // n = 1;
  // d = 1;
};

function draw() {
  background(252,211,206,5);
  angle += 0.03;

    k = 1/6;
    var x = cos(k*angle)*cos(angle)*250;
    var y = cos(k*angle)*sin(angle)*250;

    var a = cos(angle*3)*radius + noise(angle)*10 + 2;
    var b = sin(angle*3)*radius + noise(angle*10)*10 + 2;

    stroke(250,183,174,90);
    noFill();
    // fill(100);
    // ellipse(x+width/2,y+height/2,a/10,b/10);

    ellipse(x+width/2,y+height/2,a,b);
    console.log(k);

};