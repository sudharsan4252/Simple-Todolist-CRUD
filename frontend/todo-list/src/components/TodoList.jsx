import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
