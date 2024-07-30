import ClientTodoForm from "@/components/ClientTodoForm";
import ServerTodoForm from "@/components/ServerTodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main>
      <ClientTodoForm/>
      {/* <ServerTodoForm /> */}
      <TodoList />
    </main>
  );
}
