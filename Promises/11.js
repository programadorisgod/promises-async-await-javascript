import { createReadStream } from "node:fs"



let users = []
let orders = []
let ordersDetails = []


function loadFileToArray(filepath, targetArray)  {

    const chuncks = []
    const stream = createReadStream(filepath)
    return new Promise((resolve, reject) => {
        stream.on('data', (chunck) => {
            chuncks.push(chunck)
        })
        stream.on('error', (err) => {
            console.error(err)
            reject
        })
        stream.on('end', () => {
            const data = JSON.parse(Buffer.concat(chuncks).toString())


            targetArray.push(...data)
            resolve()
        })
    })
}



function getUser(id) {
    return new Promise((resolve, _reject) => {
        const userFound = users.find((user) => user.id === id)
        setTimeout(() => resolve(userFound), 500)
    })
}

function getOrders(id) {
    return new Promise((resolve, _reject) => {
        const orderFound = orders.find((order) => order.id === id)
        setTimeout(() => resolve(orderFound), 500)
    })
}

function getOrdersDetail(id) {
    return new Promise((resolve, _reject) => {
        const orderFound = ordersDetails.find((orderD) => orderD.id === id)
        setTimeout(() => resolve(orderFound), 500)
    })
}



async function fetchOrderDetailsForAwait(orders) {
    const details = []

    for (const order of orders) {
        const detail = await getOrdersDetail(order.id)
        details.push(detail)
    }

    return details
}

async function fetchOrderDetailsWithPromiseAll(orders) {

    const details = orders.map((order) => getOrdersDetail(order.id))

    return Promise.all(details)
}

;
(async () => {

    await Promise.all([
        loadFileToArray('./MOCK_DATA.json', users),
        loadFileToArray('./orders.json', orders),
        loadFileToArray('./orders_details.json', ordersDetails),
    ])

    console.time('N+1')
    await fetchOrderDetailsForAwait(orders)
    console.timeEnd('N+1')

    console.time('Promise.all')
    await fetchOrderDetailsWithPromiseAll(orders)
    console.timeEnd('Promise.all')
})()

/* Aquí nos enfrentamos al problema de la query N+1: 
Es decir hacemos una primera consulta (query) para obtener un conjunto de elemots, pero por cada item se realiza otra consulta (query) para completar los datos.
Es decir, de ahí el N + 1 query, donde N es el numero de elementos que obtuvimos de la primera consulta (query).

Ahora ¿por qué todo esto?, porque al usar un await dentro del bucle for para obtener el complemento estamos haciendo que la ejecución se pause, porque le indicamos que espere a que se resuelva una a una y hasta que no se resuelva la consulta (query) no seguirá iterando.

Esto genera una latencia acumulada: si cada consulta tarda X milisegundos, el tiempo total será N * X.

 A diferencia de usar Promise.all, hacemos todas las consultas que nos devuelven un array de promesas y lo resolvemos con el promise.all lo que hace que todas las promesas se ejecuten de manera [PARALELA] haciendo que esto se ejecute en segundo plano y la promesa más lenta será el timpo de ejecución total. */