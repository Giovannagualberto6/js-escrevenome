function setup() {
  createCanvas(600, 600);
background("Gray");
}

function draw() {
  stroke("blue")
  fill("red")
  
// console.log (mouseIsPressed)

  if (mouseIsPressed)
  rect(mouseX,mouseY,20,35)
  
