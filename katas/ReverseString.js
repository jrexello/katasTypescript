"use strict";
exports.__esModule = true;
exports.reverseString = void 0;
function reverseString(str) {
    return str.split("").reverse().join("");
}
exports.reverseString = reverseString;
console.log(reverseString("1234567"));
