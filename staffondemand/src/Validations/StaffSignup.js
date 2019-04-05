import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){

    let errors = {}

    if (!Validator.isEmail(data.emails)) {
        errors.emails = 'Email is incorrect';
      }
      if (Validator.isEmpty(data.emails)) {
        errors.emails = 'This field is required';
      }
      if (Validator.isEmpty(data.passwords)) {
        errors.passwords = 'This field is required';
      }

      if (Validator.isEmpty(data.confirmpasswords)) {
        errors.confirmpasswords = 'This field is required';
      }
      if (Validator.isEmpty(data.firstnames)) {
        errors.firstnames = 'This field is required';
      }
    
      if (Validator.isEmpty(data.lastnames)) {
        errors.lastnames = 'This field is required';
      }

      if (Validator.isEmpty(data.securityquestions)) {
        errors.securityquestions = 'This field is required';
      }
    
      if (Validator.isEmpty(data.answers)) {
        errors.answers = 'This field is required';
      }

      if (!Validator.isMobilePhone(data.phones,"en-GB")) {
        errors.phones = 'Phone number is incorrect';
      }
      
      if (Validator.isEmpty(data.phones)) {
        errors.phones = 'This field is required';
      }

      if (Validator.isEmpty(data.region1)) {
    

        errors.region1 = 'Please select atleast one region';
      }

      if (data.region1 == "Select Region") {
          
        errors.region1 = 'Please select atleast one region';
      }
      
      
      
    return {
        errors, isValid:isEmpty(errors)
    };
}