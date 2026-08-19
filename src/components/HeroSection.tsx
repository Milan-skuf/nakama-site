import React from 'react';
import { PageRoute } from '../types';
import { 
  Volume2, 
  ChevronDown
} from 'lucide-react';
import heroBgImg from '../assets/images/hero_studio_centered_ampeg.jpg';
import { BrandLogo } from './BrandLogo';
import { audioEngine } from '../utils/audioEngine';

interface HeroSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const handleQuickDemoPlay = () => {
    audioEngine.playTrack('hero-demo', 'funk', 124);
  };

  const handleScrollToIntro = () => {
    const el = document.getElementById('intro-manifesto-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section" 
      className="relative h-screen min-h-screen min-h-[100dvh] flex flex-col justify-between items-center pt-12 sm:pt-14 pb-8 sm:pb-10 overflow-hidden bg-[#120A04]"
    >
      {/* Background Studio Photo with Atmospheric Cinematic Grading */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBgImg}
          alt="NAKAMA band — студийные инструменты: барабаны Tama, гитары, живой звук"
          className="w-full h-full object-cover object-center scale-[1.05] filter brightness-[0.88] contrast-[1.12] saturate-[1.05]"
        />
        {/* Cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#160D07] via-transparent to-[#120A04]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#120A04]/10 to-[#120A04]/50 pointer-events-none" />
        <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" />
      </div>

      {/* Cinematic Frame Indicators in top corners */}
      <div className="absolute top-14 sm:top-16 left-6 sm:left-12 text-[#F1D8C1]/40 font-mono text-[11px] select-none pointer-events-none hidden lg:block tracking-widest z-10">
        ⌜ NAKAMA LIVE SOUND ENGINE
      </div>
      <div className="absolute top-14 sm:top-16 right-6 sm:right-12 text-[#F1D8C1]/50 font-mono text-[11px] select-none pointer-events-none hidden lg:flex items-center gap-2 tracking-widest z-10">
        <span className="w-2 h-2 rounded-full bg-[#9B2F19] animate-ping" />
        <span>100% REAL INSTRUMENTS ⌝</span>
      </div>

      {/* Centerpiece: Large Logo placed high and centered right above the central black amplifier */}
      <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1600px] mx-auto px-2 sm:px-4 text-center flex flex-col items-center justify-center -mt-1 sm:-mt-2 lg:-mt-3 mb-auto py-0">
        <div className="w-full flex items-center justify-center transform hover:scale-[1.01] transition-transform duration-500">
          <BrandLogo size="hero" className="w-full flex justify-center" />
        </div>
      </div>

      {/* Bottom Bar: Action Pill & Scroll Indicator */}
      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Live Demo Trigger */}
        <button
          onClick={handleQuickDemoPlay}
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#F3A300]/40 bg-[#1E110A]/80 hover:bg-[#F3A300]/20 text-[#F3A300] text-xs font-mono uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer shadow-lg"
          title="Послушать живое демо прямо сейчас"
        >
          <Volume2 className="w-4 h-4 text-[#F3A300] animate-pulse" />
          <span>Слушать живой саундтрек</span>
        </button>

        {/* Center / Right: Scroll Down Indicator */}
        <button
          onClick={handleScrollToIntro}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-[#F1D8C1]/70 hover:text-[#F1D8C1] transition-colors cursor-pointer group"
        >
          <span>Листать вниз</span>
          <ChevronDown className="w-4 h-4 text-[#F3A300] group-hover:translate-y-1 transition-transform" />
        </button>

      </div>
    </section>
  );
};
