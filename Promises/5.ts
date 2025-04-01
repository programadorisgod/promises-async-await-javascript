console.log('1')

const promise = new Promise((resolve, _reject) => {
    console.log('2')
    resolve(3)
})


async function wait() {
    console.log(4)
    const X = await promise
    console.log('hold on X', X)
    setTimeout(() => console.log('Si'), 0)
}

wait()