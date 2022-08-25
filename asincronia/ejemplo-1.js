// function startProcess() {
//     console.log('Start Phase 1. Wait one second...');
//     setTimeout(function () {
//       console.log('Phase 1 completed. Wait two seconds...');
//       setTimeout(function () {
//         console.log('Phase 2 completed. Wait three seconds...');
//         setTimeout(function () {
//           console.log('Phase 3 completed. Wait four seconds...');
//           setTimeout(function () {
//             console.log('Phase 4 completed.');
//             // More asynchronous calls...
//           }, 4000);
//         }, 3000);
//       }, 2000);
//     }, 1000);
//   }

// startProcess();

export default function foo() {
    return new Promise((resolve, reject) => {
      // Async operations...
      resolve(value);
      reject(new Error('Process Failed'))
    })
}


foo()
    .then(value => console.log(value))
    .catch(error => console.log(error))
