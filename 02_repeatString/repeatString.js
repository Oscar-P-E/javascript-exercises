const repeatString = function (string, num) {
  const output = [""];
  for (i = 0; i < num; ++i) {
    output[i] = string;
  }
  return output.join("");
};

// Do not edit below this line
module.exports = repeatString;
