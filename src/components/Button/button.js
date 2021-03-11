import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types'


const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.secondary ? '#9bb' : '#0aa')};
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
`

function Button({ onClick, children, ...props }) {
  const handleClick = () => {
    onClick('hit button');
  }

  return (
    <Container id="btn123" data-testid='button' onClick={handleClick} {...props}>
      {children}
    </Container>
  );
}

Button.defaultProps = {
  onClick: () => { }
}

Button.propTypes = {
  onClick: func
}

export default Button;