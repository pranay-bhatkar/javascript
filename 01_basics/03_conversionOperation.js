let score = "false";

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN -> not a number

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
// console.log(booleanIsLoggedIn);

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

// console.log(stringNumber);
// console.log(typeof stringNumber);

/*
 * =============== OPERATIONS ===============
 */

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 ** 3);
console.log(2 / 3); // quotient
console.log(2 % 3); // remainder

let str1 = "hello";
let str2 = " pranay";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(((3 + 4) * 5) % 3);

console.log(+true);
console.log(+false);

/**
postfix
prefix
from the mdm doc
*/
