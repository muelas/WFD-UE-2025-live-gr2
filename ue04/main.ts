// Klassen mit Typescript
class Person {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    addHobby(newHobby: string): void {
        this.hobbies.push(newHobby);
    }
}

// Modifier
class Person2 {
    private _name: string;
    private _age: number;
    private _hobbies: string[];  // hier gehts um hobbies

    constructor(name: string, age: number, hobbies: string[]) {
        this._name = name;
        this._age = age;
        this._hobbies = hobbies;
    }

    addHobby(newHobby: string): void {
        this._hobbies.push(newHobby);
    }

    public get name(): string {
        return this._name;
    }

    public set name(val: string) {
        this._name = val;
    }


    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0) {
            console.error("Age must be positive!");
            return;
        }
        this._age = value;
    }

    public get hobbiesAsString(): string {
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
    constructor(
        private _name: string,
        private _age: number,
        private _hobbies: string[],
        private _adult: boolean = false) {
    }

    addHobby(newHobby: string): void {
        this._hobbies.push(newHobby);
    }

    public get name(): string {
        return this._name;
    }

    public set name(val: string) {
        this._name = val;
    }


    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0) {
            console.error("Age must be positive!");
            return;
        }
        this._age = value;
    }

    public get hobbiesAsString(): string {
        return this._hobbies.join(", ");
    }
}

const p3 = new Person3("Max", 5, ["Fußball"]);
const p4 = new Person3("Katrin", 39, ["lesen"], true);

// Vererbung - mit Parameter Properties
class Student extends Person {
    constructor(
        name: string, age: number, hobbies: string[],
        private sid: number
    ) {
        super(name, age, hobbies);
    }
}

class Student2 extends Person {
    sid: number;

    constructor(name: string, age: number, hobbies: string[], sid: number) {
        super(name, age, hobbies);
        this.sid = sid;
    }
}

