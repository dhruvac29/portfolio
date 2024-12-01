import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="tracking-tighter text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 hover:opacity-80 transition-opacity">
                DC
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className={`text-sm font-medium ${isActive('/') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'} hover:text-purple-600 dark:hover:text-purple-400 transition-colors`}>
                Home
              </span>
            </Link>
            <Link href="/skills">
              <span className={`text-sm font-medium ${isActive('/skills') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'} hover:text-purple-600 dark:hover:text-purple-400 transition-colors`}>
                Skills
              </span>
            </Link>
            <Link href="/experience">
              <span className={`text-sm font-medium ${isActive('/experience') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'} hover:text-purple-600 dark:hover:text-purple-400 transition-colors`}>
                Experience
              </span>
            </Link>
            <Link href="/projects">
              <span className={`text-sm font-medium ${isActive('/projects') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'} hover:text-purple-600 dark:hover:text-purple-400 transition-colors`}>
                Projects
              </span>
            </Link>
            <Link href="/contact">
              <span className={`text-sm font-medium ${isActive('/contact') ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'} hover:text-purple-600 dark:hover:text-purple-400 transition-colors`}>
                Contact
              </span>
            </Link>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-8 h-8 p-1 rounded-lg flex items-center justify-center bg-gray-200 dark:bg-gray-800 hover:ring-2 ring-gray-300 transition-all"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-800 dark:text-gray-200"
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
          <Link href="/">
            <span className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-purple-600 dark:text-purple-400 bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200'} hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}>
              Home
            </span>
          </Link>
          <Link href="/skills">
            <span className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/skills') ? 'text-purple-600 dark:text-purple-400 bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200'} hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}>
              Skills
            </span>
          </Link>
          <Link href="/experience">
            <span className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/experience') ? 'text-purple-600 dark:text-purple-400 bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200'} hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}>
              Experience
            </span>
          </Link>
          <Link href="/projects">
            <span className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projects') ? 'text-purple-600 dark:text-purple-400 bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200'} hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}>
              Projects
            </span>
          </Link>
          <Link href="/contact">
            <span className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-purple-600 dark:text-purple-400 bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200'} hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}>
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
