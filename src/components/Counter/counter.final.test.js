
import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Counter from './counter';

import { Provider as MockPublisherProvider } from '../../publisher'

describe('[Component] Counter', () => {

  const setup = () => {
    const publish = jest.fn();
    const utils = render(
      <MockPublisherProvider value={{ publish }}>
        <Counter />
      </MockPublisherProvider>,
      { container: document.head }
    );

    const plusBtn = utils.container.querySelector('#plus');
    const counter = utils.getByTestId('count');

    return {
      ...utils,
      plusBtn,
      counter,
      publish
    }
  }

  it('handle known error', () => {
    console.error = jest.fn();
  
    setup();
    expect(console.error.mock.calls[0][0]).toMatch(/cannot appear as a child/);
  })

  it('should render correctly [snapshot]', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();

    expect(console.error.mock.calls[0][0]).toMatch(/cannot appear as a child/);
  })

  it('should change counter on button click', async () => {
    // arrange
    const { publish, plusBtn, counter } = setup();

    // assert
    expect(counter.textContent).toEqual('0');

    // act
    await fireEvent.click(plusBtn);

    // assert
    expect(counter.textContent).toEqual('1');
    expect(publish).toHaveBeenCalledWith('message', expect.anything());
  });

  it('should change page title on click', async () => {
    const { container, plusBtn, debug } = setup();
    await fireEvent.click(plusBtn);

    const title = container.querySelector('title');
    expect(title.textContent).toEqual('[head] - mudou o título [1] vezes')
  })

  it('should call event on button click', async () => {
    const { publish, plusBtn } = setup();

    await fireEvent.click(plusBtn);
    expect(publish).toHaveBeenCalledTimes(1);

    await fireEvent.click(plusBtn);
    expect(publish).toHaveBeenCalledTimes(2);

    await fireEvent.click(plusBtn);
    expect(publish).toHaveBeenCalledTimes(3);
    await fireEvent.click(plusBtn);

    // assert
    expect(publish).toHaveBeenCalledWith('message', expect.anything());
    expect(publish).toHaveBeenNthCalledWith(2, 'message', "[head] - mudou o título [2] vezes");
    expect(publish).toHaveBeenLastCalledWith('message', "[head] - mudou o título [4] vezes");

    // options
    const messages = publish.mock.calls;
    const [event, msg] = messages[1]
    expect(event).toEqual('message');
    expect(msg).toMatch(/[2]/);
  });

});