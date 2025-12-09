let score = "false";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN -> not a number

/**
    conversion to number

    "33" => 33
    "33abc" => NaN
    null => 0
    true => 1
    false => 0
    undefiend => NaN
*/

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/**
    1 => true
    0 => false
    "" => false
    "rahul" => true
    null => false
    undefined => false
*/

let someNumber = undefined;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);
