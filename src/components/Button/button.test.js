
import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Button from './button';

describe('[Component] Button', () => {

  it('should render correctly [snapshot]', async () => {
    // arrange
    const { container } = render(<Button id="grosa">click me</Button>)
    // assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call function on click', async () => {
    // arrange
    const mockClick = jest.fn();
    const { getByTestId } = render(<Button onClick={mockClick}>click me</Button>)

    // act
    const mybutton = getByTestId('button');
    await fireEvent.click(mybutton);

    // assert
    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(mockClick).toHaveBeenCalledWith('hit button');
  });


  it('should call function on click', async () => {
    // arrange
    const { getByTestId } = render(<Button>click me</Button>)

    // act
    const mybutton = getByTestId('button');
    await fireEvent.click(mybutton);
  });


});