const score = 400;

const balance = new Number(100); // number obj

console.log(balance);
console.log(score);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.8987;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

/** ++++++++++++++++++++ Maths ++++++++++++++++++++ */

console.log(Math.abs(-96));
console.log(Math.round(4.925));
console.log(Math.ceil(4.25)); // upper value
console.log(Math.floor(4.95)); // lower value

console.log(Math.random()); // value bet 0 - 1
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log((Math.random() * (max - min + 1)) + 10);
