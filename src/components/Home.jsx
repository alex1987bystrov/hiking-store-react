import Logo from "./Logo";
import NavTop from "./NavTop";
import NavByNumber from "./NavByNumber";

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
                <img className = "back" src = "images/main.png" alt = "logo"></img>
            </div>
            <div></div>
        </>
    );
}