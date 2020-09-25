import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InkChoices from './index';

const onClick = jest.fn();
let choices = [];

const renderComponent = () => {
  const { container, getByText } = render(
    <InkChoices choices={choices} clickHandler={onClick} />
  );
  return {
    snapshot: container.innerHTML,
    clickOn: (text) => {
      fireEvent.click(getByText(text));
    },
  };
};

afterEach(() => {
  jest.clearAllMocks();
  choices = [];
});
afterAll(() => {
  jest.restoreAllMocks();
});

describe('InkChoices component', () => {
  it('should render no buttons if no choices are given', () => {
    expect(renderComponent().snapshot).toMatchSnapshot();
  });
  it('should render as many buttons as choices are given', () => {
    choices = [
      { index: 1, text: 'text 1' },
      { index: 2, text: 'text 2' },
    ];
    expect(renderComponent().snapshot).toMatchSnapshot();
  });
  it('should call the given onClick callback, with the correct index when the button is clicked', () => {
    choices = [
      { index: 1, text: 'test-choice-1' },
      { index: 2, text: 'test-choice-2' },
    ];
    const { clickOn } = renderComponent();
    clickOn('test-choice-1');
    expect(onClick).toHaveBeenCalledWith(1);
    onClick.mockClear();
    clickOn('test-choice-2');
    expect(onClick).toHaveBeenCalledWith(2);
  });
});
