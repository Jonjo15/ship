export default () => {
    const playerGrid = document.querySelector(".playerGrid")
    let playerSquares = document.querySelectorAll(".playerGrid div")
    let aiSquares = document.querySelectorAll(".cpuGrid div")
    const cpuGrid = document.querySelector(".cpuGrid")
    const startBtn = document.querySelector("#startBtn")
    return {playerGrid, cpuGrid, startBtn, playerSquares, aiSquares}
}