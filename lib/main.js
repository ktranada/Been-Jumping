var ChunLi = ChunLi || {};

var game = new Phaser.Game(1030, 490, Phaser.AUTO, '', null);
ChunLi.game = game;
ChunLi.game.state.add('Boot', ChunLi.Boot);
ChunLi.game.state.add('Preload', ChunLi.Preload);
ChunLi.game.state.add('Game', ChunLi.Game);

ChunLi.game.state.start('Boot');
