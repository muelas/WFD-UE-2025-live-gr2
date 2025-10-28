class Shape {
    constructor(
        protected _color: string,
        public name: string,
    ) {
    }

    get area(): number {
        return 0;
    }

    draw(): void { // kein Modifier --> public
        console.log(`Zeichne ${this.name} in ${this._color}`);
    }
}

class Circle extends Shape {
    constructor(
        color: string,
        private _radius: number,
    ) {
        super(color, "Kreis");
    }

    get area(): number {
        return (this._radius ** 2) * Math.PI;
    }

    draw(): void {
        console.log(`Zeichne ${this.name} mit Radius ${this._radius} in ${this._color}`);
    }
}

let c: Circle = new Circle("rot", 2);
console.log(c.name);
// console.log(c._color);   //Fehler: Protected!
// console.log(c._radius);  //Fehler: Private!


// Klasse Person, mit name als Getter
class Person implements WithName {
    constructor(
        private _name: string,
    ) {
        // Constructor
    }

    get name(): string {
        return this._name;
    }
}

interface WithName {
    name: string;
}

function sayMyName(x: WithName) {
    console.log(x.name);
}

sayMyName(new Person("Destiny's Child"));
sayMyName(new Circle("violett", 42));


//Suche etwas mit name
function findByName(items: WithName[], name: string): WithName | undefined {
    for (const item of items) {
        if (item.name === name) {
            return item;
        }
    }
    return undefined;
}

const s1: Shape = new Circle("rot", 2);
const s2: Shape = new Shape("violett", "Polygon");
const s3: Shape = new Circle("blau", 3);
const s4: Shape = new Shape("grün", "Dreieck");
const s5: Shape = new Circle("gelb", 1.5);
const s6: Shape = new Shape("schwarz", "Rechteck");

const data: Shape[] = [s1, s2, s3, s4, s5, s6];
let result: Shape | undefined;

// result = findByName(data, "Polygon");    //Klappt nicht, weil WithName zurückgegeben wird, keine Shape!

function findByNameGeneric<T extends WithName>(items: T[], name: string): T | undefined {
    for (const item of items) {
        if (item.name === name) {
            return item;
        }
    }
    return undefined;
}

result = findByNameGeneric<Shape>(data, "Polygon");

const persons: Person[] = [
    new Person("Felix"),
    new Person("Max"),
]
let wanted: Person | undefined;

wanted = findByNameGeneric<Person>(persons, "Felix");

// let x = findByNameGeneric<number>([1, 2, 3, 4], 2); // klappt nicht weil number nicht WithName erfüllt


class DataStore<X> {
    private _items: X[] = [];

    public add(item: X) {
        this._items.push(item);
    }

    public getAll(): X[] {
        return this._items;
    }
}

const shapeStore: DataStore<Shape> = new DataStore<Shape>();
shapeStore.add(s1);
// shapeStore.add(wanted);

const personStore: DataStore<Person> = new DataStore<Person>();
personStore.add(new Person("Katrin"));

// personStore.add(s2);


interface IBox<T, S> {
    content: T;
    content2: S;
}

// Intersection Type
interface Colorful {
    color: string;
}

interface Cube {
    side: number;
}

function printColorfulCube(cc: Colorful & Cube) {
    console.log(`Würfel: Farbe=${cc.color}, Kante=${cc.side}`);
}

type ColorfulCube = Colorful & Cube;

let cc1: ColorfulCube = {color: "rot", side: 1};


interface IColorfulCube extends Colorful, Cube{
    
}