import './style.css'
// import './topics/01-basic-types';
// con los import se busca requerir un módulo
// un módulo no es más que una agrupación encapsulada de un procedimiento
document.querySelector<HTMLDivElement>('#app')!
.innerHTML = 
`
hola mundo
`
console.log('Hola mundo');