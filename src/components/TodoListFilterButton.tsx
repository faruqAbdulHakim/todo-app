interface TodoListFilterButtonProps {
  text: string;
  title: string;
  active: boolean;
  onClick(): void;
}

export function TodoListFilterButton({
  text,
  title,
  active,
  onClick,
}: TodoListFilterButtonProps) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`text-sm font-bold transition-all ${
        active
          ? 'text-blue-500'
          : 'text-[#494C6B] hover:text-black dark:hover:text-white'
      }`}
    >
      {text}
    </button>
  );
}
