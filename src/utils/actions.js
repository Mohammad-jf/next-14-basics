"use server";
import Todo from "@/models/Todo";
import connectDB from "@/utils/connectDB";
import { revalidatePath } from "next/cache";

export const addHandler = async (formData) => {
  await connectDB();
  const title = formData.get("title");
  const description = formData.get("description");
  const todo = await Todo.create({ title, description });
  revalidatePath("/");
};
