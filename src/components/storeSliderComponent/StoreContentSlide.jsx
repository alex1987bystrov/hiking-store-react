
export default function StoreContentSlide({ data: { url, title, price } }) {
  return (
    <div className="store-slide">
        <h3>{title} <span>{price}</span></h3>
        <img className="store-img" src = {url} alt = "img"></img>
    </div>
  );
}