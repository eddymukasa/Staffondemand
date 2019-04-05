import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './TextFieldGroup.css'
const TextFieldGroup = ({ field, value, label, error, type, onChange, checkUserExists }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      
      <input
        onChange={onChange}
        onBlur={checkUserExists}
        value={value}
        type={type}
        name={field}
        placeholder={label}
        className="form-control"
      />
    {error && <span className="help-block">{error}</span>}
    </div>  );
}


TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
} 


TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
