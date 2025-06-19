import { useContext } from "react";
import StoreContentSlide from "./StoreContentSlide";
import { StoreContext } from "../Store";

export default function StoreContent() {
  const { slideNumber, items } = useContext(StoreContext);

  return (
    <div
      className="store-content"
      style={{ transform: `translateY(-${slideNumber * 25}%)`, transition: '0.5s' }}
    >
      {items.map((slide, index) => (
          <StoreContentSlide key={index} data={slide} />
      ))}
    </div>
  );
}