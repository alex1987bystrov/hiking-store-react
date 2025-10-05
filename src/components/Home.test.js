import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-matchmedia-mock';
import App from '../App';

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
test('renders home-bottom', () => {
  render(<App />);
  expect(screen.getByText('THE MOUNTAINS ARE')).toBeInTheDocument();
});
test('renders Slider', () => {
  render(<App />);
  expect(screen.getByTestId('slider')).toBeInTheDocument();
});
test('renders Slide-list', () => {
  render(<App />);
  expect(screen.getByTestId('slide-list')).toBeInTheDocument();
});
test('renders Dots', () => {
  render(<App />);
  expect(screen.getByTestId('dots')).toBeInTheDocument();
});
test('testing "changeSlide" function', () => {
    render(<App />);
    let count = 0;
    const arrow = screen.getByTestId('arr-right');
    arrow.addEventListener('click', () => {count++});
    fireEvent.click(arrow);
    expect(count).toBe(1);
});
test('testing "goToSlide" function', () => {
    render(<App />);
    const dot = screen.getByTestId('dot-1');
    fireEvent.click(dot);
    expect(screen.getByTestId('slide-1')).toBeInTheDocument();
});
test('testing "handleTouchMove" function', () => {
    render(<App />);
    let count = 0;
    const slider = screen.getByTestId('slider');
    slider.addEventListener('touchmove', () => {count++});
      const initialTouch = { identifier: 1, clientX: 50, clientY: 50 };
    fireEvent.touchStart(slider, { touches: [initialTouch] });
    const movedTouch = { identifier: 1, clientX: 100, clientY: 50 };
    fireEvent.touchMove(slider, { touches: [movedTouch] });
    expect(count).toBe(1);
    expect(screen.getByTestId('slide-1')).toBeInTheDocument();
});


// test('tests the "NavByNumber" panel', () => {
//     const originalMatchMedia = window.matchMedia;
//     window.matchMedia = (query) => ({
//       matches: query === '(max-width: 1090px)',
//       media: query,
//       onchange: null,
//       addListener: jest.fn(),
//       removeListener: jest.fn(),
//       addEventListener: jest.fn(),
//       removeEventListener: jest.fn(),
//       dispatchEvent: jest.fn(),
//     });

//     window.matchMedia = window.matchMedia || window.msMatchMedia;
//     window.matchMedia.useMediaQuery('(max-width: 1090px)');
//     render(<App />);
//     const linkHome = screen.getByRole('link', { name: /Home/i })
//     expect(linkHome).toBeVisible();

//     window.matchMedia.useMediaQuery('(min-width: 1100px)');
//     render(<App />);
//     const Home = screen.getByRole('link', { name: /Home/i })
//     expect(Home).toBeVisible();

//     window.matchMedia.clear();

//     render(
//         <App />
//     );
    
//     const linkHome = screen.getByRole('link', { name: /Home/i })
//     console.log(window.matchMedia);
//     expect(linkHome).toBeVisible();

//     const elem = screen.getByTestId('NavByNumber');
//     const style = window.getComputedStyle(elem);
//     expect(style.position).toBe('fixed');
    
//     window.matchMedia = originalMatchMedia;
// });
