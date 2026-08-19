import React, { useState } from 'react';
import { Play, Tv, Film, Sparkles, X } from 'lucide-react';

export const VideoGallerySection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    category: string;
    location: string;
    year: string;
    videoUrl: string;
    image: string;
  } | null>(null);

  const [activeTab, setActiveTab] = useState<'all' | 'wedding' | 'corporate' | 'backstage' | 'solo'>('all');

  const videos = [
    {
      id: 'v1',
      title: 'Главное шоу-промо 2025/2026',
      category: 'promo',
      categoryName: 'Шоу-промо',
      location: 'Новосибирск, КЗ Сибирь',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'v2',
      title: 'Первый танец и романтический сет на свадьбе',
      category: 'wedding',
      categoryName: 'На свадьбе',
      location: 'Бердск, Шатер у реки',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1000&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'v3',
      title: 'Рок-хиты и 400 танцующих гостей на корпоративе',
      category: 'corporate',
      categoryName: 'На корпоративе',
      location: 'Кемерово, Grand Hall',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'v4',
      title: 'Backstage: Как 10 человек готовят саундтрек вечера',
      category: 'backstage',
      categoryName: 'Backstage',
      location: 'Студия NAKAMA, Новосибирск',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'v5',
      title: 'Номер «Седая ночь» в симфо-рок многоголосии',
      category: 'solo',
      categoryName: 'Отдельный номер',
      location: 'Томск, Дворец Зрелищ',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'v6',
      title: 'Диско-мэшап 80-90х: 6 вокалисток зажигают зал',
      category: 'solo',
      categoryName: 'Отдельный номер',
      location: 'Новосибирск, Экспоцентр',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const filteredVideos = videos.filter(v => {
    if (activeTab === 'all') return true;
    return v.category === activeTab;
  });

  return (
    <section id="video-section" className="py-24 bg-[#140B05] relative overflow-hidden border-t border-[#3A2312]">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B2F19]/40 bg-[#27170E] text-xs text-[#F1D8C1] mb-3">
            <Tv className="w-3.5 h-3.5 text-[#F3A300]" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Live Video Archive
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Видео с живых выступлений
          </h2>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
            Посмотрите, как мы звучим и держим внимание гостей на свадьбах, масштабных корпоративах и закрытых концертах.
          </p>
        </div>

        {/* Video Categories Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {[
            { key: 'all', label: 'Все видео' },
            { key: 'wedding', label: 'На свадьбах' },
            { key: 'corporate', label: 'На корпоративах' },
            { key: 'backstage', label: 'Backstage & Репетиции' },
            { key: 'solo', label: 'Отдельные номера' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#9B2F19] text-white shadow-lg shadow-[#9B2F19]/30'
                  : 'border border-[#3A2312] bg-[#23150B] text-[#F1D8C1]/70 hover:bg-[#3A2312]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid)}
              className="group rounded-3xl border border-[#3A2312] bg-[#23150B] overflow-hidden shadow-xl hover:border-[#9B2F19]/60 hover:bg-[#27170E] transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Container with Film Frame Aspect */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={vid.image}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#23150B] via-transparent to-black/30" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#9B2F19]/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#BA371E] transition-all">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-black/60 backdrop-blur-md text-[#F3A300] border border-white/10">
                    {vid.categoryName}
                  </span>
                </div>
              </div>

              {/* Title & Location Footer */}
              <div className="p-5">
                <h3 className="text-base font-display font-bold text-[#F1D8C1] mb-2 leading-snug group-hover:text-white transition-colors">
                  {vid.title}
                </h3>
                <div className="flex items-center justify-between text-xs font-mono text-[#F1D8C1]/50 border-t border-[#3A2312] pt-3">
                  <span>{vid.location}</span>
                  <span className="text-[#F3A300]">{vid.year}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="max-w-4xl w-full bg-[#27170E] border border-[#9B2F19] rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 bg-[#1A1009] border-b border-[#3A2312] flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-display font-bold text-[#F1D8C1]">
                    {selectedVideo.title}
                  </h4>
                  <div className="text-[11px] font-mono text-[#F3A300]">
                    {selectedVideo.location} &bull; {selectedVideo.year}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 rounded-full border border-[#3A2312] bg-[#27170E] text-[#F1D8C1] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video bg-black flex items-center justify-center">
                <img
                  src={selectedVideo.image}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-[#9B2F19] text-white flex items-center justify-center shadow-xl mb-3 animate-pulse">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <p className="text-sm text-white font-medium">
                    Живое воспроизведение видеопотока в 4K качестве
                  </p>
                  <span className="text-xs text-[#F1D8C1]/60 font-mono mt-1">
                    Снято на реальном событии без студийных наложений
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
