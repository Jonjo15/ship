import {elements} from "./selectDom"
import {game} from "./index"


export const dragAndDrop = () => {
    let currentShipLength;
    let selectedShipPartIndex;
    let endPosition;
    let isHorizontal;
    elements.selectShips.forEach(ship => {
        ship.addEventListener("dragstart", (e) => {
            currentShipLength = parseInt(e.target.dataset.id) + 1
            ship.classList.contains("shipContainerHorizontal") ? isHorizontal = true : isHorizontal = false;
            // console.log(currentShipLength)
        } )
        ship.childNodes.forEach(shipPart => shipPart.addEventListener("mousedown", (e) => {
            selectedShipPartIndex = parseInt(e.target.dataset.id.slice(-1))
            // selectedShipLastIndex = selectedShipPartIndex
            console.log(selectedShipPartIndex)
        }))
        
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
        if (isHorizontal) {
            let diff = (currentShipLength -1) - selectedShipPartIndex
            let landingIndex = parseInt(e.target.dataset.id)
            if (diff + (landingIndex % 10) < 10) {
                console.log("success")
            }
            else {
                console.log("fail")
            }
            // endPosition = parseInt(e.target.dataset.id) + diff
            // if ((currentShipLength + endPosition % 10) <= 10) {
            //     console.log("success")
            // }
            // else { //zavrsit ovo
            //     console.log("fail")
            // }
        }
        else{
            console.log(e.target)
            let diff = ((currentShipLength -1) - selectedShipPartIndex) * 10
            let landingIndex = parseInt(e.target.dataset.id)
            // console.log(landingIndex)
            // console.log(endPosition)
        }
    }

}
