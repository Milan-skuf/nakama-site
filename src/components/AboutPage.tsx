import React from 'react';
import { PageRoute } from '../types';
import { EnsembleSection } from './EnsembleSection';
import { TeamSection } from './TeamSection';
import { PhilosophySection } from './PhilosophySection';
import { LookbookSection } from './LookbookSection';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="pt-16">
      
      {/* Page Hero Header */}
      <section className="py-20 bg-gradient-to-b from-[#140B05] to-[#1A1009] border-b border-[#3A2312] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F1D8C1] tracking-tight mb-5">
            10 музыкантов. 6 уникальных вокалов.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F1D8C1]/85 max-w-2xl mx-auto leading-relaxed">
            Мы не просто играем хиты — мы создаём кинематографичный саундтрек вашего вечера. Узнайте, как рождается фирменное многоголосие и кто стоит за каждым инструментом на сцене.
          </p>
        </div>
      </section>

      {/* 1. Ensemble & Audio Mixer Concept */}
      <EnsembleSection onNavigate={onNavigate} />

      {/* 2. Band Members Gallery (10 Artists with B&W to Color Hover) */}
      <TeamSection />

      {/* 3. Philosophy & Japanese NAKAMA Concept */}
      <PhilosophySection />

      {/* 4. Lookbook: 3 Stage Costumes Collections */}
      <LookbookSection />

      {/* Bottom Booking Callout */}
      <section className="py-20 bg-[#140B05] border-t border-[#3A2312]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F1D8C1]">
            Хотите увидеть и услышать NAKAMA на вашем событии?
          </h2>
          <p className="text-base sm:text-lg text-[#F1D8C1]/80 max-w-2xl mx-auto">
            Ознакомьтесь с нашими прозрачными форматами или свяжитесь с концертным директором.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="px-10 py-4 rounded-full bg-[#9B2F19] hover:bg-[#BA371E] text-white text-sm sm:text-base font-bold uppercase tracking-wider shadow-xl shadow-[#9B2F19]/40 cursor-pointer transition-all hover:scale-[1.02]"
            >
              Забронировать дату
            </button>
            <button
              onClick={() => onNavigate('packages')}
              className="px-10 py-4 rounded-full border border-[#3A2312] bg-[#27170E] hover:bg-[#3A2312] text-[#F1D8C1] text-sm sm:text-base font-semibold tracking-wider cursor-pointer transition-all"
            >
              Пакеты и цены
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
