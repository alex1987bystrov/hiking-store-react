import { useContext } from "react";
import { StoreContext } from "../Store";
import StoreDot from "./StoreDot";

export default function StoreNav(){
    const { slidesCount, nextSlide, prevSlide } = useContext(StoreContext);
    
    function render () {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
          dots.push(<StoreDot key={`store-dot-${i}`} number={i} />);
        }
        return dots;
    };
    return (
        <div className="nav-store-dots">
            <div className="arr-up" onClick={() => prevSlide()} />
            {render()}
            <div className="arr-down" onClick={() => nextSlide()} />
        </div> 
    );
}

