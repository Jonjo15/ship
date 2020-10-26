import selectDom from "./selectDom"
import bindEvents from "./events"
import game from "./factories/gameloop"
import Ship from "./factories/ship"
import Gameboard from "./factories/gameboard"
import Player from "./factories/player"
let dom = selectDom()
fillGrid(dom.playerGrid)
fillGrid(dom.cpuGrid)
bindEvents();
//
// dom.playerGrid.style.backgroundColor = "grey"
// dom.cpuGrid.style.backgroundColor = "aqua"

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
