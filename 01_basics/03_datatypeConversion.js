"use strict";

let score = "33";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof (valueInNumber));
console.log(valueInNumber);

// "33" => 33 by using Number("33");
// "33abc" => NaN by using Number("33abc");
// null => 0 by using number(null);
// true =>1 or "abc11", false => 0 or "".
//so be sure to check out the number while working on the backend cause any form of data can arrive from the frontend part.
//strings also change the same way number did.

