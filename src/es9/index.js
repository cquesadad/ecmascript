//ECMASCRIPT 9

import { response } from "express";

/**
 * Spread Operator // seleccionar el nombre y encapsular el resto de los datos dentro
 */
 const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
  };

//ejemplo 1
  let {name, ...all} = obj;
  console.log(name, all);

//ejemplo 2
  let {country, ...all} = obj;
  console.log(country, all);

//ejemplo 3
  const obj = {
    name: 'Carlos',
    age: 31
  }

  const obj1 = {
    ...obj, 
    country: 'MX'
  }

  console.log(obj1);

  //Ejecutar una función al final de una promesa .finally

  const hellomundo = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello Mundo'), 3000)
        : reject(new Error('Test Error'))
    });
  };

  hellomundo()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizó'))

  //agrupar bloques de regex y acceder a ellos

  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)