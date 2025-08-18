function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index','-1');
   background(255,216,223);
}
function draw() {
  d=random(50,20);
  colorMode(HSB,360,100,100);
  fill(random(0,360),100,100);
  ellipse(mouseX,mouseY,d,d);
}
function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
