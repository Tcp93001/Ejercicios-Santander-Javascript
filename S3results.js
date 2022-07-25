
// Calcular promedio de los elementos de un array
const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];

let acumulador = 0;

for (let i = 0; i < numbers.length; i++) {
    acumulador = acumulador + numbers[i]
}

console.log(acumulador / numbers.length)


const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

const resultObject = {};

for (let i = 0; i < car.length; i++) {
    resultObject[car[i][0]] = car[i][1]
}

console.log(resultObject);

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

  const {links: {social: {facebook: fb, instagram: ig}}} = person

  console.log('facebook', fb);
  console.log('instagram', ig);