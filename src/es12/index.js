//ES12
//reemplazar palabras dentro de un string

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");

console.log(replacedString);

//ES12

const replacedStringAll = string.replaceAll("JavaScript", "Python");

console.log(replacedStringAll);


//Métodos privados #

class Message {
    #show(val) {
        console.log(val);
    };
    //get #add(val) {
    //    
    //}
}

const message = new Message();
message.show('Hola!');

//Promise Any, array de promesas, muestra el primer valor de la promesa que se resuelve primero

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));


// garbage reference , referencia débil

class anyClass {
    constructor(element) {
    this.ref = new WeakRef(element)
    }
}

//ayuda para trabajar con elementos de expresiones y operadores

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);