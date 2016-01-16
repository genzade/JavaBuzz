function Game() {
  this.frames = [];
}

Game.prototype.play = function(frame) {
  frame = new Frame();
  if (this.frames.length >= 10) {
    throw new Error('Max: 10 Frames');
  }
  else {
    this.frames.push(frame);
  }
};

Game.prototype.firstBowl = function(n) {
  return this.frames[this.frames.length -1].rollOne(n);
};

Game.prototype.secondBowl = function(n) {
  return this.frames[this.frames.length -1].rollTwo(n);
};

Game.prototype.score = function(frame) {
  frame = new Frame();
  return this.frames[this.frames.length -1].total();
};
