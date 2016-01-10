describe('frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#rollOne', function() {
    it('cannot exceed 10', function() {
      expect(function(){ frame.rollOne(11); }).toThrowError('Maximum: 10');
    });
  });

  describe('#rollTwo', function() {
    it('Sum of Rolls cannot Exceed 10', function() {
      frame.rollOne(5)
      expect(function() { frame.rollTwo(6) }).toThrowError('Rolls Exceed 10');
    });
  });

  describe('#total', function() {
    it('should return total from two rolls', function() {
      frame.rollOne(1);
      frame.rollTwo(4);
      expect(frame.total).toEqual(1 + 4)
    });
  });


  // describe('#', function() {
  //   it('', function() {
      
  //   });
  // });
});