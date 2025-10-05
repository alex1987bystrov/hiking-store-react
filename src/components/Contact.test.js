import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-matchmedia-mock';
import App from '../App';

test('renders Social', () => {
  render(<App />);
  expect(screen.getByTestId('social')).toBeInTheDocument();
});