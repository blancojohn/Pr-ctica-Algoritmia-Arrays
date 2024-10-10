let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here

let resultingNames= allNames.filter(nameLetterR=>{
    for(let i=0; i <= nameLetterR.length; i++){
        if(nameLetterR[0]== "R"){
            return nameLetterR
        }
    }
})
console.log(resultingNames);
