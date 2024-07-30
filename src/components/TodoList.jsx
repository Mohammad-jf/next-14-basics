import Todo from "@/models/Todo";
import connectDB from "@/utils/connectDB";

const TodoList = async () => {
  await connectDB();
  const todos = await Todo.find();
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
