import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  border: 5px dotted green;
`

function Dynamic() {
  return <Container data-testid="dynamic">dynamic content</Container>;
}

export default Dynamic;