import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroupReadOnly = ({ field, value, label, error, type, onChange, checkUserExists }) => {
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
        readOnly
      />
    {error && <span className="help-block">{error}</span>}
    </div>  );
}


TextFieldGroupReadOnly.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
} 


TextFieldGroupReadOnly.defaultProps = {
  type: 'text'
}

export default TextFieldGroupReadOnly;
