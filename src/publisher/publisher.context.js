import React, { createContext } from 'react';
import Publisher from './publisher';

export const PublisherContext = createContext();
export const { Provider, Consumer } = PublisherContext;

export const PublisherProvider = ({ children }) => {
  const publisher = new Publisher();
  return <Provider value={publisher}>{children}</Provider>
}