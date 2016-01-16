function Frame() {
  this.pinsDropped = 0
  this.strike = false
  this.spare = false
}

Frame.prototype.rollOne = function(n) {
  if (n > 10) {
    throw new Error('Maximum: 10');
  }
  if (n === 10) {
    this.strike = true
  }
  return this.pinsDropped += n
};

Frame.prototype.rollTwo = function(n) {
  if (this.pinsDropped + n > 10) {
    throw new Error('Rolls Exceed 10');
  }
  if (this.pinsDropped === 10) {
    throw new Error('No More Rolls Until Next Frame')
  }
  if (this.pinsDropped + n === 10) {
    this.spare = true
  }
  return this.pinsDropped += n
};

Frame.prototype.total = function() {
  return this.pinsDropped;
};