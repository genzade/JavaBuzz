describe('game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    game.play(frame)
  });

  describe('#play', function() {
    it('game can be played', function() {
      expect(game.frames).toContain(frame);
    });

    it('has a maximum of 10 frames', function() {
      for (var i = 0; i < 9; i++) {
        game.play(frame)
      }
      expect(function(){ game.play(frame); }).toThrowError('Max: 10 Frames');
    });
  });

  describe('#score', function() {
    it('bowling returns number of pins dropped', function() {
      game.firstBowl(2)
      game.secondBowl(5)
      expect(game.score()).toEqual(2 + 5)
    });
  });


  // describe('#', function() {
  //   it('', function() {
      
  //   });
  // });

  // describe('#', function() {
  //   it('', function() {
      
  //   });
  // });

  // describe('#score', function() {
  //   it('returns score at end of frame', function() {
  //     game.play(frame);
  //     frame.rollOne(3);
  //     frame.rollTwo(1);
  //     expect(game.score()).toEqual(4);
  //   });
  // });

});