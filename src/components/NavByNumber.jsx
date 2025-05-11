import { useState } from 'react';
import ListItems from "./ListItems";


export default function NavByNumber({nOfItems, nOfListItems}){
    const [index, setIndex] = useState(0);
    function handleNext(){
        (index < nOfItems-1) ? setIndex(index => index + 1) : setIndex(0);
    }
    function handlePrev(){
        (index > 0) ? setIndex(index => index - 1) : setIndex(nOfItems-1);
    }    
    return(
        <div className = "nav-by-number">
            <nav id = "nav-panel-by-number">
                <div className = "arr-left" onClick = {handlePrev}></div>
                <ListItems nOfListItems = {nOfListItems} nOfItems = {nOfItems} index = {index} />
                <div className = "arr-right" onClick = {handleNext}></div>
            </nav>
        </div>
    );
}