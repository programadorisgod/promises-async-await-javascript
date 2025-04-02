//Promise.allSettled recibe un iterable de promesas y nos devuelva una unica promesa resulta con un array de resultados cuando todas las promesas han sido resueltas o rechazadas, estos resultados traen un status -> fulfilled | rejected, para fulfilled podemos tener la propiedad [value] y si es rejected podemos tener la propiedad [reason].


const promise1 = Promise.resolve(3);

const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo"),
);


const promises = [promise1, promise2];


Promise.allSettled(promises).then((results) => 
    console.log("[RESULTS]", results)
)

