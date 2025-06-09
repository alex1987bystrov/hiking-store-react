import './App.css';
import Home from './components/Home';
import About from './components/About';
import Tours from './components/Tours';
import Store from './components/Store';
import Contact from './components/Contact';

export default function App() {//TO DO: for moving to another section, use context...
  return (
    <>
      <Home />
      <About />
      <Tours />
      <Store />
      <Contact />
    </>
  );
}