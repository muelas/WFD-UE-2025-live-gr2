"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Klassen mit Typescript
class Person {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    addHobby(newHobby) {
        this.hobbies.push(newHobby);
    }
}
// Modifier
class Person2 {
    _name;
    _age;
    _hobbies; // hier gehts um hobbies
    constructor(name, age, hobbies) {
        this._name = name;
        this._age = age;
        this._hobbies = hobbies;
    }
    addHobby(newHobby) {
        this._hobbies.push(newHobby);
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            console.error("Age must be positive!");
            return;
        }
        this._age = value;
    }
    get hobbiesAsString() {
        return this._hobbies.join(", ");
    }
}
const p2 = new Person2("Felix", 7, ["Fußball"]);
// console.log(p2._age); // privat!
console.log(p2.name);
console.log(p2.age);
p2.age = -42;
console.log(p2.age);
console.log(p2.hobbiesAsString);
p2.addHobby("lesen");
console.log(p2.hobbiesAsString);
// Parameter Propertiew
class Person3 {
    _name;
    _age;
    _hobbies;
    _adult;
    constructor(_name, _age, _hobbies, _adult = false) {
        this._name = _name;
        this._age = _age;
        this._hobbies = _hobbies;
        this._adult = _adult;
    }
    addHobby(newHobby) {
        this._hobbies.push(newHobby);
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            console.error("Age must be positive!");
            return;
        }
        this._age = value;
    }
    get hobbiesAsString() {
        return this._hobbies.join(", ");
    }
}
const p3 = new Person3("Max", 5, ["Fußball"]);
const p4 = new Person3("Katrin", 39, ["lesen"], true);
// Vererbung - mit Parameter Properties
class Student extends Person {
    sid;
    constructor(name, age, hobbies, sid) {
        super(name, age, hobbies);
        this.sid = sid;
    }
}
class Student2 extends Person {
    sid;
    constructor(name, age, hobbies, sid) {
        super(name, age, hobbies);
        this.sid = sid;
    }
}
//# sourceMappingURL=main.js.map