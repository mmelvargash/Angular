import './style.css'
// import './topics/01-basic-types';
// con los import se busca requerir un módulo
// un módulo no es más que una agrupación encapsulada de un procedimiento

import './topics/02-object-interface';

document.querySelector<HTMLDivElement>('#app')!
.innerHTML = 
`
hola mundo
`
console.log('Hola mundo');