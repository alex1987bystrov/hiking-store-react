import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders About', () => {
  render(<App />);
  expect(screen.getByTestId('about')).toBeInTheDocument();
});