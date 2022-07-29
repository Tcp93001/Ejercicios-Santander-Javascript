
// function calculateAge(birthYear) {
//     const age = 2022 - birthYear;
//     return age;
// }

// const ageJohn = calculateAge(1969);

// console.log('Edad de John es ', ageJohn); //53

// function yearsUntilRetirement(yearOfBirth, name) {
//     const age = calculateAge(yearOfBirth);
//     const retirement = 65 - age;
//     console.log(`${name} retires in ${retirement} years`);
//     // console.log(name + ' retires in ' + retirement + ' years');
// }

// yearsUntilRetirement(1969, 'Jose');

// function power(base, exponent) {
//     let resultado = 1;
//     for (let i = 0; i < exponent; i++) {
//         resultado = resultado * base;
//     }

//     console.log('El resultado es ', resultado)
// }

// power(2, 0);

// const whatDoYouDo = function(job, name) {
//     switch (job) {
//         case 'developer':
//             return name + ' develops cool apps...'

//         case 'designer':
//             return name + ' designs awesome websites'


//         default:
//             return name + ' does something else'
//     }
// }

// console.log(whatDoYouDo('otro', 'Pepe'))

// Llamada recursiva en una función
// const factorial = function fac(num) {
//     return num < 2 ? 1 : num * fac(num - 1);
// }

// console.log(factorial(5)) // 120


// IIFE
// function logName() {
//     const name = 'John Doe';
//     console.log(name)
// }
// (function() {
//     const name = 'John Doe';
//     console.log(name)
// })()

// const firstNames = ['John', 'Jane', 'Mark'];

// function getFullNames(names) {
//     const fullNames = [];

//     for (const name of names) {
//         fullNames.push(`${name} Doe`)
//     }

//     return fullNames;
// }

// const getFullNames = names => {
//     const fullNames = [];

//     for (const name of names) {
//         fullNames.push(`${name} Doe`)
//     }

//     return fullNames;
// }

// const fullNames = getFullNames(firstNames);

// console.log(fullNames);

// const logName = name => console.log(`Hello ${name}`)

// logName('Jose');

// RETO 2


// function getLargerInt(numero1, numero2) {
//     if (numero1 > numero2) {
//         console.log(`${numero1} es mayor que ${numero2}`)
//     } else {
//         console.log(`${numero2} es mayor que ${numero1}`)
//     }
// }

// const getLargerInt = (num) => console.log(`El numero mayor de estos que me diste es ${num[0] > num[1] ? num[0] : num[1]}`)

// getLargerInt([9, 7]) // 9
// getLargerInt(5, 7) // 7

// RETO 3 Fibonacci

function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

function secuencia(limit) {
    if (limit < 1) return console.log('Limit debe ser mayor que 0');

    for(let i = 0; i <= limit; i++) {
        console.log(fibonacci(i))
    }
}

secuencia(5)