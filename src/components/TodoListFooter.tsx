import { TodoListFilter } from './TodoListFilter';

interface TodoListFooterProps {
  totalActiveTodo: number;
  filter: 'all' | 'active' | 'completed';
  setFilter: React.Dispatch<
    React.SetStateAction<'all' | 'active' | 'completed'>
  >;
  clearCompletedTodoHandler(): void;
}

export function TodoListFooter({
  totalActiveTodo,
  filter,
  setFilter,
  clearCompletedTodoHandler,
}: TodoListFooterProps) {
  return (
    <div className="px-5 xl:px-6 h-[3.3rem] pt-2 flex items-center justify-between relative">
      <p className="text-sm text-[#494C6B]">{totalActiveTodo} items left</p>
      <TodoListFilter filter={filter} setFilter={setFilter} />
      <button
        type="button"
        className="text-sm text-[#494C6B] hover:text-black dark:hover:text-white transition-all"
        onClick={clearCompletedTodoHandler}
      >
        Clear Completed
      </button>
    </div>
  );
}
