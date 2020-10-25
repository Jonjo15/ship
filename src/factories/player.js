import Gameboard from "./gameboard"
const Player = (ai=false) => {
    let gameboard = Gameboard(ai)
    let turn;
    const isAi = () => ai;
    ai ? turn = false: turn = true
    const getTurn = () => turn
    const setTurn = (bool) => turn = bool;
    const computerMakeRandomPlay = (oppGameboard) => {
        let result;
        let coord = Math.floor(Math.random() * 100)
        result = oppGameboard.receiveAttack(coord);
        if (result === 0) {
          return computerMakeRandomPlay(oppGameboard);
        }
        else {
            // setTurn(false);
            return true;
        }
    }
    return {isAi, getTurn, setTurn, gameboard, computerMakeRandomPlay}
}

export default Player