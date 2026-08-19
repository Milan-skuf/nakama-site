import React, { useState, useEffect } from 'react';
import { REPERTOIRE_TRACKS } from '../data/bandData';
import { RepertoireCategory, Track } from '../types';
import { 
  Play, 
  Pause, 
  Search, 
  Download, 
  Music, 
  Volume2, 
  Sparkles, 
  Filter, 
  Disc, 
  FileText 
} from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const RepertoireSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<RepertoireCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((playing, trackId) => {
      setIsPlaying(playing);
      setActiveTrackId(trackId);
    });
    return unsubscribe;
  }, []);

  const categories: { id: RepertoireCategory; label: string; count: number }[] = [
    { id: 'all', label: 'Все треки', count: REPERTOIRE_TRACKS.length },
    { id: 'atmosphere', label: 'Атмосфера / Welcome', count: REPERTOIRE_TRACKS.filter(t => t.category === 'atmosphere').length },
    { id: 'russian', label: 'Русские хиты', count: REPERTOIRE_TRACKS.filter(t => t.category === 'russian').length },
    { id: 'foreign', label: 'Зарубежные хиты', count: REPERTOIRE_TRACKS.filter(t => t.category === 'foreign').length },
    { id: 'dance', label: 'Раскачать зал', count: REPERTOIRE_TRACKS.filter(t => t.category === 'dance').length },
    { id: 'rock', label: 'На разрыв / Рок', count: REPERTOIRE_TRACKS.filter(t => t.category === 'rock').length },
    { id: 'slow', label: 'Медляки / Первый танец', count: REPERTOIRE_TRACKS.filter(t => t.category === 'slow').length },
    { id: 'final', label: 'Финал вечера', count: REPERTOIRE_TRACKS.filter(t => t.category === 'final').length },
    { id: 'newyear', label: 'Новый год', count: REPERTOIRE_TRACKS.filter(t => t.category === 'newyear').length },
  ];

  const filteredTracks = REPERTOIRE_TRACKS.filter(track => {
    const matchesCategory = selectedCategory === 'all' || track.category === selectedCategory;
    const matchesSearch = 
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.originalArtist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTogglePlay = (track: Track) => {
    if (activeTrackId === track.id && isPlaying) {
      audioEngine.stop();
    } else {
      audioEngine.playTrack(track.id, track.audioStyle, track.bpm);
    }
  };

  const handleDownloadPDF = () => {
    // Generate text/csv data and trigger download
    const content = `РЕПЕРТУАР КАВЕР-ГРУППЫ NAKAMA (100+ ХИТОВ)\n\n` + 
      REPERTOIRE_TRACKS.map((t, idx) => `${idx + 1}. ${t.title} — ${t.originalArtist} [${t.tag}] (${t.duration})`).join('\n') +
      `\n\nКонтакты: 8-906-980-65-25 (Менеджер Анна) | https://nakamaband.ru`;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'NAKAMA_Band_Repertoire_2025.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getTagBadgeColor = (color: string) => {
    switch (color) {
      case 'terracotta': return 'bg-[#9B2F19]/20 text-[#BA371E] border-[#9B2F19]/40';
      case 'olive': return 'bg-[#72734D]/20 text-[#9BB368] border-[#72734D]/40';
      case 'yellow': return 'bg-[#F3A300]/20 text-[#F3A300] border-[#F3A300]/40';
      case 'purple': return 'bg-[#61406F]/25 text-[#D8B4E2] border-[#61406F]/40';
      default: return 'bg-[#3A2312]/40 text-[#F1D8C1] border-[#3A2312]';
    }
  };

  return (
    <section id="repertoire-section" className="py-24 bg-[#140B05] relative overflow-hidden border-t border-[#3A2312]">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B2F19]/40 bg-[#27170E] text-xs text-[#F1D8C1] mb-3">
            <Music className="w-3.5 h-3.5 text-[#F3A300]" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Live Repertoire &bull; 100+ композиций
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Послушайте треки вживую
          </h2>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
            К каждой песне доступен живой аудиофрагмент. Нажмите «Play» на любой карточке, чтобы оценить плотность звука 6 вокалистов и живой ритм-секции.
          </p>
        </div>

        {/* Top Manifesto Box */}
        <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto mb-10 p-5 rounded-2xl bg-[#23150B] border border-[#9B2F19]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#9B2F19]/30 text-[#F3A300] shrink-0">
              <Disc className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-[#F1D8C1] font-medium italic">
                «Каждый кавер NAKAMA — самостоятельное произведение. Мы не копируем оригинал — мы делаем версию, которая звучит объёмнее и глубже.»
              </p>
            </div>
          </div>

          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#3A2312] bg-[#1A1009] hover:bg-[#3A2312] text-xs font-mono text-[#F1D8C1] hover:text-white shrink-0 transition-colors cursor-pointer shadow-md"
            title="Скачать список всех треков для утверждения программы"
          >
            <Download className="w-4 h-4 text-[#F3A300]" />
            <span>Скачать репертуар (.TXT/.PDF)</span>
          </button>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto mb-8">
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#F1D8C1]/40" />
            <input
              type="text"
              placeholder="Поиск по названию песни, исполнителю или настроению (например: Король и Шут, Шатунов, Медляк...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-[#3A2312] bg-[#23150B] text-sm text-[#F1D8C1] placeholder:text-[#F1D8C1]/40 focus:outline-none focus:border-[#9B2F19] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#F1D8C1]/60 hover:text-white font-mono"
              >
                ✕ Очистить
              </button>
            )}
          </div>

          {/* Category Chips Scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#9B2F19] text-white shadow-md shadow-[#9B2F19]/30'
                      : 'border border-[#3A2312] bg-[#23150B]/80 text-[#F1D8C1]/70 hover:bg-[#3A2312] hover:text-white'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Tracks List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
          {filteredTracks.map((track) => {
            const isThisPlaying = activeTrackId === track.id && isPlaying;
            return (
              <div
                key={track.id}
                id={`track-item-${track.id}`}
                className={`p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                  isThisPlaying
                    ? 'border-[#F3A300] bg-gradient-to-r from-[#2A180E] to-[#27170E] shadow-xl shadow-[#9B2F19]/15'
                    : 'border-[#3A2312]/80 bg-[#23150B]/70 hover:border-[#9B2F19]/60 hover:bg-[#27170E]'
                }`}
              >
                {/* Left: Play Button + Sound Waves */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <button
                    onClick={() => handleTogglePlay(track)}
                    className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-all cursor-pointer ${
                      isThisPlaying
                        ? 'bg-[#F3A300] text-[#1A1009] scale-105 shadow-md shadow-[#F3A300]/40'
                        : 'bg-[#9B2F19] hover:bg-[#BA371E] text-white'
                    }`}
                    aria-label={`Воспроизвести демо ${track.title}`}
                  >
                    {isThisPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-[#F1D8C1] truncate">
                        {track.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#F1D8C1]/60 truncate mt-0.5">
                      Оригинал: {track.originalArtist}
                    </p>
                  </div>
                </div>

                {/* Right: Tag & Duration */}
                <div className="flex flex-col items-end shrink-0 gap-1.5">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${getTagBadgeColor(track.tagColor)}`}>
                    {track.tag}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#F1D8C1]/50">
                    {isThisPlaying ? (
                      <div className="flex items-center gap-0.5 h-2.5">
                        <span className="w-0.5 bg-[#F3A300] wave-bar-1 inline-block" />
                        <span className="w-0.5 bg-[#F3A300] wave-bar-2 inline-block" />
                        <span className="w-0.5 bg-[#F3A300] wave-bar-3 inline-block" />
                      </div>
                    ) : (
                      <span>{track.duration}</span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {filteredTracks.length === 0 && (
          <div className="text-center py-16 text-[#F1D8C1]/60 text-sm">
            По вашему запросу «{searchQuery}» треков не найдено. Напишите нам, и мы подготовим специальный кавер под ваш вечер!
          </div>
        )}

      </div>
    </section>
  );
};
