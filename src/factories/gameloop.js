import Player from "./player"
import selectDom from "../selectDom"
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

    const playTurn = (coord) => {
        if (!player1.getTurn()) {
            player2.computerMakeRandomPlay(player1.gameboard)
            let result = player2.getLastResult();
            let lastCoord = player2.getLastAiAttempt();
            //set coordinate of players gameboard to result
            player1.setTurn(true)
            //renderPlayerBoard()
        }
        else {
            player2.gameboard.receiveAttack(coord)
            player1.setTurn(false)
            //renderCpuBoard()
        }
        checkForWin();
    }

    const gameLoop = () => {
        //renderShips
        playTurn();
        if (!gameOver) {
            return gameLoop();
        }
        //nesto dodati
    }

    const reset = () => {

    }
    return {gameLoop, reset, checkForWin, playTurn}
})()

export default game