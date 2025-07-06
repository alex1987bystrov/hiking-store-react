import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Tours from './components/Tours';
import Store from './components/Store';
import Contact from './components/Contact';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText('Home');
  expect(linkElement).toBeInTheDocument();
});

test('renders Home', () => {
  render(<Home />);
  const linkElement = screen.getByText('Home');
  expect(linkElement).toBeInTheDocument();
});
test('renders About', () => {
  render(<About />);
  const linkElement = screen.getByText('ABOUT US');
  expect(linkElement).toBeInTheDocument();
});
test('renders Tours', () => {
  render(<Tours />);
  const linkElement = screen.getByText('CHOOSE');
  expect(linkElement).toBeInTheDocument();
});
test('renders Store', () => {
  render(<Store />);
  const linkElement = screen.getByText('STORE');
  expect(linkElement).toBeInTheDocument();
});
test('renders Contact', () => {
  render(<Contact />);
  const linkElement = screen.getByText('CONTACT');
  expect(linkElement).toBeInTheDocument();
});