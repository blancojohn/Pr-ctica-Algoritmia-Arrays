let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];


// Your code below
const deletePerson= (name)=>{
    let newArr= people.filter((names) => names != name)
    return newArr
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
