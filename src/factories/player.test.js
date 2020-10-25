import Player from "./player"

test("IsAi function returns false if ai not specified", () => {
    expect(Player().isAi()).toBe(false)
})
test("isAi function returns true if ai is set to true", () => {
    expect(Player(true).isAi()).toBe(true)
})
test("if human player his turn first", () => {
    expect(Player().getTurn()).toBe(true)
})
test("if ai, not its turn first", () => {
    expect(Player(true).getTurn()).toBe(false)
})
test("set turn works (1)", () => {
    let player = Player()
    player.setTurn(false)
    expect(player.getTurn()).toBe(false)
})
test("set turn works (2)", () => {
    let player = Player()
    player.setTurn(true)
    expect(player.getTurn()).toBe(true)
})
// test("blabla", () => {
//     let player1 = Player();
//     player1.gameboard.aiPlaceShips()
//     console.log(player1.gameboard.boardArray)
//     let player2 = Player(false);
//     player2.computerMakeRandomPlay(player1.gameboard)
    
//     player2.computerMakeRandomPlay(player1.gameboard)
    
//     player2.computerMakeRandomPlay(player1.gameboard)
//     console.log(player1.gameboard.boardArray)
    
// })