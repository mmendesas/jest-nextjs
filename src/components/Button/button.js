import React from 'react';
import { func } from 'prop-types'

function Button({ onClick, children, ...props }) {
  const handleClick = () => {
    onClick('hit button');
  }

  return (
    <button id="btn123" data-testid='btn123' onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => { }
}

Button.propTypes = {
  onClick: func
}

export default Button;