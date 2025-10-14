"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 40;
let asdf = Math.random() > 0.5 ? "a" : 1;
let y = "Hallo";
// y = 1;
let z = 1;
z = "2";
let doNotUse = 1;
doNotUse = "2";
doNotUse = 1;
function abc(x, y) {
}
function abc2(x, y) {
    return x + y; // STringverkettung
}
abc2(1, "2"); //12
function abc3() {
    // return Math.random > 0.5; // Fehler: Klammern vergessen
}
// function abc4(x,y) {}    // Fehler implicit any
// arrays, tuples, und co
let a1 = ["one", "two", "three"];
let a2 = ["one", 2, "three"];
let a3 = ["one"];
// a1.push(true);
a3.push(true);
let t1 = ["Max", "Felix", 2];
// t1[2] = "Katrin";
t1[0] = "Andi";
let a = false;
function learnEnglish(p) {
    p.languages.push("English");
}
let p1 = {
    name: "Max", age: 5, languages: ["German"], adult: false
};
let p2 = {
    name: "Felix", age: 7, languages: ["German"]
};
function optional1(x, y) {
    if (y === undefined) {
        return "nope";
    }
    else
        return x + y;
}
let o1 = optional1(12, 13);
let o2 = optional1(12, 13);
let s1;
s1 = {
    name: "Felix",
    age: 7
};
let s2 = {
    height: 12,
    width: 2,
    fill: false
};
//# sourceMappingURL=test.js.map