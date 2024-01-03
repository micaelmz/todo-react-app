import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState("");

  const handleItemInput = (event) => {
    setItemInput(event.target.value);
  };

  const addItem = () => {
    setItems((prevItems) => [...prevItems, itemInput]);
    setItemInput("");
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange={handleItemInput} type="text" value={itemInput} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((item, index) => (
                <ToDoItem
                    key={index}
                    name={item}
                    id={index}
                    deleteItem={() => deleteItem(index)}
                />
            ))}
          </ul>
        </div>
      </div>
  );
}

export default App;
