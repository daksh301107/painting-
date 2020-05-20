function setup() {
  createCanvas(850, 800);
     background(230);
    noStroke();
    print('Thank you for trying my paint program.');
    print('Press the left mouse button to paint on the canvas.');
    print('Double click the left mouse button to clear the canvas.');
}

function draw() {
    if (mouseIsPressed)
//Change these numbers to change the color, (Red,Green,Blue,Alfa).
    fill(0,0,0,200);
    if (mouseIsPressed)
//Change the numbers to change the size of the ellipse,(Width,Hight).
    ellipse(mouseX,mouseY,32,32);
}        
function doubleClicked() {
    background(230);
}