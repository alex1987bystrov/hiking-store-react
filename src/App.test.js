import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home', () => {
  render(<App />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});
test('renders About', () => {
  render(<App />);
  expect(screen.getByText('ABOUT US')).toBeInTheDocument();
});
test('renders Tours', () => {
  render(<App />);
  expect(screen.getByText('CHOOSE')).toBeInTheDocument();
});
test('renders Store', () => {
  render(<App />);
  expect(screen.getByText('STORE')).toBeInTheDocument();
});
test('renders Contact', () => {
  render(<App />);
  expect(screen.getByText('CONTACT')).toBeInTheDocument();
});