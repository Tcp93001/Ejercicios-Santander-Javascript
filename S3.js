// Sesion 3 Ejmplo 1

// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

// // RESULTADO const doubled = [2, 6, 8, 14, 4, 2, 18, 0]

// const doubled = [];

// for (let index = 0; index < numbers.length ; index++) {
//     doubled.push(numbers[index] * 2);
// }

// console.log('Numbers: ', numbers);
// console.log('Doubled: ', doubled);


// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]
// const doubled = [];

// for (const num of numbers) {
//     doubled.push(num * 2);
// }

// console.log('Numbers: ', numbers);
// console.log('Doubled: ', doubled);


// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]
// const doubled = [];

// for (const num of numbers) {
//     if (num === 1 || num === 7) continue
//     doubled.push(num * 2);
// }

// console.log('Numbers: ', numbers);
// console.log('Doubled: ', doubled);

// RETO 1 - Calcular promedio de los elementos de un array
// const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];

// let acumulador = 0;

// // for (let index = 0; index < numbers.length; index++) {
// //     acumulador = acumulador + numbers[index];
// // }

// for (const num of numbers) {
//     acumulador = acumulador + num;
// }
// console.log(acumulador / numbers.length);

// OBJETOS

// const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990
// }

// console.log(john.firstName);
// console.log(john['lastName']);

// john.firstName = 'Jane';
// john['lastName'] = 'Does';
// console.log(john.firstName);
// console.log(john.lastName);

// Ejemplo convirtiendo un objeto en array

// const car = {
//     brand: 'Nissan',
//     model: 'Versa',
//     year: 2020
// }

// // [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]\

// const keys = Object.keys(car); // ['brand', 'model', 'year']
// const pairs = [];

// // console.log(keys)
// // console.log([keys[0], car[keys[0]]])

// for (let i = 0; i < keys.length; i++) {
//     pairs.push( [keys[i], car[keys[i]]] )
// }

// console.log(pairs)

// // const auto = {
// //     brand: 'Nissan',
// //     model: 'Versa',
// //     year: 2020
// // }

// const auto = {};

// for (let i = 0; i < pairs.length; i++) {
//     auto[pairs[i][0]] = pairs[i][1]
// }
// console.log(auto)

// const colors = ['red', 'blue', 'green'];

// const myColors = [...colors]

// console.log(colors)
// console.log('mycolors', myColors)

// colors[0] = 'pink'

// console.log(colors)
// console.log('mycolors', myColors)

// const auto = {
//     brand: 'Nissan',
//     model: 'Versa',
//     year: 2020
// }

// const automovil = {...auto}

// console.log(auto)
// console.log(automovil)

// auto.brand = 'Ford'
// console.log(auto)
// console.log(automovil)

// const primeros = [1, 2, 3]
// const segundos = [4, 5, 6]

// // const todos = [...primeros, ...segundos]
// const todos = [...segundos, ...primeros]
// console.log(todos)

// const auto = {
//     brand: 'Nissan',
//     model: 'Versa',
//     year: 2020
// }

// const concesionaria = {
//     vendedor: 'jose',
//     oficina: 'Perisur'
// }

// const resultado = {
//     year: 2022,
//     ...auto,
//     ...concesionaria
// }

// console.log(resultado)

// const colors = ['red', 'blue', 'green'];

// const [Rojo, Azul, Verde] = colors;

// console.log(Rojo)
// console.log(Azul)
// console.log(Verde)

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     job: {
//         type: 'Developer',
//         yearsWorking: 5
//     }
// }

// const working = person.job.yearsWorking;

// const {job: {yearsWorking}} = person;

// // const firstName = person.firstName;

// // const {firstName: name, job = 'Developer'} = person;
// const {firstName, lastName} = person;

// console.log('firstName', firstName)
// console.log('name', name)
// console.log('lastName', lastName)
// console.log('job', job)

const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      },
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      }
    }
}

const {
    links:
        {social:
            {facebook: fb, instagram: ig}
        }
} = person

console.log(fb, ig)