//Promise.race, nos permitirá retornar una promesa que se cumplirá o no tan pronto como una de las promesas del iterable sea resuelta o rechazada con el razon o valor de esta. Es decir se pasa un iterable de promesas, cuando la primera de estas se resuelva o rechace se devolverá esa promesa con el valor o la razón.

function task (ms, name) {
    return new Promise((resolve) => setTimeout(() => resolve(name), ms))
}


async function executePromises() {
    const promises = [
        task(100, "Tarea 1"),
        task(1000, "Task 2"),
        task(50, "Task 3")
    ]
    console.log('Waiting...')
    
    const results = await Promise.race(promises)

    console.log('RESULTS:', results)
    //RESULT: Task 3
}

executePromises()