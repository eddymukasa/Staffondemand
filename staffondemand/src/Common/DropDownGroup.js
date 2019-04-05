import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const DropDownGroup = ({ field, value, label, error, type, onChange, checkUserExists }) => {
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
