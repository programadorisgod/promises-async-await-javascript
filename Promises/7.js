//Aquí veremos como el Promise.all nos permite ejecutrar
//todas las promesas de manerar paralela, permitiendo que se ejecuten todas nuestras promoesas se ejecuten a la vez y nos devuelve una lista de los resultados cuando todas son resuetlas, pero en caso de error, devolverá unicamente el valor de quien falló.

function task(ms, name) {
    return new Promise((resolve) => setTimeout(() => resolve(name), ms))
}


async function executePromises() {
    const promises = [
        task(100, "Task1"),
        task(1000, "Task 2"),
        task(500, "Task3")
    ]
    console.log('Waiting...')
    
    const results = await Promise.all(promises)

    console.log('RESULTS:', results)
    //RESULTS: [ 'Tarea', 'Task 2', 'Task3' ]
}

executePromises()