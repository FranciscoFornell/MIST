import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InkButton from './index';

const onClick = jest.fn();
let buttonText;

const renderComponent = () =>
  render(<InkButton label={buttonText} onClick={onClick} />);

afterEach(() => {
  jest.clearAllMocks();
  buttonText = undefined;
});
afterAll(() => {
  jest.restoreAllMocks();
});

describe('InkButton component', () => {
  it('should render with no text if no label is given', () => {
    const { container } = renderComponent();
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('should render correctly with the given label', () => {
    buttonText = 'Test Label';
    const snapshot = renderComponent().container.innerHTML;
    expect(snapshot).toMatchSnapshot();
  });
  it('should call the given onClick callback when the button is clicked', () => {
    buttonText = 'test-component';
    const { getByText } = renderComponent();
    fireEvent.click(getByText('test-component'));
    expect(onClick).toHaveBeenCalled();
  });
});
