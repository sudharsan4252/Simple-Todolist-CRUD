import React, { useState, useContext } from "react";
import axios from "axios";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { setTodos } = useContext(TodoContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/todos", { text });
      const response = await axios.get("http://localhost:4000/api/todos");
      setTodos(response.data); // Update the todos state after adding a new todo
      setText("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
