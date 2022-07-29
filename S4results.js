
// POTENCIACION reto 1
// function power(base, exponent) {
//     let resultado = 1;

//     // asumiendo que el exponente es positivo siempre
//     for(let i = 0; i < exponent; i++){

//         resultado = resultado * base

//     }

//     return resultado;
// }

// console.log(power(4, 2))


// // // OPtra posible solucion
// // function potencia(base, exponente){
// //     let resultado = 1;
// //     if (exponente > 0 ){
// //         resultado = base
// //         for (let i=1; i<exponente; i++){
// //             resultado = resultado * base;
// //         }
// //     return resultado;
// //     }
// // }


// RETO 2 Encontrar el número mayor
// function getLargerInt(number1, number2) {
//     return number1 > number2 ? number1 : number2;
//     // if (number1 > number2) {
//     //     return number1
//     // } else {
//     //     return number2
//     // }
// }


// RETO 3 Funcion Fibonacci

// function fibonacci(num) {
//     if (num === 0) return 0;
//     if (num === 1) return 1;

//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// function secuencia(limit) {
//     if (limit < 1) return console.log('Limit debe ser mayor que 0');

//     for(let i = 0; i < limit; i++) {
//         console.log(fibonacci(i))
//     }
// }