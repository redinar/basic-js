const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let resultStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count === 0) {
        resultStr += `${str[i]}`
      } else {
          resultStr += `${count + 1}${str[i]}`;
          count = 0;
        }
    }
  }
  return resultStr;
}

module.exports = {
  encodeLine
};
