import React from 'react';
import { 
  CheckCircle2,
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const benefits = [
    {
      id: 'live-sound',
      sceneTag: 'SCENE 01',
      ticketStyle: 'border-[#9B2F19]/60 bg-gradient-to-b from-[#9B2F19]/25 to-[#27170E]',
      accentColor: 'text-[#9B2F19]',
      badgeBg: 'bg-[#9B2F19] text-white',
      title: 'Живой звук без компромиссов',
      description: 'Никаких минусовок и записанных дорожек. Только то, что рождает мурашки и настоящий отклик зала.',
      highlight: '100% Live Performance'
    },
    {
      id: 'six-vocals',
      sceneTag: 'BACKSTAGE',
      ticketStyle: 'border-[#72734D]/60 bg-gradient-to-b from-[#72734D]/25 to-[#27170E]',
      accentColor: 'text-[#9BB368]',
      badgeBg: 'bg-[#72734D] text-white',
      title: '6 вокалистов на сцене',
      description: 'Полноценный вокальный ансамбль — не солист с подпевками, а живое многоголосое звучание с объёмом и кинематографичной глубиной.',
      highlight: 'Полифония и мощь'
    },
    {
      id: 'sound-engineer',
      sceneTag: 'AFTER SHOW',
      ticketStyle: 'border-[#F3A300]/40 bg-gradient-to-b from-[#3A2312]/70 to-[#27170E]',
      accentColor: 'text-[#F3A300]',
      badgeBg: 'bg-[#F3A300] text-[#1A1009]',
      title: 'Свой звукорежиссёр',
      description: 'Качество звука на вашем мероприятии под нашей личной ответственностью. Мы не перекладываем это на площадку и не ищем виноватых.',
      highlight: 'Цифровой микшер в туре'
    },
    {
      id: 'script-integration',
      sceneTag: 'SPOTLIGHT',
      ticketStyle: 'border-[#61406F]/60 bg-gradient-to-b from-[#61406F]/30 to-[#27170E]',
      accentColor: 'text-[#C9A2DB]',
      badgeBg: 'bg-[#61406F] text-white',
      title: 'Работаем со сценарием',
      description: 'Созваниваемся с организатором и ведущим заранее — чтобы музыка попадала точно в нужный момент вечера, а не просто звучала фоном.',
      highlight: 'Драматургия как в кино'
    }
  ];

  return (
    <section id="why-us-section" className="py-20 bg-[#1A1009] relative overflow-hidden border-t border-[#3A2312]/60">
      
      {/* Decorative film reel background grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none film-grain" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Почему выбирают NAKAMA
          </h2>
          
          <p className="text-base sm:text-lg text-[#F1D8C1]/80 leading-relaxed">
            Мы не просто играем песни по списку. Мы создаём безупречное музыкальное оформление события, где каждый участник и каждая нота работают на эмоции ваших гостей.
          </p>
        </div>

        {/* 4 Ticket Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            return (
              <div
                key={benefit.id}
                id={`benefit-ticket-${benefit.id}`}
                className={`relative rounded-3xl border p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 ${benefit.ticketStyle}`}
              >
                {/* Cinema Ticket Stub Header */}
                <div className="flex items-center justify-between border-b border-[#F1D8C1]/15 pb-4 mb-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase ${benefit.badgeBg}`}>
                    {benefit.sceneTag}
                  </span>
                  <span className="font-mono text-xs text-[#F1D8C1]/60">
                    0{index + 1} / 04
                  </span>
                </div>

                {/* Ticket Body */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-bold text-[#F1D8C1] mb-3 leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#F1D8C1]/80 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>

                {/* Ticket Footer / Perforation simulation */}
                <div className="pt-4 border-t border-dashed border-[#F1D8C1]/20 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-[#F1D8C1] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F3A300]" />
                    {benefit.highlight}
                  </span>
                  <span className="text-[10px] font-mono text-[#F1D8C1]/50 uppercase">
                    NAKAMA LIVE
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
