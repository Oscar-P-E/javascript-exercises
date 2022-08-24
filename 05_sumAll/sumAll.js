// sum of integers from i to j
const sumAll = function (i, j) {
  if (i < 0 || j < 0) {
    return "ERROR";
  }

  if (typeof i != "number" || typeof j != "number") {
    return "ERROR";
  }

  let small = i;
  let big = j;

  // so that it also works if the larger number is given first
  if (i > j) {
    big = i;
    small = j;
  }
  // Formula for consecutive numbers 1...n is n+1 * n/2.
  // What if we don't start at 1? Do then above formula, and then
  // subtract the sum of the numbers that are below our range.
  // eg. for 21...80, we subtract 1...20 from 21...80.
  return (big + 1) * (big / 2) - (small - 1 + 1) * ((small - 1) / 2);
};

// Do not edit below this line
module.exports = sumAll;
