import {elements} from "./selectDom"
import {game} from "./index"
import render from "./render";


export const dragAndDrop = () => {
    let currentShipLength;
    let selectedShipPartIndex;
    let selectedShipDiv;
    let numShipsPlaced = 0;
    let isHorizontal;
    elements.selectShips.forEach(ship => {
        ship.addEventListener("dragstart", (e) => {
            selectedShipDiv = e.target
            console.log(selectedShipDiv)
            currentShipLength = parseInt(e.target.dataset.id) + 1
            console.log(currentShipLength)
            ship.classList.contains("shipContainerHorizontal") ? isHorizontal = true : isHorizontal = false;
            // console.log(currentShipLength)
        } )
        ship.childNodes.forEach(shipPart => shipPart.addEventListener("mousedown", (e) => {
            selectedShipPartIndex = parseInt(e.target.dataset.id.slice(-1))
            // selectedShipLastIndex = selectedShipPartIndex
            // console.log(selectedShipPartIndex)
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
            console.log(currentShipLength)
            let diff = selectedShipPartIndex 
            let landingIndex = parseInt(e.target.dataset.id) - diff
            if (currentShipLength + (landingIndex % 10) <= 10) {
                // console.log("success")
                // console.log(game.player1.gameboard.placePlayersShip(landingIndex, currentShipLength, true))
                // console.log(currentShipLength)
                let success = game.player1.gameboard.placePlayersShip(landingIndex, currentShipLength, true)
                if (success) {
                    // console.log("success")
                    selectedShipDiv.remove()
                    render().renderPlayerShip(game.player1, currentShipLength)
                    elements.autoPlaceBtn.style.display = "none"
                    numShipsPlaced += 1;
                    if (numShipsPlaced === 5) {
                        elements.directionBtn.style.display = "none"
                        elements.selectGrid.style.display = "none"
                        removeEventListeners()
                        resetVars()
                        game.setReady(true)
                    }
                }
                
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
            let diff = selectedShipPartIndex * 10
            let landingIndex = parseInt(e.target.dataset.id) -diff
            let lowerEdge = (99 - (currentShipLength -1) * 10)
            if (landingIndex >= 0 && landingIndex <= lowerEdge) {
                // console.log("success")
                // console.log(currentShipLength)
                let success = game.player1.gameboard.placePlayersShip(landingIndex, currentShipLength, false)
                if (success) {
                    selectedShipDiv.remove()
                    render().renderPlayerShip(game.player1, currentShipLength)
                    elements.autoPlaceBtn.style.display = "none"
                    numShipsPlaced += 1;
                    if (numShipsPlaced === 5) {
                        elements.directionBtn.style.display = "none"
                        elements.selectGrid.style.display = "none"
                        removeEventListeners()
                        resetVars()
                        game.setReady(true)
                    }
                }
                
            }
            else {
                console.log("fail")
            }
            // console.log(landingIndex)
            // console.log(endPosition)
        }
    }
    const resetVars = () => {
         currentShipLength = null;
         selectedShipPartIndex = null;
         selectedShipDiv = null;
         numShipsPlaced = 0;
         isHorizontal = null;
    }
    const removeEventListeners = () => {
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
    // return {removeEventListeners}
}
