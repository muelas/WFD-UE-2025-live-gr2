const myObj = {
    name: "Max", age: 5,

    hobbies: ["Fu0ball", "Lego"], sub: {
        feld1: "werte"
    },

    action: function () {
        //todo
    }, action2: (param) => {
        //todo
    }, action3() {
        //todo
    }
};

const myObj2 = {
    name: "Felix", alter: 7 //anders als "age" --> Problem!
}

console.log(myObj);

console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.sub.feld1);

// Klassen
console.log("### Klassen ###");

class Person {
    #name;
    #firstname;
    #age;

    constructor(name, firstname, age) {
        this.#name = name;
        this.#age = age;
        this.#firstname = firstname;
    }

    get fullname() {
        return this.#name + " " + this.#firstname;
    }

    set fullname(val) {
        const n = val.split(" ");
        this.#name = n[0];
        this.#firstname = n[1];
    }

    get name() {
        return this.#name;
    }

    set name(val) {
        this.#name = val;
    }

    action() {
        console.log("I am a person");
    }
}

const p1 = new Person("Müller", "Max", 5);

console.log(p1.name);
// console.log(p1.#age);
p1.name = "Moritz";
console.log(p1.name);
console.log(p1.fullname);

p1.fullname = "Müller Felix";
console.log(p1.fullname);

// ### Vererbung ###
console.log("### Vererbung ###");

class Student extends Person {
    #sid;

    constructor(name, firstname, age, sid) {
        super(name, firstname, age);
        this.#sid = sid;
    }

    studentAction() {
        console.log("Student Action!!!!");
    }

    action() {
        console.log("I am a student");
    }
}

const s1 = new Student("Müller", "Felix", 7, 123);
const p2 = new Person("Müller", "Katrin", 39);

p2.action();    // action aus Person
s1.action();    // action aus Student
s1.studentAction();
// p2.studentAction();  // only in Student!


// ### Async mit Promises ###
console.log("Async mit Promises");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((json) => {
        console.log(json);
    });