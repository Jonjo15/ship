import Ship from "./ship"
const Gameboard = (ai = false) => {
    const ships = [];
    let missedCount = 0;
    let numOfPlayersShipPlaced = 0;
    let remainingShips = 15;
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
            return 0;
        }
        if (boardArray[xy] === false) {
            boardArray[xy] = "miss"
            missedCount += 1;
            return false
        }
        else if (typeof boardArray[xy] === "string") {
           
            // console.log(boardArray[xy])
            // console.log(boardArray[xy].slice(-1))
            // console.log(boardArray[xy].slice(-2, -1)) 
            let targetShipPart = parseInt(boardArray[xy].slice(-1))
            let shipTarget = parseInt(boardArray[xy].slice(-2, -1))
            let targetedShip = ships[shipTarget]
            targetedShip.hit(targetShipPart);
            boardArray[xy] = "hit"
            remainingShips -= 1;
            return true
        }
    }
    const placePlayersShip = (x, length, horizontal) => {
        if (horizontal) {
            let checkIfAllSpotsValid = []
            for (let i = 0; i < length; i++) {
                checkIfAllSpotsValid.push(boardArray[x+i])
            }
            if (checkIfAllSpotsValid.every(spot => spot === false)) {
                let symbol;
                for(let i = 0; i < length; i++) {
                    symbol = ""+ (x+i) + "-" + (length-1) + i
                    boardArray[x + i] = symbol;
                    symbol = ""
                }
                return true
            }
            else {
                return false
            }
        }
    }
    const placeShipsRandomly = (ship, index, horizontal = true) => {
        let length = ship.getLength()
        let startCoord;
        if (horizontal) {
            startCoord = getHorizontalCoords(length)
            let symbol;
            for(let i = 0; i < length; i++) {
                symbol = ""+ (startCoord+i) + "-" + index + i
                boardArray[startCoord + i] = symbol;
                symbol = ""
            }
        }
        else {
            startCoord = getVerticalCoords(length);
            let symbol;
            for(let i = 0; i < length; i++) {
                let adder = i * 10;
                symbol = ""+ (startCoord + adder) + "-" + index + i;
                boardArray[startCoord + adder] = symbol;
                symbol = ""
                //finish
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
    const getVerticalCoords = (length) => {
        let reducer = (length -1)*10
        let coord = Math.floor(Math.random() * 100 - reducer);
        let checkIfAllSpotsValid = [];
        for (let i = 0; i < length; i++) {
            let multiplier = i * 10;
            checkIfAllSpotsValid.push(boardArray[coord + multiplier]);
        }
        if(checkIfAllSpotsValid.every(spot => spot === false)) {
            return coord;
        }
        else {
            return getVerticalCoords(length)
        }
        //finish
    }
    const aiPlaceShips = () => {
        const vertHoriz = [true, false]
        ships.forEach((ship, i) => {
            let directionIndex = Math.floor(Math.random() * vertHoriz.length);
            let direction = vertHoriz[directionIndex];
            placeShipsRandomly(ship, i, direction);
        })
    }
    const getRemainingShips = () => remainingShips;
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
    return {boardArray, setIsHorizontal, ships, receiveAttack, getMissedCount, allShipsSunk, placeShipsRandomly, aiPlaceShips, getRemainingShips, placePlayersShip}
}

export default Gameboard