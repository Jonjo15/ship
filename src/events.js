//napraviti event handlere
import SelectDom from "./selectDom"
import game from "./factories/gameloop"
// SelectDom.cpuSquares.addEventListener("click", (e) => console.log(e.target.dataset.id))
const bindEvents = () => {
    let dom = SelectDom()

    dom.aiSquares.forEach(element => {
        element.addEventListener("click", (e) => {
            game.playTurn(+e.target.dataset.id)
        })
    });

    dom.startBtn.addEventListener("click", game.gameLoop())
}
export default bindEvents