function FlowField(r) {
  this.resolution = r;
  this.cols = width/this.resolution;
  this.rows = height/this.resolution;
  magnet.push(new Magnet(createVector(width/2+50,height/2),createVector(width/2-50,height/2)));

  this.make2Darray = function(n) {
    var array = [];
    for (var i = 0; i < n; i++) {
       array[i] = [];
    }
    return array;
  }

  this.field = this.make2Darray(this.cols);

  this.update = function() {
    this.add();
    this.init();
  }

  this.add = function() {
    magnet.push(new Magnet(createVector(mouseX+50,mouseY),createVector(mouseX-50,mouseY)));
  }

  this.updateSwap = function() {
    this.addSwap();
    this.init();
  }

  this.addSwap = function() {
    magnet.push(new MagnetSwap(createVector(mouseX+50,mouseY),createVector(mouseX-50,mouseY)));
  }

  this.init = function() {

    var vOffset = 0;
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        var avgDist1 = createVector();
        var avgDist2 = createVector();

        for(var i = 0; i<magnet.length; i++) {
        var posPos = magnet[i].posPos;
        var posNeg = magnet[i].posNeg;

        var fPos = createVector(x*this.resolution+this.resolution/2, y*this.resolution+this.resolution/2);
        var dist1 = p5.Vector.sub(fPos, posPos);
        var dist2 = p5.Vector.sub(posNeg, fPos);

        var div1 = dist1.mag();
        var div2 = dist2.mag();

        dist1.normalize();
        dist2.normalize();

        dist1.div(div1 * 0.01); //how strong flowfield is (how long the line is)
        dist2.div(div2 * 0.01); //how strong flowfield is (how long the line is)

        avgDist1.add(dist1);
        avgDist2.add(dist2);

        }

        avgDist1.div(magnet.length);
        avgDist2.div(magnet.length);

        this.field[x][y] = p5.Vector.add(avgDist1,avgDist2);
        vOffset++;
      }
    }
  }

  this.display = function() {
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        drawVector(this.field[x][y],x*this.resolution,y*this.resolution,this.resolution-2);
      }
    }
  }

  this.lookup = function(lookup) {
    var column = Math.floor(constrain(lookup.x/this.resolution,0,this.cols-1));
    var row = Math.floor(constrain(lookup.y/this.resolution,0,this.rows-1));
    return this.field[column][row].copy();
  }

  var drawVector = function(v, x, y, scayl) {
    push();
    translate(x,y);
    stroke(200,100);
    rotate(v.heading());
    // var len = v.mag()*scayl;
    line(0,0,5,0);
    pop();
  }
}






