import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const PhotoGallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'stage' | 'backstage' | 'looks'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      title: 'Кульминация сольного рок-блока',
      category: 'stage',
      categoryName: 'Концерт',
      location: 'Grand Hall Сибирь',
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Вокальный ансамбль: 6 голосов в одном аккорде',
      category: 'stage',
      categoryName: 'Концерт',
      location: 'Новосибирск',
      src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Backstage: Настройка ушных мониторов со звукорежиссёром',
      category: 'backstage',
      categoryName: 'Backstage',
      location: 'Гримерка КЗ',
      src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Образ Black Tie Cinema: Сценическая классика',
      category: 'looks',
      categoryName: 'Lookbook',
      location: 'Студийный сет',
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Драйв на свадебном танцполе',
      category: 'stage',
      categoryName: 'Концерт',
      location: 'Бердский залив',
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Бас-гитара & Ритм-секция крупным планом',
      category: 'stage',
      categoryName: 'Концерт',
      location: 'Томск',
      src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 7,
      title: 'Lookbook Retro Glitz & Disco Shine',
      category: 'looks',
      categoryName: 'Lookbook',
      location: 'Студия NAKAMA',
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 8,
      title: 'Эмоции гостей и первый танец молодоженов',
      category: 'stage',
      categoryName: 'Концерт',
      location: 'Кемерово',
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    }
  ];

  const filteredPhotos = photos.filter(p => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="photo-section" className="py-24 bg-[#1A1009] relative overflow-hidden border-t border-[#3A2312]">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B2F19]/40 bg-[#27170E] text-xs text-[#F1D8C1] mb-3">
            <Camera className="w-3.5 h-3.5 text-[#F3A300]" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Живые кадры событий
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Фотогалерея NAKAMA
          </h2>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
            Сценическая энергетика, улыбки гостей, авторские костюмы и закулисье подготовки каждого выступления.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {[
            { key: 'all', label: 'Все фотографии' },
            { key: 'stage', label: 'Сцена & Концерты' },
            { key: 'looks', label: 'Костюмы & Lookbook' },
            { key: 'backstage', label: 'Закулисье & Саундчек' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#9B2F19] text-white shadow-lg shadow-[#9B2F19]/30'
                  : 'border border-[#3A2312] bg-[#27170E] text-[#F1D8C1]/70 hover:bg-[#3A2312]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photos Grid (Masonry-like feel) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden border border-[#3A2312] bg-[#27170E] aspect-[4/5] cursor-pointer shadow-lg hover:shadow-2xl hover:border-[#9B2F19]/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140B05] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-black/60 backdrop-blur-sm text-[#F3A300] border border-white/10">
                  {photo.categoryName}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-xs sm:text-sm font-semibold text-[#F1D8C1] leading-tight group-hover:text-white">
                  {photo.title}
                </h4>
                <p className="text-[10px] text-[#F1D8C1]/60 font-mono mt-0.5">
                  {photo.location}
                </p>
              </div>

              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#9B2F19] text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-[#9B2F19] z-20 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-[#9B2F19] z-20 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-[#9B2F19] z-20 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              className="max-w-5xl max-h-[85vh] relative flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center">
                <h4 className="text-base sm:text-lg font-display font-bold text-[#F1D8C1]">
                  {filteredPhotos[lightboxIndex].title}
                </h4>
                <p className="text-xs font-mono text-[#F3A300] mt-0.5">
                  {filteredPhotos[lightboxIndex].location} &bull; Кадр {lightboxIndex + 1} из {filteredPhotos.length}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
