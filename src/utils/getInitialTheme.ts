export function getInitialTheme(): string {
  const theme = localStorage.getItem('theme');
  if (theme !== null) {
    return theme;
  }

  const userMedia = matchMedia('(prefers-color-scheme: dark)');
  if (userMedia.matches) {
    localStorage.setItem('theme', 'dark');
    return 'dark';
  }

  localStorage.setItem('theme', 'light');
  return 'light';
}
