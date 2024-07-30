const { default: mongoose } = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const Todo = mongoose.models("Todo") || mongoose.model("Todo", todoSchema);

export default Todo;
