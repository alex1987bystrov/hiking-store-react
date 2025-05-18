import Logo from "./Logo";
import NavTop from "./NavTop";
import NavByNumber from "./NavByNumber";
import Slider from "./sliderComponents/Slider";
// import SimpleCarousel from "./SimpleCarousel";

export default function Home(){
    return (
        <>
            <div className="home-top" id="home-top">
                <Logo />
                <NavTop />
                <NavByNumber
                nOfItems = {5}
                nOfListItems = {3}
                />
                <img className = "back" src = "images/main.png" alt = "background"></img>
            </div>
            <div className="home-bottom">
                <h2 className="head-home-bottom">THE MOUNTAINS ARE &nbsp;&nbsp;&nbsp;<span>WAITING FOR YOU</span></h2>
                <Slider />
            </div>
        </>
    );
}