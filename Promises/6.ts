//NextTick se ejecuta después de el código actual
//haya terminado de ejecutarse, pero antes de que se 
//manejen microtareas, es el de mayor prioridad en las
//microtask

process.nextTick(() => console.log('Next Tick'))
Promise.resolve().then(() => console.log('promise'))
console.log('Synchronous');

/**
 * 'Synchronous'
 * Next Tick
 * Promise
 */







Promise.resolve().then(() => console.log('Microtask 1'));
console.log('Synchronous');
Promise.resolve().then(() => console.log('Microtask 2'));

/**
 * 'Synchronous'
 * Microtask 1
 * Microtask 2
 */




setTimeout(() => console.log('Macrotask 1'), 0);
setTimeout(() => console.log('Macrotask 2'), 0);
Promise.resolve().then(() => console.log('Microtask'));
console.log('Synchronous');
/**
 * 'Synchronous'
 * Microtask 
 * Macrotask 1
 * Macrotask 2
 */