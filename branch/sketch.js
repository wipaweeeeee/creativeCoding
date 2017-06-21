function Branch(x1, y1, angle, len, depth, xSpeed, ySpeed) {

	this.x1 = x1;
	this.y1 = y1;
	this.angle = angle;
	this.len = len;
	this.depth = depth;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.xDir = random(1) > 0.5 ? 1 : -1;
// 	this.yDir = random(1) > 0.5 ? 1 : -1;
  this.yDir = -1;
	
	this.xLast = this.x1;
	this.yLast = this.y1;

	this.childAngle;
	this.children = [];

	this.update = function() {
		// if we reach the end, stop drawing
		if (this.depth == 6) {
			fill(255);
		 	ellipse(this.x1, this.y1, 10, 10);
			return;
		}
		// otherwise, it draws itself until xLast >= x2 || yLast >= y2
		if (dist(this.x1, this.y1, this.xLast, this.yLast) < this.len) {
			this.xLast += this.xSpeed * this.xDir;
			this.yLast += this.ySpeed * this.yDir;
			line(this.x1, this.y1, this.xLast, this.yLast);
		} else {
			line(this.x1, this.y1, this.xLast, this.yLast);
			if (this.children.length === 0) {
				for (var i = 0; i < this.depth + 1; ++i) {
					this.children.push(new Branch(this.xLast, this.yLast, QUARTER_PI, 
					this.len*3/4, this.depth+1, random(0.5, 1), random(0.5, 1)));
				}
			} else {
				for (i = 0; i < this.children.length; ++i) {
					
					this.children[i].update();
				
				}
			}
		}
		return;
	}
}

var branches = [];
var branchLen;
var angle;
var depth;
var xSpeed;
var allCoordinates;

function setup() {
	
	createCanvas(1000, 1000);
	
	branchLen = 120;

	depth = 1;
	
	xSpeed = random(0.5, 1);
	ySpeed = random(0.5, 1);
	
	allCoordinates = [];
	// frameRate(1);

}

function draw() {
	
	background(0);
	stroke(255);
	// noLoop();
	
	for (var i = 0; i < branches.length; ++i) {

		var returnedVal = branches[i].update();
		
	}

}

function mousePressed() {
	var angle = QUARTER_PI;
	branches.push(new Branch(mouseX, mouseY, angle, branchLen, depth, xSpeed, ySpeed));
}