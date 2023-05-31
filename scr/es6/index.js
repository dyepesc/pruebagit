function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || "COL";
    console.log(name, age, country);
}

// es6

function newFunction2(name = "oscar", age = 32, country = "COL") {
    console.log(name, age, country);
};

newFunction2();
newFunction2("Ricardo", 23, "MX");

let hello = "Hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// JS Normal
let lorem = "Quiero escribir una frase epica \n"
            + "Otra frase epica que necesito"
console.log(lorem); 

// es6

let lorem2 = `otra frase epica que necesito
ahora es otra frase epica
`;
console.log(lorem2); 

// JS Normal

let person = {
    "name": "oscar",
    "age": "32",
    "country": "COL"
}
console.log(person.name, person.age, person. country); 

// es6

let {name, age, country} = person;
console.log(name, age, country);

//*********************************** */

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];
let education = ["David", ...team1, ...team2];
console.log(education);

{
    var globalVar = "Global var";
}

{
    let globalLet = "Global Let";
}

console.log(globalVar);
console.log(globalLet); // sale error porque se debe ejecutar en el mismo bloque de codigo al ser una variable local

//******************************************** */

const a = "b";      //este tipo de variable no cambia, siempre es fijo
a = "a";            // sin importar si se vuelve a cambiar
console.log(a);

//******************************************** */

function printNumbers() {
	

	for (var i = 0; i < 10; i++) {
        
		setTimeout(function printer() {
            console.log(i);
	    },
			//100 * i
		);
	}
}

printNumbers();

let name = "oscar";
let age = 32;

// es5
obj = {name: name, age: age};

// es6
obj2 = {name, age};
console.log(obj2);

// Clases

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

//const calc = new calculator();
//console.log(calc.sum(2,2));

// es7



