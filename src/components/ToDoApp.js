import { useState } from "react";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

import "./css/ToDoApp.css";

import { v4 as uuidv4 } from "uuid";

export default function ToDoApp() {
  const [toDoItems, setToDoItems] = useState([]);

  const handleSetToDoItems = (text) => {
    const id = uuidv4();
    const newItem = {
      text: text,
      id: id,
    };

    setToDoItems([...toDoItems, newItem]);
  };

  const deleteItem = (id) => {
    setToDoItems(
      toDoItems.filter((it) => {
        return it.id === id ? false : it;
      })
    );
  };

  const toDoListView = () => {
    if (toDoItems.length !== 0) {
      return <ToDoList toDoItems={toDoItems} deleteItem={deleteItem} />;
    }

    return <h1>Brak listy zadań</h1>;
  };

  return (
    <div className="app-wrapper">
      <h1>Do zrobienia:</h1>
      <ToDoForm handleSetToDoItems={handleSetToDoItems} />
      {toDoListView()}
    </div>
  );
}
