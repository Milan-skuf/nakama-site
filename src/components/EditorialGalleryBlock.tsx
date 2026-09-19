import React from 'react';
import { CONTENT_IMAGES } from '../content';
import { useTheme } from '../context/ThemeContext';

const photo09924 = CONTENT_IMAGES.dsc09924;

export const EditorialGalleryBlock: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="editorial-gallery-block"
      className={`relative w-full pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 border-t font-grotesk overflow-hidden transition-colors duration-300 ${
        isDark
          ? 'bg-black text-white border-white/10 selection:bg-white selection:text-black'
          : 'bg-[#F8F6F0] text-[#141218] border-black/10 selection:bg-[#141218] selection:text-white'
      }`}
    >
      {/* Warm amber/golden-orange atmospheric glow matching user reference photo */}
      <div
        className={`absolute top-[4%] left-[-5%] w-[650px] h-[650px] blur-[130px] pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.22)_0%,rgba(217,119,6,0.14)_45%,rgba(180,83,9,0.06)_70%,transparent_100%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(212,157,66,0.22)_0%,rgba(197,78,14,0.12)_45%,rgba(180,83,9,0.04)_70%,transparent_100%)]'
        }`}
      />
      <div
        className={`absolute top-[32%] right-[-8%] w-[750px] h-[750px] blur-[150px] pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.25)_0%,rgba(245,158,11,0.18)_40%,rgba(194,65,12,0.10)_75%,transparent_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(212,157,66,0.20)_0%,rgba(197,78,14,0.12)_40%,transparent_100%)]'
        }`}
      />
      <div
        className={`absolute top-[60%] left-[10%] w-[600px] h-[600px] blur-[140px] pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.18)_0%,rgba(217,119,6,0.12)_50%,transparent_100%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(212,157,66,0.15)_0%,rgba(197,78,14,0.08)_50%,transparent_100%)]'
        }`}
      />
      <div
        className={`absolute bottom-[2%] right-[15%] w-[580px] h-[580px] blur-[130px] pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.20)_0%,rgba(217,119,6,0.12)_50%,transparent_100%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(212,157,66,0.15)_0%,rgba(197,78,14,0.08)_50%,transparent_100%)]'
        }`}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16 sm:space-y-24">

        {/* =========================================================================
            1. SECTION 1: КОНЦЕПЦИЯ И КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА NAKAMA
           ========================================================================= */}
        <div className="space-y-10">
          {/* Top Bar with Pill Tag */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center justify-center text-xs sm:text-sm font-mono uppercase tracking-widest px-4 sm:px-5 py-1.5 rounded-full border backdrop-blur-md ${
                  isDark
                    ? 'bg-white/10 text-neutral-200 border-white/15'
                    : 'bg-black/5 text-[#141218] border-black/15 font-semibold'
                }`}
              >
                NAKAMA
              </span>
              <span
                className={`text-xs font-mono uppercase tracking-widest hidden sm:inline-block ${
                  isDark ? 'text-neutral-400' : 'text-[#686370]'
                }`}
              >
                • 100% ЖИВОЙ ЗВУК БЕЗ ПЛЕЙБЕКОВ
              </span>
            </div>
            <div
              className={`text-xs font-mono tracking-wider ${
                isDark ? 'text-neutral-400' : 'text-[#686370]'
              }`}
            >
              仲間 · nakama — свои люди
            </div>
          </div>

          {/* Grid: Headline & Text + Signature Visual Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Headline & Manifesto Text */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <h2
                  className={`font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal tracking-tight leading-[1.12] ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  «Ваш вечер — как кино. Мы создаём к нему саундтрек»
                </h2>
                {/* Handwritten director cue */}
                <p className="font-handwriting text-xl sm:text-2xl text-[#8CA069] dark:text-[#A6BE7E] -rotate-1 select-none">
                  «режиссура звука и эмоций каждого кадра»
                </p>
              </div>

              <div
                className={`space-y-3 text-sm sm:text-base font-normal leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#3E3A47]'
                }`}
              >
                <p>
                  Кавер-группа из Сибири с богатым многоголосием. В японской традиции NAKAMA (仲間) — это «свой человек» и соратник. Мы выходим на сцену не как приглашённые исполнители, а как часть вашей истории.
                </p>
              </div>

              {/* Принципы работы — компактная сетка из 4 пунктов */}
              <div
                className={`pt-4 space-y-4 border-t ${
                  isDark ? 'border-white/10' : 'border-black/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-display text-sm sm:text-base font-black uppercase tracking-wider ${
                      isDark ? 'text-white' : 'text-[#141218]'
                    }`}
                  >
                    <span>Стандарты живого выступления:</span>
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">
                    Production Rules
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className={`p-4 sm:p-5 rounded-2xl glass-card-subtle space-y-1.5 border transition-all ${
                      isDark ? 'border-white/10' : 'bg-white/80 border-black/10'
                    }`}
                  >
                    <div className={`font-display font-black text-xs uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                      Живой звук — без исключений
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                      Никаких минусовок и плейбеков. Только настоящее живое дыхание 10 музыкантов на сцене.
                    </p>
                  </div>

                  <div
                    className={`p-4 sm:p-5 rounded-2xl glass-card-subtle space-y-1.5 border transition-all ${
                      isDark ? 'border-white/10' : 'bg-white/80 border-black/10'
                    }`}
                  >
                    <div className={`font-display font-black text-xs uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                      Полный состав всегда
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                      6 вокалистов и 4 инструменталиста. Фирменное полифоническое звучание без «урезанных» версий.
                    </p>
                  </div>

                  <div
                    className={`p-4 sm:p-5 rounded-2xl glass-card-subtle space-y-1.5 border transition-all ${
                      isDark ? 'border-white/10' : 'bg-white/80 border-black/10'
                    }`}
                  >
                    <div className={`font-display font-black text-xs uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                      Собственный звукорежиссёр
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                      Штатный звукорежиссёр за цифровым пультом гарантирует идеальный баланс в любом зале.
                    </p>
                  </div>

                  <div
                    className={`p-4 sm:p-5 rounded-2xl glass-card-subtle space-y-1.5 border transition-all ${
                      isDark ? 'border-white/10' : 'bg-white/80 border-black/10'
                    }`}
                  >
                    <div className={`font-display font-black text-xs uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                      Партнёрство с организатором
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                      Уважение к общему таймингу, согласованный сценарий и готовность за 2 часа до гостей.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Signature Portrait Card & Paper Note */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-3">
              <div
                className={`relative w-full max-w-[340px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group border ${
                  isDark ? 'bg-neutral-900 border-white/15' : 'bg-neutral-100 border-black/15'
                }`}
              >
                <img
                  src={photo09924}
                  alt="Кавер-группа NAKAMA"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                <div
                  className={`absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs px-4 py-2 rounded-full backdrop-blur-md border shadow-lg transition-colors ${
                    isDark
                      ? 'bg-black/60 border-white/20 text-white'
                      : 'bg-white/95 border-white/80 text-[#141218]'
                  }`}
                >
                  <span
                    className={`font-display font-semibold uppercase tracking-wider ${
                      isDark ? 'text-white keep-white' : 'text-[#141218]'
                    }`}
                  >
                    Живой состав
                  </span>
                  <span className="badge-violet text-[10px] font-mono px-2.5 py-0.5 rounded-full uppercase font-bold">
                    6 ВОКАЛОВ
                  </span>
                </div>
              </div>

              {/* Tactile paper director note taped to the card */}
              <div className="w-full max-w-[340px] paper-texture director-tape p-4 rounded-xl shadow-md text-center">
                <p className="font-handwriting text-lg leading-snug text-[#1A1820] dark:text-[#F4F1EA]">
                  «10 артистов, которые дышат в одном ритме с залом»
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. CINEMATIC VIDEO SHOWCASE
           ========================================================================= */}
        <div
          className={`space-y-4 pt-6 sm:pt-10 border-t ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <span
            className={`font-display text-sm sm:text-base font-black uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-[#141218]'
            }`}
          >
            100% живой звук без плейбеков
          </span>

          <div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative">
            <video
              src="/video/nakama-promo.mp4"
              controls
              preload="metadata"
              playsInline
              className="w-full h-full absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
