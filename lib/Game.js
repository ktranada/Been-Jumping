var ChunLi = ChunLi || {};

ChunLi.Game = function(){}

var cl = ChunLi.Game.prototype = {
  preload: function(){
    game.load.image("platform", "assets/platform.png");
    game.load.image("powerbar", "assets/powerbar.png");
  },

  create: function(){
    game.add.tileSprite(0, 0, 1030, 800, 'background');
    this.placedPlatforms = 0;
    this.platformGroup = this.add.group();
    this.minPlatformGap = 100;
    this.maxPlatformGap = 300;

    this.score = 0;
    this.scoreText = game.add.text(10, 10, "-", {
      font: "body 16px Arial"
    });
    this.keepScore();
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.chunLi = new ChunLi({game: game});
    this.chunLi.create();

    game.input.onDown.add(this.prepareToJump, this);
    this.addPlatform(80, this.platformGroup, this.chunLi);
  },

  update: function(){
    this.game.physics.arcade.collide(this.chunLi.sprite, this.platformGroup, this.checkLanding.bind(this));
    if (this.chunLi.sprite.body.y > game.height){
      this.die();
    }
  },

  addPlatform: function(x, platformGroup, chunLi) {
    if ( x < game.width * 2) {
      this.placedPlatforms++;

      var newPlatform = new Platform(game, x, game.rnd.between(250, 380), chunLi, platformGroup, this.placedPlatforms);
      game.add.existing(newPlatform);
      newPlatform.anchor.set(.5, 0);
      platformGroup.add(newPlatform);

      var nextPlatPos = x + game.rnd.between(this.minPlatformGap, this.maxPlatformGap);
      this.addPlatform(nextPlatPos, platformGroup, chunLi)
    }
  },

  die: function(){
      game.state.start("Game");
  },

  checkLanding: function(chunLi, platform){
    if (platform.y >= chunLi.y + chunLi.height/2) {
      var edge = chunLi.x - platform.x;
      if (Math.abs(edge) > 20) {
        this.chunLi.sprite.body.velocity.x = edge * 2;
        this.chunLi.sprite.body.velocity.y =- 200;
      }

      if (this.chunLi.boxJumping){
        debugger
        var platformDiff = platform.platformNumber - this.chunLi.lastPole;
        if (platformDiff > 0){
          this.score += Math.pow(2, platformDiff);
          this.keepScore();
          chunLi.lastPlatform = platform.platformNumber;
        }
      }
      this.chunLi.boxJumping = false;
      game.input.onDown.add(this.prepareToJump, this);
    }
  },

  keepScore: function(){
    this.scoreText.text = "Score: " + this.score;
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
      game.input.onUp.add(this.jump, this);
    }
  },

  jump: function(){
    var sprite = this.chunLi.sprite;
    this.chunLi.legPower = -this.powerBar.width * 3 - 70;
    this.powerBar.destroy();
    game.tweens.removeAll();
    sprite.body.velocity.y = this.chunLi.legPower * 2;
    this.chunLi.boxJumping = true;
    this.powerTween.stop();
    game.input.onUp.remove(this.jump, this);
  },

  render: function(){
    // this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
    this.game.debug.body(this.chunLi.sprite);
    // this.game.debug.text(this.game.time.physicsElapsed, 10, 20);
  }

};
