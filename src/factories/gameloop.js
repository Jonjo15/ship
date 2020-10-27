import Player from "./player"
import render from "../render"
import {elements} from "../selectDom"
const Game = () => {
    let playCoord;
    let gameOver = false;
    let player1 = Player();
    let player2 = Player(true);
    player1.gameboard.aiPlaceShips()
    player2.gameboard.aiPlaceShips()
    let playersArray = [player1, player2]
    let winner;
    let rendered = false;
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
    const playerAttack = (coord) => {
        // let result = player2.gameboard.receiveAttack(coord)
        if (!player1.getTurn()) {
            return
        }
        let result = player2.gameboard.receiveAttack(coord)
        if (result === 0) {
            return
        }
        // let result = player2.gameboard.receiveAttack(coord)
        //     return false //mozda zajebe
        // }if (result === 0) {
        
        if (result) {
            elements.aiSquares[coord].textContent ="X"
            player1.setTurn(false)
            elements.info.textContent ="Ai turn"
            setTimeout(() => playTurnAi(), 1000)
            return true
        }
        else if(!result) {
            player1.setTurn(false)
            elements.aiSquares[coord].textContent ="miss"
            elements.info.textContent ="Ai turn"
            setTimeout(() => playTurnAi(), 1000)
            return true
        }
    }

    const playTurnAi = () => {
        if (!player1.getTurn()) {
            player2.computerMakeRandomPlay(player1.gameboard)
            let result = player2.getLastResult();
            let lastCoord = player2.getLastAiAttempt();
            if (result) {
                // console.log(document.querySelectorAll(".playerGrid"))
                elements.playerSquares[lastCoord].textContent = "X"
                // player1.gameboard.boardArray[lastCoord].textContent = "X"//PROMINIT OVO
                player1.setTurn(true)
                elements.info.textContent= "Your turn"
            }
            else {
                elements.playerSquares[lastCoord].textContent = "miss"
                player1.setTurn(true)
                elements.info.textContent= "Your turn"
                // player1.gameboard.boardArray[lastCoord].textContent = "miss"
            }
            //set coordinate of players gameboard to result
            
            
        }
        // else if (player1.getTurn()){
        //     let result = false;
        //     while (!result) {
        //       result = playerAttack(coord)
        //     }
        //     player1.setTurn(false)
        //         // let result = player2.gameboard.receiveAttack(coord)
            
        //     // if (result) {

        //     //     player1.setTurn(false)
        //     // }
            
        //     //renderCpuBoard()
        // }
        checkForWin();
    }

    const gameLoop = () => {
        //renderShips
        if (!rendered) {
            render().renderStart(player1, player2)
            rendered = true
        }
        
        //nesto dodati
    }
    const getGameOver = () => gameOver
    const reset = () => {

    }
    return {gameLoop, reset, checkForWin, playTurnAi, getGameOver, playerAttack}
}

export default Game