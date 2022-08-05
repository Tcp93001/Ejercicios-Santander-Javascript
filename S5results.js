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
//         console.log('objeto por objeto', list[i].name)

//         values.push(list[i][propertyName]);
//     }

//     return values
// }

// let resultados = pluck(singers, 'name')
// console.log( resultados );
// // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

// console.log( pluck(singers, 'band') );
// // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

// console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]



// Reto 2 sesion 5

// const createPhoneNumber = function(arr) {
//     if (arr.length < 10) return

//     let str = arr.join('');

//     return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
// function createPhoneNumber(arr) {
//     let mask = '(xxx) xxx-xxxx';

//     arr.forEach(item => {
//         mask = mask.replace('x', item);
//     });

//     return mask;
// }


// RETO 3 Sesion 5

findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]

function findMissingNumbers(arr) {
    const results =[];
    const unOrderederArray = [...arr];
    const orderedArray = unOrderederArray.sort((a, b) => a - b);
    console.log(orderedArray);

    let diff = orderedArray[0] - 0; // numero inicial donde empiezo a contar

    for(let i = 0; i < orderedArray.length; i++) {
        if (orderedArray[i] - i !== diff) {

            while (diff < orderedArray[i] - i) {
                results.push(i + diff);
                diff++
            }

        }
    }

    console.log(results)
}

