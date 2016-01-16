function Game() {
  this.frames = []
  this.score = 0
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
  if (this.frames.length > 1 && this.frames[this.frames.length -2].spare === true) {
    this.score += n
  }
  return this.frames[this.frames.length -1].rollOne(n);
};

Game.prototype.secondBowl = function(n) {
  return this.frames[this.frames.length -1].rollTwo(n) && 
  this.scoreCalculator();
};

Game.prototype.scoreCalculator = function(frame) {
  return this.score += this.frames[this.frames.length -1].total();
};
