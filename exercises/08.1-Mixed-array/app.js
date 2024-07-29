let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
// Your code here
let dataTypes= [];
for (let index in mix){
    let item= typeof (mix[index])
    dataTypes.push(item)
}
console.log(dataTypes)
