Platform = function(game, x, y, chunLi, platformGroup, placedPlatforms){
  Phaser.Sprite.call(this, game, x, y, "platform");
  game.physics.enable(this, Phaser.Physics.ARCADE);

  this.body.immovable = true;
  this.chunLi = chunLi;
  this.platformGroup = platformGroup;
  this.platformNumber = placedPlatforms;
};

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.prototype.constructor = Platform;

Platform.prototype.update = function(){};
