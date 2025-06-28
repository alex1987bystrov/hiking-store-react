import { useContext } from "react";
import { StoreContext } from "../Store";

export default function StoreDot({ number }) {
  const { goToSlide, slideNumber } = useContext(StoreContext);
  return (
    <div
      className={`store-dot ${slideNumber === number ? "selected-1" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}