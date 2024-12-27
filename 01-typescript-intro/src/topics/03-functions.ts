
// cuando se regresa undefined, signfica que no se está regresando nada
function addNumbers(a:number, b:number) {
    return a+b
}


// función de flecha o lambda function
const addNumberArrow = (a:number, b:number) => {
    return a+b;
}

const addNumberArrow1 = (a:number, b:number):string => {
    return `${a+b}`;
    // return (a+b).toString();// esto ya no se hace, 
    // return `a+b`;   // ahora se usan los backtick
    // los backtick permiten hacer caracteres multilinea, literales y
    // return `${a+b}` inyecciones de dependencia
}

// se recomienda poner primero los obligatorios, luego los opcionales y por último los que tienen un valor por defecto
function multiply(firstNumber:number, secondNumber?:number, base:number=2){
return firstNumber*base;

}


// const result: number = addNumbers(1,2);
// const result2:string = addNumberArrow1(1,2);
// const multiplyResult:number= multiply(5);
// console.log({result, result2, multiplyResult});

interface Character{
    name:string;
    hp:number;
    // si quiero agregar una funcion a la interfaz:
    showHp:() => void; // definir la funcion, fecla y el tipo de retorno
}
const healCharacter= (character:Character, amount:number)=>{
    character.hp += amount;

}

const strider:Character = {
    name: 'Strider',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider,10);
strider.showHp();
export {};