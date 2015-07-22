ChunLi = function (options) {
  this.game = options.game

  this.bodyGravity = 800;
  this.legPower = 0;
  this.boxJumping = false;
  this.isFalling = false;
  this.sprite = null;

}

ChunLi.prototype.create = function(){
  debugger
  this.sprite = this.game.add.sprite(80,0,"ninja");
  this.sprite.anchor.set(0.5);
  this.lastPole = 1;
  game.physics.arcade.enable(this.sprite);
  this.sprite.body.gravity.y = this.bodyGravity;
}
