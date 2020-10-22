const Ship = (length) => {
    const hitArray = new Array(length).fill(false)
    const getLength = () => length
    const hit = (pos) => {
        hitArray[pos] = true;
        return hitArray
    }
    const isSunk = () => hitArray.every(val => val)
    return {getLength, hit, isSunk}
}

export default Ship