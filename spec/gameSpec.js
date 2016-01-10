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