import Ship from "./ship"

test("setting ships length works,", () => {
    expect(Ship(4).getLength()).toBe(4)
})
test("hitting the ship works", () => {
    let ship = Ship(4)
    expect(ship.hit(0)).toStrictEqual([true,false,false,false])
})
test("hitting the ship works(2)", () => {
    let ship = Ship(3)
    ship.hit(0)
    expect(ship.hit(1)).toStrictEqual([true,true,false])
})
test("isSunk should return false if ship not hit", () => {
    expect(Ship(4).isSunk()).toBe(false)
})
test("isSunk should return true if all ships positions hit",() => {
    let ship = Ship(2)
    ship.hit(0)
    ship.hit(1)
    expect(ship.isSunk()).toBe(true)
})