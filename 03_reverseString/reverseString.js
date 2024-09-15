const reverseString = function(string) {
let split = string.split("");
let reverse = split.reverse();
let joinArray = reverse.join("");
return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
