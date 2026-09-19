import React, { useState } from 'react';
import { Award, Quote, MessageSquare, Star } from 'lucide-react';
import { REVIEWS_DATA } from '../data/content';
import { LeadForm } from '../components/LeadForm';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

const CASE_FILTERS = [
  { key: 'all', label: 'все события' },
  { key: 'corporate', label: 'корпоративы' },
  { key: 'wedding', label: 'свадьбы' },
  { key: 'prom', label: 'выпускные' },
  { key: 'private', label: 'частные праздники' },
];

export const CasesPage: React.FC = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  usePageMeta(
    'Кейсы и отзывы | Кавер-группа NAKAMA',
    'Кейсы и отзывы клиентов кавер-группы NAKAMA: свадьбы, корпоративы, частные праздники. Реальные истории и результаты выступлений.'
  );

  return (
    <div
      className={`min-h-screen font-grotesk pt-28 sm:pt-32 pb-20 sm:pb-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-page-base text-white' : 'bg-[#F8F6F0] text-[#141218]'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-[#D49D42]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 relative z-10">
        {/* Header */}
        <div
          className={`glass-card-frosted rounded-[36px] p-7 sm:p-12 lg:p-14 shadow-2xl space-y-5 border ${
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
              <Award className="w-3.5 h-3.5" />
              <span>СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
            Кейсы и отзывы
          </h1>

          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans font-light ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Как группа NAKAMA решает задачи организаторов и создаёт эмоциональный саундтрек для каждого формата вечера.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CASE_FILTERS.map((f) => {
            const active = activeFilter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
                  active
                    ? isDark
                      ? 'bg-white text-black font-bold shadow-md border-white'
                      : 'bg-[#141218] text-white font-bold shadow-md border-[#141218]'
                    : isDark
                    ? 'bg-white/10 text-neutral-300 border-white/15 hover:text-white hover:bg-white/20'
                    : 'bg-black/5 text-[#4A4552] border-black/10 hover:text-[#141218] hover:bg-black/10'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Section 1: Structured Case Studies */}
        <section className="space-y-6">
          <div
            className={`pb-4 border-b ${
              isDark ? 'border-white/15' : 'border-black/10'
            }`}
          >
            <span
              className={`text-xs uppercase tracking-[0.2em] font-mono font-bold block mb-1 ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              / ИСТОРИИ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight">
              Истории реальных событий
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {/* Case 1 */}
            <div
              className={`p-7 sm:p-9 rounded-[32px] glass-card-frosted glass-card-hover space-y-6 shadow-xl border ${
                isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`px-3.5 py-1 rounded-full text-[10px] uppercase font-mono font-bold border ${
                    isDark
                      ? 'bg-[#D49D42]/15 border-[#D49D42]/30 text-[#D49D42]'
                      : 'bg-[#B88228]/15 border-[#B88228]/30 text-[#B88228]'
                  }`}
                >
                  Корпоратив IT-компании
                </span>
                <span
                  className={`text-xs font-mono ${
                    isDark ? 'text-neutral-400' : 'text-[#686370]'
                  }`}
                >
                  200 гостей • Новосибирск
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed font-sans font-light">
                <div>
                  <h3
                    className={`font-bold font-mono uppercase tracking-wider mb-1 text-xs ${
                      isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                    }`}
                  >
                    Задача:
                  </h3>
                  <p className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>
                    Переключить команду после напряжённого рабочего года, создать клубную атмосферу и объединить разные отделы на танцполе.
                  </p>
                </div>

                <div>
                  <h3
                    className={`font-bold font-mono uppercase tracking-wider mb-1 text-xs ${
                      isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                    }`}
                  >
                    Что сделали:
                  </h3>
                  <p className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>
                    Выстроили музыкальную программу от мягкого лаунж-старта во время сбора гостей к мощному финальному взрыву с хоровым пением.
                  </p>
                </div>

                <div>
                  <h3
                    className={`font-bold font-mono uppercase tracking-wider mb-1 text-xs ${
                      isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                    }`}
                  >
                    Результат:
                  </h3>
                  <div
                    className={`p-4 rounded-2xl border italic font-serif text-sm ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-neutral-200'
                        : 'bg-black/5 border-black/10 text-[#2D2933]'
                    }`}
                  >
                    «Гости не хотели отпускать группу со сцены, финальный трек пели все 200 человек хором. Работа звукорежиссёра и тайминг — на высшем уровне.»
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div
              className={`p-7 sm:p-9 rounded-[32px] glass-card-frosted glass-card-hover space-y-6 shadow-xl border ${
                isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`px-3.5 py-1 rounded-full text-[10px] uppercase font-mono font-bold border ${
                    isDark
                      ? 'bg-[#D49D42]/15 border-[#D49D42]/30 text-[#D49D42]'
                      : 'bg-[#B88228]/15 border-[#B88228]/30 text-[#B88228]'
                  }`}
                >
                  Свадебное торжество
                </span>
                <span
                  className={`text-xs font-mono ${
                    isDark ? 'text-neutral-400' : 'text-[#686370]'
                  }`}
                >
                  80 гостей • Сибирь
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed font-sans font-light">
                <div>
                  <h3
                    className={`font-bold font-mono uppercase tracking-wider mb-1 text-xs ${
                      isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                    }`}
                  >
                    Задача:
                  </h3>
                  <p className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>
                    Подготовить эксклюзивную авторскую аранжировку для первого танца молодожёнов и зажечь гостей трёх разных поколений.
                  </p>
                </div>

                <div>
                  <h3
                    className={`font-bold font-mono uppercase tracking-wider mb-1 text-xs ${
                      isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                    }`}
                  >
                    Что сделали:
                  </h3>
                  <p className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>
                    Разучили любимую песню пары в 6 голосов, разделили программу на 2 эмоциональных блока с интерактивами и кульминационным рок-попурри.
                  </p>
                </div>

                <div>
                  <h3
                    className={`font-bold font-mono uppercase tracking-wider mb-1 text-xs ${
                      isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                    }`}
                  >
                    Результат:
                  </h3>
                  <div
                    className={`p-4 rounded-2xl border italic font-serif text-sm ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-neutral-200'
                        : 'bg-black/5 border-black/10 text-[#2D2933]'
                    }`}
                  >
                    «Энергия живого звука просто взорвала зал! Все гости пели хором каждую песню. Ребята приехали со своим звуком и настроили потрясающий баланс.»
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Real Quotes & Reviews */}
        <section className="space-y-6">
          <div
            className={`pb-4 border-b ${
              isDark ? 'border-white/15' : 'border-black/10'
            }`}
          >
            <span
              className={`text-xs uppercase tracking-[0.2em] font-mono font-bold block mb-1 ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              / ОЦЕНКИ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight">
              Отзывы заказчиков
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Review 1 */}
            <div
              className={`p-7 sm:p-9 rounded-[32px] glass-card-frosted glass-card-hover flex flex-col justify-between space-y-6 shadow-xl border ${
                isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
              }`}
            >
              <div className="space-y-4">
                <Quote className={`w-8 h-8 ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`} />
                <p
                  className={`font-serif text-base sm:text-lg italic leading-relaxed ${
                    isDark ? 'text-neutral-200' : 'text-[#2D2933]'
                  }`}
                >
                  «{REVIEWS_DATA[0].text}»
                </p>
              </div>
              <div
                className={`pt-4 flex items-center justify-between border-t ${
                  isDark ? 'border-white/15' : 'border-black/10'
                }`}
              >
                <div>
                  <div className="font-serif text-base font-normal">
                    {REVIEWS_DATA[0].author}
                  </div>
                  <div
                    className={`text-xs font-mono ${
                      isDark ? 'text-neutral-400' : 'text-[#686370]'
                    }`}
                  >
                    {REVIEWS_DATA[0].role}
                  </div>
                </div>
                <span
                  className={`text-[10px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full border ${
                    isDark
                      ? 'bg-[#D49D42]/15 border-[#D49D42]/30 text-[#D49D42]'
                      : 'bg-[#B88228]/15 border-[#B88228]/30 text-[#B88228]'
                  }`}
                >
                  Выпускной
                </span>
              </div>
            </div>

            {/* Review 2 */}
            <div
              className={`p-7 sm:p-9 rounded-[32px] glass-card-frosted glass-card-hover flex flex-col justify-between space-y-6 shadow-xl border ${
                isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
              }`}
            >
              <div className="space-y-4">
                <Quote className={`w-8 h-8 ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`} />
                <p
                  className={`font-serif text-base sm:text-lg italic leading-relaxed ${
                    isDark ? 'text-neutral-200' : 'text-[#2D2933]'
                  }`}
                >
                  «{REVIEWS_DATA[1].text}»
                </p>
              </div>
              <div
                className={`pt-4 flex items-center justify-between border-t ${
                  isDark ? 'border-white/15' : 'border-black/10'
                }`}
              >
                <div>
                  <div className="font-serif text-base font-normal">
                    {REVIEWS_DATA[1].author}
                  </div>
                  <div
                    className={`text-xs font-mono ${
                      isDark ? 'text-neutral-400' : 'text-[#686370]'
                    }`}
                  >
                    {REVIEWS_DATA[1].role}
                  </div>
                </div>
                <span
                  className={`text-[10px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full border ${
                    isDark
                      ? 'bg-[#D49D42]/15 border-[#D49D42]/30 text-[#D49D42]'
                      : 'bg-[#B88228]/15 border-[#B88228]/30 text-[#B88228]'
                  }`}
                >
                  Свадьба
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section>
          <LeadForm
            title="Хотите такой же результат?"
            subtitle="Оставьте заявку и мы обсудим детали концепции и тайминга вашего праздника."
          />
        </section>
      </div>
    </div>
  );
};
