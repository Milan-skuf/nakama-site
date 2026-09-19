import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';
import { MEDIA_LINKS } from '../data/content';
import { LeadForm } from '../components/LeadForm';
import { useTheme } from '../context/ThemeContext';
import { CONTENT_IMAGES } from '../content';
import { usePageMeta } from '../utils/usePageMeta';

const PHOTO_TABS = [
  { key: 'all', label: 'все фотографии' },
  { key: 'live', label: 'выступления' },
  { key: 'backstage', label: 'образы и стиль' },
  { key: 'members', label: 'состав' },
];

const PHOTO_GALLERY = [
  {
    id: 'p1',
    src: CONTENT_IMAGES.dsc00649,
    category: 'live',
    alt: 'Живое выступление NAKAMA на сцене',
    title: 'Большой концертный состав',
    aspectRatio: 'portrait' as const,
  },
  {
    id: 'p2',
    src: CONTENT_IMAGES.dsc09924,
    category: 'members',
    alt: 'Вокальный ансамбль NAKAMA',
    title: '6 вокалистов с живой энергетикой',
    aspectRatio: 'square' as const,
  },
  {
    id: 'p3',
    src: CONTENT_IMAGES.dsc00684,
    category: 'backstage',
    alt: 'Кинематографичный сценический образ NAKAMA',
    title: 'Стильный сценический дресс-код',
    aspectRatio: 'video' as const,
  },
  {
    id: 'p4',
    src: CONTENT_IMAGES.dsc00852,
    category: 'live',
    alt: 'Широкая панорама и живые инструменты NAKAMA',
    title: '100% живой звук без плейбеков',
    aspectRatio: 'landscape' as const,
  },
  {
    id: 'p5',
    src: CONTENT_IMAGES.dsc09942,
    category: 'live',
    alt: 'Атмосфера и свет на концерте NAKAMA',
    title: 'Эмоциональные кульминации вечера',
    aspectRatio: 'portrait' as const,
  },
];

export const PhotoPage: React.FC = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('all');

  usePageMeta(
    'Фотогалерея | Кавер-группа NAKAMA',
    'Профессиональные фото кавер-группы NAKAMA с выступлений и backstage. Живые эмоции, сцена, зал — оцените, как выглядит группа вживую.'
  );

  const filteredPhotos =
    activeTab === 'all'
      ? PHOTO_GALLERY
      : PHOTO_GALLERY.filter((p) => p.category === activeTab);

  const handleDownloadMediaPack = () => {
    const textContent = `МЕДИАПАКЕТ КАВЕР-ГРУППЫ NAKAMA\n\n` +
      `В пакет входят:\n` +
      `- Промо-фото в высоком разрешении (Wfolio HQ)\n` +
      `- Логотипы (вектор/PNG)\n` +
      `- Технический и бытовой райдеры\n` +
      `- Пресс-релиз и анонс для ведущего\n\n` +
      `Контакты: Менеджер Анна (8-906-980-65-25)\n` +
      `Wfolio галерея: https://zxcvbnmkjhg.wfolio.pro/`;
    
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NAKAMA_Media_Pack_Info.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
              <span>ВИЗУАЛЬНЫЙ ОБРАЗ & СТИЛЬ</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
            Фотогалерея NAKAMA
          </h1>

          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans font-light ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Кадры с фотосессий, живых концертов и постановочных съёмок в кинематографичной концепции.
          </p>

          <div className="pt-3">
            <button
              type="button"
              id="download-media-pack-btn"
              onClick={handleDownloadMediaPack}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all shadow-xl hover:scale-[1.02] active:scale-98 cursor-pointer ${
                isDark
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-[#141218] text-white hover:bg-neutral-800'
              }`}
            >
              <Download className={`w-4 h-4 ${isDark ? 'text-black' : 'text-white'}`} />
              <span>Скачать медиапакет (для агентств и СМИ)</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto pb-2">
          {PHOTO_TABS.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                  active
                    ? isDark
                      ? 'bg-white text-black font-bold shadow-md border-white'
                      : 'bg-[#141218] text-white font-bold shadow-md border-[#141218]'
                    : isDark
                    ? 'bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 border-white/15'
                    : 'bg-black/5 text-[#4A4552] hover:text-[#141218] hover:bg-black/10 border-black/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery — asymmetric collage, generous negative space, no card chrome */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="break-inside-avoid">
              <SafeImage
                src={photo.src}
                alt={photo.alt}
                aspectRatio={photo.aspectRatio}
                caption={photo.title}
              />
            </div>
          ))}
        </div>

        {/* Lead Form */}
        <section>
          <LeadForm
            title="Забронировать группу NAKAMA"
            subtitle="Оставьте заявку, чтобы забронировать нужную дату выступления."
          />
        </section>
      </div>
    </div>
  );
};
