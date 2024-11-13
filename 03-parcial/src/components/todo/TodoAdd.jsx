import { useState } from "react";

const TodoAdd = ({ onNewTodo }) => {
  const [description, setDescription] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length === 0) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    setDescription("");
  };

  return (
    <form onSubmit={onFormSubmit} className="todo-add-form">
      <input
        type="text"
        placeholder="Tarea"
        className="form-control todo-add-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-1 todo-add-button">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;