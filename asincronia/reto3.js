// Reto 3
// Don't alter this function
const processAction = (i, callback) => {
    setTimeout(function() {
        callback("Processed Action " + i);
    }, Math.random()*1000);
}

const triggerActions = (count) => {
    if (count <= 0) return; // cuando el número de pasos sea cero, entonces triggerActions cierra y se cierra el stack de ejecución
    // Code goes here
    async function callback(message) {
        try { // se utiliza try para ejecutar un código una vez que la promesa que envuelve a callback() se resuelve al ejecutarse el proceso
            console.log(message) // imprime el mensaje cuando el timer del setTimeout finaliza
            triggerActions(count - 1) // nuevamente llama a triggerActions, pero con el número de pasos menos uno.
        }
        catch{error => console.log(error)} // por buena práctica, al menos ponemos un catch para obtener un error, si existe
    }

    processAction(count, callback) // ejecuta el processAction, con el nuevo valor de count y la función callback en el stack
}


triggerActions(10)
