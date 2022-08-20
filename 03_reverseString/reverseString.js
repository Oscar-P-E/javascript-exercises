const reverseString = function (string) {
  // const array = [""]; // might need this. don't forget to remove other decl.
  // const array = string.split("");
  // for (i = array.length - 1; i >= 0; --i) {
  // array.reverse();
  // }
  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
