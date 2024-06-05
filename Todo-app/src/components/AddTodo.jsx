import { useContext, useRef, useState } from "react";
import { TodoItemContext } from "../store/todo-items-store";
import { GrAdd } from "react-icons/gr";
function AddTodo() {

  const { addItems } = useContext(TodoItemContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const [isdesabled, setdesable] = useState(true);

  const handleonAddbtn = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    // Clear input fields after adding todo
    todoNameElement.current.value = '';
    todoDateElement.current.value = '';
    setdesable(true);// Disable the button after adding todo
    addItems(todoName, todoDate);
  };
  const handleOnchange = () => {
    // Enable the button if both input fields have values, otherwise disable it
    setdesable(todoNameElement.current.value === '' || todoDateElement.current.value === '')
  }

  return <div className="container text-center">

    <form className="row our-row" onSubmit={handleonAddbtn} >
      <div className="col-6">
        <input type="text" ref={todoNameElement} placeholder="Enter Todo" />
      </div>
      <div className="col-4">
        <input ref={todoDateElement} type="date" onChange={handleOnchange} />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success our-btn" disabled={isdesabled}
        ><GrAdd /></button>
      </div>
    </form>

  </div>
}
export default AddTodo;