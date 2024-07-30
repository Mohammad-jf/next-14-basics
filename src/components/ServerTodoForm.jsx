import Todo from "@/models/Todo";
import connectDB from "@/utils/connectDB";

const ServerTodoForm = () => {
  const addHandler = async (formData) => {
    "use server";
    await connectDB();
    const title = formData.get("title");
    const description = formData.get("description");
    const todo = await Todo.create({ title, description });
    console.log(todo);
  };

  return (
    <form action={addHandler}>
      <div>
        <label htmlFor="title">Title </label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <input type="text" id="desc" name="description" />
      </div>
      <button type="submit">Add Todo </button>
    </form>
  );
};

export default ServerTodoForm;
