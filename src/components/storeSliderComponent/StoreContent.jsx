import { useContext } from "react";
import StoreContentSlide from "./StoreContentSlide";
import { StoreContext } from "../Store";

export default function StoreContent() {
  const { slideNumber, items } = useContext(StoreContext);

  return (
    <div className="store-content"
      style={{ transform: `translateY(-${slideNumber * 12.5}%)` }}
    >
      {items.map((item, index) => (
        ((index % 2) === 0) ? <StoreContentSlide key={index} data={index} /> : ''
      ))}
    </div>
  );
}