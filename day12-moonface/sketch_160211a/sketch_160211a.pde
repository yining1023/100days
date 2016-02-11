PImage[] moon;
int n = 8;

void setup() {
  moon = new PImage[n];
  for(int i=0; i<moon.length; i++){
    moon[i] = loadImage(str(i) + ".png");
  }
  size(500, 500);
}

void draw(){
  background(35);
  int number = round(map(mouseX, 0, 1000, 0, 8));
  image(moon[number], width/2-85, height/2-100);
}