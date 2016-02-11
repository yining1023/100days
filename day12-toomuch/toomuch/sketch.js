var img;
var button;

function setup() {
  createCanvas(720, 720);
  img = loadImage("fear.png");
  button = createButton('GO');
  button.position(340, 340);
  button.mousePressed(drawalot);
  frameRate(60);
}

function drawalot(){
for(var i = 0; i<20; i++){
  var ratio = random(1, 5);
  var ratio2 = random(1, 5);
  image(img, random(720)-img.width*ratio/2, random(710)-img.height*ratio/2, img.width*ratio, img.height*ratio);
  image(img, random(720)-img.width/ratio2/2, random(710)-img.height/ratio2/2, img.width/ratio2, img.height/ratio2);
  }
}
