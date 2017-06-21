var y1 = 90;
var y2 = 108;
var y3 = 289;
var y4 = 307;
var y5 = 126;
var y6 = 144;
var y7 = 634;
var y8 = 616;
var y9 = 654;
var y10 = 192;
var y11 = 210;
var y12 = 331;
var y13 = 349;
var y14 = 77;
var y15 = 95;
var y16 = 662;
var y17 = 643;
var y18 = 681;
var y19 = 108;
var y20 = 127;
var y21 = 436;
var y22 = 417;
var y23 = 454;
var y24 = 1;
var y25 = 17;
var y26 = 217;
var y27 = 235;
var y28 = 543;
var y29 = 524;
var y30 = 560;
var y31 = 461;
var y32 = 479;

//var value;
var r = 255;
var g = 210;
var b = 251;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0)
  //background('#b3ffd5');
  background(random(128), 255, random(255));
}

function draw() {
  noStroke();
  y1 = y1 + 2;
  y2 = y2 + 2;
  y3 = y3 + 2;
  y4 = y4 + 2;
  y5 = y5 + 2;
  y6 = y6 + 2;
  y7 = y7 - 2;
  y8 = y8 - 2;
  y9 = y9 - 2;
  y10 = y10 + 2;
  y11 = y11 + 2;
  y12 = y12 + 2;
  y13 = y13 + 2;
  y14 = y14 + 2;
  y15 = y15 + 2;
  y16 = y16 - 2;
  y17 = y17 - 2;
  y18 = y18 - 2;
  y19 = y19 + 2;
  y20 = y20 + 2;
  y21 = y21 - 2;
  y22 = y22 - 2;
  y23 = y23 - 2;
  y24 = y24 + 2;
  y25 = y25 + 2;
  y26 = y26 + 2;
  y27 = y27 + 2;
  y28 = y28 - 2;
  y29 = y29 - 2;
  y30 = y30 - 2;
  y31 = y31 + 2;
  y32 = y32 + 2;

  if (y7 < 269) {
    y7 = 269;
  }

  if (y8 < 251) {
    y8 = 251;
  }

  if (y9 < 287) {
    y9 = 287;
  }

  if (y16 < 342) {
    y16 = 342;
  }

  if (y17 < 323) {
    y17 = 323;
  }

  if (y18 < 360) {
    y18 = 360;
  }

  if (y21 < 113) {
    y21 = 113;
  }

  if (y22 < 95) {
    y22 = 95;
  }

  if (y23 < 131) {
    y23 = 131;
  }

  if (y24 > 243) {
    y24 = 243;
  }
  
  if (y25 > 260) {
    y25 = 260;
  }
  
  if (y28 < 216) {
    y28 = 216;
  }
  
  if (y29 < 197) {
    y29 = 197;
  }
  
  if (y30 < 234) {
    y30 = 234;
  }
  
  //most left down
  fill(r, g, b);
  beginShape();
  vertex(44, 55);
  vertex(80, 36);
  vertex(115, 55);
  vertex(80, 72);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(44, 55);
  vertex(80, 72);
  vertex(80, y2);
  vertex(44, y1);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(80, 72);
  vertex(115, 55);
  vertex(115, y1);
  vertex(80, y2);
  endShape(CLOSE);

  //third left down
  fill(r, g, b);
  beginShape();
  vertex(166, 91);
  vertex(201, 75);
  vertex(237, 91);
  vertex(201, 108);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(166, 91);
  vertex(201, 108);
  vertex(201, y6);
  vertex(166, y5);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(201, 108);
  vertex(237, 91);
  vertex(237, y5);
  vertex(201, y6);
  endShape(CLOSE);

  //2nd below second left down
  fill(r, g, b);
  beginShape();
  vertex(115, 254);
  vertex(150, 237);
  vertex(185, 254);
  vertex(150, 273);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(115, 254);
  vertex(150, 273);
  vertex(150, y4);
  vertex(115, y3);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(150, 273);
  vertex(185, 254);
  vertex(185, y3);
  vertex(150, y4);
  endShape(CLOSE);

  //below second left down
  fill(r, g, b);
  beginShape();
  vertex(115, 209);
  vertex(150, 192);
  vertex(185, 209);
  vertex(150, 228);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(115, 209);
  vertex(150, 228);
  vertex(150, 263);
  vertex(115, 245);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(150, 228);
  vertex(185, 209);
  vertex(185, 245);
  vertex(150, 263);
  endShape(CLOSE);

  //second left down
  fill(r, g, b);
  beginShape();
  vertex(115, 155);
  vertex(150, 137);
  vertex(185, 155);
  vertex(150, 173);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(115, 155);
  vertex(150, 173);
  vertex(150, 209);
  vertex(115, 191);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(150, 173);
  vertex(185, 155);
  vertex(185, 191);
  vertex(150, 209);
  endShape(CLOSE);

  //4th left BOTTOM UP
  fill(r, g, b);
  beginShape();
  vertex(220, y7);
  vertex(256, y8);
  vertex(292, y7);
  vertex(256, y9);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(220, y7);
  vertex(256, y9);
  vertex(256, 688);
  vertex(220, 670);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(256, y9);
  vertex(292, y7);
  vertex(292, 670);
  vertex(256, 688);
  endShape(CLOSE);

  //4th left down
  fill(r, g, b);
  beginShape();
  vertex(220, 190);
  vertex(256, 171);
  vertex(292, 190);
  vertex(256, 207);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(220, 190);
  vertex(256, 207);
  vertex(256, 243);
  vertex(220, 226);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(256, 207);
  vertex(292, 190);
  vertex(292, 226);
  vertex(256, 243);
  endShape(CLOSE);

  //4th left TOP - down
  fill(255, 164, 238);
  beginShape();
  vertex(220, 0);
  vertex(256, 0);
  vertex(256, 191);
  vertex(220, 173);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(256, 0);
  vertex(292, 0);
  vertex(292, 173);
  vertex(256, 191);
  endShape(CLOSE);

  //4th left BOTTOM UP
  fill(r, g, b);
  beginShape();
  vertex(220, y7);
  vertex(256, y8);
  vertex(292, y7);
  vertex(256, y9);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(220, y7);
  vertex(256, y9);
  vertex(256, 688);
  vertex(220, 670);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(256, y9);
  vertex(292, y7);
  vertex(292, 670);
  vertex(256, 688);
  endShape(CLOSE);

  //7th top
  fill(r, g, b);
  beginShape();
  vertex(333, 132);
  vertex(368, 113);
  vertex(405, 132);
  vertex(368, 150);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(333, 132);
  vertex(368, 150);
  vertex(368, 185);
  vertex(333, 167);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(368, 150);
  vertex(405, 132);
  vertex(405, 167);
  vertex(368, 185);
  endShape(CLOSE);

  //7th fourth from top
  fill(r, g, b);
  beginShape();
  vertex(333, 296);
  vertex(368, 277);
  vertex(405, 296);
  vertex(368, 313);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(333, 296);
  vertex(368, 313);
  vertex(368, y13);
  vertex(333, y12);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(368, 313);
  vertex(405, 296);
  vertex(405, y12);
  vertex(368, y13);
  endShape(CLOSE);

  //7th third from top
  fill(r, g, b);
  beginShape();
  vertex(333, 252);
  vertex(368, 233);
  vertex(405, 252);
  vertex(368, 270);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(333, 252);
  vertex(368, 270);
  vertex(368, 305);
  vertex(333, 287);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(368, 270);
  vertex(405, 252);
  vertex(405, 287);
  vertex(368, 305);
  endShape(CLOSE);

  //7th second from top
  fill(r, g, b);
  beginShape();
  vertex(333, 208);
  vertex(368, 189);
  vertex(405, 208);
  vertex(368, 225);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(333, 208);
  vertex(368, 225);
  vertex(368, 261);
  vertex(333, 243);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(368, 225);
  vertex(405, 208);
  vertex(405, 243);
  vertex(368, 261);
  endShape(CLOSE);

  //5th down
  fill(r, g, b);
  beginShape();
  vertex(277, 157);
  vertex(313, 138);
  vertex(349, 157);
  vertex(313, 174);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(277, 157);
  vertex(313, 174);
  vertex(313, y11);
  vertex(277, y10);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(313, 174);
  vertex(349, 157);
  vertex(349, y10);
  vertex(313, y11);
  endShape(CLOSE);

  /*6th float
  fill(r, g, b);
  beginShape();
  vertex(297, 94);
  vertex(333, 76);
  vertex(369, 94);
  vertex(333, 112);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(297, 94);
  vertex(333, 112);
  vertex(333, 148);
  vertex(297, 130);
  endShape(CLOSE);
  
  fill(199, 249, 220);
  beginShape();
  vertex(333, 112);
  vertex(369, 94);
  vertex(369, 130);
  vertex(333, 148);
  endShape(CLOSE);*/

  //8th down
  fill(r, g, b);
  beginShape();
  vertex(423, 42);
  vertex(459, 23);
  vertex(495, 42);
  vertex(459, 59);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(423, 42);
  vertex(459, 59);
  vertex(459, y15);
  vertex(423, y14);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(459, 59);
  vertex(495, 42);
  vertex(495, y14);
  vertex(459, y15);
  endShape(CLOSE);

  //11th bottom UP
  fill(r, g, b);
  beginShape();
  vertex(657, y21);
  vertex(691, y22);
  vertex(727, y21);
  vertex(691, y23);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(657, y21);
  vertex(691, y23);
  vertex(691, windowHeight);
  vertex(657, windowHeight);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(691, y23);
  vertex(727, y21);
  vertex(727, windowHeight);
  vertex(691, windowHeight);
  endShape(CLOSE);

  //10th static
  fill(r, g, b);
  beginShape();
  vertex(597, 171);
  vertex(633, 153);
  vertex(670, 171);
  vertex(633, 189);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(597, 171);
  vertex(633, 189);
  vertex(633, windowHeight);
  vertex(597, windowHeight);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(633, 189);
  vertex(670, 171);
  vertex(670, windowHeight);
  vertex(633, windowHeight);
  endShape(CLOSE);

  //10th down
  fill(r, g, b);
  beginShape();
  vertex(563, 73);
  vertex(597, 54);
  vertex(635, 73);
  vertex(597, 91);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(563, 73);
  vertex(597, 91);
  vertex(597, y20);
  vertex(563, y19);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(597, 91);
  vertex(635, 73);
  vertex(635, y19);
  vertex(597, y20);
  endShape(CLOSE);

  //9th bottom UP
  fill(r, g, b);
  beginShape();
  vertex(507, y16);
  vertex(541, y17);
  vertex(577, y16);
  vertex(541, y18);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(507, y16);
  vertex(541, y18);
  vertex(541, windowHeight);
  vertex(507, windowHeight);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(541, y18);
  vertex(577, y16);
  vertex(577, windowHeight);
  vertex(541, windowHeight);
  endShape(CLOSE);

  //9th 2nd down
  fill(r, g, b);
  beginShape();
  vertex(507, 288);
  vertex(541, 271);
  vertex(577, 288);
  vertex(541, 306);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(507, 288);
  vertex(541, 306);
  vertex(541, 341);
  vertex(507, 323);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(541, 306);
  vertex(577, 288);
  vertex(577, 323);
  vertex(541, 341);
  endShape(CLOSE);

  //9th TOP - down
  fill(255, 164, 238);
  beginShape();
  vertex(507, 0);
  vertex(541, 0);
  vertex(541, 287);
  vertex(507, 270);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(541, 0);
  vertex(577, 0);
  vertex(577, 270);
  vertex(541, 287);
  endShape(CLOSE);
  
  //12th static
  fill(r, g, b);
  beginShape();
  vertex(800, 180);
  vertex(837, 162);
  vertex(872, 180);
  vertex(837, 199);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(800, 180);
  vertex(837, 199);
  vertex(837, windowHeight);
  vertex(800, windowHeight);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(837, 199);
  vertex(872, 180);
  vertex(872, windowHeight);
  vertex(837, windowHeight);
  endShape(CLOSE);
  
  //13th static
  fill(r, g, b);
  beginShape();
  vertex(890, 260);
  vertex(926, 243);
  vertex(960, 260);
  vertex(926, 279);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(890, 260);
  vertex(926, 279);
  vertex(926, 314);
  vertex(890, 295);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(926, 279);
  vertex(960, 260);
  vertex(960, 295);
  vertex(926, 314);
  endShape(CLOSE);

  //13th TOP down
  fill(255, 164, 238);
  beginShape();
  vertex(890, 0);
  vertex(926, 0);
  vertex(926, y25);
  vertex(890, y24);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(926, 0);
  vertex(960, 0);
  vertex(960, y24);
  vertex(926, y25);
  endShape(CLOSE);
  
  //15th down
  fill(r, g, b);
  beginShape();
  vertex(1004, 182);
  vertex(1040, 164);
  vertex(1075, 182);
  vertex(1040, 199);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(1004, 182);
  vertex(1040, 199);
  vertex(1040, y27);
  vertex(1004, y26);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(1040, 199);
  vertex(1075, 182);
  vertex(1075, y26);
  vertex(1040, y27);
  endShape(CLOSE);
  
  //15th square second from top
  fill(r, g, b);
  beginShape();
  vertex(1004, 129);
  vertex(1040, 111);
  vertex(1075, 129);
  vertex(1040, 147);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(1004, 129);
  vertex(1040, 147);
  vertex(1040, 182);
  vertex(1004, 164);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(1040, 147);
  vertex(1075, 129);
  vertex(1075, 164);
  vertex(1040, 182);
  endShape(CLOSE);
  
  //15th square first from top
  fill(r, g, b);
  beginShape();
  vertex(1004, 75);
  vertex(1040, 56);
  vertex(1075, 75);
  vertex(1040, 93);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(1004, 75);
  vertex(1040, 93);
  vertex(1040, 128);
  vertex(1004, 111);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(1040, 93);
  vertex(1075, 75);
  vertex(1075, 111);
  vertex(1040, 128);
  endShape(CLOSE);
  
  //14th down
  fill(r, g, b);
  beginShape();
  vertex(950, 287);
  vertex(987, 270);
  vertex(1022, 287);
  vertex(987, 305);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(950, 287);
  vertex(987, 305);
  vertex(987, windowHeight);
  vertex(950, windowHeight);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(987, 305);
  vertex(1022, 287);
  vertex(1022, windowHeight);
  vertex(987, windowHeight);
  endShape(CLOSE);
  
  //16th BUTTOM UP
  fill(r, g, b);
  beginShape();
  vertex(1089, y28);
  vertex(1124, y29);
  vertex(1160, y28);
  vertex(1124, y30);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(1089, y28);
  vertex(1124, y30);
  vertex(1124, windowHeight);
  vertex(1089, windowHeight);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(1124, y30);
  vertex(1160, y28);
  vertex(1160, windowHeight);
  vertex(1124, windowHeight);
  endShape(CLOSE);
  
  //17th square second from top
  fill(r, g, b);
  beginShape();
  vertex(1221, 292);
  vertex(1256, 273);
  vertex(1292, 292);
  vertex(1256, 310);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(1221, 292);
  vertex(1256, 310);
  vertex(1256, 345);
  vertex(1221, 328);
  endShape(CLOSE);
  
  fill(199, 249, 220);
  beginShape();
  vertex(1256, 310);
  vertex(1292, 292);
  vertex(1292, 328);
  vertex(1256, 345);
  endShape(CLOSE);
  
  //17th TOP down
  fill(255, 164, 238);
  beginShape();
  vertex(1221, 0);
  vertex(1256, 0);
  vertex(1256, 287);
  vertex(1221, 270);
  endShape(CLOSE);

  fill(199, 249, 220);
  beginShape();
  vertex(1256, 0);
  vertex(1292, 0);
  vertex(1292, 270);
  vertex(1256, 287);
  endShape(CLOSE);
  
  //17th BOTTOM
  fill(r, g, b);
  beginShape();
  vertex(1221, 425);
  vertex(1256, 409);
  vertex(1292, 425);
  vertex(1256, 444);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(1221, 425);
  vertex(1256, 444);
  vertex(1256, y32);
  vertex(1221, y31);
  endShape(CLOSE);
  
  fill(199, 249, 220);
  beginShape();
  vertex(1256, 444);
  vertex(1292, 425);
  vertex(1292, y31);
  vertex(1256, y32);
  endShape(CLOSE);
  
  //18th square
  fill(r, g, b);
  beginShape();
  vertex(1313, 357);
  vertex(1348, 338);
  vertex(1383, 357);
  vertex(1348, 374);
  endShape(CLOSE);

  fill(255, 164, 238);
  beginShape();
  vertex(1313, 357);
  vertex(1348, 374);
  vertex(1348, 411);
  vertex(1313, 393);
  endShape(CLOSE);
  
  fill(199, 249, 220);
  beginShape();
  vertex(1348, 374);
  vertex(1383, 357);
  vertex(1383, 393);
  vertex(1348, 411);
  endShape(CLOSE);

}

function mouseDragged() {
  //value = value + 5;
  r = r + 3;
  g = g + 3;
  b = b + 3;
  //if (value > 255) {
  if (r > 255) {
    r = 255;
  }

  if (g > 255) {
    g = 210;
  }

  if (b > 255) {
    b = 251;
  }

}