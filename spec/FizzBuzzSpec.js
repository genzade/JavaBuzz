describe('JavaBuzz', function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new JavaBuzz();
  });

  describe('divisible by 3', function() {
    it('returns "java" instead of 3', function() {
      expect(javabuzz.play(3)).toEqual('java');
    });

    it('returns number if not divisible by 3', function() {
      expect(javabuzz.play(2)).toEqual(2);
    });    
  });

  describe('divisible by 5', function() {
    it('returns "buzz" if it is', function() {
      expect(javabuzz.play(5)).toEqual('buzz');
    });

    it('returns number if not', function() {
      expect(javabuzz.play(7)).toEqual(7);
    });
  });

  describe('divisible by 15', function() {
    it('returns "javabuzz" if it is', function() {
      expect(javabuzz.play(15)).toEqual('javabuzz');
    });

    it('returns "javabuzz" if it is', function() {
      expect(javabuzz.play(30)).toEqual('javabuzz');
    });

    it('returns number if not', function() {
      expect(javabuzz.play(8)).toEqual(8);
    });
  });
});

// expect(javabuzz.printNumbers(100)).toEqual[1..100];