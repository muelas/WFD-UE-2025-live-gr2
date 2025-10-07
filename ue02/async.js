async function f1() {
    console.log("7");
    return new Promise(resolve => setTimeout(() => {
        console.log("3");
        resolve();
    }, 2000));
}

function f2() {
    console.log("5");
    setTimeout(() => {
        console.log("4");
    }, 3000);
    console.log("6");
}

console.log("1");
f1();
console.log("2");
f2();
console.log("8");