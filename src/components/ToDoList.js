import { v4 as uuidv4 } from "uuid";

export default function ToDoList({ toDoItems }) {
  const items = toDoItems.map((item) => {
    return <div key={uuidv4()}>{item}</div>;
  });

  return <div>{items}</div>;
}
