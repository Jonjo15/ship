import {elements} from "./selectDom"
import bindEvents from "./events"

import Ship from "./factories/ship"
import Gameboard from "./factories/gameboard"
import Player from "./factories/player"
import game from "./factories/gameloop"
// let dom = selectDom()
fillGrid(elements.playerGrid)
fillGrid(elements.cpuGrid)
// elements = selectelements()
// console.log(elements.startBtn)
bindEvents();
elements.startBtn.addEventListener("click", (e) => {
    game.gameLoop()
})
//
// elements.playerGrid.style.backgroundColor = "grey"
// elements.cpuGrid.style.backgroundColor = "aqua"

function fillGrid(parent) {
    for(let i = 0; i < 100; i++) {
        let div = document.createElement("div")
        div.classList.add("gridDiv")
        div.dataset.id = i;
        // if (parent.classList.contains("cpuGrid")) {
        //     div.addEventListener("click", (e) => {
        //         console.log(e.target.dataset.id)
        //         //playRound(+e.target.dataset.id)
        //     })
        // }
        
        parent.appendChild(div)
    }
}
