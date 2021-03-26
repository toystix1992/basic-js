const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0;
  let seconds = 0;
  let calculateHanoi = {};
  let turnsSpeedSec = turnsSpeed/3600;
  turns = Math.pow(2, disksNumber) -1;
  seconds = turns / turnsSpeedSec;
  calculateHanoi.turns = turns;
  calculateHanoi.seconds = Math.floor(seconds);
  return calculateHanoi;
};
