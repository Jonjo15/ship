//napraviti event handlere
import {elements} from "./selectDom"
import game from "./factories/gameloop"
// SelectDom.cpuSquares.addEventListener("click", (e) => console.log(e.target.dataset.id))
const bindEvents = () => {
    // let dom = SelectDom()

    elements.aiSquares.forEach(element => {
        element.addEventListener("click", (e) => {
            console.log(e.target.dataset.id)
            game.playerAttack(+e.target.dataset.id)
        })
    });

    // elements.startBtn.addEventListener("click", (e) => {
    //     game.gameLoop()
    // })
}
export default bindEvents