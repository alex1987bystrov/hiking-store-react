import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-matchmedia-mock';
import App from '../App';

test('renders nav-store-dots', () => {
  render(<App />);
  expect(screen.getByTestId('nav-store-dots')).toBeInTheDocument();
});
test('renders store-content', () => {
  render(<App />);
  expect(screen.getByTestId('store-content')).toBeInTheDocument();
});
test('renders store-slide', () => {
  render(<App />);
  expect(screen.getByTestId('store-slide-0')).toBeInTheDocument();
});
