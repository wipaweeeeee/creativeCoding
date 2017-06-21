var Attractor = function() {
  this.position = createVector(width/2, height/3);
  this.mass = 8;
  this.G = 1;

  this.calculateAttraction = function(vehicles) {
    var force = p5.Vector.sub(this.position, vehicles.position);      
    var distance = force.mag();                            
    distance = constrain(distance, 20, 30);                                  
    force.normalize(); 
    var strength = (this.G * this.mass * vehicles.r) / (distance * distance);
    force.mult(strength);
    return force;
  };
};
