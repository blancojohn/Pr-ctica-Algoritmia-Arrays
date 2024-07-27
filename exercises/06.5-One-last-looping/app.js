let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];
function invertingArray(array){
    for (let i= array.length -1; i >= 0; i-- ){
        let item= array[i]
        console.log(item)
    }
}

invertingArray(mySampleArray) 
/* console.log(mySampleArray) //imprime un array de elementos.
console.log(mySampleArray.length) //imprime el número de cantidad de elementos
console.log(mySampleArray[mySampleArray.length-1]) //immprime el elemento del último índice
 */