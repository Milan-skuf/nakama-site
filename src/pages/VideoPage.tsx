import React, { useState } from 'react';
import { LocalVideoPlayer } from '../components/LocalVideoPlayer';
import { LeadForm } from '../components/LeadForm';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

const VIDEO_CATEGORIES = [
  { key: 'all', label: 'все видео' },
  { key: 'wedding', label: 'на свадьбе' },
  { key: 'corporate', label: 'на корпоративе' },
  { key: 'backstage', label: 'backstage' },
  { key: 'solo', label: 'отдельные номера' },
];

const VIDEO_GALLERY = [
  {
    id: 'v1',
    category: 'corporate',
    title: 'живой сет на корпоративном вечере',
    eventInfo: 'Корпоративное мероприятие, 2025',
    badge: 'живой звук 10 чел',
  },
  {
    id: 'v2',
    category: 'wedding',
    title: 'первый танец и танцевальный блок',
    eventInfo: 'Свадебное торжество, 2025',
    badge: 'свадебный сет',
  },
  {
    id: 'v3',
    category: 'solo',
    title: 'вокальное многоголосье и инструменты',
    eventInfo: 'Концертная площадка, 2025',
    badge: 'фирменный номер',
  },
  {
    id: 'v4',
    category: 'backstage',
    title: 'саундчек со звукорежиссёром и подготовка',
    eventInfo: 'Backstage, подготовка к мероприятию',
    badge: 'за кулисами',
  },
];

export const VideoPage: React.FC = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  usePageMeta(
    'Видео выступлений | Кавер-группа NAKAMA',
    'Видео живых выступлений кавер-группы NAKAMA: свадьбы, корпоративы, backstage. Смотрите, как звучит и выглядит группа на реальных мероприятиях.'
  );

  const filteredVideos =
    activeCategory === 'all'
      ? VIDEO_GALLERY
      : VIDEO_GALLERY.filter((v) => v.category === activeCategory);

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
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest backdrop-blur-md border ${
                isDark
                  ? 'text-[#D49D42] bg-[#D49D42]/10 border-[#D49D42]/25'
                  : 'text-[#B88228] bg-[#B88228]/10 border-[#B88228]/30'
              }`}
            >
              <span>ЖИВОЙ ЗВУК НА ВИДЕО</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
            Видеозаписи выступлений
          </h1>

          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans font-light ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Посмотрите, как звучит и выглядит группа NAKAMA на реальных мероприятиях и сценах.
          </p>
        </div>

        {/* Main Promo Video Embed */}
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
              / ПРЕЗЕНТАЦИЯ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight">
              Главный промо-ролик
            </h2>
          </div>
          <LocalVideoPlayer src="/video/nakama-promo.mp4" />
        </section>

        {/* Live videos & clips section */}
        <section className="space-y-8">
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b ${
              isDark ? 'border-white/15' : 'border-black/10'
            }`}
          >
            <div>
              <span
                className={`text-xs uppercase tracking-[0.2em] font-mono font-bold block mb-1 ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                / АРХИВ
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight">
                Записи с мероприятий
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {VIDEO_CATEGORIES.map((cat) => {
                const active = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer uppercase tracking-wider border ${
                      active
                        ? isDark
                          ? 'bg-white text-black font-bold shadow-md border-white'
                          : 'bg-[#141218] text-white font-bold shadow-md border-[#141218]'
                        : isDark
                        ? 'bg-white/10 text-neutral-300 border-white/15 hover:text-white hover:bg-white/20'
                        : 'bg-black/5 text-[#4A4552] border-black/10 hover:text-[#141218] hover:bg-black/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className={`glass-card-frosted glass-card-hover rounded-[32px] overflow-hidden flex flex-col justify-between shadow-xl border ${
                  isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
                }`}
              >
                <div className="relative aspect-video bg-[#0A090D]">
                  <video
                    src="/video/nakama-promo.mp4"
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] uppercase font-mono font-bold border ${
                        isDark
                          ? 'bg-[#D49D42]/15 border-[#D49D42]/30 text-[#D49D42]'
                          : 'bg-[#B88228]/15 border-[#B88228]/30 text-[#B88228]'
                      }`}
                    >
                      {video.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal tracking-tight">
                    {video.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm font-sans font-light ${
                      isDark ? 'text-neutral-400' : 'text-[#686370]'
                    }`}
                  >
                    {video.eventInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form */}
        <section>
          <LeadForm
            title="Хотите услышать нас вживую?"
            subtitle="Оставьте заявку на бронирование даты выступления."
          />
        </section>
      </div>
    </div>
  );
};
