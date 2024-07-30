"use client";
import { addHandler } from "@/utils/actions";


const ClientTodoForm = () => {
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

export default ClientTodoForm;
