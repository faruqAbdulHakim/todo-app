import IconCross from 'assets/svgs/icon-cross.svg';

interface TodoRemoveButtonProps {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export function TodoRemoveButton({ onClick }: TodoRemoveButtonProps) {
  return (
    <button
      type="button"
      title="Click to remove todo from list"
      className="xl:opacity-0 xl:group-hover:opacity-100"
      onClick={onClick}
    >
      <img src={IconCross} alt="" aria-hidden="true" className="w-3 xl:w-4" />
    </button>
  );
}
