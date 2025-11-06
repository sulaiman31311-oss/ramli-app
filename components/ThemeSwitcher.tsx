import React, { useState, useRef, useEffect } from 'react';
import { Theme, THEMES } from '../themes';

interface ThemeSwitcherProps {
  onThemeChange: (theme: Theme) => void;
  currentThemeName: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onThemeChange, currentThemeName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  
  const handleThemeSelect = (theme: Theme) => {
    onThemeChange(theme);
    setIsOpen(false);
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:[background-color:var(--color-surface)] transition-colors"
        aria-label="Change theme"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 [fill:var(--color-text-secondary)]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 3a1 1 0 011 1v1.168a1 1 0 01-.293.707l-6.414 6.414a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l6.414-6.414A1 1 0 0110 3z" />
          <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l6.414 6.414a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0L10 8.414l-4.293 4.293a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l6.414-6.414A1 1 0 0110 3zm-6.085 7.415a1 1 0 011.414 0L10 15.086l4.672-4.671a1 1 0 111.414 1.414l-5.379 5.379a1 1 0 01-1.414 0l-5.379-5.379a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 [background-color:var(--color-surface)] border [border-color:var(--color-border)] rounded-lg shadow-2xl p-2 z-50">
          <div className="grid grid-cols-5 gap-2">
            {THEMES.map((theme) => (
              <div key={theme.name} className="flex flex-col items-center">
                <button
                  onClick={() => handleThemeSelect(theme)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    currentThemeName === theme.name ? '[border-color:var(--color-accent)]' : '[border-color:var(--color-border)]'
                  } hover:[border-color:var(--color-accent)]`}
                  style={{ backgroundColor: theme.colors['--color-accent'] }}
                  aria-label={`Select ${theme.name} theme`}
                >
                   {currentThemeName === theme.name && (
                     <div className="w-3 h-3 rounded-full [background-color:var(--color-accent-text)] mx-auto"></div>
                   )}
                </button>
                <span className="text-xs mt-1 [color:var(--color-text-secondary)]">{theme.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
