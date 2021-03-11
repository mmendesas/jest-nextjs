import { useContext } from 'react';
import { PublisherContext } from './publisher.context'

export default function usePublisher() {
  return useContext(PublisherContext);
}