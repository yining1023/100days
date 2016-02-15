var x, y, w, bg, band, yy, love;

function setup() {
  // bg = loadImage("background.jpg");
  bg = loadImage("3.jpg");
  love = loadImage("love.jpg");
  createCanvas(600, 600);
  y = 0;
  yy = 0;
  w = width;
  band = 60;
  x = width / 2 - band/2;
}

function draw() {
  // background(bg);
  noStroke();
  background(255);
  fill("#fd86a4");
  image(love, 0, 0, love.width/1.25, love.height/1.25);
  image(bg, 0, yy, bg.width/2, bg.height/2);
  rect(0, height / 2 - band/2, w, band);
  rect(x, y, band, height-y);

  y = y + 5;
  
  if (y > height) {
    y = height;
    w = w - 5;
    if(w < 0){
      w = 0;
      yy = yy + 5;
      if(yy > height){
        yy = height;
        
      }
    }
  }
}
