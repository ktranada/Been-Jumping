ChunLi = function (options) {
  this.game = options.game
  this.bodyGravity = 800;
  this.sprite = null;

  this.legPower = 0;
  this.boxJumping = false;
  this.isFalling = false;
}

ChunLi.prototype.create = function(){
  this.sprite = this.game.add.sprite(80,180, "sprites");
  this.sprite.scale.setTo(.7, .7);
  this.sprite.animations.add("greeting",Phaser.Animation.generateFrameNames("victory_", 11, 30, ".png", 2), 15, true);
  this.sprite.animations.add("jumping", Phaser.Animation.generateFrameNames("jumping_", 1, 12, ".png", 2), 15, true);
  this.sprite.animations.add("charging", Phaser.Animation.generateFrameNames("chargin_", 1, 12, ".png", 1), 15, true);
  this.sprite.animations.add("idle", [
    "idle_1.png",
    "idle_2.png",
    "idle_3.png",
    "idle_5.png",
    "idle_6.png",
    "idle_7.png",
    "idle_8.png",
    "idle_9.png",
    "idle_10.png",
  ], 5, true);
  // this.sprite.animations.play('jumping');
  this.sprite.anchor.set(0.5);
  this.lastPole = 1;
  this.sprite.scale.x *= -1;
  this.game.physics.arcade.enable(this.sprite);
  this.sprite.body.gravity.y = this.bodyGravity;

}
