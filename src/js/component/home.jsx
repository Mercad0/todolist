import React, { useState } from "react";
import { FaCarrot } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="text-center">
      <div className="todoListBox">
        <header>
          <h1> To Do List</h1>
        </header>
        <Form
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
        />
        <div className="todoAI">
          <TodoList setTodos={setTodos} todos={todos} />
        </div>
      </div>
    </div>
  );
};

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const todoHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <form>
      <input
        onChange={todoHandler}
        value={inputText}
        type="text"
        className="todoInput"
      />
      <button onClick={submitHandler} className="addButton" type="submit">
        <span>
          <FaFingerprint />
        </span>
      </button>
    </form>
  );
};

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todoBox">
      <ul className="todoUl">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            id={todo.id}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };
  return (
    <div className="todo-List">
      <li clasname="todo-item">{text}</li>
      <button onClick={deleteTodo} className="remove-btn">
        <FaCarrot />{" "}
      </button>
    </div>
  );
};

export default Home;
