import {elements} from "./selectDom"
const render = () => {
    // let dom = selectDom()
    console.log(elements)
    const renderStart = (p1,p2) => {
        // console.log(p1, p2)
        elements.info.textContent ="Your Turn"
        elements.remShipsPlayer.textContent ="Your ship positions left: " + p1.gameboard.getRemainingShips()
        elements.remShipsAi.textContent ="Computer's ship positions left: "+ p2.gameboard.getRemainingShips()
        p1.gameboard.boardArray.forEach((element,i) => {
            if (!element) {
                elements.playerSquares[i].classList.add("emptySquare")
            }
            else if (typeof element === "string") {
                elements.playerSquares[i].classList.add("shipPart")
                elements.playerSquares[i].dataset.shipId = element;
            }
        });
        p2.gameboard.boardArray.forEach((element, i) => {
            //elements.aiSquares[i].classList.add("aiSquare") //ovo doli izbrisati
            if (!element) {
                elements.aiSquares[i].classList.add("emptySquare")
               
            }
            else if (typeof element === "string") {
                elements.aiSquares[i].classList.add("emptySquare")
                elements.aiSquares[i].dataset.shipId = element;
            }
        })
    }
    return {renderStart}
}
export default render