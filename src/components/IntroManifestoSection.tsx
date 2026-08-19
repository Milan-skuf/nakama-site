import React from 'react';
import { 
  ArrowRight, 
  Send, 
  Volume2, 
  Users, 
  Mic, 
  ShieldCheck, 
  MapPin,
  Sparkles,
  Music2
} from 'lucide-react';
import { PageRoute } from '../types';
import { audioEngine } from '../utils/audioEngine';

interface IntroManifestoSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const IntroManifestoSection: React.FC<IntroManifestoSectionProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const handleQuickDemoPlay = () => {
    audioEngine.playTrack('manifesto-demo', 'funk', 124);
  };

  return (
    <section 
      id="intro-manifesto-section" 
      className="py-20 sm:py-28 bg-[#160D07] relative overflow-hidden border-t border-b border-[#3A2312]"
    >
      {/* Subtle background ambient lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9B2F19]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#F3A300]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-20 pointer-events-none film-grain" />

      <div className="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        <div className="max-w-3xl lg:max-w-4xl text-left">
          
          {/* Transferred Top Pill Badge from Hero */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full border border-[#9B2F19]/50 bg-[#27170E]/85 backdrop-blur-md text-xs text-[#F1D8C1] shadow-xl shadow-black/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F3A300] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#F1D8C1]/90">
              СИБИРЬ &bull; ВСЯ РОССИЯ
            </span>
            <span className="text-[#9B2F19] font-bold">/</span>
            <span className="text-xs font-semibold text-[#F3A300]">10 человек на сцене</span>
          </div>

          {/* Top Category / Status Tracked Label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#F1D8C1]/75">
              NAKAMA BAND &bull; ЖИВОЙ САУНДТРЕК
            </span>
          </div>

          {/* Main Expressive Headline with handwritten accent */}
          <div className="relative mb-6">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#FBF5F0] tracking-tight leading-[1.08]">
              ...и это наш <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBF5F0] via-[#F1D8C1] to-[#F3A300]">
                живой звук
              </span>
            </h2>

            {/* Handwritten playful accent note */}
            <div className="inline-flex sm:absolute sm:right-4 sm:top-2 lg:right-16 lg:top-0 mt-3 sm:mt-0 rotate-[-3deg] px-3.5 py-1.5 rounded-full bg-[#27170E]/90 border border-[#9B2F19]/40 backdrop-blur-md shadow-xl">
              <span 
                className="text-lg sm:text-xl font-script text-[#F3A300]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                10 музыкантов на сцене :)
              </span>
            </div>
          </div>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-[#F1D8C1]/85 font-normal leading-relaxed mb-8 max-w-2xl">
            Живая музыка, которая усиливает важные моменты вечера, а не прерывает их. 
            Создаем саундтрек для свадеб, статусных премий и масштабных корпоративов по всей России.
          </p>

          {/* Action Buttons Trio */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            
            {/* Primary High-Contrast Light Button */}
            <button
              id="intro-catalog-btn"
              onClick={() => onNavigate('repertoire')}
              className="px-8 py-4 rounded-xl bg-[#FBF5F0] hover:bg-white text-[#120A04] text-sm sm:text-base font-bold uppercase tracking-wider shadow-2xl shadow-black/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <span>Смотреть репертуар</span>
              <ArrowRight className="w-4 h-4 text-[#120A04]" />
            </button>

            {/* Secondary Dark / Telegram Button */}
            <a
              id="intro-telegram-btn"
              href="https://t.me/nakamaband"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl border border-[#3A2312] bg-[#1F120A]/90 hover:bg-[#2C1A0E] text-[#F1D8C1] text-sm sm:text-base font-semibold tracking-wider hover:border-[#9B2F19]/60 transition-all cursor-pointer text-center flex items-center justify-center gap-2.5 backdrop-blur-sm"
            >
              <Send className="w-4 h-4 text-[#2AABEE]" />
              <span>Написать в Telegram</span>
            </a>

            {/* Live Audio Demo Button */}
            <button
              id="intro-demo-audio-btn"
              onClick={handleQuickDemoPlay}
              className="px-6 py-4 rounded-xl border border-[#F3A300]/30 bg-[#F3A300]/10 hover:bg-[#F3A300]/20 text-[#F3A300] text-sm sm:text-base font-medium transition-all cursor-pointer flex items-center justify-center gap-2.5"
              title="Послушать живое демо прямо сейчас"
            >
              <Volume2 className="w-4 h-4 text-[#F3A300]" />
              <span>Слушать демо</span>
            </button>
          </div>

          {/* Bottom Bulleted Trust Ticker in Uppercase */}
          <div className="pt-6 border-t border-[#3A2312]/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#F1D8C1]/75">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#BA371E]" />
              <span>100% живой звук без плюса</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F3A300]" />
              <span>6 уникальных вокалов</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9BB368]" />
              <span>Свой звукорежиссёр</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D8B4E2]" />
              <span>Выезд по всей России</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
