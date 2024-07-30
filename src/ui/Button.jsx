"use client";
import { useFormStatus } from "react-dom";

const Button = () => {
  const status = useFormStatus();
  console.log(status);

  return (
    <>
      {status.pending ? (
        <h3>Loading...</h3>
      ) : (
        <button type="submit">Add Todo </button>
      )}
    </>
  );
};

export default Button;
