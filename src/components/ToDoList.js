import ToDoItem from "./ToDoItem";

export default function ToDoList({ toDoItems, deleteItem }) {
  const items = toDoItems.map((item) => {
    return (
      <ToDoItem
        item={item.text}
        key={item.id}
        id={item.id}
        deleteItem={deleteItem}
      />
    );
  });
  return <div>{items}</div>;
}
