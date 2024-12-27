const skills: string[] = ['Bash', 'counter', 'Healing'];

// la ventaja de de las constantes (const) es 
// que las constantes son má sligeras que las variables let
// porque no tienen métodos de asignación 


//la intefaz cuando está transpilado a JS, 
// no tiene ninguna representación física en Js, 
// es decir, una interfaz equivale a cero líneas de código de JS
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?:string; // si no tengo el hometown, puedo hacerlo opcional
}
//  cómo hago para que strider sea de tipo haracter? 
const strider: Character= {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    
} //aquí no se puede especificar qué tipo de dato quiero para las propiedades del objeto
// para especificarlo, se usan interfaces comunmente

//puedo agregar la propiedad aquí
strider.hometown='Rivendell'; 

console.table(strider);


export{}