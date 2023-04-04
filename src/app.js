function getNumbers(arr) {
    return arr.filter(i => typeof i === 'number')
}
console.log(getNumbers([1, 2, "alex",  3, 4, "herbert"]))

function arrayOfArrays(arr) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        let largest = arr[i][0]
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] > largest){
                largest = arr[i][j];
            }
        }
        newArray.push(largest)
    }
    return newArray
}
console.log(arrayOfArrays([1, 2, 3,], [4, 5, 6,], [10, 20, 100]))

function rectangleArea(w,h) {
    if(typeof w !== 'number' ||typeof h !== 'number' || w <= 0 || h <= 0) {
        return "Error must be positive number"
    } else {
    const area = w * h;
    return area;
    }
}
console.log(rectangleArea(4,8))