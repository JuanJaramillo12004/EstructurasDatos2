import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`todo-item ${todo.done ? 'completed' : ''}`}>
          <span className="todo-text" onClick={() => onToggleTodo(todo.id)}>
            {todo.description}
          </span>
          <div className="todo-actions">
            <button onClick={() => onDeleteTodo(todo.id)}>Eliminar</button>
            <button className="toggle-button" onClick={() => onToggleTodo(todo.id)}>
              {todo.done ? 'Deshacer' : 'Completado'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;