//ES11 2020

//Dinamic import, llamar a archivo cuando se haga algo
const buttom = document.getElementById("btn");

buttom.addEventListener("click", async () => {
    const module = await import("./file.js");
    module.hello();
})

// if (true) {
//     import('./module.js').then((module) => {
//       module.myFunction();
//     });
// }

//Trabajar con números grandes

const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Devuelve una promesa cuando las otras promesas se hayan completado

const promise1 = new Promise ((resolve, reject) => reject("reject"));
const promise2 = new Promise ((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise ((resolve, reject) => resolve("Resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//Global dist, tiene el valor global y es similar al objeto global 
console.log(globalThis);

// ASigna un valor por defecto null  "Nulish Coalescing Operator"
const fooo = null ?? 'default string';
console.log(fooo);

//Optional chaining

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else {
    console.log('fail');
}



