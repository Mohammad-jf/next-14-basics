"use client";
import Button from "@/ui/Button";
import { addHandler } from "@/utils/actions";
import { useRef } from "react";

const ClientTodoForm = () => {
  const ref = useRef();
  return (
    <form
      ref={ref}
      action={async (formData) => {
        await addHandler(formData);
        ref.current.reset();
      }}
    >
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
