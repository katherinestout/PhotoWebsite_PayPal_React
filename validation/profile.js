const Validator = require('validator');
const isEmpty =require('./is-empty');

module.exports = function validateProfileInput(data){
    let errors = {};

data.phone = !isEmpty(data.phone) ? data.phone : '';

if(Validator.isEmpty(data.phone)) {
    errors.handle ="Phone number is required!";
}


if(!isEmpty(data.instagram)) {
    if(!Validator.isURL(data.instagram)){
    errors.instagram ="Not a valid URL!";
    }
}


  return {
    errors,
    isValid: isEmpty(errors)
  };
};