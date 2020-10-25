
const Player = (ai=false) => {
    let turn;
    const isAi = () => ai;
    ai ? turn = false: turn = true
    const getTurn = () => turn
    return {isAi, getTurn}
}

export default Player