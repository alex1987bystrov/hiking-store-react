import { useState } from 'react';
import ListItems from "./ListItems";

export default function NavByNumber({nOfItems, nOfListItems}){
    const links = [
        {id:1, link:"#home-top"},
        {id:2, link:"#about"},
        {id:3, link:"#tours"},
        {id:4, link:"#store"},
        {id:5, link:"#contact"}
    ];
    const [index, setIndex] = useState(0);

    function handleNext(){
        (index < nOfItems-1) ? setIndex(index => index + 1) : setIndex(0);
        // document.querySelector(links[(index < nOfItems-1) ? index + 1 : 0].link).scrollIntoView({block:'center'});
    }
    function handlePrev(){
        (index > 0) ? setIndex(index => index - 1) : setIndex(nOfItems-1);
        // document.querySelector(links[(index > 0) ? index - 1 : nOfItems-1].link).scrollIntoView({block:'center'});
    }
    return(
        <div className = "nav-by-number" data-testid="NavByNumber">
            <nav id = "nav-panel-by-number">
                <div className = "arr-left" onClick = {handlePrev}></div>
                <ListItems nOfListItems = {nOfListItems} nOfItems = {nOfItems} index = {index} links = {links}/>
                <div className = "arr-right" onClick = {handleNext}></div>
            </nav>
        </div>
    );
}