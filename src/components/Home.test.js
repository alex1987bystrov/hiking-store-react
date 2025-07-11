import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import NavTop from "./NavTop";
import NavByNumber from "./NavByNumber";
import Slider from "./sliderComponents/Slider";

test('follow the link "Home" after clicking', () => {
    render(<App />);
    const linkHome = screen.getByRole('link', { name: /Home/i })
    linkHome.addEventListener('click', () => {linkHome.classList.add('active')});
    fireEvent.click(linkHome);
    expect(linkHome).toHaveClass('active');
});
test('follow the link "About us" after clicking', () => {
    render(<App />);
    const linkAbout = screen.getByRole('link', { name: /About us/i });
    linkAbout.addEventListener('click', () => {linkAbout.classList.add('active')});
    fireEvent.click(linkAbout);
    expect(linkAbout).toHaveClass('active');
});
test('follow the link "Tours" after clicking', () => {
    render(<App />);
    const linkTours = screen.getByRole('link', { name: /Tours/i });
    linkTours.addEventListener('click', () => {linkTours.classList.add('active')});
    fireEvent.click(linkTours);
    expect(linkTours).toHaveClass('active');
});
test('follow the link "Store" after clicking', () => {
    render(<App />);
    const linkStore = screen.getByRole('link', { name: /Store/i });
    linkStore.addEventListener('click', () => {linkStore.classList.add('active')});
    fireEvent.click(linkStore);
    expect(linkStore).toHaveClass('active');
});
test('follow the link "Contact" after clicking', () => {
    render(<App />);
    const linkCont = screen.getByRole('link', { name: /Contact/i });
    linkCont.addEventListener('click', () => {linkCont.classList.add('active')});
    fireEvent.click(linkCont);
    expect(linkCont).toHaveClass('active');
});
