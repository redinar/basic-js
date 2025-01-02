const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (typeof arr[i + 2] === 'string') {
          i += 2;
          continue;
      }
      i++;
      continue;
    }

    if (arr[i] === '--discard-prev') {
      i++;
      resultArr.pop();
    }

    if (arr[i] === '--double-next') {
      i++;
      resultArr.push(arr[i]);
    }

    if (arr[i] === '--double-prev') {
      i++;
      if (arr[i - 2] !== undefined) resultArr.push(arr[i - 2]);
    }
    resultArr.push(arr[i]);
  }
  return resultArr;
}

module.exports = {
  transform
};
