import { useContext } from "react";
import { StoreContext } from "../Store";

// export default function StoreContentSlide({ data: { url, title, price } }) {
//   return (
//     <div className="store-slide">
//         <h3>{title} <span>{price}</span></h3>
//         <img className="store-img" src = {url} alt = "img"></img>
//     </div>
//   );
// }
export default function StoreContentSlide() {
  const { slideNumber, items } = useContext(StoreContext);
  const num = slideNumber;

  return (
    <div className="store-slide">
      <div>
        <h3>{items[num].title} <span>{items[num].price}</span></h3>
        <img className="store-img" src = {items[num].url} alt = "img"></img>
      </div>
        {(items[num+1] !== undefined) && 
          (<div>
            <h3>{items[num+1].title} <span>{items[num+1].price}</span></h3>
            <img className="store-img" src = {items[num+1].url} alt = "img"></img>
            </div>
          )}
    </div>
  );
}