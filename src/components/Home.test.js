import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import NavTop from "./NavTop";
import NavByNumber from "./NavByNumber";
import Slider from "./sliderComponents/Slider";

test('follow the link "Home" after clicking', () => {
    render(<App />);
    const linkElement = screen.getByRole('link', { name: /Home/i })
    fireEvent.click(linkElement);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
});
test('follow the link "About us" after clicking', () => {
    render(<App />);
    const linkElement = screen.getByRole('link', { name: /About us/i });
    fireEvent.click(linkElement);
    expect(screen.getByText('ABOUT US')).toBeInTheDocument();
});
// test('follow the link "Tours" after clicking', () => {
//     render(<App />);
//     const linkElement = screen.getByRole('link', { name: /Tours/i });
//     fireEvent.click(linkElement);
//     expect(screen.getByText('YOUR TOUR')).toBeInTheDocument();
// });
// test('follow the link "Store" after clicking', () => {
//     render(<App />);
//     const linkElement = screen.getByRole('link', { name: /Store/i });
//     fireEvent.click(linkElement);
//     expect(screen.getByText('STORE')).toBeInTheDocument();
// });
// test('follow the link "Contact" after clicking', () => {
//     render(<App />);
//     const linkElement = screen.getByRole('link', { name: /Contact/i });
//     fireEvent.click(linkElement);
//     expect(screen.getByText('CONTACT')).toBeInTheDocument();
// });
