
import React, { useContext } from "react";
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
  <div className="dots">
    {renderDots()}
    <div className="arr-right" onClick={() => changeSlide(1)} />
  </div>
  );
}