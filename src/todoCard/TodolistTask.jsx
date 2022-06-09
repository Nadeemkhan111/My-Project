import React, { useState } from "react";

export const TodolistTask = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const handleAdd = () => {
    setList([...list, text]);
    setText("");
  };
  const handleDelete = (item) => {
     const filtered=list.filter((index)=>index!==item)
     setList(filtered);
     setText("")
    
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {list.map((item,index) => {
          return (
            <li key={index}>
              {item} <button onClick={() => handleDelete(item)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
