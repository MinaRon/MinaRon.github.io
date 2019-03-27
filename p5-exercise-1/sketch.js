function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    stroke(66, 220, 244);
    fill(209, 141, 221);
  } else {
    stroke(45, 87, 130);
    fill(79, 196, 68);
  }
  ellipse(mouseX, mouseY, 25);
  ellipse(mouseY, mouseX, 50);
}
