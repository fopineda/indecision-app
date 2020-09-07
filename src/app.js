const { square } = require('./utils');
const {isAdult, canDrink} = require('./person');

console.log('app.js is running');
console.log(square(4));
console.log(isAdult(17));
console.log(isAdult(18));
console.log(isAdult(19));
console.log(canDrink(17));
console.log(canDrink(18));
console.log(canDrink(19));