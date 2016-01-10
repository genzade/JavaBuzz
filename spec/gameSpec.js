describe('game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
  });

  describe('#play', function() {
    it('game can be played', function() {
      game.play(frame);
      expect(game.frames).toContain(frame);
    });

    it('has a maximum of 10 frames', function() {
      for (var i = 0; i < 10; i++) {
        game.play(frame)
      }
      expect(function(){ game.play(frame); }).toThrowError('Max: 10 Frames');
    });
  });

  // describe('#firstRoll', function() {
  //   it('', function() {
      
  //   });
  // });

  // describe('#', function() {
  //   it('', function() {
      
  //   });
  // });
});