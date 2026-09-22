import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Check, X } from 'lucide-react';

const STORAGE_KEY = 'nakama_cookies_accepted_until';
const TTL_DAYS = 365;

export function CookieBanner() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const acceptedUntil = Number(localStorage.getItem(STORAGE_KEY) || 0);
      if (!acceptedUntil || acceptedUntil < Date.now()) {
        // Small delay so it smoothly appears after page load
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access fallback
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      const expiresAt = Date.now() + TTL_DAYS * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, String(expiresAt));
    } catch {
      // Fallback
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Уведомление об использовании cookie"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-md animate-fade-in"
    >
      <div
        className={`relative p-5 sm:p-6 rounded-2xl border backdrop-blur-xl transition-colors duration-300 ${
          isDark
            ? 'bg-[#121018]/90 border-white/15 text-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.08)]'
            : 'bg-[#FAF8F5]/95 border-black/12 text-[#141218] shadow-[0_20px_48px_-14px_rgba(60,45,20,0.28),inset_0_1px_0_0_rgba(255,255,255,0.9)]'
        }`}
      >
        {/* Viewfinder corner crop marks */}
        <span
          aria-hidden="true"
          className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#8CA069]/60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#A66CD9]/60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#A66CD9]/60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#8CA069]/60 pointer-events-none"
        />

        {/* Top metadata row with film cues */}
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-current/10">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#8CA069] animate-pulse"
              aria-hidden="true"
            />
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">
              Privacy · Cookies
            </span>
          </div>

          <button
            type="button"
            onClick={handleDecline}
            aria-label="Закрыть уведомление"
            className="p-1 rounded-md opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Content */}
        <div className="pt-3.5 space-y-2">
          <div className="flex items-start gap-2.5">
            <div>
              <h4 className="font-serif text-base font-normal tracking-tight">
                Мы используем файлы cookie
              </h4>
              <p
                className={`text-xs font-sans font-light leading-relaxed mt-1 ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4652]'
                }`}
              >
                Мы используем cookie и Яндекс.Метрику, чтобы сайт работал лучше. Оставаясь здесь, вы
                соглашаетесь с{' '}
                <Link
                  to="/privacy"
                  className={`underline underline-offset-2 hover:no-underline ${
                    isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                  }`}
                >
                  политикой конфиденциальности
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={handleAccept}
            className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 ${
              isDark
                ? 'bg-gradient-to-r from-[#A66CD9] to-[#8CA069] text-black hover:brightness-110'
                : 'bg-[#141218] hover:bg-[#6E389B] text-white'
            }`}
          >
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Хорошо</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
