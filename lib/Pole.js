Pole = function(game, x, y, chunLi, poleGroup, placedPoles){
  Phaser.Sprite.call(this.game, x, y, "pole");
  game.physics.enable(this, Phaser.Physics.ARCADE);

  this.body.immovable = true;
  this.chunLi = chunLi;
  this.poleNumber = placedPoles;
  this.poleGroup = poleGroup;
};
