function Magnet(posPos, posNeg) {
  this.posPos = posPos;
  this.posNeg = posNeg;

  this.display = function() {
  	fill(230,20);
  	noStroke();
  	rect(posNeg.x,posNeg.y-10,80,20);
  }
  
}