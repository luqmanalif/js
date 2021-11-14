let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

let angle = 0;

function draw() {
  r = random(150,180);
  g = random(10,30);
  b = random(230,255);
  background(r,g,b);

  push();
  strokeWeight(1);
  stroke(0);
  translate(width/2,height/2);
  rotate(angle);
  line(0,0,width,height);
  line(-width,-height,0,0);
  line(width,-height,0,0);
  line(-width,height,0,0);
  pop();

  fill(r,g,b);
  stroke(255);
  strokeWeight(5);
  push();
  translate(width/2, height/2);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0,80,80,25);
  pop();

  fill(0);
  noStroke();
  circle(width/2,height/2,65);

  angle++;
}

function mousePressed(){
  angle = 0 ;
}