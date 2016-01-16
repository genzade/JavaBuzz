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
      expect(frame.total()).toEqual(1 + 4)
    });
  });

  describe('#strike', function() {
    beforeEach(function() {
      frame.rollOne(10)
    });
    it('returns strike if 10 pins drop upon first bowl', function() {
      expect(frame.strike).toBe(true)
    });

    it('cannot roll again in frame after a strike', function() {
      expect(function() { frame.rollTwo(0) }).toThrowError('No More Rolls Until Next Frame')
    });
  });

  describe('#spare', function() {
    it('returns spare if 10 pins drop upon second bowl', function() {
      frame.rollOne(1)
      frame.rollTwo(9)
      expect(frame.spare).toBe(true)
    });
  });

  // describe('#', function() {
  //   it('', function() {
      
  //   });
  // });




});