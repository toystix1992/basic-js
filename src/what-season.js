const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if (isNaN(date)) throw new Error;

  let Month = date.getMonth() + 1;
  if (Month <= 2 || Month == 12) return 'winter';
  if (Month >= 3 && Month <= 5)  return 'spring';
  if (Month >= 6 && Month <= 8)  return 'summer';
  if (Month >= 9 && Month <= 11) return 'autumn';
};
