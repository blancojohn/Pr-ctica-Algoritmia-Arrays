let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

// Your code here

const filterByName= (arr, speceficString)=>{
    let arrFilter= arr.filter(item=> item.toLowerCase().includes(speceficString)
    )
    return arrFilter
}
console.log('LONGITUD ARRAY ORIGINAL', names.length)
console.log('ARRAY FILTRADO', filterByName(names, 'am')) 
