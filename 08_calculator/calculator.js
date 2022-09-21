const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function ([...args]) {
  return args.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

const multiply = function ([...args]) {
  return args.reduce((acc, cur) => {
    return acc * cur;
  });
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n < 0) {
    return "Please enter a positive integer";
  }

  let total = 1;

  for (let i = 1; i <= n; ++i) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
