import React, { useState } from "react";

export default function MyArray() {
  const [arr, setArr] = useState(["lorem ipsum "]);
  const [inputFlag, setInputFlag] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleAddItem(e) {
    setInputFlag(true);
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit() {
    if (inputValue.trim()) {
      setArr([...arr, inputValue]);
      setInputValue("");
      setInputFlag(false);
    }
  }

  function handleDeleteItem(index) {
    const newArr = arr.filter((_, i) => i !== index);
    setArr(newArr);
  }

  return (
    <div>
      <h2>
        Мій список
        <button id="listbtn" className="greenbtn" onClick={handleAddItem}>
          +
        </button>
      </h2>
      <ul>
        {arr.map((i, index) => (
          <li key={index}>
            {i}
            <button
              className="deletebtn"
              onClick={() => handleDeleteItem(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      {inputFlag && (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Введіть новий елемент"
            className="inputText"
          />
          <button onClick={handleSubmit} id="inputbtn" className="greenbtn">
            Додати
          </button>
        </div>
      )}
    </div>
  );
}
