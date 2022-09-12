import { HeadingText } from './HeadingText';
import { ThemeTogglerButton } from './ThemeTogglerButton';

export function Header() {
  return (
    <div className="flex justify-between">
      <HeadingText text="Todo" />
      <ThemeTogglerButton />
    </div>
  );
}
