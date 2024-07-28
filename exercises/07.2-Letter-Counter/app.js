let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for (let i= 0; i < par.length; i ++){
    const letters= par[i].toLowerCase()
    if( letters == " ") continue
    else if (counts[letters] == undefined){
        counts[letters]= 1
   
        counts[letters]= counts[letters] + 1
    }
} 
/* console.log(par.length) */
console.log(counts)


