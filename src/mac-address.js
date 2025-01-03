const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let correctChars = 'ABCDEF0123456789'.split('');
  let arr = n.split('-');
  let charCheck = true;
  let countCheck = false;
  if (arr.length === 6) countCheck = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!correctChars.includes(arr[i][j])) charCheck = false;
    }
  }
  if (charCheck && countCheck) return true;
  return false;
}
module.exports = {
  isMAC48Address
};
