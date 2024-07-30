let i = 20;

do {
    // Magic goes here
    let numbers= i
    i--;
    if(numbers === 0){
        console.log('LIFTOOF')
    }else if(numbers % 5 === 0){
        console.log(numbers + '!')
    }else{
        console.log(numbers)
    }
} while (i >= 0);
