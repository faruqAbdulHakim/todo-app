import { addTodo } from 'contexts/TodoAction';
import { useTodoContext } from 'contexts/TodoContext';
import { useRef, useState } from 'react';
import { CheckButton } from './CheckButton';
import { CheckButtonContainer } from './CheckButtonContainer';
import { NewTodoInput } from './NewTodoInput';

export function NewTodoForm() {
  const [checked, setChecked] = useState<boolean>(false);
  const { dispatch } = useTodoContext();
  const checkButtonRef = useRef<HTMLButtonElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const checkHandler = () => {
    setChecked((previousValue: boolean) => !previousValue);
  };

  const onAdd = (text: string) => {
    const todo = { id: Date.now(), todo: text.trim(), complete: checked };
    dispatch(addTodo(todo));
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center bg-white dark:bg-[#25273C] mt-8 xl:mt-10 h-12 xl:h-16 rounded-md overflow-hidden"
    >
      <CheckButtonContainer>
        <CheckButton
          ref={checkButtonRef}
          checked={checked}
          onClick={checkHandler}
        />
      </CheckButtonContainer>
      <NewTodoInput onAdd={onAdd} />
    </form>
  );
}
