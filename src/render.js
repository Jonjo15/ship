import {elements} from "./selectDom"
const render = () => {
    // let dom = selectDom()
    
    const renderStart = (p1,p2) => {
        // console.log(p1, p2)
        renderDraggables(p1);
        // elements.directionBtn.addEventListener("click", (e) =>console.log(elements.selectShips))
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
        elements.selectShips = [...document.querySelectorAll(".selectShipsGrid div")].filter(ele => ele.hasAttribute("draggable"))

     }
     const changeShipDirection = () => {
         elements.selectShips.forEach((div, i) => {
             if (div.classList.contains("shipContainerHorizontal")) {
                 div.classList.remove("shipContainerHorizontal")
                 div.classList.add("shipContainerVertical")
                 div.style.height = "" + 30 * (i+1) + "px"
                 div.style.width = "30px"
             }
             else {
                div.classList.remove("shipContainerVertical")
                div.classList.add("shipContainerHorizontal")
                div.style.width = "" + 30 * (i+1) + "px"
                div.style.height = "30px"
             }
         })
     }
     const makeDivContainer = (length) => {
         let div = document.createElement("div");
         div.classList.add("shipContainerHorizontal");
         div.classList.add("ship" + length)
         div.dataset.id = (length-1);
         div.style.width = "" + (30 * length) + "px";
         div.setAttribute('draggable', true);
         for(let i = 0; i < length; i++) {
             let shipDiv = document.createElement("div");
             shipDiv.dataset.id = "" + length + "" + (i)
             div.appendChild(shipDiv)
         }
         return div;
     }
    return {renderStart, changeShipDirection}
}
export default render