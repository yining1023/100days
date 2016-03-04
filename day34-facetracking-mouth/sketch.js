// For more: https://github.com/auduno/clmtrackr

var ctracker;
var img;
var start = false;
var systemFlag = false;
var posX;
var posY;

function setup() {
  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(400, 400);
  videoInput.position(0, 0);
  //videoInput.hide();

  // setup canvas
  var cnv = createCanvas(400, 400);
  cnv.position(0, 0);
  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
  noStroke();
  // system = new ParticleSystem(createVector(width/2), 50);
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
    // // draw ellipse at each position point
    // ellipse(positions[i][0], positions[i][1], 8, 8);
    // fill(255, 0, 0);
    // ellipse(positions[60][0], positions[60][1], 18, 18);
    // fill(0, 255, 0);
    // ellipse(positions[57][0], positions[57][1], 18, 18);
    if(positions[57][1] - positions[60][1] > 30){
      // console.log("hi!");
      // console.log(puke);
      posX = positions[57][0];
      posY = (positions[57][1] + positions[60][1])/2;
      start = true;
    }
  }
    // var size = 1.2*(positions[7][1] - positions[20][1]);
    // image(img, positions[41][0] - size/2, positions[41][1] - size/2 + size/10, size, size);
    if(start){
      system = new ParticleSystem(createVector(posX, posY));
      systemFlag = true;
      start = false;
    }
    if(systemFlag){
      system.addParticle();
      system.run();
    }
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.1);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(255, 240, 0, this.lifespan);
  ellipse(this.position.x, this.position.y, 40, 40);
  fill(0);
  ellipse(this.position.x - 10, this.position.y - 6, 8, 8)
  ellipse(this.position.x + 10, this.position.y - 6, 8, 8)
  line(this.position.x - 10, this.position.y + 6,this.position.x + 10, this.position.y + 6)
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};