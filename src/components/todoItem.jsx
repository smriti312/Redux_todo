import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import {
  markComplete,
  markIncomplete,
  removeTodo,
  toggleTodo,
} from "../redux/actions";

function TodoItem({ index, key, todo }) {
  const [isChecked, setIsChecked] = useState(todo.completed);

  // Handler function to toggle the checked status
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  console.log(todo.completed);
  const dispatch = useDispatch();
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-red-500" : " "
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 m1-8 flex items-center">
        {/* <button
          onClick={() => dispatch(toggleTodo(index))}
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
        >
          {todo.completed ? "completed" : "not completed"}
        </button> */}
        Not Completed
        <label className="switch">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              handleToggle();
              dispatch(toggleTodo(index));
            }}
          />
          <span className="slider round"></span>
        </label>
        Completed
        <button
          onClick={() => dispatch(removeTodo(index))}
          // className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
        >
          <AiFillDelete style={{ color: "red", fontSize: "30px" }} />
        </button>
        {/* {!todo.completed && (
          <button
            onClick={() => dispatch(markComplete(index))}
            className="'mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            button
          </button>
        )}
        {!todo.completed && (
          <button
            onClick={() => dispatch(markIncomplete(index))}
            className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            Not completed
          </button>
        )} */}
      </div>
    </li>
  );
}
export default TodoItem;
