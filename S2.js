// Ejercicio 1 sesion 2

    // const time = 24;
    // let greeting;

    // if (time < 0 || time > 23) {
    //     greeting = 'valor de hora inválido'
    // } else if (time < 12 && time >= 0) {
    //     greeting = 'Buenos dias!'
    // } else if (time < 19 && time >= 12) {
    //     greeting = 'Buenas tardes!'
    // } else if (time >= 19 && time <= 23) {
    //     greeting = 'Buenas noches!'
    // }

    // console.log(greeting);

// Ejercicio 2

// const day = 7;
// let text;

// switch (day) {
//     case 1:
//         text = 'Monday';
//         break;
//     case 2:
//         text = 'Tuesday';
//         break;
//     case 3:
//         text = 'Wednesday';
//         break;
//     case 4:
//         text = 'Thursday';
//         break;
//     case 5:
//         text = 'Friday';
//         break;
//     case 6:
//         text = 'Saturday';
//         break;
//     case 7:
//         text = 'Sunday';
//         break;

//     default:
//         text = 'Valor inválido';
//         break;
// }

// console.log(text);

// Ejemplo de operador Ternario

// const speed = 40;
// let message;

// message = '0' ? 'Vas muy rápido' : 'vas a la velocidad correcta';
// // if (speed > 100) {
// //     message = 'Vas muy rápido';
// // } else {
// //     message = 'Vas muy rápido';
// // }

// const isFast = speed > 100;

// console.log(message);
// console.log('En verdad vas muy rápido?', isFast);

// Ejemplo de Bucle

// for (let index = 0; index < 200; index++) {
    //     if (index === 196) break
    //     console.log('Hello world! repeticion', index)
// }

// Reto 2

// for (let index = 0; index <= 100; index++) {
//     // if (index % 2 === 0) console.log('Numero par ', index);
//     if (!(index % 2)) console.log('Numero par ', index);
// }

// Reto 3 Numeros primos de cero a 100

for (let counter = 0; counter <= 100; counter++) {
    let isPrime = true;

    for(let index = 2; index <= counter; index++) {
        console.log(counter)
        console.log(index)
        if(counter % index === 0 && index !== counter) {
            isPrime = false;
        }
    }
    if (isPrime) console.log('Numero primo es ', counter)
}

