
import { v4 as uuidv4 } from 'uuid';

export default function ListItems(props){
    const links = [
        {id:1, link:"#home-top"},
        {id:2, link:"#about"},
        {id:3, link:"#tours"},
        {id:4, link:"#store"},
        {id:5, link:"#contact"}
    ];
    const nI = props.nOfItems;
    const nLI = props.nOfListItems;
    const index = props.index;
    const allItems = [{id:null}];
    const items = [];

    for(let i=0; i<nI; i++){
        allItems.push(links[i]);
    };
    allItems.push({id:null});

    for(let i = 0; i < nLI; i++){
        items.push(allItems[index+i]);
    };

    let listItems = items.map(
    item => item === items[1] ? 
    <li key = {uuidv4()}><a className = "nav-link active" href = {item.link}>{item.id}</a></li> : 
    <li key = {uuidv4()}><a className = "nav-link" href = {item.link}>{item.id}</a></li>
    );
    console.log(listItems[1].props.children.props.href);
    return(
        <ul className = "nav-panel-by-number-list">{listItems}</ul>
    );
}