import { createContext, useContext, useState, useEffect } from 'react';
import { getInitialTheme } from 'utils/getInitialTheme';

interface ThemeContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<string>(getInitialTheme());

  useEffect(() => {
    const html = document.documentElement;
    html.removeAttribute('class');
    if (theme === 'dark') {
      html.classList.add(theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
