import React, { createContext, useState, useContext } from 'react';

interface ThemeContextProps {
  theme: string;
    toggleTheme: () => void;
    children: string | JSX.Element | JSX.Element[];
}

    const ThemeContext = createContext();
    
    export const ThemeProvider:React.FC<ThemeContextProps> = ({ children }) => {
      const [theme, setTheme] = useState('light');
    
      const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
        document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
      };
    
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };
    
    export const useTheme = () => useContext(ThemeContext);