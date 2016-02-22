PImage[] img;

void setup() {
  img = new PImage[33];
  for(int i =0; i<33; i++){
    img[i] = loadImage(str(i)+".png");
  }
  size(700, 700);
  frameRate(4);
}
void draw(){
  drawalot();
}
void drawalot(){
for(int i = 0; i<33; i++){
  int ratio = round(random(1, 2));
  int ratio2 = round(random(1, 2));
  image(img[i], random(720)-img[i].width*ratio/2, random(710)-img[i].height*ratio/2, img[i].width*ratio, img[i].height*ratio);
  image(img[i], random(720)-img[i].width/ratio2/2, random(710)-img[i].height/ratio2/2, img[i].width/ratio2, img[i].height/ratio2);
  }
}