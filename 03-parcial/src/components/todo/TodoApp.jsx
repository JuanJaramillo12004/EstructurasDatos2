import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../../slice/todoSlice";
import { TodoList, TodoAdd } from "../index";
import "../../assets/css/TodoApp.css";
import ImagePokemon from "../../assets/todo.png";

export const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleNewTodo = (newTodo) => {
    dispatch(addTodo(newTodo));
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleToggleTodo = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <div className="todo-app">
      <img src={ImagePokemon} height="50px" width="50px"></img>
      <h1 className="title-text-todo">To-Do</h1>
      <div className="todo-count">
        <small> Pendientes: {todos.filter((todo) => !todo.done).length} </small>{" "}
        <br />
        <small> Completadas: {todos.filter((todo) => todo.done).length} </small>{" "}
      </div>

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4> Agregar TODO </h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
