const Validator = require('validator');
const isEmpty =require('./is-empty');

module.exports = function validateProfileInput(data){
    let errors = {};

data.phone = !isEmpty(data.phone) ? data.phone : '';
data.email = !isEmpty(data.email) ? data.email : '';

if(Validator.isEmpty(data.phone)) {
    errors.phone ="Phone number is required!";
}
if(Validator.isEmpty(data.email)) {
  errors.email ="Phone number is required!";
}

  return {
    errors,
    isValid: isEmpty(errors)
  };
};