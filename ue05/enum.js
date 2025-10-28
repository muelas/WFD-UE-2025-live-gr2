"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enum definieren
var Note;
(function (Note) {
    Note[Note["SehrGut"] = 1] = "SehrGut";
    Note[Note["Gut"] = 2] = "Gut";
    Note[Note["Befriedigend"] = 3] = "Befriedigend";
    Note[Note["Genuegend"] = 4] = "Genuegend";
    Note[Note["NichtGenuegend"] = 5] = "NichtGenuegend";
})(Note || (Note = {}));
// Enum verwenden
console.log(Note.Gut); //2
let myGrade = Note.Befriedigend;
myGrade = Note.SehrGut;
myGrade = 5;
// Nicht erlaubt
// myGrade="FastGenügend";
// myGrade=6;
// String Enums
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Blue"] = "Blue";
    Color["Green"] = "Green";
    // White // Fehler: Muss initialisiert werden bei Strings
})(Color || (Color = {}));
// Mixed Enums - keine gute Idee!
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status["Inactive"] = "INACTIVE";
})(Status || (Status = {}));
// Enum mit berechneten Werten
var Computed;
(function (Computed) {
    Computed[Computed["A"] = 1] = "A";
    Computed[Computed["B"] = 42] = "B";
    Computed[Computed["C"] = 12] = "C";
})(Computed || (Computed = {}));
console.log(Computed.B);
console.log(Computed[42]);
