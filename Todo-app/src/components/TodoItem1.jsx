import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";

function TodoItem1({ Dataname, Datadate }) {
  const { deleteItems } = useContext(TodoItemContext);

  return <div className="container  ">
    <div className="row our-row">

      <div className="col-6">{Dataname}</div>
      <div className="col-4"> {Datadate}</div>
      <div className="col-2">
        <button type="button" className="btn  btn-danger  our-btn " onClick={() => { deleteItems(Dataname) }}><MdDelete /></button>
      </div>


    </div>
  </div>
}
export default TodoItem1;