let arr = [4,5,734,43,45];

// Your code here, use the push() function and the 2 Math functions
function insertTwoNumbersRandoms(array){
    let number1= Math.floor(Math.random() * 2)
    let number2= Math.floor(Math.random() * 10) 
 
    return array.push(number1, number2)
}
insertTwoNumbersRandoms(arr)
console.log(arr);
