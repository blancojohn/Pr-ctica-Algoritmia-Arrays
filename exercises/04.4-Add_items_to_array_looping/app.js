let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************

/*SOLUCIÓN 1*/
for (let i= 1; i <= 10; i++){
    let numbers= Math.floor(Math.random() * 100)
    arr.push(numbers)
}
console.log(arr)