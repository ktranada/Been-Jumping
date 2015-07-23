var ChunLi = ChunLi || {};

//loading the game assets
ChunLi.Preload = function(){};
var music;

ChunLi.Preload.prototype = {
  preload: function() {
    //show loading screen

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(5);
    this.load.setPreloadSprite(this.preloadBar);

    this.game.stage.backgroundColor = '#F8E0B0';


    //load game assets
    this.load.image('background', 'assets/entry_2.png');

    this.load.image('platform', 'assets/platform.png');
    this.load.image('powerbar', 'assets/powerbar.png');
    this.load.audio('theme', 'assets/theme.ogg');
    this.load.audio('hurt', 'assets/ouch.wav');
    this.load.atlasJSONHash('sprites', 'assets/sprite3.png', 'assets/sprite3.json');
    music = game.add.audio('theme');
    music.loop = true;


  },
  create: function() {

    music.play();
    this.state.start('Game');
  }
};
