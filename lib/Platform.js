Platform = function(game, x, y, chunLi, platformGroup, placedPlatforms, gameState){
  this.body.immovable = true;
  this.chunLi = chunLi;
  this.platformGroup = platformGroup;
  this.platformNumber = placedPlatforms;
  this.cl = gameState;

  Phaser.Sprite.call(this, game, x, y, "platform");
  game.physics.enable(this, Phaser.Physics.ARCADE);
};

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.prototype.constructor = Platform;
Platform.prototype.update = function(){
  // Move platforms based on if sprite is jumping
  if (this.chunLi.isFalling && !this.chunLi.boxJumping){
    this.body.velocity.x = 0;
  } else {
    this.body.velocity.x = this.chunLi.legPower;
  }
};
