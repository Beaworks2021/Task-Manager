import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  //const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
          <Form
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            setEditTodo={setEditTodo}
            editTodo={editTodo}
          />
          <TodoList todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
