import { useState, useEffect, createContext } from "react";
import StoreNav from "./storeSliderComponent/StoreNav";
import StoreContent from "./storeSliderComponent/StoreContent";

export const StoreContext = createContext();
export default function Store(){
    const initialItems = [
        {url: 'images/store1.png', title: 'Promotion in the tent', price: '$56'},
        {url: 'images/store2.png', title: 'Starter package', price: '$29'},
        {url: 'images/store1.png', title: 'Promotion in the tent', price: '$56'},
        {url: 'images/store2.png', title: 'Starter package', price: '$29'},
        {url: 'images/store1.png', title: 'Promotion in the tent', price: '$56'},
        {url: 'images/store2.png', title: 'Starter package', price: '$29'},
        {url: 'images/store1.png', title: 'Promotion in the tent', price: '$56'},
        {url: 'images/store2.png', title: 'Starter package', price: '$29'},
    ];

    const [items, setItems] = useState(initialItems);
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);

    useEffect(() => {
    fetch('/api/some/url')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error(error));
    }, []);
    
    function nextSlide () {
        if(items.length % 2 !== 0){
            (slide < (items.length-1)) ? setSlide(slide => slide + 2) : setSlide(0);
        }else{
            (slide < (items.length-2)) ? setSlide(slide => slide + 2) : setSlide(0);
        };
    };
    function prevSlide () {
        if(items.length % 2 === 0){
            (slide > 0) ? setSlide(slide => slide - 2) : setSlide(items.length-2);
        }else{
            (slide > 0) ? setSlide(slide => slide - 2) : setSlide(items.length-1);
        };
    };
    function goToSlide (number) {
        setSlide(number % items.length);
    };

    function handleTouchStart (e) {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };
    function handleTouchMove (e) {
        if (touchPosition === null) {
        return;
        };
        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;
        if (direction > 10) {
        nextSlide();
        };
        if (direction < -10) {
        prevSlide();
        };
        setTouchPosition(null);
    };

    return(
        <div className="store" id="store">
            <StoreContext.Provider
                value={{
                    goToSlide,
                    nextSlide,
                    prevSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                }}
            >
                <div className="nav-store">
                    <StoreNav />
                </div>
                <div className="store-header"><h1>STORE</h1></div>
                <div className="store-content-section"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <StoreContent />
                </div>
            </StoreContext.Provider>
        </div>
    );
}