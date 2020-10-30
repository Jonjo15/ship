
export const elements = (() => {
 return   {
    playerGrid: document.querySelector(".playerGrid"),
    playerSquares: document.querySelectorAll(".playerGrid div"),
    aiSquares: document.querySelectorAll(".cpuGrid div"),
    cpuGrid: document.querySelector(".cpuGrid"),
    startBtn: document.querySelector("#startBtn"),
    info: document.querySelector(".info"),
    resetBtn: document.getElementById("resetBtn"),
    remShipsPlayer: document.querySelector(".remShipsPlayer"),
    remShipsAi: document.querySelector(".remShipsAi"),
    selectGrid: document.querySelector(".selectShipsGrid"),
}
})()