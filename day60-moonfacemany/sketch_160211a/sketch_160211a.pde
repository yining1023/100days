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
  for(int x = 0; x < 10; x++){
    for(int y = 0; y < 10; y++){
      int numberX = round(map(mouseX, 0, 500, 0, 4));
      int numberY = round(map(mouseX, 0, 500, 0, 3));
      println(numberX+numberY);
      image(moon[numberX+numberY], x*50, y*50, 50, 50);
    }
  }
}