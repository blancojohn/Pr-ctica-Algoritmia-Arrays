let arrayOfCelsiusValues = [-2, 34, 56, -10];
let militaryHours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

/* let militaryToCivilian= function(hour){
	if(hour == 12) return `${hour}` + "pm";
	else if(hour == 24) return `${hour-12}` + "am";
	else if(hour > 11)return `${hour-12}` + "pm";
	else return hour + "am"
}

let civilianHours= militaryHours.map(militaryToCivilian)

console.log(civilianHours) */

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value) {
	// Add your code here and return the new value
	return (value * 9/5) + 32;
	
});

console.log(arrayOfFahrenheitValues);
	
	



