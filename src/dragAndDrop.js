import {elements} from "./selectDom"
import {game} from "./index"

export const dragAndDrop = () => {
    let currentShipLength;
    let selectedShipPart;
    elements.selectShips.forEach(ship => {
        ship.addEventListener("dragstart", (e) => {
            currentShipLength = parseInt(e.target.dataset.id) + 1
            // console.log(currentShipLength)
        } )
        ship.childNodes.forEach(shipPart => shipPart.addEventListener("mousedown", (e) => console.log(e.target.dataset.id)))
        
    })
    elements.playerSquares.forEach(square => {
        square.addEventListener("dragenter",(e) => dragEnter(e))
        square.addEventListener("dragleave",(e) => dragLeave(e))
        square.addEventListener("drop",(e) => dragDrop(e))
        square.addEventListener("dragover", function(event) {
            event.preventDefault();
          });
        square.addEventListener("dragend",(e) => dragEnd(e))
        // square.addEventListener("click", (e) => {
        //     console.log(e.target)
        // })
    })

    const dragEnter = (e) => {
        e.preventDefault()
       
    }
    const dragLeave = (e) => {
        e.preventDefault()
        
    }
    const dragEnd = (e) => {
        e.preventDefault()
        
    }
    const dragDrop = (e) => {
        console.log(e.target.dataset.id)
    }

}
