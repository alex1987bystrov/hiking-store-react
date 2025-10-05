import { useContext } from "react";
import { SliderContext } from "./Slider";

export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(SliderContext);
  return (
    <div
      data-testid={`dot-${number}`}
      className={`dot ${slideNumber === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}