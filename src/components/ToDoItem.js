import { IoIosCloseCircleOutline } from "react-icons/io";
import "./css/ToDoItem.css";

export default function ToDoItem({ item, deleteItem, id }) {
  return (
    <div className="item-wrapper">
      <div className="item-text">{item}</div>
      <div className="item-icon-wrapper">
        <IoIosCloseCircleOutline
          className="item-icon_close"
          onClick={() => {
            deleteItem(id);
          }}
        />
      </div>
    </div>
  );
}
