import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },

})

const todoModel = mongoose.models.todo || mongoose.model("todo",todoSchema)

export default todoModel;