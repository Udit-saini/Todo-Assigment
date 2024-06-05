import { useContext } from "react";
import TodoItem1 from "./TodoItem1";
import { TodoItemContext } from "../store/todo-items-store";

function TodoItems() {
  const { todoData } = useContext(TodoItemContext)

  return (
    <>
      <div className="items-container">
        {todoData.map(item =>
          <TodoItem1
            Dataname={item.name}
            Datadate={item.date}
          ></TodoItem1>
        )}
      </div>
    </>
  );
}
export default TodoItems;