async function foo() {
    // return Promise.resolve('Hello World');
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello World'), 1000);
        // setTimeout(() => reject('failed'), 1000);
    })
}

// foo().then(value => console.log(value)) // Hello World

// async function bar() {
//     let result = await foo();

//     console.log(result)
// }

async function bar() {
    try {
        let result = await foo();
        console.log(result)
    } catch(err) {
        console.log(err)
    }
}

bar()