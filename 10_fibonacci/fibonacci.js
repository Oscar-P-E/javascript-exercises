// 1, 1, 2, 3, 5, 8

const fibonacci = function (member) {
  // loop that starts at 1 and adds prev number, 'member' times
  let thisN = 1;
  let backOne = 1;
  let backTwo = 1;

  if (member < 1) {
    return "OOPS";
  }

  if (member < 3) {
    return thisN;
  }

  for (let i = 3; i <= member; ++i) {
    thisN = backOne + backTwo;
    backTwo = backOne;
    backOne = thisN;
  }
  return thisN;
};

// Do not edit below this line
module.exports = fibonacci;
