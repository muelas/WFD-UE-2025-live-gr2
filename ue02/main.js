// callback - sync

function firstFunction(param, cb) {
    // do stuff
    cb(param);
}

function abc(x) {
    console.log(x);
}

firstFunction(1, abc);
firstFunction(2, (p) => console.log("anonym: " + p));
firstFunction(3, () => console.log("no param :("));
firstFunction(4, (a, b, c, d) => console.log(a + " - " + b + " - " + c + " - " + d));

function secondCb(arr, out, test) {
    for (let i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
            out(arr[i]);
        }
    }
}

function out1(zahl) {
    console.log(zahl);
}

function out2(zahl) {
    console.error(zahl);
}

function test2(n) {
    if (n > 2) {
        return true;
    } else {
        return false;
    }
}

function test1(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

secondCb([1, 2, 3, 4], out1, test1);
secondCb([1, 2, 3, 4], out2, test2);

// callback - async
console.log("before");
setTimeout(() => console.log("done!"), 1000);
console.log("after");

// function setTimeout(cb, time){
//     wait(time);
//     cb();
// }

// promises - own
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("juhu"), 2000);
});

myPromise.then((result) => console.log("myPromise done: " + result));

const failingPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("ohh :("), 3000);
});

failingPromise
    .then((result) => console.log("failingPromise done: " + result))
    .catch((err) => console.log("failingPromise failed: " + err));

// async-await
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("juhu"), 4000);
});

console.log("before2");
const mp2 = await myPromise2;
console.log("mp2 done: " + mp2);
console.log("after2");

const failingPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("ohh :("), 1000);
});

try {
    const fp2 = await failingPromise2;
    console.log("fp2 done: " + fp2);
} catch (e) {
    console.log("fp2 failed: " + e);
}

async function af() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    return json[0].username;
}

console.log(await af());