import React from 'react';
import { render } from '@testing-library/react';
import InkLines from './index';

let lines;

const renderSnapshot = () =>
  render(<InkLines lines={lines} />).container.innerHTML;

afterEach(() => {
  jest.clearAllMocks();
  lines = [];
});
afterAll(() => {
  jest.restoreAllMocks();
});

describe('InkLines component', () => {
  it('should render no lines if an ampty lines array is given', () => {
    lines = [];
    expect(renderSnapshot()).toMatchSnapshot();
  });
  it('should render the lines correctly', () => {
    lines = ['Line 1', 'Line 2', 'Line 3'];
    expect(renderSnapshot()).toMatchSnapshot();
  });
});
