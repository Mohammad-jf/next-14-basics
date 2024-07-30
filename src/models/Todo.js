import mongoose from "mongoose";
import { models } from "mongoose";
const todoSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const Todo = models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
