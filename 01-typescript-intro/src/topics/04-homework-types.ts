/*
    ===== Código de TypeScript =====
    el código brindado originalmente no tiene la interfaz SuperHero
    se pide que se haga la interfaz
*/

 interface SuperHero{
    name:string;
    age:number;
    address:Address; // si se presiona ctrl y se deja el mouse apuntando, se muestra la definición de la interfaz
    showAddress: () => string;
}
/*
 cuando se trabaja con interfaces que tienen dentro un objeto
 se aconseja que este objeto interno tenga también su interfaz
*/
interface Address{
    street:string; 
    country:string;
    city:string;
}


const superHeroe:SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};