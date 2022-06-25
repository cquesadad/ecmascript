//Default params funciones

function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || "ES";
    cconsole.log(name, age, country);
}

//es6
 
function newFunction2(name = 'Oscar', age = 32, country = "ES") {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 34, "MX");

//Concatenaciones 

let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world} `
console.log(epicPhrase2);


// Multilínea

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "otra frase epica que necesitamos."

// es6

let lorem2 = `otra frase epica que necesitamos 
la segunda frase
`;

console.log(lorem);
console.log(lorem2);


//Extraer elementos de objetos
let person = {
    'name': 'Carlos',
    'age': 31,
    'country': 'CU' 
}

console.log(person.name, person.age);

//es6
let { name, age, country } = person;
console.log(name, age, country);

//Desestructuración 
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//Let, variables para guardar en memoria, existe dentro de un bloque solamente

var hola = "Hola";

//Bloque Var
{
    var globalVar = "Global Var";
}

//Bloque Let
{
    let globalLet = "Global Let";
    //Solo se puede llamar dentro del bloque
    console.log(globalLet);
}

//Se puede llamar globalmente
console.log(globalVar);

//const no varía su valor, es constante siempre
const a = 'b';
a = 'a';
console.log(a);
