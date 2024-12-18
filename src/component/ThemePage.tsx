import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemePage({}) {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const toggleThemeChange = () => {
    handleThemeChange();
  };

  return (
    <>
      <h2>Theme Chnage {theme}</h2>
      <button onClick={toggleThemeChange}>Change Theme</button>
    </>
  );
}
