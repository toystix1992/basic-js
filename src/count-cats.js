const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(matrix.length === 0) {
    return 0;
  }
  let catsArr = matrix.reduce((acc, val) => acc.concat(val)).filter(item=> item === '^^');
  if (catsArr.length > 0) {
    return catsArr.length * 1;
  } else {
    return 0;
  }
}
