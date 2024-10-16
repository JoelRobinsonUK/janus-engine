import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const HeaderBar = () => {
  const { pathname } = useLocation();

  return (
    <header className="bg-teal-300 text-antiflash-200 px-3 py-4 font-bold font-heading flex items-center gap-2">
      <Link to={"/"} className="grow flex">
        <h1 className="text-4xl">The Janus Engine</h1>
      </Link>
      <ThemeToggle />
    </header>
  );
};

export default HeaderBar;
