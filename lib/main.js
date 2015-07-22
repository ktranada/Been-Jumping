var ChunLi = ChunLi || {};

var game = ChunLi.game = new Phaser.Game(1006, 500, Phaser.AUTO, '', null);
ChunLi.game.state.add('Boot', ChunLi.Boot);
ChunLi.game.state.add('Preload', ChunLi.Preload);
ChunLi.game.state.add('Game', ChunLi.Game);

ChunLi.game.state.start('Boot');
