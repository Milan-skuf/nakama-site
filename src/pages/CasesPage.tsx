import React, { useState } from 'react';
import { Award, Quote, ImageOff } from 'lucide-react';
import { REVIEWS_DATA, CASES_DATA } from '../data/content';
import { CaseEventCategory } from '../types';
import { LeadForm } from '../components/LeadForm';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

const CASE_FILTERS: { key: 'all' | CaseEventCategory; label: string }[] = [
  { key: 'all', label: 'все события' },
  { key: 'wedding', label: 'свадьбы' },
  { key: 'corporate', label: 'корпоративы' },
  { key: 'private', label: 'частные праздники' },
  { key: 'birthday', label: 'дни рождения' },
];

export const CasesPage: React.FC = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState<'all' | CaseEventCategory>('all');

  const filteredCases =
    activeFilter === 'all' ? CASES_DATA : CASES_DATA.filter((c) => c.category === activeFilter);
  const filteredReviews =
    activeFilter === 'all' ? REVIEWS_DATA : REVIEWS_DATA.filter((r) => r.category === activeFilter);

  usePageMeta(
    'Кейсы и отзывы | Кавер-группа NAKAMA в Новосибирске',
    'Кейсы и отзывы клиентов кавер-группы NAKAMA: свадьбы, корпоративы, частные праздники в Новосибирске и других городах. Реальные истории и результаты выступлений.'
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

          {filteredCases.length === 0 ? (
            <div
              className={`p-10 text-center rounded-[32px] border ${
                isDark ? 'border-white/10 bg-white/[0.02] text-neutral-400' : 'border-black/10 bg-black/[0.02] text-[#686370]'
              }`}
            >
              <ImageOff className="w-8 h-8 mx-auto mb-3 opacity-40" />
              <p className="text-sm font-medium">Кейсов в этой категории пока нет</p>
              <p className="text-xs mt-1">Мы добавим историю, как только проведём такое мероприятие</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              {filteredCases.map((c) => (
                <div
                  key={c.id}
                  className={`rounded-[32px] glass-card-frosted glass-card-hover shadow-xl border overflow-hidden ${
                    isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
                  }`}
                >
                  <div className="relative aspect-video">
                    <img
                      src={c.photo}
                      alt={c.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-3">
                      <span
                        className={`px-3.5 py-1 rounded-full text-[10px] uppercase font-mono font-bold border backdrop-blur-md ${
                          isDark
                            ? 'bg-black/60 border-[#D49D42]/40 text-[#D49D42]'
                            : 'bg-white/90 border-[#B88228]/40 text-[#B88228]'
                        }`}
                      >
                        {c.title}
                      </span>
                      <span className="text-xs font-mono text-white keep-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                        {c.meta}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 space-y-4 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    <div>
                      <h3
                        className={`font-bold font-mono uppercase tracking-wider mb-1 text-xs ${
                          isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                        }`}
                      >
                        Задача:
                      </h3>
                      <p className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>{c.task}</p>
                    </div>

                    <div>
                      <h3
                        className={`font-bold font-mono uppercase tracking-wider mb-1 text-xs ${
                          isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                        }`}
                      >
                        Что сделали:
                      </h3>
                      <p className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>{c.action}</p>
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
                        {c.result}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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

          {filteredReviews.length === 0 ? (
            <div
              className={`p-10 text-center rounded-[32px] border ${
                isDark ? 'border-white/10 bg-white/[0.02] text-neutral-400' : 'border-black/10 bg-black/[0.02] text-[#686370]'
              }`}
            >
              <Quote className="w-8 h-8 mx-auto mb-3 opacity-40" />
              <p className="text-sm font-medium">Отзывов в этой категории пока нет</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
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
                      «{review.text}»
                    </p>
                  </div>
                  <div
                    className={`pt-4 flex items-center justify-between border-t ${
                      isDark ? 'border-white/15' : 'border-black/10'
                    }`}
                  >
                    <div>
                      <div className="font-serif text-base font-normal">{review.author}</div>
                      <div
                        className={`text-xs font-mono ${
                          isDark ? 'text-neutral-400' : 'text-[#686370]'
                        }`}
                      >
                        {review.role}
                      </div>
                    </div>
                    <span
                      className={`text-[10px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full border ${
                        isDark
                          ? 'bg-[#D49D42]/15 border-[#D49D42]/30 text-[#D49D42]'
                          : 'bg-[#B88228]/15 border-[#B88228]/30 text-[#B88228]'
                      }`}
                    >
                      {review.badge ?? review.eventType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
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
