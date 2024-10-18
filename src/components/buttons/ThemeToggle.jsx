import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  let currentTheme = document.querySelector("html").getAttribute("data-theme");

  useEffect(() => {
    setDarkMode(currentTheme === "dark" ? true: false);
  }, []);

  const handleToggle = (e) => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    setDarkMode(currentTheme === "dark" ? true: false);
    localStorage.setItem("theme", currentTheme);
    document.querySelector("html").setAttribute("data-theme", currentTheme);
  };

  return (
    <>
      <button
        onClick={(e) => handleToggle(e)}
        className="bg-antiflash-200 dark:bg-notblack-300 text-notblack-300 dark:text-antiflash-200 h-full aspect-square rounded-full hover:animate-wiggle flex justify-center items-center"
      >
        {darkMode && <SunIcon className="size-6" />}
        {!darkMode && <MoonIcon className="size-6" />}
      </button>
    </>
  );
};

export default ThemeToggle;
