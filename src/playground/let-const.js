var nameVar = 'Andrew';
var nameVar = 'Felipe';
console.log('nameVar', nameVar);


let nameLet = 'Erica'
// let nameLet = 'NewErica' // cannot redefine it
nameLet = 'NewErica' // can reassign it tho
console.log('nameLet', nameLet)


const nameConst = 'Rosie'
// const nameConst = 'NewRosie' // cannot redefine it
// nameConst = 'newRosie' // cannot reassign it
console.log('nameConst', nameConst)



// var are function scoped, meaning they are not accessible outside the function they are defined in. 
    // However since they are not blocked scoped, var based variables can be accessed outside any code block they were defined in unless it's a function. 
    // That is why you can access the var outside the if statement below.
// let, const based variables are blocked scoped meaning they are not accessible outside the code block they were defined
var fullName = 'Felipe Pineda';

if (fullName){
    var firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)