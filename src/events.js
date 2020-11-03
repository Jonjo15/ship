//napraviti event handlere
import {elements} from "./selectDom"
import Game from "./factories/gameloop"
import {game} from "./index"
import render from "./render";
// SelectDom.cpuSquares.addEventListener("click", (e) => console.log(e.target.dataset.id))
const bindEvents = () => {
    // let dom = SelectDom()

    elements.aiSquares.forEach(element => {
        element.addEventListener("click", (e) => {
            // console.log(e.target.dataset.id)
            game.playerAttack(+e.target.dataset.id)
        })
    });
    elements.resetBtn.addEventListener("click", (e) => game.reset())

    elements.directionBtn.addEventListener("click", (e) => render().changeShipDirection())
    elements.autoPlaceBtn.addEventListener("click", (e) => {
        game.player1.gameboard.aiPlaceShips()
        game.setReady(true)
        render().autoRenderPlayer(game.player1)
        elements.selectShips.forEach(ship => ship.remove())
        elements.directionBtn.style.display = "none"
        elements.autoPlaceBtn.style.display ="none"
        elements.selectGrid.style.display = "none"
    })
    // elements.startBtn.addEventListener("click", (e) => {
    //     game.gameLoop()
    // })
}
export const removeEventListeners = () => {
    elements.playerSquares.forEach(square => {
        square.removeEventListener("dragenter",(e) => dragEnter(e))
        square.removeEventListener("dragleave",(e) => dragLeave(e))
        square.removeEventListener("drop",(e) => dragDrop(e))
        square.removeEventListener("dragover", function(event) {
            event.preventDefault();
          });
        square.removeEventListener("dragend",(e) => dragEnd(e))
        // square.addEventListener("click", (e) => {
        //     console.log(e.target)
        // })
    })
}
export default bindEvents