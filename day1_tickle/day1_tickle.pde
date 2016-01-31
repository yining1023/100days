float circleRadius = 72*3;
float eyeRadius = 6*3;
float x, y; // X and Y coordinates of text
float hr, vr;  // horizontal and vertical radius of the text
boolean sad = false;

void setup() {
  size(600, 600);
  
  hr = circleRadius;
  vr = circleRadius;
  noStroke();
  x = width / 2;
  y = height / 2;
}

void drawNormalFace(){
  float eyeleftX = x-circleRadius/4;
  float eyeleftY = y+5*3;
  float eyerightX = x+circleRadius/4;
  
  fill(0);
  stroke(0);

  ellipse(eyeleftX, eyeleftY, eyeRadius, eyeRadius);
  ellipse(eyerightX, eyeleftY, eyeRadius, eyeRadius);
  strokeWeight(3);
  line(x-circleRadius/6, y+60, x+circleRadius/6, y+60);
  
}
void drawSadFace(){
  fill(0);
  stroke(0);
  ellipse(x-circleRadius/4, y+15, eyeRadius*1.3, eyeRadius*1.3);
  ellipse(x+circleRadius/4, y+15, eyeRadius*1.3, eyeRadius*1.3);
  noFill();
  bezier(x-circleRadius/8, y+80, x-circleRadius/8, y+40, x+circleRadius/8, y+40, x+circleRadius/8, y+80);
}
void draw() {
  // Instead of clearing the background, fade it by drawing
  // a semi-transparent rectangle on top
  fill(255);
  noStroke();
  rect(0, 0, width, height);
  
  // If the cursor is over the text, change the position
  if (abs(mouseX - x) < hr/2 &&
      abs(mouseY - y) < vr/2) {
    x += random(-10, 10);
    y += random(-10, 10);
    sad = true;
  } 
  else{
    sad = false;
  }

  if(sad==true){
    fill(#f3b486);
    stroke(#f3b486);
    ellipse(x, y, circleRadius, circleRadius);
    drawSadFace();
  }
  else{
    fill(#ffe573);
    stroke(#ffe573);
    ellipse(x, y, circleRadius, circleRadius);
    drawNormalFace();
  }
}