//napraviti event handlere
import SelectDom from "./selectDom"

// SelectDom.cpuSquares.addEventListener("click", (e) => console.log(e.target.dataset.id))
const bindEvents = () => {
    let dom = SelectDom()

    dom.aiSquares.forEach(element => {
        element.addEventListener("click", (e) => {
            console.log(e.target.dataset.id)
        })
    });
}
export default bindEvents