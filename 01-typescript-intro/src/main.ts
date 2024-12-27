// con los import se busca requerir un módulo
// un módulo no es más que una agrupación encapsulada de un procedimiento

import './style.css'
// import './topics/01-basic-types';
// import './topics/02-object-interface';
// import './topics/03-functions';
// import './topics/04-homework-types';
import './topics/05-basic-destructuring';

document.querySelector<HTMLDivElement>('#app')!
.innerHTML = 
`
hola mundo
`
console.log('Hola mundo');