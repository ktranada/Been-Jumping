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

    this.chunLi = new ChunLi({game: game});
    this.chunLi.create();

    game.input.onDown.add(this.prepareToJump, this);
    this.addPlatform(80, this.platformGroup);
  },

  update: function(){
    this.game.physics.arcade.collide(this.chunLi.sprite, this.platformGroup, this.checkLanding.bind(this));
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
  },

  checkLanding: function(chunLi, platform){
    if (platform.y >= chunLi.y + chunLi.height/2) {
      var edge = chunLi.x - platform.x;
      if (Math.abs(edge) > 20) {
        chunLi.velocity.x = edge * 2;
        chunLi.velocity.y =- 200;
      }

      if (this.chunLi.boxJumping){
        var platformDiff = platform.platformNumber - chunLi.lastPole;
        if (platformDiff > 0){
          chunLi.lastPlatform = platform.platformNumber;
        }
      }
      this.chunLi.boxJumping = false;
    }
  },

  prepareToJump: function(){
    var sprite = this.chunLi.sprite;
    if (sprite.body.velocity.y == 0) {
      this.powerBar = game.add.sprite(sprite.x, sprite.y - 50, "powerbar");
      this.powerBar.width = 0;
      this.powerTween = game.add.tween(this.powerBar).to({
        width: 100
      }, 1000, "Linear", true);
      game.input.onDown.remove(this.prepareToJump, this);
    }
  },

  render: function(){
    this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
    this.game.debug.body(this.chunLi.sprite);
    this.game.debug.text(this.game.time.physicsElapsed, 10, 20);
  }

};
