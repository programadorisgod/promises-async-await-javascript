# Promesas y el *event loop* en JavaScript

En este repostorio se encuentra un resumen de los conceptos más importantes sobre el uso de promesas y el *event loop* en JavaScript. 
---

Al hacer un repaso sobre las promesas y el uso de `async/await` en JavaScript, me di cuenta de la importancia de comprender el *event loop* y sus diferentes colas de procesos. Este mecanismo permite que el código se ejecute en un orden específico y con distintas prioridades. Si entendemos bien esta jerarquía, evitaremos muchos dolores de cabeza, ya que no nos llevaremos sorpresas al trabajar con código asíncrono.  

### Jerarquía del *event loop*:  

1. **Call Stack (Pila de llamadas):** Contiene el código que se está ejecutando actualmente. Cuando se llama a una función, esta se coloca en la pila y, una vez finaliza su ejecución, se elimina.  

2. **Web APIs (en el navegador) / libuv (en Node.js):** Son entornos que permiten manejar *timers*, promesas, operaciones de E/S, peticiones HTTP y muchas otras tareas asíncronas.  

3. **Task Queue (Cola de macrotareas):** Aquí se encolan tareas como los *timers* (`setTimeout`, `setInterval`) y eventos de E/S.  

4. **Microtask Queue (Cola de microtareas):** Tiene mayor prioridad que la cola de macrotareas. Aquí se encolan las funciones de retorno (*callbacks*) de promesas (`.then()`, `.catch()`) y funciones como `process.nextTick()` en Node.js.  

---
