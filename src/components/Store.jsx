import { useState, createContext } from "react";
import StoreNav from "./storeSliderComponent/StoreNav";
import StoreContent from "./storeSliderComponent/StoreContent";

export const StoreContext = createContext();
export default function Store(){

    const initialItems = [
        {url: 'images/store1.png', title: 'Promotion in the tent', price: '$56'},
        {url: 'images/store2.png', title: 'Starter package', price: '$29'},
        {url: 'images/store1.png', title: 'Promotion in the tent', price: '$56'},
        {url: 'images/store2.png', title: 'Starter package', price: '$29'},
    ];
    const [items, setItems] = useState(initialItems);
    const [slide, setSlide] = useState(0);
    // const [touchPosition, setTouchPosition] = useState(null);

    function nextSlide () {
        (slide < items.length-1) ? setSlide(slide => slide + 1) : setSlide(0);
    };
    function prevSlide () {
        (slide > 0) ? setSlide(slide => slide - 1) : setSlide(items.length-1);
    };
    function goToSlide (number) {
        setSlide(number % items.length);
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
                <StoreContent />
            </StoreContext.Provider>
        </div>
    );
}