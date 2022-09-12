import { useRef } from 'react';

interface NewTodoInputProps {
  onAdd(text: string): void;
}

export function NewTodoInput({ onAdd }: NewTodoInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (inputRef.current) {
        onAdd(inputRef.current.value);
      }
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      name="todo"
      className="bg-transparent dark:text-white flex-1 h-full outline-none caret-blue-500 placeholder:text-xs xl:placeholder:text-base xl:placeholder:translate-y-[.125rem] transition-colors duration-500"
      placeholder="Create a new todo..."
      aria-label="Create a new todo input"
      onKeyDown={keyDownHandler}
    />
  );
}
