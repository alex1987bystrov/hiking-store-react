
import { useContext } from "react";
import { SliderContext } from "./Slider";
import Dot from "./Dot";

export default function Dots() {
  const { slidesCount, changeSlide } = useContext(SliderContext);

  function renderDots () {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }
    return dots;
  };

  return (
  <div 
    data-testid="dots"
    className="dots"
    >
    {renderDots()}
    <div data-testid="arr-right" className="arr-right" onClick={() => changeSlide(1)} />
  </div>
  );
}