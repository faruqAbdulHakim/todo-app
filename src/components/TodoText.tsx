interface TodoTextProps {
  text: string;
}

export function TodoText({ text }: TodoTextProps) {
  return (
    <p className="text-xs xl:text-[1.075rem] dark:text-white translate-y-[0.125rem] translate-x-[-0.25rem]">
      {text}
    </p>
  );
}
