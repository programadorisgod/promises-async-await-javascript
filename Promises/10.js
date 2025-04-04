import { createReadStream, createWriteStream } from "node:fs"

const redeableStream = createReadStream('./MOCK_DATA.json')

let users = []

redeableStream.on('data', (chunck) => {
    
    users.push(chunck.toString())
})

redeableStream.on('error', (err) => {
    console.error(err)
})


function getUser(id) {
    return new Promise((resolve, _reject) => {
        const userFound = users.find((user) => user.id === id)
        setTimeout(() => resolve(userFound), 500)
    })
}

function saveAnalytic(data) {
    const writeStream = createWriteStream('./analytic.json')

    writeStream.write(JSON.stringify({ id: data.id, time: Date.now() }))
    writeStream.on('error', (err) => console.error(err))

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 100)
    })
}



async function processRequestWithAwait(request) {

    const user = await getUser(request.user.id)
     await saveAnalytic(request.user)

    return { user, status: 'Processed' }
};

async function processRequestWithOutAwait(request) {

    const user = await getUser(request.user.id)
    saveAnalytic(request.user).catch(err => console.log('Error saving data', err))

    return { user, status: 'Processed' }
};

(async () => 
 { 
    const request = {
      user:  {"id":1,"first_name":"Tani","last_name":"Kobes","email":"tkobes0@tinyurl.com","gender":"Female","ip_address":"226.114.75.138"}
    }

    console.time('processRequestWithAwait')
    await processRequestWithAwait(request)
    console.timeEnd('processRequestWithAwait')

    console.time('processRequestWithOutAwait')
    await processRequestWithOutAwait(request)
    console.timeEnd('processRequestWithOutAwait')
 }
)()



