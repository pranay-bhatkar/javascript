/*
 * Topic : Variables
 */

const accountId = 12456;
let accountEmail = "test@export.com";
var accountPassword = "12345";
accountCity = "Gorgia";

let accountState; // it has the undefined value if not assigned

/*
 * can not change the const [not allowed]
 */
// * accountId = 2;

/*
 * prefer not to use the var
 * because of issue in block scope and functional scope
 */

accountEmail = "ha@ha.com";
accountPassword = "Pass";
accountCity = "Mumbai";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
