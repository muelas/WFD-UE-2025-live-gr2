let x = 40;

let asdf = Math.random() > 0.5 ? "a" : 1;

let y: string = "Hallo";
// y = 1;
let z: number | string = 1;
z = "2";

let doNotUse: any = 1;
doNotUse = "2";
doNotUse = 1;

function abc(x: number, y: string): void {

}

function abc2(x: number, y: string) {
    return x + y;   // STringverkettung
}

abc2(1, "2"); //12


function abc3() {
    // return Math.random > 0.5; // Fehler: Klammern vergessen
}

// function abc4(x,y) {}    // Fehler implicit any

// arrays, tuples, und co
let a1 = ["one", "two", "three"];
let a2 = ["one", 2, "three"];
let a3: (string | boolean)[] = ["one"];

// a1.push(true);
a3.push(true);

let t1: [string, string, number] = ["Max", "Felix", 2];
// t1[2] = "Katrin";
t1[0] = "Andi";

// types and objects
type aType = number | string | boolean;
let a: aType = false;

type Person = {
    name: string,
    age: number,
    languages: string[];
    adult?: boolean;
}

function learnEnglish(p: Person) {
    p.languages.push("English");
}

let p1: Person = {
    name: "Max", age: 5, languages: ["German"], adult: false
}
let p2: Person = {
    name: "Felix", age: 7, languages: ["German"]
}

function optional1(x: number, y?: number): number | string {
    if (y === undefined) {
        return "nope";
    } else
        return x + y;
}

let o1: number = optional1(12, 13) as number;
let o2: number | string = optional1(12, 13);

// interface
interface Student {
    name: string;
    age: number;
    active?: boolean;
}

let s1: Student;
s1 = {
    name: "Felix",
    age: 7
}

let s2: { height: number, width: number, fill: boolean, round?: boolean } =
    {
        height: 12,
        width: 2,
        fill: false
    };