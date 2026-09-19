import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  forceDark?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
  forceDark = false,
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  // If forceDark is true (e.g. over hero image), render dark-styled button with high contrast
  const effectiveDark = forceDark || isDark;

  return (
    <button
      type="button"
      id="theme-mode-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
      title={isDark ? 'Светлая тема' : 'Тёмная тема'}
      className={`inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer select-none ${
        effectiveDark
          ? 'bg-white/10 hover:bg-white/20 text-neutral-200 border border-white/20 hover:border-[#D49D42]/50'
          : 'bg-black/5 hover:bg-black/10 text-[#141218] border border-black/15 hover:border-[#B88228]/50'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#D49D42] animate-spin-slow" />
        ) : (
          <Moon className={`w-4 h-4 ${effectiveDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`} />
        )}
      </div>

      {showLabel && (
        <span className={`text-[10px] uppercase tracking-wider ${effectiveDark ? 'keep-white text-white' : ''}`}>
          {isDark ? 'Светлая тема' : 'Тёмная тема'}
        </span>
      )}
    </button>
  );
};
