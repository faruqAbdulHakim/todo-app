import { useRef } from 'react';
import { gsap } from 'gsap';
import { changeTodoCompleteStatus, deleteTodo } from 'contexts/TodoAction';
import { Todo, useTodoContext } from 'contexts/TodoContext';
import { CheckButton } from './CheckButton';
import { TodoRemoveButton } from './TodoRemoveButton';
import { TodoText } from './TodoText';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useTodoContext();

  const checkHandler = () => {
    dispatch(changeTodoCompleteStatus(todo.id, !todo.complete));
  };

  const removeTodoHandler = async () => {
    await gsap.to(itemRef.current, {
      opacity: 0,
      scale: 0.9,
      x: '10%',
      duration: 0.4,
    });
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div
      ref={itemRef}
      className="px-5 xl:px-6 flex h-[3.25rem] xl:h-16 items-center group"
    >
      <CheckButton checked={todo.complete} onClick={checkHandler} />
      <TodoText text={todo.todo} completed={todo.complete} />
      <TodoRemoveButton onClick={removeTodoHandler} />
    </div>
  );
}
