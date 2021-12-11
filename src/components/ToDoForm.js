import { useState, useEffect, useRef } from "react";
import "./css/ToDoForm.css";

export default function ToDoForm({ handleSetToDoItems }) {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!inputValue || /^\s+$/.test(inputValue)) {
      //walidacja -> input pusty lub same spacje
      return;
    }
    handleSetToDoItems(inputValue);
    setInputValue("");
  };

  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="form-wrapper" onSubmit={handleOnSubmit}>
      <input
        className="form-input"
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputOnChange}
      />
      <button className="form-button">Dodaj</button>
    </form>
  );
}
