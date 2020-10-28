import Gameboard from "./gameboard"
const Player = (ai=false) => {
    let gameboard = Gameboard(ai)
    let turn;
    let previousAiAttempts = [];
    let potentialGuesses = [];
    const isAi = () => ai;
    ai ? turn = false: turn = true
    const getTurn = () => turn
    const setTurn = (bool) => turn = bool;
    let lastAiAttempt;
    let lastResult;
    const getLastAiAttempt = () => lastAiAttempt;
    const isValid = (cord) => {
        if (cord > 99 || cord < 0 || previousAiAttempts.includes(cord)) {
            return false
        }
        return true;
    }
    const getLastResult = () => lastResult
    const computerMakeRandomPlay = (oppGameboard) => {
        //mozda stavit da je argument oppPlayer
        let result;
        let coord;
        potentialGuesses.length === 0 ? coord = Math.floor(Math.random() * 100) :  coord = potentialGuesses.pop() 
        result = oppGameboard.receiveAttack(coord);
        if (result === 0) {
          return computerMakeRandomPlay(oppGameboard);
        }
        else if(result) {
            // setTurn(false);
            let addPotentialGuesses = [coord+1, coord-1, coord + 10, coord -10].filter((ele) =>  isValid(ele));
            addPotentialGuesses.forEach(ele => potentialGuesses.push(ele))
            lastResult = result;
            lastAiAttempt = coord 
            previousAiAttempts.push(lastAiAttempt)
            return true;
        }
        else {
            lastResult = result;
            lastAiAttempt = coord 
            previousAiAttempts.push(lastAiAttempt)
            return true;
        }
    }
    return {isAi, getTurn, setTurn, gameboard, computerMakeRandomPlay, getLastAiAttempt, getLastResult}
}

export default Player