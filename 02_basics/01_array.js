/*
 * Topis : Array
 */

/*
• JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
*/

/**
 * 

• JavaScript create shallow copies. (All
standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep-copies).

A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as thos&of the source object from which the copy was made. As a result, when you change

A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.
 */

const myArr = [0, 1, 2, 3, 4, 5, 6, true, "pranay"];

console.log(myArr[7]);

// const myArr2 = new Array(1, 2, 3);

/*
 * Array methods
 */

myArr.push(40);
myArr.push(70);

myArr.unshift(9); //  insert the element at the start and shift the element to right every
myArr.shift(9); // remove the first (start) element
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr = myArr.join(); // converts to string

console.log(newArr);
console.log(typeof newArr); // string

// slice, splice
// splice -> manipulates the original array
console.log("A ", myArr);

const my1 = myArr.slice(1, 3);
console.log(my1);
console.log("B ", myArr);

const myArr2 = myArr.splice(1, 3);
console.log("c", myArr);
console.log(myArr2);
