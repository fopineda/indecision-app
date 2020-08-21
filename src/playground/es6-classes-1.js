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

class Student extends Person{
    constructor (name, age, major) {
        // only set major as name and age are inherited and called in by super(...)
        super(name,age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        // call inherited method using super.<METHOD>() and override it
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person{
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting += ` I'm visting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Traveler('Felipe Pineda', 25, 'Columbia');
console.log(me.getGreeting());
