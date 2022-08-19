const repeatString = function (string, num) {
  const output = [""];
  if (num < 0) {
    return "ERROR";
  }
  for (i = 0; i < num; ++i) {
    output[i] = string;
  }
  return output.join("");
};

// Do not edit below this line
module.exports = repeatString;
