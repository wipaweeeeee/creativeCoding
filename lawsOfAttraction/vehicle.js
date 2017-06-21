function Vehicle(x,y,ms,mf) {
  this.position = createVector(x,y);
  this.acceleration = createVector(0,0);
  this.velocity = createVector(0,0);
  this.r = 4;
  this.maxspeed = ms || 4;
  this.maxforce = mf || 0.1;
  this.lifespan = 10;

  this.run = function() {
    this.update();
    this.borders();
    this.display();
  }

  this.follow = function(flow) {
    var desired = flow.lookup(this.position);
    desired.mult(this.maxspeed);
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }

  this.applyForce = function(force) {
    this.acceleration.add(force);
  }

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.lifespan -= 0.1;
  }

  this.borders = function() {
    if (this.position.x < -this.r) this.position.x = width+this.r;
    if (this.position.y < -this.r) this.position.y = height+this.r;
    if (this.position.x > width+this.r) this.position.x = -this.r;
    if (this.position.y > height+this.r) this.position.y = -this.r;
  }
      
  this.display = function() {
    var theta = this.velocity.heading() + PI/2;
    fill(180,80);
    noStroke();
    push();
    translate(this.position.x,this.position.y);
    rotate(theta);
    ellipse(0,0,1,3);
    pop();
  }

  this.isDead = function() {
    if(this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }
}



