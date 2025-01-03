const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let mediumStr = '';
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    mediumStr = '';
    for (let j = 0; j < str.length; j++) {
      if (j === i) continue;
      mediumStr += `${str[j]}`;
    }
    arr.push(Number(mediumStr));
  }
  return arr.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
