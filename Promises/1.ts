
new Promise((resolve, reject) => {
    console.log('1')
    resolve(2)
    resolve(3)
 console.log('2')
})
.then(value => console.log(value))
console.log('3')
