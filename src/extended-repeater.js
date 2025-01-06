const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

  if (!options.repeatTimes) {
    result += str;
    if (options.addition) {
      if (options.additionRepeatTimes) {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
          result += options.addition;
        }
      } else {
        result += options.addition;
      }
    }
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    if (!options.separator) {
      
      if (options.addition) {
        if (options.additionRepeatTimes) {
          result += str;
          for (let i = 0; i < options.additionRepeatTimes; i++) {
            result += options.addition;
          }
        } else {
          result += str + options.addition;
        }
        if (i < options.repeatTimes - 1) {
          result += '+'
        }
      }
      
      if (!options.addition) {
        if (i === options.repeatTimes - 1) {
            result += str
        } else {
            result += str + '+';
        }
      }
    }

    if (options.separator) {

      if (options.addition) {
        if (options.additionRepeatTimes) {
            result += str;
            for (let i = 0; i < options.additionRepeatTimes; i++) {
              result += options.addition;
            }
            } else {
              result += str + options.addition;
            }
            if (i < options.repeatTimes - 1) {
              result += options.separator;
            }
    }

      if (!options.addition) {
        if (i === options.repeatTimes - 1) {
            result += str
        } else {
            result += str + options.separator;
        }
      }
    }
  }

  return result;
}

module.exports = {
  repeater
};
