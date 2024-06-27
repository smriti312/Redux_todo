import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Todo from "./components/todo";

function App() {
  console.log("Hello");
  return (
    <Provider store={store}>
      <div>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
