'use strict';

// ES5 functions
var square = function square(x) {
    return x * x;
};
console.log(square(8));

// ES6 functions

// Verbose functions
// const squareArrow = (x) => {
//     return x * x;
// };

// Concise functions 
var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log(squareArrow(8));

var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};
// const getFirstName = (name) => name.split(' ')[0];
console.log(getFirstName('Felipe Pineda'));
