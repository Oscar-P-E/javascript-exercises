const palindromes = function (string) {
  const forwards = string.toLowerCase().replace(/[^a-z]/g, "");
  const backwards = forwards.split("").reverse().join("");
  if (forwards === backwards) {
    return true;
  }
  return false;
  // return console.log(forwards + "\n" + backwards);
};

// Do not edit below this line
module.exports = palindromes;
