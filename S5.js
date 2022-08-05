// if (true) {
//     var foo = 'John Doe'
//     console.log(foo)
// }

// console.log(foo)

// let numbers = [1, 2, 3, 4, 5]
// var doubles =[]

// for (let i = 0; i < numbers.length; i++) {
//     doubles.push(numbers[i] * 2)

// }

// console.log(numbers)
// console.log(doubles)
// console.log(i)

// (function prueba (){
//     var foo = "HOLA"
//     console.log (foo);
// })();

//   console.log (foo);

// function logThis () {
//     console.log("Is this === window? " + (this === window))
// }

// const foo = {
//     logThis: logThis
// }

// logThis() // Is this === window? true

// foo.logThis() // Is this === window? false

// const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: function() {
//       const today = new Date()
//       const year = today.getFullYear()
//       this.age = year - this.birthYear
//     }
//   }

//   console.log( john );
// /*
// Valor actual
// {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1990,
//   calculateAge: ƒ
// }
// */

// john.calculateAge();

// console.log( john );
// /*
// Después de llamar el método calculateAge()
// {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1990,
//   age: 31,
//   calculateAge: ƒ
// }
// */

// EJEMPLO DE HOISTING

// const power = (base, exponent) => {
//     let resultado = 1;

//     // asumiendo que el exponente es positivo siempre
//     for(let i = 0; i < exponent; i++){

//         resultado = resultado * base

//     }

//     return resultado;
// }

// console.log(power(4, 2))

// const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: function() {
//       const today = new Date()
//       const year = today.getFullYear()
//       this.age = year - this.birthYear
//     }
// }

// john.calculateAge()

// console.log(john)

// Reto 1 sesion 5

// let singers = [
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
// ];

// function pluck(list, propertyName) {
//     let values = [];

//     for(let i = 0; i < list.length; i++) {
//         // console.log('objeto por objeto', list[i].name)
//         values.push(list[i][propertyName]);
//     }

//     return values
// }

// let resultados = [...pluck(singers, 'name')]
// console.log( resultados );
// // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

// console.log( pluck(singers, 'band') );
// // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

// console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"