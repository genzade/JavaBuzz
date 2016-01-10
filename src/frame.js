function Frame() {
  this.total = 0
}

Frame.prototype.rollOne = function(n) {
  if (n > 10) {
    throw new Error('Maximum: 10');
  }
  return this.total += n
};

Frame.prototype.rollTwo = function(n) {
  if (this.total + n > 10) {
    throw new Error('Rolls Exceed 10')
  }
  return this.total += n
};
