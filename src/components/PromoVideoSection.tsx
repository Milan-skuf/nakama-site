import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Film, 
  Maximize2, 
  Sparkles,
  Music,
  Tv
} from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const PromoVideoSection: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeVideoTab, setActiveVideoTab] = useState<'promo' | 'wedding' | 'corporate'>('promo');
  const [showVideoModal, setShowVideoModal] = useState(false);

  const videoSources = {
    promo: {
      title: 'Главное шоу-промо NAKAMA 2025/2026',
      duration: '03:15',
      location: 'Концертный зал «Сибирь», Новосибирск',
      poster: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1600&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    wedding: {
      title: 'Свадебный кино-сет и первый танец под живой ансамбль',
      duration: '02:40',
      location: 'Шатер «Река», Бердск',
      poster: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1600&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    corporate: {
      title: 'Энергетический рок & диско взрыв для 400 гостей',
      duration: '04:10',
      location: 'Grand Ballroom, Кемерово',
      poster: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    }
  };

  const currentVid = videoSources[activeVideoTab];

  const toggleSoundTrack = () => {
    if (isPlayingAudio) {
      audioEngine.stop();
      setIsPlayingAudio(false);
    } else {
      audioEngine.playTrack('t1', 'funk', 124);
      setIsPlayingAudio(true);
    }
  };

  return (
    <section id="promo-video-section" className="py-20 bg-[#140B05] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9B2F19]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F3A300]/40 bg-[#27170E] text-xs text-[#F3A300] mb-3">
            <Tv className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px] uppercase tracking-widest">Live Promo Reel</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Послушайте, как мы звучим
          </h2>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75">
            Живые съемки с настоящих событий. Без фонограмм, автотюна и студийного дубляжа.
          </p>
        </div>

        {/* Video Type Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
          {(['promo', 'wedding', 'corporate'] as const).map((tabKey) => {
            const labels = {
              promo: 'Шоу-промо',
              wedding: 'На свадьбе',
              corporate: 'На корпоративе'
            };
            return (
              <button
                key={tabKey}
                id={`video-tab-${tabKey}`}
                onClick={() => setActiveVideoTab(tabKey)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeVideoTab === tabKey
                    ? 'bg-[#9B2F19] text-white shadow-lg shadow-[#9B2F19]/30'
                    : 'border border-[#3A2312] bg-[#27170E]/60 text-[#F1D8C1]/70 hover:bg-[#3A2312] hover:text-white'
                }`}
              >
                {labels[tabKey]}
              </button>
            );
          })}
        </div>

        {/* Cinema Video Frame Box */}
        <div className="relative rounded-2xl overflow-hidden border border-[#3A2312] bg-[#27170E] shadow-2xl group">
          
          {/* Cinema Clapper Top Bar */}
          <div className="bg-[#1A1009] px-4 py-2.5 border-b border-[#3A2312] flex items-center justify-between text-xs font-mono text-[#F1D8C1]/60">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[#9B2F19] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#9B2F19] animate-pulse" />
                NAKAMA PRODUCTION
              </span>
              <span className="hidden sm:inline text-[#F1D8C1]/30">|</span>
              <span className="hidden sm:inline">{currentVid.title}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#F3A300]">{currentVid.duration}</span>
              <span>4K CINEMA / 60FPS</span>
            </div>
          </div>

          {/* Video Poster with Interactive Play Action */}
          <div className="relative aspect-video max-h-[560px] w-full overflow-hidden bg-black">
            <img
              src={currentVid.poster}
              alt="Кавер-группа NAKAMA видео промо"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140B05] via-transparent to-[#140B05]/60" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                id="promo-play-btn"
                onClick={toggleSoundTrack}
                className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#9B2F19]/90 hover:bg-[#BA371E] text-white shadow-2xl shadow-[#9B2F19]/60 hover:scale-110 active:scale-95 transition-all cursor-pointer mb-4"
                aria-label="Воспроизвести промо-ролик"
              >
                {isPlayingAudio ? (
                  <Pause className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
                ) : (
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
                )}
                <span className="absolute -inset-2 rounded-full border border-[#9B2F19]/50 animate-ping pointer-events-none" />
              </button>

              <div className="text-sm sm:text-base font-semibold text-[#F1D8C1] drop-shadow-md">
                {isPlayingAudio ? 'Звучит авторский лайв-саундтрек NAKAMA' : 'Нажмите, чтобы включить звук и видеоряд'}
              </div>
              <div className="text-xs text-[#F1D8C1]/70 font-mono mt-1">
                {currentVid.location}
              </div>
            </div>

            {/* Bottom In-Video Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 bg-[#1A1009]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#3A2312]/60 text-xs font-mono text-[#F1D8C1]">
                <Music className="w-3.5 h-3.5 text-[#F3A300]" />
                <span>6 LIVE VOCALS + RHYTHM SECTION</span>
              </div>

              <button
                onClick={toggleSoundTrack}
                className="pointer-events-auto flex items-center gap-2 bg-[#1A1009]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#3A2312]/60 hover:bg-[#3A2312] text-xs text-[#F1D8C1] transition-colors cursor-pointer"
              >
                {isPlayingAudio ? <Volume2 className="w-4 h-4 text-[#F3A300]" /> : <VolumeX className="w-4 h-4 text-[#F1D8C1]/60" />}
                <span>{isPlayingAudio ? 'Звук ВКЛ' : 'Включить аудио'}</span>
              </button>
            </div>
          </div>

          {/* Under Video Quote from Spec */}
          <div className="p-6 sm:p-8 bg-[#27170E] border-t border-[#3A2312] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="max-w-2xl">
              <p className="text-sm sm:text-base text-[#F1D8C1] font-medium italic leading-relaxed">
                «Каждый кавер NAKAMA — самостоятельное произведение. Мы не копируем оригинал, а создаем версию, которая звучит интереснее.»
              </p>
              <span className="text-xs text-[#F3A300] font-mono mt-1 block">
                — Музыкальный манифест NAKAMA
              </span>
            </div>

            <button
              onClick={() => {
                const repertoireEl = document.getElementById('repertoire-section');
                if (repertoireEl) repertoireEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-full border border-[#9B2F19] bg-[#9B2F19]/20 hover:bg-[#9B2F19] text-[#F1D8C1] hover:text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer"
            >
              Слушать весь репертуар →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
