import Gameboard from "./gameboard"
import Ship from "./ship"

test("Checking if board array is of length 100", () => {
    expect(Gameboard().boardArray.length).toBe(100)
})
// test("Value of array item is equal to its index (1)", () => {
//     expect(Gameboard().boardArray[2]).toBe(2)
// })
// test("Value of array item is equal to its index (2)", () => {
//     expect(Gameboard().boardArray[99]).toBe(99)
// })
test("There are 5 ships", () => {
    expect(Gameboard().ships.length).toBe(5);
})
test("Types of elements in ships array is object(1)", () => {
    let gameShips = Gameboard().ships;
    expect(typeof gameShips[0]).toBe("object")
})
test("Types of elements in ships array is object(2)", () => {
    let gameShips = Gameboard().ships;
    expect(typeof gameShips[3]).toBe("object")
})
test("length of the fifth ship is five", () => {
    expect(Gameboard().ships[4].getLength()).toBe(5)
}
)
test("receiveAttack (1)", () => {
    expect(Gameboard().receiveAttack(21)).toBe(false)
})
test("receiveAttack (2)", () => {
    let game = Gameboard()
    game.boardArray[0] = "00";
    game.receiveAttack(0);
    expect(game.ships[0].getHitArray()).toStrictEqual([true]);
    expect(game.ships[0].isSunk()).toBe(true)
})
test("Missed attacks count(1)", () => {
    expect(Gameboard().getMissedCount()).toBe(0)
})
test("Missed attacks count(2)", () => {
    let game = Gameboard()
    for(let i = 0; i < 10; i++) {
        game.receiveAttack(i)
    }
    expect(game.getMissedCount()).toBe(10)
})
test("is first ship sunk before hitting", () => {
    expect(Gameboard().ships[0].isSunk()).toBe(false)
})
test("All ships sunk(1)", () => {
    expect(Gameboard().allShipsSunk()).toBe(false)//dovrsiti
})
test("All ships sunk(2)", () => {
    // let game = Gameboard()
    // game.ships = game.ships[0];
    // game.boardArray[0] = "00";
    // game.receiveAttack(0);
    // 
    // 
    let game = Gameboard()
    game.boardArray[0] = "00";
    game.receiveAttack(0);
    game.receiveAttack(22);
    game.ships.pop();
    game.ships.pop();
    game.ships.pop();
    game.ships.pop();
    // expect(game.ships[0].getHitArray()).toStrictEqual([true]);
    // expect(game.ships[0].isSunk()).toBe(true)
    // console.log(game.ships[0])
    // console.log(game.boardArray)
    // console.log(game.ships[0].getHitArray())
    expect(game.ships[0].isSunk()).toBe(true)
    expect(game.allShipsSunk()).toBe(true)
})

test("All ships sunk if all positions attacked", () => {
    let game = Gameboard()
    game.ships.forEach((ship, i) => {
        game.placeShipsRandomly(ship, i)
    });
    for(let i = 0; i< 99; i++) {
        game.receiveAttack(i)
    }
    //console.log(game.boardArray)
    expect(game.allShipsSunk()).toBe(true)
})
test("all vertical works", () => {
    let game = Gameboard()
    game.aiPlaceShips()
    console.log(game.boardArray)
})