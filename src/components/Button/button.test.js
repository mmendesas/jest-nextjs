
import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Button from './button';

describe('[Component] Button Final', () => {

  const setup = ({ useMock = true, ...customProps } = {}) => {
    const mockClick = jest.fn();
    const dProps = !useMock ? {} : {
      onClick: mockClick,
    }
    const props = { ...dProps, ...customProps }
    const utils = render(<Button {...props}>click me</Button>)
    const mybutton = utils.getByTestId('button');

    return {
      ...utils,
      mockClick,
      mybutton,
    }
  }

  it('should render correctly [snapshot]', async () => {
    // arrange
    const { container } = setup({ id: 'grosa' });
    expect(container.firstChild).toMatchSnapshot();
  });


  it('should call function on click', async () => {
    // arrange
    const { mockClick, mybutton } = setup();

    // act
    await fireEvent.click(mybutton);

    // assert
    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(mockClick).toHaveBeenCalledWith('hit button');
  });

  it('should call default function if onClick is not defined', async () => {
    const spy = jest.spyOn(Button.defaultProps, 'onClick');
    const { mybutton } = setup({ useMock: false });
    await fireEvent.click(mybutton);
    expect(spy).toHaveBeenCalled();
  });

  it('[ui] should render correctly', async () => {
    const { mybutton } = setup();
    expect(mybutton).toHaveStyleRule('background', '#0aa');
  });

  it('[ui] should render correctly secondary', async () => {
    const { mybutton } = setup({ secondary: true });
    expect(mybutton).toHaveStyleRule('background', '#9bb');
  });
});