function Frame() {
  this.pinsDropped = 0
}

Frame.prototype.rollOne = function(n) {
  if (n > 10) {
    throw new Error('Maximum: 10');
  }
  return this.pinsDropped += n
};

Frame.prototype.rollTwo = function(n) {
  if (this.pinsDropped + n > 10) {
    throw new Error('Rolls Exceed 10');
  }
  return this.pinsDropped += n
};

Frame.prototype.total = function() {
  return this.pinsDropped;
};