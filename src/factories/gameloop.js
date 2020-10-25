import Player from "./player"
const game = (() => {
    let gameOver = false;
    let player1 = Player();
    let player2 = Player(true);
    let playersArray = [player1, player2]
    let winner;
    const checkForWin = () => {
        if (player1.gameboard.allShipsSunk()) {
            winner = "CPU"
            gameOver = true;
        }
        else if (player2.gameboard.allShipsSunk()) {
            winner = "YOU"
            gameOver = true;
        }
    }

    const playTurn = () => {

    }

    const startGame = () => {

    }

    const reset = () => {

    }
})()