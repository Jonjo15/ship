import {elements} from "./selectDom"
import {game} from "./index"

export const dragAndDrop = () => {
    elements.selectShips.forEach(ship => ship.addEventListener("dragstart", (e) => console.log(e)))
    elements.playerSquares.forEach(square => {
        square.addEventListener("dragenter", dragEnter)
        square.addEventListener("dragleave", dragLeave)
        square.addEventListener("drop", dragDrop)
        square.addEventListener("dragenter", dragEnter)
        square.addEventListener("dragend", dragEnd)
    })
}
