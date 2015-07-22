ChunLi = function (options) {
  this.game = options.game
  this.bodyGravity = 800;
  this.sprite = null;

  this.legPower = 0;
  this.boxJumping = false;
  this.isFalling = false;


}

ChunLi.prototype.create = function(){
  debugger
  this.sprite = this.game.add.sprite(80,0, "ChunLi");
  this.sprite.anchor.set(0.5);
  this.lastPole = 1;
  this.game.physics.arcade.enable(this.sprite);
  this.sprite.body.gravity.y = this.bodyGravity;

  this.sprite.animatioons.add("greeting",Phaser.generateFrameNames("victory_", 11, 30, "", 2), 15, true);
}
