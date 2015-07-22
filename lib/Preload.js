var ChunLi = ChunLi || {};

//loading the game assets
ChunLi.Preload = function(){};

ChunLi.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);
    //load game assets
    this.load.image('pole', 'assets/pole.png');
    this.load.image('powerbar', 'assets/powerbar.png');

    this.load.atlasJSONHash('Sprites', 'assets/chun_li.png', 'assets/chun_li.json');
    this.load.image('background', 'assets/entry_2.png')

  },
  create: function() {
    this.state.start('Game');
  }
};
