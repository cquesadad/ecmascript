//Ecmascript 8

//devolver una matriz de arreglos

const data = {
    frontend: 'Oscar',
    backend: 'Carlos',
    design: 'Rita'
}

const entries = Object.entries(data);
console.log(entries);

//saber tamaño del arreglo
console.log(entries.length);

//Crea un arreglo de strings solo con los valores de nombres
const data2 = {
    frontend: 'Oscar',
    backend: 'Carlos',
    design: 'Rita',
    design2: 'Yamilet'
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

// Añadir texto al string al inicio o al final
const string = 'Carlos';
console.log(string.padStart(9, 'Hi '));
console.log(string.padEnd(12, ' ----- '));
console.log('food'.padEnd(12, ' ----- '));

//Trenlin comas
// const object4 {
//     user:'carlos',
// } 

// Asinc y await //  Esperar 3 segundos para ejecutar la función 
const holaMundo = () => { 
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('HOla Mundo'), 3000)
        : reject(new Error('Test Error'))
    })
};

const holaAsync = async () => {
    const holahola = await holaMundo();
    console.log(holahola);
} 

holaAsync();

const anotherFunction = async () => {
    try {
        const hello = await holaMundo();
        console.log(hello);
    } catch (error) {
        console.log(error); 
    }
}

anotherFunction();
