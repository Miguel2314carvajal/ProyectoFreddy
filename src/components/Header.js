import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SearchModal from './SearchModal';

function Header() {
  const { darkMode, setDarkMode } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <SearchModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
      
      <nav className="sticky top-0 z-40 w-full flex items-center bg-white/80 dark:bg-[#18191B] backdrop-blur-lg border-b border-transparent dark:border-transparent">
        <div className="flex items-center justify-between w-full h-16">
          {/* Logo + Version - Removido el padding izquierdo */}
          <div className="flex items-center gap-2 pl-2" style={{ minWidth: '200px' }}>
            <Link to="/" className="flex items-center">
              <img 
                src="/Logo.png" 
                alt="React" 
                className="h-6 w-auto"
              />
              <span className="ml-2 text-lg font-medium text-slate-600 dark:text-slate-400">PDP</span>
            </Link>
          </div>

          {/* Espaciador personalizado */}
          <div className="w-96"></div>

          {/* Search Bar */}
          <div className="flex-1 max-w-6xl">
            <div className="relative w-[800px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-700 rounded-full bg-slate-100/70 dark:bg-[#3c414b] text-sm placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500 dark:focus:ring-sky-400"
                placeholder="Search"
                onClick={() => setIsSearchOpen(true)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 rounded">Ctrl</kbd>
                  <kbd className="px-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 rounded">K</kbd>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8 ml-32 pr-4">
            <div className="hidden md:flex items-center gap-8">
              <Link to="/learn" className="text-[15px] font-medium text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400">Learn</Link>
              <Link to="/pricing" className="text-[15px] font-medium text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400">Pricing</Link>
              <Link to="/community" className="text-[15px] font-medium text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400">Community</Link>
              <Link to="/blog" className="text-[15px] font-medium text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400">Blog</Link>
            </div>
            
            {/* Theme Toggle Button */}
            <button
              type="button"
              className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a
              href="https://github.com/facebook/react"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
              </svg>
            </a>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
