var ChunLi = ChunLi || {};

ChunLi.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
ChunLi.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen
    this.load.image('preloadbar', 'assets/preloader-bar.png');
    this.load.image('entry', 'assets/chun1-min.jpg');

  },
  create: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#F8E0B0';

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    //screen size will be set automatically
    this.scale.setScreenSize(true);

    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preload');
  }
};
