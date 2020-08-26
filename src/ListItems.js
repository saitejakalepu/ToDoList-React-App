import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>{
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} />
         <span1>
         <FontAwesomeIcon className="faedit" onClick={(e) => {
             alert("Editing Enabled")
            props.setUpdate(e.target.value,item.key)}} icon={faEdit} />
         </span1>
         
        <span> 
        <FontAwesomeIcon className="fadelete" onClick={() => {
            props.deleteItem(item.key)
        }} icon={faTrash} />
        </span>
     </p>
     
    </div>})
    
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;