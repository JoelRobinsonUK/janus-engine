import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const HeaderBar = () => {
  const { pathname } = useLocation();
  const [source, setSource] = useState("/sounds/storyAmbient.mp3");

  // useEffect(() => {
  //   console.log("change audio");
  //   switch (pathname) {
  //     case "/":
  //     case "/end/good":
  //     case "/end/bad":
  //       setSource("/sounds/bookendTheme.wav");
  //       break;
  //     case "/gate":
  //       setSource("/sounds/storyAmbient.mp3");
  //   }
  // }, [pathname]);

  return (
    <header className="bg-teal-300 text-antiflash-200 px-2 py-4 font-bold font-heading flex items-center gap-2">
      <Link to={"/"} className="grow flex">
        <h1 className="text-3xl">The Janus Engine</h1>
      </Link>
      <audio
        className="rounded-full"
        src={source}
        controls
        autoPlay
        loop
      ></audio>
      <ThemeToggle />
    </header>
  );
};

export default HeaderBar;
