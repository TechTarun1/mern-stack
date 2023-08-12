import mongoose, { Schema } from "mongoose";

const todoSchema: Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});
const Todo = mongoose.model('Todo', todoSchema);

export default Todo;