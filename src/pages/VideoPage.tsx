import React from 'react';
import { LocalVideoPlayer } from '../components/LocalVideoPlayer';
import { LeadForm } from '../components/LeadForm';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';
import { Clock } from 'lucide-react';

interface VideoItem {
  id: string;
  label: string;
  src?: string;
}

const BACKSTAGE_VIDEOS: VideoItem[] = [
  { id: 'bs-1', label: 'Репетиция', src: '/video/nakama-backstage.mp4' },
  { id: 'bs-2', label: 'Репетиция', src: '/video/nakama-rehearsal.mp4' },
  { id: 'bs-3', label: 'Фотодень, осень 2025' },
  { id: 'bs-4', label: 'Фотодень, осень 2025' },
  { id: 'bs-5', label: 'Фотодень, август 2026' },
  { id: 'bs-6', label: 'Корпоратив, автошкола «За рулём» 2025' },
  { id: 'bs-7', label: 'Корпоратив, автошкола «За рулём» 2025' },
  { id: 'bs-8', label: 'Свадьба, весна 2026' },
  { id: 'bs-9', label: 'Новогодний корпоратив 2025' },
  { id: 'bs-10', label: 'Съёмка промо 2025' },
  { id: 'bs-11', label: 'Съёмка промо 2025' },
  { id: 'bs-12', label: 'Съёмка промо 2025' },
];

const LIVE_VIDEOS: VideoItem[] = [
  { id: 'lv-1', label: 'Корпоратив, автошкола «За рулём» 2025', src: '/video/nakama-corporate-zarulem-2025.mp4' },
  { id: 'lv-2', label: 'Новогодний корпоратив 2025' },
  { id: 'lv-3', label: 'Выступление в ресторане «Пели ели на качели»' },
  { id: 'lv-4', label: 'Свадьба, весна 2026' },
  { id: 'lv-5', label: 'Выступление в ресторане «Пели ели на качели»' },
  { id: 'lv-6', label: 'Свадьба, весна 2026' },
  { id: 'lv-7', label: 'Выступление в ресторане «Пели ели на качели»' },
  { id: 'lv-8', label: 'Новогодний корпоратив 2025' },
  { id: 'lv-9', label: 'Выступление в ресторане «Пели ели на качели»' },
  { id: 'lv-10', label: 'Свадьба, весна 2026' },
];

const VideoTile: React.FC<{ item: VideoItem; isDark: boolean }> = ({ item, isDark }) => (
  <div
    className={`glass-card-frosted rounded-[28px] overflow-hidden shadow-xl border ${
      isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
    }`}
  >
    <div className={`relative aspect-video ${isDark ? 'bg-black/40' : 'bg-black/5'}`}>
      {item.src ? (
        <video src={item.src} controls preload="metadata" playsInline className="w-full h-full" />
      ) : (
        <div
          className={`w-full h-full flex flex-col items-center justify-center gap-2 border-2 border-dashed ${
            isDark ? 'border-white/15 text-neutral-500' : 'border-black/10 text-neutral-400'
          }`}
        >
          <Clock className="w-6 h-6" />
          <span className="text-[10px] font-mono uppercase tracking-wider">Видео скоро появится</span>
        </div>
      )}
    </div>
    <div className="p-4">
      <p className={`text-xs sm:text-sm font-sans ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
        {item.label}
      </p>
    </div>
  </div>
);

export const VideoPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Видео кавер-группы NAKAMA | Новосибирск',
    'Видео живых выступлений кавер-группы NAKAMA: свадьбы, корпоративы, backstage. Смотрите, как звучит и выглядит группа на реальных мероприятиях в Новосибирске и других городах.'
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
            Видео кавер-группы NAKAMA
          </h1>

          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans font-light ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Слова и фотографии не передают главного — энергии зала. Здесь можно увидеть, как проходят наши выступления на самом деле: без монтажной магии, ровно так, как это увидят ваши гости.
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

        {/* Как это было */}
        <section className="space-y-10">
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
              / АРХИВ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight">
              Как это было
            </h2>
          </div>

          <div className="space-y-5">
            <h3 className="font-display text-sm font-black uppercase tracking-wider">
              Закулисье
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BACKSTAGE_VIDEOS.map((item) => (
                <VideoTile key={item.id} item={item} isDark={isDark} />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-display text-sm font-black uppercase tracking-wider">
              Живые видео с мероприятий
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LIVE_VIDEOS.map((item) => (
                <VideoTile key={item.id} item={item} isDark={isDark} />
              ))}
            </div>
          </div>
        </section>

        {/* Финальный CTA-блок */}
        <section>
          <LeadForm
            title="Представили нас на своём празднике?"
            subtitle="Оставьте заявку — обсудим дату, площадку и программу."
            redirectTo="/thanks"
          />
        </section>
      </div>
    </div>
  );
};
