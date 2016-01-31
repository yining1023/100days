void setup() {
  size(640, 640);
  //noLoop();
  background(#263873);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
}

void draw() {
  drawCircle(width/2, 280, 6);
  drawFaces(width/2, 280, 6);
}

void drawCircle(int x, int radius, int level) {                    
  //fill(255, 255, 153);
  //stroke(#ffcc00);
  //strokeWeight(2);
  drawGradient(x, height/2, radius);
  //ellipse(x, height/2, radius*2, radius*2);
  //ellipse(width/2, x, radius*2, radius*2);
  if(level > 1) {
  level = level - 1;
  drawCircle(x - radius/2, radius/2, level);
  drawCircle(x + radius/2, radius/2, level);
  }
}

void drawGradient(float x, float y, int radius) {
  //int radius = dim/2;
  float h = random(36, 60);
  for (int r = radius; r > 0; --r) {
    fill(h, 90, 90);
    stroke(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 0.1) % 360;
  }
}

void drawFaces(int x, int radius, int level) {                    
  //fill(255, 255, 153);
  //stroke(#ffcc00);
  //strokeWeight(2);
  drawface(x, height/2, radius);
  //ellipse(x, height/2, radius*2, radius*2);
  //ellipse(width/2, x, radius*2, radius*2);
  if(level > 1) {
  level = level - 1;
  drawFaces(x - radius/2, radius/2, level);
  drawFaces(x + radius/2, radius/2, level);
  }
}

void drawface(float x, float y, int radius) {
  //for(float hh = 1.0; hh>=0.3; hh-=0.1){
    float hh = random(0.7, 1.0);
    for (int r = radius; r > 0; --r) {
      fill(#996a33);
      stroke(#996a33);
      strokeWeight(0.1);
      int mouthH = radius;   
      //println(hh);
      bezier(x-radius/8, y+mouthH, x-radius/8, y+mouthH*hh, x+radius/8, y+mouthH*hh, x+radius/8, y+mouthH);
  }
 //}
}