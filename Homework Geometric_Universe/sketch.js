//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//06_Exercise02 - Geometric Universe

function setup() {
  createCanvas(1000, 500);
  strokeWeight(8);
  noFill();
  //frameRate(1);
  noLoop();
}

function draw() {
  background(50);
  //Create 300 shares using the for-loop
  for (var i = 0; i < 300; i++) {
  	//...code here
    stroke(random (255), random (255), random(255));
    ellipse(random (1000), random(500), random(100), random(100));
  }
}
