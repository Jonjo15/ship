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
                elements.playerSquares[i].classList.add("ship" + (parseInt(element.slice(-2, -1)) +1))
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
     const renderDraggables = (p1) => {
         console.log(p1)
        p1.gameboard.ships.forEach((ship, i) => {
            elements.selectGrid.appendChild(makeDivContainer(ship.getLength()))
        })

     }
     const changeShipDirection = () => {
         
     }
     const makeDivContainer = (length) => {
         let div = document.createElement("div");
         div.classList.add("shipContainerHorizontal");
         div.classList.add("ship" + length)
         div.dataset.id = (length-1);
         div.style.width = "" + (30 * length) + "px";
         div.setAttribute('draggable', true);
         for(let i = 0; i< length; i++) {
             let shipDiv = document.createElement("div");
             shipDiv.dataset.id = "" + length + (i-1)
             div.appendChild(shipDiv)
         }
         return div;
     }
    return {renderStart, renderDraggables}
}
export default render