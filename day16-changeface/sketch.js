var img, img0, img1, img2, img3, img4, img5, img6, imghand, imghand2, out;

function setup() {
  background(30);
  createCanvas(600, 600);
  i = 0;
  out = true;
  img0 = loadImage("0.png");
  // img1 = loadImage("1.png");
  // img2 = loadImage("2.png");
  // img3 = loadImage("3.png");
  // img4 = loadImage("4.png");
  // img5 = loadImage("5.png");
  // img6 = loadImage("6.png");
  imghand = loadImage("hand.png");
  imghand2 = loadImage("hand2.png");
}

function draw() {
  background(50);
    // image(img0, width / 2 - img0.width / 2, height / 2 - img0.height / 2);
    image(imghand, width / 2 - imghand.width / 2 + 47 + i, height / 2 - imghand.height / 2);
    image(imghand2, width / 2 - imghand2.width / 2 - 63 - i, height / 2 - imghand.height / 2);
  if(out){
    i += 2;
  }
  else{
    i -=2;
  }
  if(i > 100){
    out = false;
  }
  if(i < 0){
    out = true;
    var number = floor(random(0, 7));
    var img = loadImage(number.toString() +".png");
    image(img, width / 2 - img.width / 2, height / 2 - img.height / 2);
  }
}