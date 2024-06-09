
import express from "express"
import { createList, deleteList, showList, updateList } from "../Controller/todoController.js";

const TodoRoutes = express.Router()


// Get all todos
TodoRoutes.get('/', showList);

// Create a new todo
TodoRoutes.post('/', createList);

// Update a todo
TodoRoutes.patch('/:id', updateList);

// Delete a todo
TodoRoutes.delete('/:id', deleteList);


export default TodoRoutes