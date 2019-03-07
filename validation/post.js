const Validator = require('validator');
const isEmpty =require('./is-empty');

module.exports = function validatePostInput(data){
    let errors = {};


  
    data.typeShoot= !isEmpty(data.typeShoot) ? data.typeShoot : '';
    data.time = !isEmpty(data.time) ? data.time : '' ;
    data.date = !isEmpty(data.date) ? data.date : '' ;
  
  if (Validator.isEmpty(data.typeShoot)) {
    errors.typeShoot = 'Must enter type of shoot';
  }

  if(Validator.isEmpty(data.time)){
      errors.time = 'Must enter a time';
  }


  if(Validator.isEmpty(data.date)){
    errors.date = 'Must enter a date';
}

  return {
    errors,
    isValid: isEmpty(errors)
  };
};