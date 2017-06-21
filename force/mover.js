//modified from Shiffman's Nature of Code

var Mover = function(mass, x, y) {
  this.position = createVector(x, y);
  this.velocity = createVector(0.1, 0);
  this.acceleration = createVector(0,0);
  this.mass = mass;

  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  };
    
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.display = function() {
    // noStroke();
    stroke(255,80);
    strokeWeight(1);
    fill(255);
    ellipse(this.position.x, this.position.y, this.mass*5, this.mass*5);
    line(width/2, height/2, this.position.x, this.position.y);
  };
};
  

