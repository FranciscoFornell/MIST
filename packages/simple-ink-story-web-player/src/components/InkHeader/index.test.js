import React from 'react';
import { render } from '@testing-library/react';
import InkHeader from './index';

let title;
let author;

const renderSnapshot = () =>
  render(<InkHeader title={title} author={author} />).container.innerHTML;

afterEach(() => {
  jest.clearAllMocks();
  title = undefined;
  author = undefined;
});
afterAll(() => {
  jest.restoreAllMocks();
});

describe('InkHeader component', () => {
  it('should render no title if no title is given', () => {
    author = 'Author Name';
    expect(renderSnapshot()).toMatchSnapshot();
  });
  it('should render no author if no author is given', () => {
    title = 'Title';
    expect(renderSnapshot()).toMatchSnapshot();
  });
  it('should render the header info correctly', () => {
    title = 'Title';
    author = 'Author Name';
    expect(renderSnapshot()).toMatchSnapshot();
  });
});
