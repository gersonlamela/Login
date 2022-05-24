import { Moon, Sun } from "phosphor-react";

import { useTheme } from "../hooks/useTheme/useTheme";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full h-[85px] shadow dark:shadow-none px-10 flex items-center flex-1 justify-between  font-semibold text-xl text-dark dark:text-light">
      <p>Your Logo</p>

      <div className="darkmode">
        {/* DarkMode */}
        {theme === "dark" ? (
          <Sun
            size={25}
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
            className="cursor-pointer ml-auto text-light"
          />
        ) : (
          <Moon
            size={25}
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
            className="cursor-pointer ml-auto text-dark"
          />
        )}
      </div>
    </div>
  );
}
