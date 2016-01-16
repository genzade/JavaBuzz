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

  describe('#scoreCalculator', function() {
    it('calculates the score', function() {
      game.firstBowl(2)
      game.secondBowl(5)
      expect(game.score).toEqual(2 + 5)
    });

    it('calculates spares', function() {
      game.firstBowl(8)
      game.secondBowl(2)
      game.play()
      game.firstBowl(7)
      game.secondBowl(1)
      expect(game.score).toEqual(8 + 2 + 7 + 7 + 1)
    });

    it(' can calculate multiple spares', function() {
      game.firstBowl(8)
      game.secondBowl(2)
      game.play()
      game.firstBowl(7)
      game.secondBowl(3)
      game.play()
      game.firstBowl(3)
      game.secondBowl(4)
      expect(game.score).toEqual(37)
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