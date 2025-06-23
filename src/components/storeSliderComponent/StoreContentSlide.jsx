import { useContext } from "react";
import { StoreContext } from "../Store";

export default function StoreContentSlide({data}) {
  const { items } = useContext(StoreContext);

  return (
    <div className="store-slide">
      <div>
        <h3>{items[data].title} <span>{items[data].price}</span></h3>
        <img className="store-img" src = {items[data].url} alt = "img"></img>
      </div>
      {(items[data+1] !== undefined) && 
        (<div>
          <h3>{items[data+1].title} <span>{items[data+1].price}</span></h3>
          <img className="store-img" src = {items[data+1].url} alt = "img"></img>
        </div>
      )}
    </div>
  );
}