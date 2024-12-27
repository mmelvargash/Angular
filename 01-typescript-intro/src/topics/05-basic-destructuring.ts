/*
Reforzamiento de interfaces
*/ 

interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

/*
DESESTRUCTURACION - DESTRUCTURING

se puede aplicar en varios lugares,
objetos, se puede aplicar a la hora de hacer importaciones
y exportaciones en los módulos.
Se puede aplicar en los argumentos de las funciones,
se puede aplicar directamente en cualquier archivo, objeto, arreglo...

En general, consiste en que podamos tomar, en este caso, el objeto AudioPlayer
ciertas piezas de interés. 
Ejemplo: nombre de la canción:
    si no tuviera la destructuración, tendría que hacer un 
    console.log('Song: ', audioPlayer.song);
    e importar el archivo en el main.

con la destructuración, se haría algo así:
const {song} =audioPlayer;

peroooo, qué pasa si tengo otra constante de nombre song?
const song= 'New Song';
const {song:anotherSong} =audioPlayer;
se cambia el nombre a anotherSong
*/ 
const song = 'New Song';

/*

*/
const {
    song:anotherSong, 
    songDuration:duration,
    details //ojo que se referencia acá...*
    // details:{author} se podría hacer así, pero complica lectura
} = audioPlayer;

const {author} = details; //*...y se usa acá

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);




export {};