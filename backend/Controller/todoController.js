import todoModel from "../Model/TodoModel.js";

const createList = async (req, res) => {
  const todo = new todoModel({
    text: req.body.text,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const showList = async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({success:true, message: error.message });
  }
}

const updateList = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    todo.isCompleted = req.body.isCompleted !== undefined ? req.body.isCompleted : todo.isCompleted;
    todo.text = req.body.text !== undefined ? req.body.text : todo.text;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const deleteList = async (req, res) => {
 try {
    const todo = await todoModel.findByIdAndDelete(req.params.id); // Delete the todo by ID
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export { createList, showList, updateList, deleteList };
