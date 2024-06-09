import React, { useContext } from "react";
import axios from "axios";
import { TodoContext } from "../contexts/TodoContext";

const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/todos/${todo._id}`);
      const response = await axios.get("http://localhost:4000/api/todos");
      setTodos(response.data); // Update the todos state after deletion
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="todo">
      <p>{todo.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
