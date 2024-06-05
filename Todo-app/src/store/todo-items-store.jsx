import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemContext = createContext(


  todoItemReducer = (currentVal, action) => {
    let newTodoItem = currentVal;
    if (action.type === 'NEW-ITEM') {
      newTodoItem = [...currentVal, {
        name: action.payload.todoName,
        date: action.payload.todoDate,
      }]
    }
    else if (action.type === 'DELETE-ITEM') {
      newTodoItem = currentVal.filter(item => item.name !== action.payload.itemName)
    }
    return newTodoItem;
  }
);


const TodoItemContextProvider = (children) => {

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



}
export default TodoItemContextProvider;