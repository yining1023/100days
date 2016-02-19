// For more: https://github.com/auduno/clmtrackr

var ctracker;
var img;

function setup() {
  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(800, 600);
  videoInput.position(0, 0);
  //videoInput.hide();

  // setup canvas
  var cnv = createCanvas(800, 600);
  cnv.position(0, 0);
  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
  noStroke();
  img = loadImage("mona.png");
}

function draw() {
  clear();
  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  // image(img, 0, 0, 10, 10);
  // console.log(positions[0][1]);
  // image(img, positions[0][0], positions[0][1], 100, 100);
  for (var i = 0; i < positions.length; i++) {
    // set the color of the ellipse based on position on screen
    // fill(map(positions[i][0], width * 0.33, width * 0.66, 0, 255), map(positions[i][1], height * 0.33, height * 0.66, 0, 255), 255);
    // draw ellipse at each position point
    // ellipse(positions[i][0], positions[i][1], 8, 8);
    // fill(255, 0, 0);
    var size = 1.2*(positions[7][1] - positions[20][1]);
    image(img, positions[41][0] - size/2, positions[41][1] - size/2 + size/10, size, size);
  }
}