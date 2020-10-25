import Player from "./player"
const game = (() => {
    let gameOver = false;
    let player1 = Player();
    let player2 = Player(true);
    let playersArray = [player1, player2]
})()