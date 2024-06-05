import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/Todoitems";
import "./APP.css";
import { useReducer } from "react";
import TodoItemContextProvider, { TodoItemContext } from "./store/todo-items-store";


function App() {
  const [todoData, dispatchItems] = useReducer(todoItemReducer, []);

  const addItems = (todoName, todoDate) => {
    const newActionItem = {
      type: "NEW-ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchItems(newActionItem);
  }
  // const [todoData, setData] = useState([]);
  // const addItems = (todoName, todoDate) => {
  //   setData((todoData) =>
  //     [...todoData, {
  //       name: todoName,
  //       date: todoDate,
  //     }]
  //   );
  // }
  const deleteItems = (Dataname) => {
    const deleteAction = {
      type: "DELETE-ITEM",
      payload: {
        itemName: Dataname,
      }
      // const newItem = todoData.filter(item => item.name !== Dataname)
      // setData(newItem);
    }
    dispatchItems(deleteAction)
  }

  return (
    <TodoItemContextProvider value={{
      todoData,
      addItems,
      deleteItems
    }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems />
      </center>
    </TodoItemContextProvider>

  );
}

export default App;
