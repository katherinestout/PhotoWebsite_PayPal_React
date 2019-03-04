const Validator = require('validator');
const isEmpty =require('./is-empty');

module.exports = function validateAccountInput(data){
    let errors = {};

data.handle = !isEmpty(data.phone) ? data.phone : '';



if(Validator.isEmpty(data.phone)) {
    errors.phone ="Phone number is required!";
}


  return {
    errors,
    isValid: isEmpty(errors)
  };
};