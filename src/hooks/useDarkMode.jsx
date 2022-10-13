import { useEffect, useState } from 'react';

function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(() => localStorage.theme === 'dark');
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const htmlElement = window.document.documentElement;
    const prev = isDarkMode ? 'light' : 'dark';
    htmlElement.classList.remove(prev);
    const next = isDarkMode ? 'dark' : 'light';
    htmlElement.classList.add(next);
    localStorage.setItem('theme', next);
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
