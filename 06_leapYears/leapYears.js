const leapYears = function (year) {
  // if divisible by 4, then is leap,
  // but if divisible by 100 is not leap, unless divisible by 400.

  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    }

    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
