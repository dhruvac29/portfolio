import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <>
      <nav className="sticky-nav flex justify-between items-center content-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-0 dark:bg-opacity-0">
        <div className="tracking-tighter animate-move-bg bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 bg-[length:400%] bg-clip-text text-xl sm:text-3xl font-black text-transparent">
          <a href="#">DC</a>
        </div>

        <div className="text-base sm:text-xl justify-content-center content-center items-center">
          <a
            className="p-1 sm:p-4 text-gray-900 dark:text-gray-100"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="p-1 sm:p-4 text-gray-900 dark:text-gray-100"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="p-1 sm:p-4 text-gray-900 dark:text-gray-100"
            href="#contact"
          >
            Contact
          </a>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-3 h-10 w-10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-4 w-4 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
