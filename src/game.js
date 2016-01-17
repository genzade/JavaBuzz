function Game() {
  this.frames = []
  this.score = 0
}

Game.prototype.play = function(frame) {
  frame = new Frame()
  if (this.frames.length >= 10) {
    throw new Error('Max: 10 Frames')
  }
  else {
    this.frames.push(frame)
  }
};

Game.prototype.firstBowl = function(n) {
  var currentFrame = this.frames[this.frames.length -1]
  var previousFrame = this.frames[this.frames.length -2]

  if (this.frames.length > 1 && 
    previousFrame.spare === true) {
    this.score += n
  }
  if (n === 10) {
    return currentFrame.rollOne(n) && 
    this.scoreCalculator()
  }
  if (this.frames.length > 1 &&
    previousFrame.strike === true) {
    this.score += n
    return currentFrame.rollOne(n)
  }
  else {
    return currentFrame.rollOne(n) && this.scoreCalculator
  }
};

Game.prototype.secondBowl = function(n) {
  var currentFrame = this.frames[this.frames.length -1]

  return currentFrame.rollTwo(n) && 
  this.scoreCalculator()
};

Game.prototype.scoreCalculator = function(frame) {
  var currentFrame = this.frames[this.frames.length -1]
  var previousFrame = this.frames[this.frames.length -2]
  
  if (this.frames.length > 1 && 
    previousFrame.strike === true) {
    return this.score += (currentFrame.pinsDropped * 2)
  }
  else {
    return this.score += currentFrame.pinsDropped
  }
};
