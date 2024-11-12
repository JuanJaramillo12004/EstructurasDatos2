import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "../utils/todosSlice";
import "../App.css";

function TodoApp() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text)); 
      setText("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id, completed) => {
    dispatch(updateTodo({ id, completed }));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button className="add-btn" onClick={handleAddTodo}>
          Añadir
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id, !todo.completed)}
            />
            <span>{todo.text}</span>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
