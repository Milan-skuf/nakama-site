import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Disc3, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`pt-14 pb-10 font-mono border-t relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? 'bg-[#070709] text-white border-white/10'
          : 'bg-[#EFEAE0] text-[#141218] border-black/10'
      }`}
    >
      {/* Background glow */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 blur-3xl pointer-events-none rounded-full ${
          isDark ? 'bg-[#D49D42]/10' : 'bg-[#B88228]/15'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Top / Mid Row */}
        <div
          className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          {/* Logo Badge */}
          <Link
            to="/"
            className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all shadow-lg group ${
              isDark
                ? 'bg-white/[0.06] border-white/15 hover:border-[#D49D42]/50'
                : 'bg-white/80 border-black/10 hover:border-[#B88228]/50'
            }`}
          >
            <Disc3
              className={`w-5 h-5 animate-spin-slow transition-colors ${
                isDark ? 'text-[#D49D42] group-hover:text-white' : 'text-[#B88228] group-hover:text-black'
              }`}
            />
            <div>
              <span
                className={`font-display text-lg font-black tracking-wider ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                NAKAMA
              </span>
              <span
                className={`block text-[8px] uppercase tracking-widest ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                6 голосов • живой звук
              </span>
            </div>
          </Link>

          {/* Centered Navigation */}
          <nav
            className={`flex flex-wrap gap-x-5 gap-y-2 text-xs lowercase ${
              isDark ? 'text-[#9E9AA2]' : 'text-[#686370]'
            }`}
          >
            <Link
              to="/"
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
            >
              главная
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
            >
              о группе
            </Link>
            <Link
              to="/repertoire"
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
            >
              каверы
            </Link>
            <Link
              to="/packages"
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
            >
              пакеты и цены
            </Link>
            <Link
              to="/video"
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
            >
              видео
            </Link>
            <Link
              to="/photo"
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
            >
              фото
            </Link>
            <Link
              to="/cases"
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
            >
              кейсы
            </Link>
            <Link
              to="/agencies"
              className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
            >
              агентствам
            </Link>
            <Link
              to="/contacts"
              className={`font-bold transition-colors ${
                isDark ? 'text-[#D49D42] hover:text-white' : 'text-[#B88228] hover:text-black'
              }`}
            >
              контакты
            </Link>
          </nav>

          {/* Social / Phone */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className={`flex items-center gap-2 font-bold transition-colors whitespace-nowrap ${
                isDark
                  ? 'text-white hover:text-[#D49D42]'
                  : 'text-[#141218] hover:text-[#B88228]'
              }`}
            >
              <Phone className={`w-3.5 h-3.5 ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`} />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <div className="flex gap-2">
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-white/[0.06] text-white border border-white/10 hover:bg-[#D49D42] hover:text-[#0D0C10]'
                    : 'bg-black/5 text-[#141218] border border-black/10 hover:bg-[#B88228] hover:text-white'
                }`}
                title="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-white/[0.06] text-white border border-white/10 hover:bg-[#D49D42] hover:text-[#0D0C10]'
                    : 'bg-black/5 text-[#141218] border border-black/10 hover:bg-[#B88228] hover:text-white'
                }`}
                title="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Meta */}
        <div
          className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] ${
            isDark ? 'text-[#9E9AA2]' : 'text-[#686370]'
          }`}
        >
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <span>© {new Date().getFullYear()} NAKAMA BAND</span>
            <Link
              to="/privacy"
              className={`lowercase transition-colors underline-offset-2 hover:underline ${
                isDark ? 'hover:text-white' : 'hover:text-black'
              }`}
            >
              политика конфиденциальности
            </Link>
            <Link
              to="/consent"
              className={`lowercase transition-colors underline-offset-2 hover:underline ${
                isDark ? 'hover:text-white' : 'hover:text-black'
              }`}
            >
              согласие на обработку данных (152-ФЗ)
            </Link>
          </div>

          <div className="flex items-center gap-6 lowercase">
            <span>{CONTACT_INFO.geography}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
