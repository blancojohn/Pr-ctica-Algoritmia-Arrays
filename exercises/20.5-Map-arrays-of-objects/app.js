let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	// Your code here
	let name= person.name;
	let age=  person.birthDate.getTime() - Date.now();
	let instancie= new Date(age);
	let transformation= Math.abs(instancie.getUTCFullYear() - 1970)
	return `Hello, my name is ${name} and i am ${transformation} years old`;
};

console.log(people.map(simplifier));
