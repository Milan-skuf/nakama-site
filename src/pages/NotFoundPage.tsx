import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Home, Disc3, Tag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const NotFoundPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Страница не найдена | NAKAMA',
    'Страница не найдена. Вернитесь на главную, послушайте репертуар или посмотрите пакеты и цены кавер-группы NAKAMA.'
  );

  return (
    <div
      className={`min-h-[85vh] font-grotesk pt-28 sm:pt-36 pb-20 flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-page-base text-white' : 'bg-[#F8F6F0] text-[#141218]'
      }`}
    >
      {/* Warm atmospheric glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D49D42]/12 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10">
        <div
          className={`glass-card-frosted rounded-[36px] p-8 sm:p-14 shadow-2xl space-y-7 border ${
            isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
          }`}
        >
          <div className="inline-flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest backdrop-blur-md border ${
                isDark
                  ? 'text-[#D49D42] bg-[#D49D42]/10 border-[#D49D42]/25'
                  : 'text-[#B88228] bg-[#B88228]/10 border-[#B88228]/30'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
              <span>ОШИБКА 404 • СБОЙ ТОНАЛЬНОСТИ</span>
            </span>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-7xl sm:text-8xl font-bold tracking-tighter opacity-20">
              404
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight">
              Такой страницы нет 🎶
            </h1>
            <p
              className={`font-handwriting text-xl sm:text-2xl text-[#8CA069] dark:text-[#A6BE7E] -rotate-1 select-none`}
            >
              «Вы попали не в ту ноту — случается даже с лучшими.»
            </p>
            <p
              className={`text-xs sm:text-sm font-sans font-light max-w-md mx-auto pt-2 leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-[#4A4552]'
              }`}
            >
              Возможно, ссылка изменилась или трек переехал в другую тональность. Перейдите в один из основных разделов:
            </p>
          </div>

          {/* Nav buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 ${
                isDark
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-[#141218] text-white hover:bg-black'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>На главную</span>
            </Link>

            <Link
              to="/repertoire"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border backdrop-blur-md ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  : 'bg-black/5 hover:bg-black/10 border-black/15 text-[#141218]'
              }`}
            >
              <Disc3 className="w-3.5 h-3.5 text-[#D49D42]" />
              <span>Послушать репертуар</span>
            </Link>

            <Link
              to="/packages"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border backdrop-blur-md ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  : 'bg-black/5 hover:bg-black/10 border-black/15 text-[#141218]'
              }`}
            >
              <Tag className="w-3.5 h-3.5 text-[#8CA069]" />
              <span>Пакеты и цены</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
