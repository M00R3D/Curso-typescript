import {  Person, generateRandomNumber} from './myModules'
import {pi as myPi} from './myModules'

const user:Person={
    id:1,
    name:"goku"
}

console.log(user);
console.log(myPi);
console.log(generateRandomNumber);


// import * as myCode from './myModules'
// const user:myCode.Person={
//     id:1,
//     name:"goku"
// }
// console.log(myCode.user);
// console.log(myCode.myPi);
// console.log(myCode.generateRandomNumber);
