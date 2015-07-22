var ChunLi = ChunLi || {};

ChunLi.Game = function(){}

var cl = ChunLi.Game.prototype = {
  preload: function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize(true);
    game.load.image("platform", "assets/platform.png");
    game.load.image("powerbar", "assets/powerbar.png");
  },

  create: function(){
    this.placedPlatforms = 0;
    this.platformGroup = this.add.group();
    this.minPlatformGap = 100;
    this.maxPlatformGap = 300;

    game.stage.backgroundColor = "#87CEEB";
    game.physics.startSystem(Phaser.Physics.ARCADE);

  },

  update: function(){

  }
};
