
// ES5 functions
const square = function (x) {
    return x * x;
};
console.log(square(8));




// ES6 arrow functions

// Verbose functions
// const squareArrow = (x) => {
//     return x * x;
// };

// Concise functions 
const squareArrow = (x) => x * x;
console.log(squareArrow(8));

const getFirstName = (name) => {
    return name.split(' ')[0];
};
// const getFirstName = (name) => name.split(' ')[0];
console.log(getFirstName('Felipe Pineda'))