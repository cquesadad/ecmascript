//ES10

let array = [1,2,3, [1,2,3, [1,2,3]]];

//valor de la profundidad sobre la cual se quiere trabajar
console.log(array.flat(2));

//mapear elemento , pasarle función y después aplanarlo

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));

//eliminar los espacios en blanco de un string
//al inicio
let saludo = '       Este es el saludo';

console.log(saludo);

console.log(saludo.trimStart());

//al final
let saludo2 = 'Este es un saludo 2     ';

console.log(saludo2);

console.log(saludo2.trimEnd());

//nueva sintaxis de try catch
try {

} catch {
    error 
}

//Transformar clave valor en un objeto en un array con arrays, ahora se puede transformar objetos a arreglos y de arreglos a objetos

let entries = [["name", "Carlos"], ["age", 32]];

console.log(Object.fromEntries(entries));


// Objeto de tipo símbolo para acceder a una descripción // palabra reservada description

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
