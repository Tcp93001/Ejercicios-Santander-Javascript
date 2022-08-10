// Programacion imperativa
// const numbers = [1, 2, 3, 4, 5];
// const doubles = [];

// for(var i = 0; i < numbers.length; i++) {
//   doubles.push(numbers[i] * 2);
// }

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]

// Programacion funcional

// const numbers = [1, 2, 3, 4, 5];
// const doubles = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]

// Ejemplo 1

// const car = {
//     brand: 'Nissan',
//     model: 'Sentra',
//     year: 2020
// }

// Funcion que muta los datos
// function addColor(car) {
//     car.color = 'Black'
//     return car;
// }

// function addColor(car) {
//     // const newCar = Object.assign({}, car, {
//     //     color: 'Black'
//     // });

//     const newCar = {
//         ...car,
//         color: 'Black'
//     }
//     return newCar;
// }


// console.log('Antes de ejecutar la funcion', car)

// const sameCar = addColor(car)

// console.log('Despues de ejecutar la funcion ', car)
// console.log('Despues de ejecutar la funcion ', sameCar)

// console.log('Son los mismos autos? ', car === sameCar);

// function add(a, b) {
//     return a + b;
// }

// function randomNumber() {
//     return Math.floor(Math.random() * 10);
// }

// console.log(add(2, 3))
// console.log(randomNumber())

// let cart = [
//     {
//         item: 'Laptop',
//         quantity: 1
//     }
// ]

// function addItemToCart(cart, item, quantity) {
//     // const newCart = cart.map(function(element) {
//     //     return element;
//     // })

//     const newCart = [...cart]

//     newCart.push({
//         item,
//         quantity
//     })
//     return newCart;
// }

// cart = addItemToCart(cart, 'Telefono', 2);
// cart = addItemToCart(cart, 'Tablet', 4);

// console.log(cart)

// let square = function(number) {
//     return number * number;
// }

// let squareOfFour = square(4)

// console.log(squareOfFour)

// const numbers = [1, 2, 3, 4, 5, 4, 6];
// const doubles = numbers.map(function(number) {
//     return number * 2;
// })

// const evenNumbers = numbers.filter(number => number % 2 ===0);

// const sum = numbers.reduce(function(acum, number){
//     return acum + number;
// }, 0)

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]
// console.log(evenNumbers);
// console.log(sum);

// Input: 12345

//  -- 1 + 2 + 3 + 4 + 5 = 15

// Output: 15

const num = 12345;

// const str = num.toString();

// console.log('num ', num)
// console.log('str', str)

// const array = str.split('');
// console.log('array', array)

// const array = num.toString().split('');
// console.log('array', array)

// // const arrayOfNum = array.map(function(num){
// //     return Number(num);
// // })

// const arrayOfNum = array.map(Number);
// console.log('arrayofNumbers', arrayOfNum)

// const sum = arrayOfNum.reduce(function(a, b) {
//     return a + b;
// }, 0)
// console.log('sumna', sum)

// function sumDigits(number) {
//     return number
//             .toString()
//             .split('')
//             .map(Number)
//             .reduce(function(a, b) {
//                 return a + b;
//             }, 0)
// }

// console.log('sum,a digitos ', sumDigits(num))

// Desarrollo
// Crear una función flatten que recibe un arreglo de arreglos y retorna un nuevo arreglo con todos los elementos del arreglo original.

// function flatten(arrays) {
//   // Code goes here...
// }

// const arrays = [[1, 2, 3], [4, 5], [6]];
// // const array = flatten(arrays);

// // console.log(array); // [1, 2, 3, 4, 5, 6]

// function flatten(arrays) {
//     return arrays.reduce(function(arrayFlaten, elem) {
//         return arrayFlaten.concat(elem)
//     }, [])
// }
// const results = flatten(arrays)

// console.log(results)

// Crear una función compact que recibe un arreglo y retorna un nuevo arreglo sin incluir los valores que sean falsy.

// function compact(array) {
//     return array.filter(item => !!item)
// }

// const array = [0, '0', NaN, null, [], {}, 1, false, 2, '', 3];
// const compactedArray = compact(array);

// console.log(compactedArray); // [1, 2, 3]

// Crear una función de alto orden loop que será similar a un for.

// Recibe tres argumentos: start, una función test, una función update y una función body.

// El ciclo empieza en start y termina cuando test retorne false.
// En cada iteración se ejecuta la función body dándole como argumento el valor actual de start actual.
// Al final de cada ciclo se ejecuta la función update.
// function loop(start, test, update, body) {
//   // Code goes here...
//     for(let value = start; test(value); value = update(value)) {
//         body(value)
//     }
// }

// const test = function(n) {
//     return n > 0;
// }

// const update = function(n) {
//     return n - 1;
// }

// loop(3, test, update, console.log);
// 3
// 2
// 1