// arguments object - no longer bound with arrow functions

// ES5 normal function
const add = function (a,b) {
    console.log(arguments)
    return a + b;
};
console.log(add(55,1))

// ES6 arrow function
const addArrow =  (a,b) => {
    // console.log(arguments) // will throw error
    return a + b;
};
console.log(addArrow(55,1));





// this keyword - no longer bound

const user = {
    name: 'Felipe',
    cities: ['Clinton', 'Garland', 'Harrells'],
    printPlacesLived: function () {
        // ES5 normal functions
            // this keyword was not accessible in ES5 normal functions
        // this.cities.forEach(function (city) {
        //     console.log(this.name + ' has lived in ' + city)
        // })

        // ES6 arrow functions
            // this keyword is accessible in ES6 arrow functions
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })


        // Map function: loop and transform values in new array
        return this.cities.map( (city) => this.name + ' has live in ' + city );

    }
};
console.log(user.printPlacesLived());




// Example
const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply: function() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }

};
console.log(multiplier.multiply())