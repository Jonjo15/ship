import Ship from "./ship"
const Gameboard = (ai = false) => {
    const ships = [];
    let missedCount = 0;
    for(let i = 1; i < 6; i++) {
        ships.push(Ship(i))
    }
    // when positioning a ship name items in array as "00" first is index of the ship in ships array,
    // second is index of the part of the ship from hitArray
    let isHorizontal = true;
    let boardArray = new Array(100).fill(false)
    boardArray = boardArray.map((ele, i) => i)
    const receiveAttack = (xy) => {
        if (boardArray[xy] === "miss" || boardArray[xy] === "hit") {
            return
        }
        if (typeof boardArray[xy] === "number") {
            boardArray[xy] = "miss"
            missedCount += 1;
            return false
        }
        else if (typeof boardArray[xy] === "string") {
            let targetShipPart = parseInt(boardArray[xy].slice(-1))
            let shipTarget = parseInt(boardArray[xy][0])
            let targetedShip = ships[shipTarget]
            targetedShip.hit(targetShipPart);
            boardArray[xy] = "hit"
            return true
        }
    }
    const setIsHorizontal = (bool) => bool;
    const getMissedCount = () => missedCount
    const allShipsSunk = () =>{} //dovrsit{}
    return {boardArray, setIsHorizontal, ships, receiveAttack, getMissedCount}
}

export default Gameboard