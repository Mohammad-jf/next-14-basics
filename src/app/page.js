import ServerTodoForm from "@/components/ServerTodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main>
      <ServerTodoForm />
      <TodoList />
    </main>
  );
}
