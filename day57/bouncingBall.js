function Ball(r, p, v) {
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
    blendMode: 'lighter'
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

  this.leftRect = new Rectangle(new Point(p.x, p.y), new Size(r/3, r/14));
  this.lefteyePath = new Path.Rectangle(this.leftRect);
  this.lefteyePath.fillColor = '#000000';

  this.rightRect = new Rectangle(new Point(p.x, p.y), new Size(r/3, r/14));
  this.righteyePath = new Path.Rectangle(this.rightRect);
  this.righteyePath.fillColor = '#000000';

  this.mouthRect = new Rectangle(new Point(p.x, p.y), new Size(r/6, r/20));
  this.mouthPath = new Path.Rectangle(this.mouthRect);
  this.mouthPath.fillColor = '#000000';
}

Ball.prototype = {
  iterate: function() {
    this.lefteyePath.position = this.point;
    this.lefteyePath.position.x = this.point.x+this.radius/3;
    this.lefteyePath.position.y = this.point.y+this.radius/30;

    this.righteyePath.position = this.point;
    this.righteyePath.position.x = this.point.x-this.radius/3;
    this.righteyePath.position.y = this.point.y+this.radius/30;

    this.mouthPath.position = this.point;
    this.mouthPath.position.y = this.point.y+this.radius/2;

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
  var radius = Math.random() * 50 + 130;
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