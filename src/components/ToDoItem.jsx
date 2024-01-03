import React from "react";

function ToDoItem(props) {
  return (
      <li id={props.id} onClick={props.deleteItem}>
        {props.name}
      </li>
  )
}

export default ToDoItem;
