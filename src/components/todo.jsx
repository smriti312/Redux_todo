import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButton from "./filterButton";
import TodoList from "./todoList";
function Todo() {
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };
  const handleSearch = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div className="max-w-4x1 h-screen mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2x1 font-bold text-center uppercase">
        PERSONAL TODO APP
      </h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTodoText}
          name="addTodoInput"
          id="addTodoInput"
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:bordeer-blue-500"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          Add
        </button>
      </div>
      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            name="addTodoInput"
            id="addTodoInput"
            placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            className="m1-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleAddTodoClick}
          >
            Search
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
}
export default Todo;
