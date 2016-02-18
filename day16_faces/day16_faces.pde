PImage[] face;
boolean out;
int i, n, number;
PImage img0, imghand, imghand2;

void setup() {
  n = 14;
  face = new PImage[n];
  background(30);
  size(600, 600);
  i = 0;
  out = true;
  img0 = loadImage("0.png");
  imghand = loadImage("hand.png");
  imghand2 = loadImage("hand2.png");
  for(int j=0; j<face.length; j++){
    face[j] = loadImage(str(j)+".png");
  }
  number = 0;
}

void draw() {
  background(50);
    //image(img0, width / 2 - img0.width / 2, height / 2 - img0.height / 2);
    image(face[number], width / 2 - face[number].width / 2, height / 2 - face[number].height / 2);
  if(out){
    i += 4;
    
  }
  else{
    i -=4;
  }
  if(i > 100){
    out = false;
  }
  if(i < 0){
    out = true;
    number++;
    if(number>13){
      number = 0;
    }
    println(number);
  }
  image(imghand, width / 2 - imghand.width / 2 + 44 + 5- 10 + i, height / 2 - imghand.height / 2 - 10, imghand.width * 1.2, imghand.height * 1.2);
  image(imghand2, width / 2 - imghand2.width / 2 - 81 - 15 + 5- i, height / 2 - imghand.height / 2 - 10, imghand2.width * 1.2, imghand2.height * 1.2);
}