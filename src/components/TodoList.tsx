import { useState } from 'react';
import { Todo, useTodoContext } from 'contexts/TodoContext';
import { TodoFilterType } from 'types/TodoFilterType';
import { TodoItem } from './TodoItem';
import { TodoListFooter } from './TodoListFooter';
import { clearCompleted } from 'contexts/TodoAction';

export function TodoList() {
  const [clearCompleteAnimate, setClearCompleteAnimate] =
    useState<boolean>(false);
  const [filter, setFilter] = useState<TodoFilterType>('all');
  const { todos, dispatch } = useTodoContext();

  const clearCompletedTodoHandler = async () => {
    setClearCompleteAnimate(true);
    setTimeout(() => {
      dispatch(clearCompleted());
      setClearCompleteAnimate(false);
    }, 500);
  };

  const mappedTodos = Array<
    Todo & { display: boolean; todoIndexGroupByFilter: number }
  >();

  let totalActiveTodo = 0;
  let totalCompletedTodo = 0;
  for (const todo of todos) {
    const extendedTodo = { ...todo } as Todo & {
      display: boolean;
      todoIndexGroupByFilter: number;
    };

    if (todo.complete) {
      extendedTodo.todoIndexGroupByFilter = totalCompletedTodo;
      totalCompletedTodo++;
    } else {
      extendedTodo.todoIndexGroupByFilter = totalActiveTodo;
      totalActiveTodo++;
    }

    extendedTodo.display =
      filter === 'all'
        ? true
        : filter === 'active'
        ? !todo.complete
        : todo.complete;

    mappedTodos.push(extendedTodo);
  }

  return (
    <div className="bg-white dark:bg-[#25273C] mt-4 xl:mt-6 divide-y dark:divide-[#494C6B] rounded-md shadow-md">
      {mappedTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todoIndexGroupByFilter={todo.todoIndexGroupByFilter}
            todo={todo}
            clearCompleteAnimate={clearCompleteAnimate}
          />
        );
      })}
      <TodoListFooter
        totalActiveTodo={totalActiveTodo}
        filter={filter}
        setFilter={setFilter}
        clearCompletedTodoHandler={clearCompletedTodoHandler}
      />
    </div>
  );
}
