import React from 'react';
import { render, waitForElement } from '@testing-library/react';
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

test('player data fetched and displaying', async () => {
  const { getAllByTestId, getAllByText } = render(<App />);
  await waitForElement(() => getAllByTestId("player-name"));
  await waitForElement(() => getAllByTestId("player-country"));
  await waitForElement(() => getAllByText(/searches/i));
})
