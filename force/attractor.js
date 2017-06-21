//modified from Shiffman's Nature of Code

var Attractor = function() {
  this.position = createVector(width/2, height/2);
  this.mass = 10;
  this.G = 1;

  this.calculateAttraction = function(m) {
    var force = p5.Vector.sub(this.position, m.position);      
    var distance = force.mag();                            
    distance = constrain(distance, 5, 15);                                  
    force.normalize(); 
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
  };

  this.display = function() {
    noFill();
    ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
  };
};

