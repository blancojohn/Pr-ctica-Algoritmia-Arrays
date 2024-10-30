let parkingState = [
  [1, 0, 2, 1, 0, 1],
  [2, 0, 2, 2, 0, 1],
  [1, 0, 2, 1, 0, 1],
  [2, 0, 2, 1, 0, 2],
  [2, 0, 1, 1, 0, 1],
  [2, 0, 2, 1, 0, 1],
]

// Your code here
const getParkingLotState=(parking)=>{
  let state= {
    totalsSlots: null,
    availableSlots: null,
    occupiedSlots: null
  }

  for(let i=0; i < parking.length; i++){ // accede a la primera dimensión
    for(let j=0; j < parking[i].length; j ++){ // accede a la segunada dimensión por cada valor de i en la segundad dimensión
      if( parking[i][j] == 1){ // puestos ocupados 
        state["occupiedSlots"] += 1 // agregar a la prpoiedad el total de puestos ocupados.
        state["totalsSlots"] += 1 // El puesto ocupado de igual manera se suma al total
      }
      else if( parking[i][j] == 2){ // puestos disponibles
        state["availableSlots"] += 1 // agregar la cantidad de puestos disponibles.
        state["totalsSlots"] += 1   // El puesto desocupado se suma al total de peustos.
      }
    }
  }
  return state
  /* return{
    hola:  "john",
    restaurant: "Pasta la Nonna"
  } */
}

console.log(getParkingLotState(parkingState))
