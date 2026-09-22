import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Music2, Video } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const ThanksPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Заявка отправлена | Кавер-группа NAKAMA',
    'Спасибо за заявку кавер-группе NAKAMA — менеджер Анна свяжется с вами в течение нескольких часов.',
    { noindex: true }
  );

  return (
    <div
      className={`min-h-[85vh] font-grotesk pt-28 sm:pt-36 pb-20 flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-page-base text-white' : 'bg-[#F8F6F0] text-[#141218]'
      }`}
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#8CA069]/12 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10">
        <div
          className={`glass-card-frosted rounded-[36px] p-8 sm:p-14 shadow-2xl space-y-7 border ${
            isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
          }`}
        >
          <CheckCircle2 className={`w-14 h-14 mx-auto ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`} />

          <div className="space-y-3">
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight">
              Спасибо, мы приняли вашу заявку 🎸
            </h1>
            <p
              className={`text-sm sm:text-base font-sans font-light max-w-md mx-auto pt-2 leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-[#4A4552]'
              }`}
            >
              {CONTACT_INFO.managerName} свяжется с вами в течение нескольких часов. Если событие горит — позвоните или напишите напрямую:{' '}
              <a href={`tel:${CONTACT_INFO.phoneClean}`} className={`font-bold underline ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                {CONTACT_INFO.phone}
              </a>{' '}
              (Telegram / MAX).
            </p>
          </div>

          <div className="space-y-4">
            <p className={`text-xs sm:text-sm font-mono uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
              А пока ждёте — послушайте, как мы звучим
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Link
                to="/repertoire"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 ${
                  isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#141218] text-white hover:bg-black'
                }`}
              >
                <Music2 className="w-3.5 h-3.5" />
                <span>Репертуар со сниппетами</span>
              </Link>

              <Link
                to="/video"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border backdrop-blur-md ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                    : 'bg-black/5 hover:bg-black/10 border-black/15 text-[#141218]'
                }`}
              >
                <Video className="w-3.5 h-3.5 text-[#D49D42]" />
                <span>Видео с живых выступлений</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
