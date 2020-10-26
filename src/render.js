import selectDom from "./selectDom"
const render = () => {
    let dom = selectDom()
    const renderStart = (p1,p2) => {
        // console.log(p1, p2)
        p1.gameboard.boardArray.forEach((element,i) => {
            if (!element) {
                dom.playerSquares[i].classList.add("emptySquare")
            }
            else if (typeof element === "string") {
                dom.playerSquares[i].classList.add("shipPart")
            }
        });
        p2.gameboard.boardArray.forEach((element, i) => {
            //dom.aiSquares[i].classList.add("aiSquare") //ovo doli izbrisati
            if (!element) {
                dom.aiSquares[i].classList.add("emptySquare")
            }
            else if (typeof element === "string") {
                dom.aiSquares[i].classList.add("shipPart")
            }
        })
    }
    return {renderStart}
}
export default render