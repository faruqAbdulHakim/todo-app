import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import {
  changeTodoCompleteStatus,
  deleteTodo,
  moveTodo,
  setDraggedTodo,
} from 'contexts/TodoAction';
import { Todo, useTodoContext } from 'contexts/TodoContext';
import { CheckButton } from './CheckButton';
import { TodoRemoveButton } from './TodoRemoveButton';
import { TodoText } from './TodoText';

interface TodoItemProps {
  todo: Todo & { display: boolean };
  todoIndexGroupByFilter: number;
  clearCompleteAnimate: boolean;
}

export function TodoItem({
  todo,
  todoIndexGroupByFilter,
  clearCompleteAnimate,
}: TodoItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { draggedTodo, dispatch } = useTodoContext();

  const checkHandler = () => {
    dispatch(changeTodoCompleteStatus(todo.id, !todo.complete));
  };

  useEffect(() => {
    const animate = async () => {
      const delay =
        todoIndexGroupByFilter * 0.25 > 1 ? 1 : todoIndexGroupByFilter * 0.25;
      if (todo.display) {
        itemRef.current!.style.display = 'flex';
        await gsap.to(itemRef.current, {
          maxHeight: `100px`,
          duration: 0.5,
          delay: delay,
        });
      } else {
        await gsap.to(itemRef.current, {
          maxHeight: '0px',
          duration: 0.5,
          delay: delay,
        });
        itemRef.current!.style.display = 'none';
      }
    };
    animate();
  }, [todoIndexGroupByFilter, todo.display]);

  useEffect(() => {
    if (clearCompleteAnimate && todo.complete) {
      gsap.to(itemRef.current, {
        maxHeight: '0px',
        duration: 0.5,
      });
    }
  }, [clearCompleteAnimate, todo.complete]);

  const removeTodoHandler = async () => {
    await gsap.to(itemRef.current, {
      maxHeight: '0px',
      duration: 0.5,
    });
    dispatch(deleteTodo(todo.id));
  };

  const dragStartHandler = () => {
    dispatch(setDraggedTodo(todo.id));
    itemRef.current!.style.position = 'relative';
  };

  const dragEndHandler = () => {
    dispatch(setDraggedTodo(null));
    itemRef.current!.style.removeProperty('position');
  };

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (draggedTodo.id) {
      dispatch(moveTodo(draggedTodo.id, todo.id));
    }
  };

  return (
    <div
      ref={itemRef}
      className="px-5 xl:px-6 flex h-[3.25rem] max-h-24 xl:h-16 items-center overflow-hidden group"
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragOver={dragOverHandler}
      draggable
    >
      <CheckButton checked={todo.complete} onClick={checkHandler} />
      <TodoText text={todo.todo} completed={todo.complete} />
      <TodoRemoveButton onClick={removeTodoHandler} />
    </div>
  );
}
