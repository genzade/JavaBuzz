function Game() {
  this.frames = [];
}

Game.prototype.play = function(frame) {
  this.frames.push(frame);
};
