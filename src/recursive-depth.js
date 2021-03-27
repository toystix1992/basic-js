const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr) === true) {
      let counter = 0;
      let i = 0;
      while (i < arr.length) {
        counter = Math.max(counter, this.calculateDepth(arr[i]));
        i++;
      }
      return counter += 1;
    }
    return 0;
  }
  }
