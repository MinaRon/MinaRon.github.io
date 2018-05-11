function setup() {
  createCanvas(windowWidth, windowHeight);
}

// create a grid of circles that randomly changes colors
function draw() {
  background(0);
  strokeWeight(5);
  stroke(0,0,200);

  for(var x = 0; x < mouseX; x += 50) {
    for(var y = 0; y <= height; y += 50) {
      fill(random(50), 50, random(255));
      rect(x, y, 25, 25);
    }
  }

}
