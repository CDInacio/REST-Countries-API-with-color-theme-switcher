import { useContext, useState } from "react";
import { BsMoon, BsSunFill } from "react-icons/bs";

import { ThemeContext } from "../context/themeContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className=" bg-dark-blue dark:bg-white duration-300 drop-shadow-md">
      <div className="container py-5 px-6 mx-auto flex justify-between">
        <span className="font-bold text-white text-lg dark:text-very-dark-blue2">
          Where in the world
        </span>
        <div className="flex items-center text-white dark:text-very-dark-blue2">
          <span className="cursor-pointer">
            {theme === "dark" ? (
              <BsMoon onClick={() => setTheme("light")} size={15} />
            ) : (
              <BsSunFill onClick={() => setTheme("dark")} size={20} />
            )}
          </span>
          <p className="ml-1">Dark mode</p>
        </div>
      </div>
    </nav>
  );
}
