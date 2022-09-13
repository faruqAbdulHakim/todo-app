import { TodoListFilterButton } from './TodoListFilterButton';

interface TodoListFilterProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: React.Dispatch<
    React.SetStateAction<'all' | 'active' | 'completed'>
  >;
}

export function TodoListFilter({ filter, setFilter }: TodoListFilterProps) {
  return (
    <div className="absolute bottom-0 left-0 translate-y-16 h-10 rounded-md bg-white  dark:bg-[#25273C] shadow-md w-full xl:static xl:translate-y-0 xl:shadow-none xl:w-max xl:bg-transparent xl:dark:bg-transparent flex justify-center gap-5 xl:translate-x-4">
      <TodoListFilterButton
        text="All"
        title="Show all todos"
        active={filter === 'all'}
        onClick={() => {
          setFilter('all');
        }}
      />
      <TodoListFilterButton
        text="Active"
        title="Show active todos"
        active={filter === 'active'}
        onClick={() => {
          setFilter('active');
        }}
      />

      <TodoListFilterButton
        text="Completed"
        title="Show completed todos"
        active={filter === 'completed'}
        onClick={() => {
          setFilter('completed');
        }}
      />
    </div>
  );
}
