const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hr = hour();
var mn = minute();
var sc = second();


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);
  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,33.3,0);
  pop();
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,66.6,0);
  pop();
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,99.9,0);
  pop();
  drawSprites();
}