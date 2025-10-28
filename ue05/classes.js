"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    _color;
    name;
    constructor(_color, name) {
        this._color = _color;
        this.name = name;
    }
    get area() {
        return 0;
    }
    draw() {
        console.log(`Zeichne ${this.name} in ${this._color}`);
    }
}
class Circle extends Shape {
    _radius;
    constructor(color, _radius) {
        super(color, "Kreis");
        this._radius = _radius;
    }
    get area() {
        return (this._radius ** 2) * Math.PI;
    }
    draw() {
        console.log(`Zeichne ${this.name} mit Radius ${this._radius} in ${this._color}`);
    }
}
let c = new Circle("rot", 2);
console.log(c.name);
// console.log(c._color);   //Fehler: Protected!
// console.log(c._radius);  //Fehler: Private!
// Klasse Person, mit name als Getter
class Person {
    _name;
    constructor(_name) {
        this._name = _name;
        // Constructor
    }
    get name() {
        return this._name;
    }
}
function sayMyName(x) {
    console.log(x.name);
}
sayMyName(new Person("Destiny's Child"));
sayMyName(new Circle("violett", 42));
//Suche etwas mit name
function findByName(items, name) {
    for (const item of items) {
        if (item.name === name) {
            return item;
        }
    }
    return undefined;
}
const s1 = new Circle("rot", 2);
const s2 = new Shape("violett", "Polygon");
const s3 = new Circle("blau", 3);
const s4 = new Shape("grün", "Dreieck");
const s5 = new Circle("gelb", 1.5);
const s6 = new Shape("schwarz", "Rechteck");
const data = [s1, s2, s3, s4, s5, s6];
let result;
// result = findByName(data, "Polygon");    //Klappt nicht, weil WithName zurückgegeben wird, keine Shape!
function findByNameGeneric(items, name) {
    for (const item of items) {
        if (item.name === name) {
            return item;
        }
    }
    return undefined;
}
result = findByNameGeneric(data, "Polygon");
const persons = [
    new Person("Felix"),
    new Person("Max"),
];
let wanted;
wanted = findByNameGeneric(persons, "Felix");
// let x = findByNameGeneric<number>([1, 2, 3, 4], 2); // klappt nicht weil number nicht WithName erfüllt
class DataStore {
    _items = [];
    add(item) {
        this._items.push(item);
    }
    getAll() {
        return this._items;
    }
}
const shapeStore = new DataStore();
shapeStore.add(s1);
// shapeStore.add(wanted);
const personStore = new DataStore();
personStore.add(new Person("Katrin"));
function printColorfulCube(cc) {
    console.log(`Würfel: Farbe=${cc.color}, Kante=${cc.side}`);
}
let cc1 = { color: "rot", side: 1 };
