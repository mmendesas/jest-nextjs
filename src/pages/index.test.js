
import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import { Provider as MockPublisherProvider } from '../publisher'
import Home from './index';

describe('[Component] Button', () => {
  it('should render a dynamic content', async () => {
    // window.HTMLElement.prototype.scrollIntoView = jest.fn();
    // arrange

    await preloadAll();
    const mockPublisher = {
      publish: jest.fn(),
      subscribe: jest.fn()
    };
    const { debug, container, getByTestId } = render(
      <MockPublisherProvider value={mockPublisher} >
        <Home />
      </MockPublisherProvider>
    );

    // act
    const dynamicBtn = container.querySelector('#dynamicBtn');
    await fireEvent.click(dynamicBtn);

    // assert
    const dynamicComponent = getByTestId('dynamic');

    expect(dynamicComponent).toBeTruthy();
    expect(dynamicComponent.textContent).toEqual('dynamic content');
  });

});