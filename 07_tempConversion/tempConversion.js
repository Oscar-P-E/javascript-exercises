function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// let rounded = Math.round(number * 10) / 10;

const ftoc = function (f) {
  let c = (f - 32) * (5 / 9);
  return round(c, 1);
};

const ctof = function (c) {
  let f = c * (9 / 5) + 32;
  return round(f, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
