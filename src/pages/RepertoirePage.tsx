import React from 'react';
import { Link } from 'react-router-dom';
import { AudioTrackPlayer } from '../components/AudioTrackPlayer';
import { LeadForm } from '../components/LeadForm';
import { CONTENT_IMAGES } from '../content';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const RepertoirePage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Репертуар | Кавер-группа NAKAMA — послушайте вживую',
    'Русские и зарубежные хиты, рок, поп, медляки. Слушайте сниппеты прямо на сайте, выбирайте любимое — соберём программу под ваш вечер.'
  );

  return (
    <div
      className={`min-h-screen font-grotesk pt-28 sm:pt-32 pb-20 sm:pb-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-page-base text-white' : 'bg-[#F8F6F0] text-[#141218]'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-[#D49D42]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest backdrop-blur-md border ${
                  isDark
                    ? 'text-[#D49D42] bg-[#D49D42]/10 border-[#D49D42]/25'
                    : 'text-[#B88228] bg-[#B88228]/10 border-[#B88228]/30'
                }`}
              >
                <span>КАТАЛОГ КАВЕРОВ & АУДИОДЕМО</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
              Репертуар кавер-группы NAKAMA
            </h1>

            <p
              className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans font-light ${
                isDark ? 'text-neutral-300' : 'text-[#4A4552]'
              }`}
            >
              Мы собрали репертуар не по жанрам, а по моментам вечера — вам не нужно разбираться в музыкальных стилях и исполнителях, просто выберите настроение для каждого этапа праздника. Слушайте сниппеты и отмечайте сердечком то, что понравилось.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div
              className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border ${
                isDark ? 'border-white/15' : 'border-black/15'
              }`}
            >
              <img
                src={CONTENT_IMAGES.dsc00733}
                alt="Кавер-группа NAKAMA — живое выступление"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Required Explanation Block */}
        <div
          className={`glass-card-frosted rounded-[32px] p-8 sm:p-10 text-center space-y-4 shadow-xl border ${
            isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
          }`}
        >
          <div
            className={`flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-mono font-bold ${
              isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
            }`}
          >
            <span>Принцип авторских аранжировок</span>
          </div>
          <p
            className={`font-serif text-lg sm:text-2xl leading-relaxed italic max-w-3xl mx-auto ${
              isDark ? 'text-neutral-200' : 'text-[#2D2933]'
            }`}
          >
            «Каждый кавер NAKAMA — самостоятельное произведение. Мы не копируем оригинал под кальку — мы делаем живую версию, которая звучит мощнее и объединяет весь зал.»
          </p>
        </div>

        {/* Audio Player & Filter component */}
        <div
          className={`glass-card-frosted rounded-[36px] p-6 sm:p-10 shadow-2xl border ${
            isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
          }`}
        >
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/10 dark:border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500">
                ИНТЕРАКТИВНЫЙ ПОДБОР ТРЕК-ЛИСТА
              </span>
            </div>
            <p
              className={`text-xs font-sans ${
                isDark ? 'text-neutral-400' : 'text-[#686370]'
              }`}
            >
              Нажимайте <span className="text-rose-500 font-bold">❤️</span> рядом с песней — выбранные треки отправятся менеджеру в заявку
            </p>
          </div>
          <AudioTrackPlayer />
        </div>

        {/* Не нашли свой трек? */}
        <div
          className={`glass-card-frosted rounded-[32px] p-7 sm:p-10 space-y-4 shadow-xl border ${
            isDark
              ? 'border-[#D49D42]/35 text-white'
              : 'border-[#B88228]/40 text-[#141218] bg-[#B88228]/5'
          }`}
        >
          <h2 className="font-serif text-xl sm:text-2xl font-normal leading-snug">
            Не нашли любимую песню?
          </h2>
          <p
            className={`text-xs sm:text-sm leading-relaxed max-w-3xl font-sans font-light ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Репертуар — это не жёсткие рамки. Если для вашего вечера важен конкретный трек, которого нет в списке, — напишите его в комментарии к заявке. В пакете «Роскошный максимум» мы готовим до 5 каверов специально под ваше мероприятие. А ещё можем переписать текст любой песни под ваш повод.
          </p>
          <Link
            to="/packages"
            className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider underline underline-offset-4 ${
              isDark ? 'text-[#D49D42] hover:text-white' : 'text-[#B88228] hover:text-[#141218]'
            }`}
          >
            Посмотреть пакеты →
          </Link>
        </div>

        {/* Lead Form */}
        <section>
          <LeadForm
            title="Заказать программу с вашим плейлистом"
            subtitle="Оставьте заявку — согласуем список любимых песен и забронируем дату."
          />
        </section>
      </div>
    </div>
  );
};
