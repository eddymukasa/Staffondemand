import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){

    let errors = {}

    
      if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is incorrect';
      }
      if (Validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
      }
      if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
      }

      if (Validator.isEmpty(data.confirmpassword)) {
        errors.confirmpassword = 'This field is required';
      }
      if (Validator.isEmpty(data.firstname)) {
        errors.firstname = 'This field is required';
      }
    
      if (Validator.isEmpty(data.lastname)) {
        errors.lastname = 'This field is required';
      }

      if (Validator.isEmpty(data.securityquestion)) {
        errors.securityquestion = 'This field is required';
      }
    
      if (Validator.isEmpty(data.answer)) {
        errors.answer = 'This field is required';
      }

      if (!Validator.isMobilePhone(data.phone,"en-GB")) {
        errors.phone = 'Phone number is incorrect';
      }
      
      if (Validator.isEmpty(data.phone)) {
        errors.phone = 'This field is required';
      }

      
    
      
    return {
        errors, isValid:isEmpty(errors)
    };
}