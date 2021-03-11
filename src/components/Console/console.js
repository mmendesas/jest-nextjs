import React, { useEffect, useState } from 'react';

import { Code, Text } from './console.styles';
import { usePublisher } from '../../publisher'

function Console() {
  const { subscribe } = usePublisher();
  const [messages, setMessages] = useState(['...']);

  useEffect(() => {
    subscribe('message', msg => {
      setMessages([...messages, msg]);
    });
    scrollToMyRef();
  }, [messages]);

  const scrollToMyRef = () => {
    const lastItem = document.querySelector('#log-messages > li:last-child');
    if (process.browser && lastItem) {
      lastItem.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Code id="log-messages">
      {messages.map((msg, idx) => <Text key={idx}>{`> ${msg}`}</Text>)}
    </Code>
  )
}

export default Console;