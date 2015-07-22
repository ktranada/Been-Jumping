var ChunLi = ChunLi || {};

ChunLi.Game = function(){}

var cl = ChunLi.Game.prototype = {
  preload: function(){
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

    this.addPlatform(80, this.platformGroup);
  },

  update: function(){

  },

  addPlatform: function(x, platformGroup) {
    if ( x < game.width * 2) {
      this.placedPlatforms++;

      var newPlatform = new Platform(game, x, game.rnd.between(200, 380), platformGroup, this.placedPlatforms);
      game.add.existing(newPlatform);
      newPlatform.anchor.set(.5, 0);
      platformGroup.add(newPlatform);
      var nextPlatPos = x + game.rnd.between(this.minPlatformGap, this.maxPlatformGap);
      this.addPlatform(nextPlatPos, platformGroup)
    }
  }



};
