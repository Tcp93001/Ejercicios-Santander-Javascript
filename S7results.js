
// function flatten(arrays) {
//     return arrays.reduce( function (arrayFlaten, elem) {
//         return arrayFlaten.concat(elem)
//     }, [])
// }

// var arrays = [[1, 2, 3], [4, 5], [6], [8, 9, 10]];
// var array = flatten(arrays);
// console.log('string' + 1)
// console.log(array); // [1, 2, 3, 4, 5, 6, 8, 9, 10]


// function compact(array) {
//     return array.filter(function(elem) {
//         return !!elem
//     })
// }

//   var array = [0, 1, false, 2, '', 3];
//   var compactedArray = compact(array);

//   console.log(compactedArray); // [1, 2, 3]


// function loop(start, test, update, body) {
//     for(let value = start; test(value); value = update(value)){
//       body(value)
//     }
//   }

//   let test = function(n) {
//     return n > 0;
//   }

//   let update = function(n) {
//     return n - 1;
//   }

//   loop(3, test, update, console.log);
  // 3
  // 2
  // 1