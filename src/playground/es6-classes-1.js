class Person {
    constructor(name = 'Anon', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}



const me = new Person('Felipe Pineda', 25);
console.log(me.getDescription());
