import { changeTodoCompleteStatus } from 'contexts/TodoAction';
import { Todo, useTodoContext } from 'contexts/TodoContext';
import { CheckButton } from './CheckButton';
import { CheckButtonContainer } from './CheckButtonContainer';
import { TodoText } from './TodoText';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { dispatch } = useTodoContext();

  const checkHandler = () => {
    dispatch(changeTodoCompleteStatus(todo.id, !todo.complete));
  };

  return (
    <div className="flex h-[3.25rem] xl:h-16 items-center">
      <CheckButtonContainer>
        <CheckButton checked={todo.complete} onClick={checkHandler} />
      </CheckButtonContainer>
      <TodoText text={todo.todo} />
    </div>
  );
}
