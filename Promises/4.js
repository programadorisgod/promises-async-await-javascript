 async function whitoutAwait(){
    try {
       return Promise.reject('error!!!')
    } catch (error) {
        console.log('Error:', error);
    }
}

// No se captura el error, por endé tendremos un [UnhandledPromiseRejection].

whitoutAwait().then(console.log) 

async function whithAwait(){
    try {
        return await Promise.reject('critic error')
    } catch (error) {
        console.log('ERROR: -->', error);
    }
}
//El await pausa la ejecución y hasta que no se resuelva 
//dicha promesa, no retornará, permitiendo al catch capturar
//el error y evitar un error de promesa no manejado.
whithAwait().then((value) => console.log('VALUE',value))