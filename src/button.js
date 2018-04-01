import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button className={props.className} type="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  className: '',
  onClick() {}
};

export default Button;
