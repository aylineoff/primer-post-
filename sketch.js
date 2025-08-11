var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(168, 0, 255);
}

function draw() {
  d = random(10, 60);
  colorMode(HSB, 260, 100, 100);
  fill(random(0,360),100 , 100);
ellipse(mouseX, mouseY, d, d);
  
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
