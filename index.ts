// const name= "job";
// const age= 20;
// console.log("hello i am "+ name +" and my age is " + age);


// Basic types
let myTypeString: string = 'Hello world!';
let myTypeNumber: number = 33;
let myTypeBoolean: boolean = true;

// Arrays
let arrNumber: number[] = [1, 2, 3];
// También puedes declarar un array de números de esta manera:
let arrNumber2: Array<number> = [1, 2, 3];

let arrStrings: string[] = ["Uno", "Dos"];
let arrAny: any[] = ['Hola', 33, false];

let tuplePlayers: [string, number, boolean] = ['Doncic', 3, true];

// Tuple Array
let players: [number, string][];
players = [
  [1, 'Lebron'],
  [2, 'Durant'],
  [3, 'Curry'],
];