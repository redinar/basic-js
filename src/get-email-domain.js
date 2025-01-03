const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let dogCharCheck = false;
  let domain = '';
  for (let i = 0; i < email.length; i++) {
    if (dogCharCheck) {
     domain += email[i];   
    }
    if (email[i] === '@') {
      domain = '';
      dogCharCheck = true;
    }
  }
  return domain;
}

module.exports = {
  getEmailDomain
};
