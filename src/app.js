function getNumbers(arr) {
    return arr.filter(i => typeof i == 'number')
}
console.log(getNumbers([1, 2, "alex", 3, 4, "herbert"]))