 async function Errors(){
    try {
       return Promise.reject('error!!!')
    } catch (error) {
        console.log('Error:', error);
       // return "alternative value"
    }
}

// No se captura el error.

Errors().then(console.log) 

async function HandleError(){
    try {
        return await Promise.reject('critic error')
    } catch (error) {
        console.log('ERROR: -->', error);
    }
}
//El await pausa la ejecución y hasta que no se resuelva 
//dicha promesa, no retornará, permitiendo al catch capturar
//el error y evitar un error de promesa no manejado.
HandleError().then((value) => console.log('VALUE',value))