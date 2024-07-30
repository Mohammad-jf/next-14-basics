"use client";
import Button from "@/ui/Button";
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
      <Button />
    </form>
  );
};

export default ClientTodoForm;
