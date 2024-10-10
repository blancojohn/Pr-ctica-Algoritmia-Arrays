let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
theNewArray= theBools.map(item=>{
    if(item == 0){
        item= 'woko'
    }
    else if(item == 1){
        item= 'wiki'
    }
    return item
})
console.log(theNewArray)