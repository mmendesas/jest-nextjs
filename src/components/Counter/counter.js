import React, { useState, useEffect } from 'react';

import Button from '../Button';
import { Container } from './counter.styles'
import { usePublisher } from '../../publisher'

function Counter({ ...props }) {
  const { publish } = usePublisher();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      const msg = `mudou o título [${count}] vezes`
      publish('message', `[head] - ${msg}`)
      document.title = msg;
    }
  }, [count]);

  return (
    <Container data-testid="counter" {...props} >
      <p>Voce clicou <span data-testid="count">{count}</span> vezes</p>
      <Button id="plus" onClick={() => setCount(count + 1)}>
        Clique aqui
      </Button>
    </Container>
  );
}

export default Counter;