import Player from "./player"
import render from "../render"
import selectDom from "../selectDom"
const game = (() => {
    
    let gameOver = false;
    let player1 = Player();
    let player2 = Player(true);
    player1.gameboard.aiPlaceShips()
    player2.gameboard.aiPlaceShips()
    let playersArray = [player1, player2]
    let winner;
    let rendered = false;
    let dom = selectDom()
    // console.log(dom.playerSquares)
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
            if (result) {
                console.log(dom.playerSquares)
                dom.playerSquares[lastCoord].textContent = "X"
                // player1.gameboard.boardArray[lastCoord].textContent = "X"//PROMINIT OVO
                
            }
            else {
                dom.playerSquares[lastCoord].textContent = "miss"
                // player1.gameboard.boardArray[lastCoord].textContent = "miss"
            }
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
        if (!rendered) {
            render().renderStart(player1, player2)
            rendered = true
        }
        
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