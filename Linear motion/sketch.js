//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
let size = 50;
let x = 0;
let speed = 20;
let y = 0;
let r = 255;
let b = 255;
let g = 255;
function setup(){
  createCanvas(400, 400);
  frameRate(200);
}

function draw(){
  background(120);
  //move the ball to the x axis from left to right
  //if the ball reaches right side sent it to left side
  fill(r, g, b);
  ellipse(x, y, size, size);
  x = x + 10;
  y = y + 10;
  if (x > width && y > height){
    x = random(300,-300);
    y = 0;
    r = random(255);
    g = random(255);
    b = random(255);

  }
}
