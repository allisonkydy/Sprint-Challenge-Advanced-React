import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />)
});

test('header displaying', () => {
  const { getByText } = render(<App />);
  getByText("Women's World Cup");
})

test('search form displaying', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  getByPlaceholderText("enter a country...");
  getByText(/search/i);
})
