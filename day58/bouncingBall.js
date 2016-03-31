function Ball(r, p, v) {
  this.base = new Path.Circle(new Point(p.x+r/10, p.y+r/10), r);
  this.base.fillColor = '#ffcc33';
  this.sprinklePath=[];
  this.sprinkle=[];
  this.radius = r;
  this.point = p;
  this.vector = v;
  this.maxVec = 15;
  this.numSegment = Math.floor(r / 3 + 2);
  this.boundOffset = [];
  this.boundOffsetBuff = [];
  this.sidePoints = [];
  this.path = new Path({
    fillColor: {
      hue: (Math.random(0.2)+1)*30,
      saturation: Math.random()+0.5,
      brightness: 1
    },
    // blendMode: 'lighter'
  });

  for (var i = 0; i < this.numSegment; i ++) {
    this.boundOffset.push(this.radius);
    this.boundOffsetBuff.push(this.radius);
    this.path.add(new Point());
    this.sidePoints.push(new Point({
      angle: 360 / this.numSegment * i,
      length: 1
    }));
  }

  this.leftRectPath = new Path.Circle(new Point(p.x, p.y), r/3);
  this.leftRectPath.fillColor = '#ffffff';

  for(var i = 0; i < 10; i++){
    this.sprinklePath[i] = new Rectangle(new Point(p.x, p.y), new Size(r/6, r/15));
    this.sprinkle[i] = new Path.Rectangle(this.sprinklePath[i]);
    this.sprinkle[i].fillColor = {
      hue: Math.random()*360,
      saturation: Math.random()+0.5,
      brightness: 1
    };
    this.sprinkle[i].rotate(Math.random()*180);
  }
}

Ball.prototype = {
  iterate: function() {
    var interval = (Math.PI*2)/this.sprinkle.length;
    for(var i = 0; i < this.sprinkle.length; i++){
      var angle = interval * i;
      this.sprinkle[i].position.x = this.point.x + this.radius*Math.cos(angle)/1.5;
      this.sprinkle[i].position.y = this.point.y + this.radius*Math.sin(angle)/2;

      // this.sprinkle[i].position.x = this.point.x + (Math.random() < 0.5 ? - this.radius*Math.cos(Math.random())/2 : + this.radius*Math.cos(Math.random())/2);
      // this.sprinkle[i].position.y = this.point.y + (Math.random() < 0.5 ? - this.radius*Math.sin(Math.random())/2 : + this.radius*Math.sin(Math.random())/2);
    }

    this.leftRectPath.position = this.point;

    this.base.position = this.point+this.radius/10;

    this.checkBorders();
    if (this.vector.length > this.maxVec)
      this.vector.length = this.maxVec;
    this.point += this.vector;
    this.updateShape();
  },

  checkBorders: function() {
    var size = view.size;
    if (this.point.x < -this.radius)
      this.point.x = size.width + this.radius;
    if (this.point.x > size.width + this.radius)
      this.point.x = -this.radius;
    if (this.point.y < -this.radius)
      this.point.y = size.height + this.radius;
    if (this.point.y > size.height + this.radius)
      this.point.y = -this.radius;
  },

  updateShape: function() {
    var segments = this.path.segments;
    for (var i = 0; i < this.numSegment; i ++)
      segments[i].point = this.getSidePoint(i);

    this.path.smooth();
    for (var i = 0; i < this.numSegment; i ++) {
      if (this.boundOffset[i] < this.radius / 4)
        this.boundOffset[i] = this.radius / 4;
      var next = (i + 1) % this.numSegment;
      var prev = (i > 0) ? i - 1 : this.numSegment - 1;
      var offset = this.boundOffset[i];
      offset += (this.radius - offset) / 15;
      offset += ((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / 3;
      this.boundOffsetBuff[i] = this.boundOffset[i] = offset;
    }
  },

  react: function(b) {
    // console.log(b.path.fillColor.hue);
    b.path.fillColor.hue += 0.1;
    var dist = this.point.getDistance(b.point);
    if (dist < this.radius + b.radius && dist != 0) {
      var overlap = this.radius + b.radius - dist;
      var direc = (this.point - b.point).normalize(overlap * 0.015);
      this.vector += direc;
      b.vector -= direc;

      this.calcBounds(b);
      b.calcBounds(this);
      this.updateBounds();
      b.updateBounds();
    }
  },

  getBoundOffset: function(b) {
    var diff = this.point - b;
    var angle = (diff.angle + 180) % 360;
    return this.boundOffset[Math.floor(angle / 360 * this.boundOffset.length)];
  },

  calcBounds: function(b) {
    for (var i = 0; i < this.numSegment; i ++) {
      var tp = this.getSidePoint(i);
      var bLen = b.getBoundOffset(tp);
      var td = tp.getDistance(b.point);
      if (td < bLen) {
        this.boundOffsetBuff[i] -= (bLen  - td) / 2;
      }
    }
  },

  getSidePoint: function(index) {
    return this.point + this.sidePoints[index] * this.boundOffset[index];
  },

  updateBounds: function() {
    for (var i = 0; i < this.numSegment; i ++)
      this.boundOffset[i] = this.boundOffsetBuff[i];
  }
};

//--------------------- main ---------------------

var balls = [];
var numBalls = 12;
for (var i = 0; i < numBalls; i++) {
  var position = Point.random() * view.size;
  var vector = new Point({
    angle: 360 * Math.random(),
    length: Math.random() * 10
  });
  var radius = Math.random() * 20 + 50;
  balls.push(new Ball(radius, position, vector));
}

function onFrame() {
  for (var i = 0; i < balls.length - 1; i++) {
    for (var j = i + 1; j < balls.length; j++) {
      balls[i].react(balls[j]);
    }
  }
  for (var i = 0, l = balls.length; i < l; i++) {
    balls[i].iterate();
  }
}