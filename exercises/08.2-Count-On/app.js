let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let i = 0; i < myArray.length; i++) {
    let item = typeof myArray[i];
    if (item !== "object") continue;
    else{
        hello.push(item)
    }
    // MAGIC HAPPENS HERE
}


console.log(hello)
