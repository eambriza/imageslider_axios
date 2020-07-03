import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/BNRY Image Slider Test/i);
  expect(linkElement).toBeInTheDocument();
});

test('should take a snapshot', () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
