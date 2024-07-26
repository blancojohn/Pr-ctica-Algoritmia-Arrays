let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

/* function printHalfList(array){
	let stopValue= array.length
	let initValue= stopValue / 2
	for (let i= initValue; i < stopValue; i ++){
		console.log(array[i])
	}
}

printHalfList(mySampleArray) */

let initialValue = 7;
let stopValue = mySampleArray.length;
let increasingValue = 1;

for(let i = initialValue; i < stopValue; i = i + increasingValue)
{
	console.log(mySampleArray[i]);
} 

/* function cutArrayInHalf(array){
	let sizeArray= array.length;
	let halfArray= sizeArray/2;
	newArray= array.slice(halfArray, sizeArray)
	console.log(newArray)
}
console.log("NUMBER ITEMS:", mySampleArray.length)

cutArrayInHalf(mySampleArray) */
