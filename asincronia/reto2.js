async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 'Hello World';
}

function log(value) {
// Code goes here...
    wait().then(result => console.log(result, value))
}

log(2)