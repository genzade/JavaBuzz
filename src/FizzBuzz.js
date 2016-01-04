function JavaBuzz() {

}

JavaBuzz.prototype.play = function(number) {
  if (number % 15 === 0) {
    return 'javabuzz';
  }
  if (number % 3 === 0){
    return 'java';
  }
  if (number % 5 === 0){
    return 'buzz';
  }
  else {
    return number;
  }
};