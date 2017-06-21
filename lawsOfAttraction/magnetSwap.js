function MagnetSwap(posPos, posNeg) {
  this.posPos = posNeg;
  this.posNeg = posPos;

  this.display = function() {
  	fill(230,20);
  	noStroke();
  	rect(posNeg.x,posNeg.y-10,80,20);
  }
  
}