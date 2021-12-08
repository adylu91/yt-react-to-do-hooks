import { useState } from "react";

export default function ToDoForm({ handleSetToDoItems }) {
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSetToDoItems(inputValue);
    setInputValue("");
  };

  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" value={inputValue} onChange={handleInputOnChange} />
        <button>Dodaj</button>
      </form>
    </div>
  );
}
