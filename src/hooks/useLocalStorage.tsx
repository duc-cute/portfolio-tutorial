/** @format */

import { useEffect, useState } from "react";

interface IDarkMode {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function useLocalStorage(): IDarkMode {
  const currentMode = JSON.parse(localStorage.getItem("data-mode") || "false");
  const [darkMode, setDarkMode] = useState<boolean>(currentMode);

  useEffect(() => {
    localStorage.setItem("data-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return { darkMode, setDarkMode };
}
