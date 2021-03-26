const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  typeof str === "string"? str : str.toString();
  typeof options === "string"? options : options.toString();
  !options.separator? options.separator = '+' : options.separator;
  !options.additionSeparator? options.additionSeparator = '|' : options.additionSeparator;
  const repeatTimes = options.repeatTimes;
  const addition = options.addition;
  const additionRepeatTimes = options.additionRepeatTimes;
  const additionSeparator = options.additionSeparator;
  const separator = options.separator;
  let arr = [];
  if (addition === undefined) {
    for (let i = 0; i< repeatTimes; i++) {
    arr.push(str);
    arr.push(separator);
    }
    arr.pop()
    return arr.join("");
  }
  if (repeatTimes === undefined) {
    arr.push(str);
    arr.push(addition);
    return arr.join("");
  }
  for (let j = 0; j < repeatTimes; j++) {
  arr.push(str);
  for (let i = 0; i < additionRepeatTimes;i++){
    arr.push(addition);
    arr.push(additionSeparator)
  }
  arr.pop()
  arr.push(separator);
}
  arr.pop();
  return arr.join("");
};
