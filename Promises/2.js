
new Promise((resolve, _reject) => {
    console.log('A');
    resolve('B');
    console.log('C');
})

.then(value => console.log(value))

setTimeout(() => console.log('D'), 0)
console.log('E')

/**
A
C
E
B
D
 */