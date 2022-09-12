import { useTodoContext } from 'contexts/TodoContext';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { todos } = useTodoContext();

  return (
    <div className="bg-white dark:bg-[#25273C] mt-4 xl:mt-6 divide-y dark:divide-gray-700 rounded-md shadow-md">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
