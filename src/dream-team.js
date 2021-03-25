const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let str = '';
if (members === null || typeof members !== "object" ) {
  return false;
} else {
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let name = members[i].trim();
      str += name[0].toUpperCase();
    }
  }
  return str.split('').sort().join('');
}
};



