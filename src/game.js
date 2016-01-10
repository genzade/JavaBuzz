function Game() {
  this.frames = [];
}

Game.prototype.play = function(frame) {
  if (this.frames.length >= 10) {
    throw new Error('Max: 10 Frames');
  }
  else {
    this.frames.push(frame);
  }
};
