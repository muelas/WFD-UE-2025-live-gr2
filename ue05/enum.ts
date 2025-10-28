// Enum definieren
enum Note {
    SehrGut = 1,
    Gut,
    Befriedigend = 3,
    Genuegend,
    NichtGenuegend
}

// Enum verwenden
console.log(Note.Gut);  //2
let myGrade: Note = Note.Befriedigend;
myGrade = Note.SehrGut;
myGrade = 5;

// Nicht erlaubt
// myGrade="FastGenügend";
// myGrade=6;

// String Enums
enum Color {
    Red = "Red",
    Blue = "Blue",
    Green = "Green",
    // White // Fehler: Muss initialisiert werden bei Strings
}

// Mixed Enums - keine gute Idee!
enum Status {
    Active = 1,
    Inactive = "INACTIVE",
}

// Enum mit berechneten Werten
enum Computed {
    A = 1,
    B = A + 41,
    C = A * 12,
}

console.log(Computed.B);
console.log(Computed[42]);