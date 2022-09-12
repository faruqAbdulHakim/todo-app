import { useEffect, useRef } from 'react';

import { useThemeContext } from 'contexts/ThemeContext';
import IconMoon from 'assets/svgs/icon-moon.svg';
import IconSun from 'assets/svgs/icon-sun.svg';
import { gsap } from 'gsap';

export function ThemeTogglerButton() {
  const { theme, setTheme } = useThemeContext();
  const iconMoonRef = useRef<HTMLImageElement>(null);
  const iconSunRef = useRef<HTMLImageElement>(null);

  const buttonClickHandler = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      gsap.to(iconMoonRef.current, { scale: 0, duration: 0.5 });
      gsap.to(iconSunRef.current, { scale: 1, duration: 0.5 });
    } else {
      gsap.to(iconMoonRef.current, { scale: 1, duration: 0.5 });
      gsap.to(iconSunRef.current, { scale: 0, duration: 0.5 });
    }
  }, [theme]);

  return (
    <button
      type="button"
      onClick={buttonClickHandler}
      className="w-5 h-5 xl:w-[1.6rem] xl:h-[1.6rem] relative"
    >
      <img
        ref={iconMoonRef}
        src={IconMoon}
        alt=""
        className="scale-0 w-full absolute top-1 right-0"
      />
      <img
        ref={iconSunRef}
        src={IconSun}
        alt=""
        className="scale-0 w-full absolute top-1 right-0"
      />
    </button>
  );
}
