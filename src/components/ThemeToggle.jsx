import { useState, useEffect } from "react";
import { faLightbulb as lightOn } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as lightOff } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = () => {
  const [themeToggle, setThemeToggle] = useState(lightOff);
  let currentTheme = document.querySelector("html").getAttribute("data-theme");

  useEffect(() => {
    currentTheme === "dark"
      ? setThemeToggle(lightOn)
      : setThemeToggle(lightOff);
  }, []);

  const handleToggle = (e) => {
    currentTheme = document.querySelector("html").getAttribute("data-theme");
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    currentTheme === "dark"
      ? setThemeToggle(lightOn)
      : setThemeToggle(lightOff);
    localStorage.setItem("theme", currentTheme);
    document.querySelector("html").setAttribute("data-theme", currentTheme);
  };

  return (
    <>
      <button
        onClick={(e) => handleToggle(e)}
        className="bg-antiflash-200 dark:bg-notblack-300 text-notblack-300 dark:text-antiflash-200 h-full aspect-square rounded-full"
      >
        <FontAwesomeIcon className="text-2xl inline" icon={themeToggle} />
      </button>
    </>
  );
};

export default ThemeToggle;
