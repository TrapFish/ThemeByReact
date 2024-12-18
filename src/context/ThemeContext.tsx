import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () => {
    let updateTheme = theme === "light" ? "dark" : "light";
    setTheme(updateTheme);
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, handleThemeChange }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
