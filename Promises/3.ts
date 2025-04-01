async function withoutAwait() {
    return new Promise((resolve) => setTimeout(() => resolve('Hi'), 1000))
}

withoutAwait().then(console.log)

async function whithAwait() {
    return await new Promise((resolve) => setTimeout(() => resolve("hi"), 1000));
  }
  
  whithAwait().then(console.log); // Salida: "Hola" después de 1s
  