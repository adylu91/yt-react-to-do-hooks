import { useState } from "react";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function ToDoApp() {
  const [toDoItems, setToDoItems] = useState([]);

  const handleSetToDoItems = (newItem) => {
    setToDoItems([...toDoItems, newItem]);
  };

  return (
    <div>
      <h1>Do zrobienia:</h1>
      <ToDoForm handleSetToDoItems={handleSetToDoItems} />
      <ToDoList toDoItems={toDoItems} />
    </div>
  );
}
