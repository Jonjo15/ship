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