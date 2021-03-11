import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';

import { usePublisher } from '../../publisher'

const Container = styled.div`
  margin-top: 20px;
  border: 2px dashed blue;
  padding: 20px;
`

function Counter({ ...props }) {
  const { publish } = usePublisher();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const msg = `Titulo maneiro [${count}]`
    publish('message', msg)
    document.title = msg;
  }, [count]);

  return (
    <Container data-testid="counter" {...props} >
      <p>Voce clicou {count} vezes</p>
      <Button id="plus" onClick={() => setCount(count + 1)}>
        Clique aqui
      </Button>
    </Container>
  );
}

export default Counter;