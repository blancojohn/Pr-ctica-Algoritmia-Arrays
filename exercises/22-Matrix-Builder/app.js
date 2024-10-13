
const matrixBuilder = (number) => {
    //Crea la primera dimensión del array con longitud de acuerdo al parámetro.
    let matrix = Array(number)
    for(let i = 0; i < number; i++) {
        //Por cada index crea la segunda dimensión momentaneamente con null con longitud del parámetro recibido.
        matrix[i]= Array(number).fill(null)
        // Por cada index en la segunda dimensión genera un número aleatorio.
         for(let j= 0; j < matrix[i].length; j++){
            matrix[i][j] = Math.floor(Math.random() * 2)
         }
    }
    return matrix
}
// Do not change anything from this line down
console.log(matrixBuilder(5)) 
