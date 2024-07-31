let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
const mergeTwoList= (arr)=>{
    let odd= [];
    let even= [];
    for(let i in arr){
        (arr[i] % 2 === 0)? even.push(arr[i]) : odd.push(arr[i])
    }
    let newArr= odd.concat(even)
    return newArr 
}

console.log(mergeTwoList(listOfNumbers))