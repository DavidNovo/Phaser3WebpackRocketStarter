import {
    showMessage
} from './messager';
import 'phaser';
import {SimpleScene} from './scenes/simple-scene';

showMessage('Somebody else did this work! Boo');

const gameConfig = {
    width: 680,
    height: 400,
    scene:SimpleScene
};
new Phaser.Game(gameConfig);
