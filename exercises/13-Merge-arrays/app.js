let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = [...firstArray, ...secondArray]
    return newArray
}

console.log("ARRAY CHUNKONE", chunkOne)
console.log("ARRAY CHUNKTWO", chunkTwo)

console.log(mergeArrays(chunkOne, chunkTwo));
