import selectDom from "./selectDom"
let dom = selectDom();
//
// dom.playerGrid.style.backgroundColor = "grey"
// dom.cpuGrid.style.backgroundColor = "aqua"

function fillGrid(parent) {
    for(let i = 0; i < 100; i++) {
        let div = document.createElement("div")
        div.classList.add("gridDiv")
        div.dataset.id = i;
        div.addEventListener("click", (e) => {
            console.log(e.target.dataset.id) //it's a string
        })
        parent.appendChild(div)
    }
}
fillGrid(dom.playerGrid)
fillGrid(dom.cpuGrid)