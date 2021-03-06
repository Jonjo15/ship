import {elements} from "./selectDom"
import bindEvents from "./events"
import {dragAndDrop} from "./dragAndDrop"
import Ship from "./factories/ship"
import Gameboard from "./factories/gameboard"
import Player from "./factories/player"
import Game from "./factories/gameloop"
// let dom = selectDom()
let dom = Object.assign(elements)
fillGrid(elements.playerGrid)
fillGrid(elements.cpuGrid)
dom.aiSquares = document.querySelectorAll(".cpuGrid div");
dom.playerSquares = document.querySelectorAll(".playerGrid div")

let game;

dom.startBtn.addEventListener("click", (e) => {
    game = Game();
    game.gameLoop();
    dom.startBtn.style.display = "none";
    dom.resetBtn.style.display = "inline-block"
    elements.autoPlaceBtn.style.display = "inline-block"
    elements.selectGrid.style.display = "flex"
    elements.playerGrid.style.display = "flex"
    elements.cpuGrid.style.display = "flex"
    dragAndDrop()
});
//
bindEvents();
// elements.playerGrid.style.backgroundColor = "grey"
// elements.cpuGrid.style.backgroundColor = "aqua"

function fillGrid(parent) {
    for(let i = 0; i < 100; i++) {
        let div = document.createElement("div")
        // div.classList.add("gridDiv")
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
export {game}