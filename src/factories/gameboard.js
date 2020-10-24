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
    // boardArray = boardArray.map((ele, i) => i)
    const receiveAttack = (xy) => {
        if (boardArray[xy] === "miss" || boardArray[xy] === "hit") {
            return
        }
        if (boardArray[xy] === false) {
            boardArray[xy] = "miss"
            missedCount += 1;
            return false
        }
        else if (typeof boardArray[xy] === "string") {
            let targetShipPart = parseInt(boardArray[xy].slice(-1))
            let shipTarget = parseInt(boardArray[xy].slice(0,1))
            let targetedShip = ships[shipTarget]
            targetedShip.hit(targetShipPart);
            boardArray[xy] = "hit"
            return true
        }
    }
    const placeShipsRandomly = (ship, index, horizontal = true) => {
        let length = ship.getLength()
        let startCoord;
        if (horizontal) {
            startCoord = getHorizontalCoords(length)
            let symbol;
            for(let i = 0; i < length; i++) {
                symbol = "" + index + i
                boardArray[startCoord + i] = symbol;
                symbol = ""
            }
        }
    }
    const getHorizontalCoords = (length) => { 
        let coord = Math.floor(Math.random() * 100)
        let checkIfAllSpotsValid = []
        if (((coord % 10) + length) <= 10 ) {
            for(let i = 0; i < length; i++) {
               checkIfAllSpotsValid.push(boardArray[coord + i]) 
            }
            if(checkIfAllSpotsValid.every(spot => spot === false)) {
                return coord;
            }
            else {
              return getHorizontalCoords(length)
            }
        }
        else {
           return getHorizontalCoords(length)
        }
    } 
    const setIsHorizontal = (bool) => bool;
    const getMissedCount = () => missedCount
    const allShipsSunk = () => {
        return ships.every(ship => ship.isSunk())
        // ships.forEach((ship, i) => {
        //     console.log(!ship.isSunk())
        //     if (!ship.isSunk()) {
        //         return false
        //     }
        // })
        // return true
    }
    return {boardArray, setIsHorizontal, ships, receiveAttack, getMissedCount, allShipsSunk, placeShipsRandomly}
}

export default Gameboard