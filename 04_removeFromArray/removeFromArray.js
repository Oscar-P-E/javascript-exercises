const removeFromArray = function ([a, b, c, d], rm1, rm2, rm3, rm4) {
  const arr = [a, b, c, d];
  const remove = [rm1, rm2, rm3, rm4];

  return arr.filter((item) => !remove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
