import { useTodoContext } from 'contexts/TodoContext';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { todos } = useTodoContext();

  return (
    <div className="bg-white dark:bg-[#25273C] mt-4 xl:mt-6 divide-y dark:divide-[#494C6B] rounded-md shadow-md overflow-hidden">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
