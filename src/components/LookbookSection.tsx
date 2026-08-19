import React, { useState } from 'react';
import { COSTUME_LOOKS } from '../data/bandData';
import { Sparkles, Eye, Shirt, Palette } from 'lucide-react';

export const LookbookSection: React.FC = () => {
  return (
    <section id="lookbook-section" className="py-24 bg-[#140B05] relative overflow-hidden border-t border-[#3A2312]">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F3A300]/40 bg-[#27170E] text-xs text-[#F3A300] mb-3">
            <Shirt className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Сценические образы
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Lookbook: Стиль под ваш вечер
          </h2>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
            Мы согласовываем костюмы заранее в соответствии с дресс-кодом вашего события. Никаких разномастных футболок — только выверенный кинематографичный стиль всей группы из 10 человек.
          </p>
        </div>

        {/* 3 Looks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COSTUME_LOOKS.map((look, index) => {
            return (
              <div
                key={look.id}
                id={`lookbook-card-${look.id}`}
                className="group rounded-3xl border border-[#3A2312] bg-[#23150B] overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between hover:border-[#9B2F19] hover:bg-[#27170E] hover:shadow-2xl hover:shadow-[#9B2F19]/25 hover:scale-[1.02]"
              >
                {/* Image Container with Film Frame Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={look.image}
                    alt={`Lookbook NAKAMA: ${look.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#27170E] via-transparent to-black/30" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#1A1009]/80 backdrop-blur-md text-[#F3A300] border border-[#3A2312]">
                      LOOK 0{index + 1}
                    </span>
                  </div>

                  {/* Palette Swatches on image */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#1A1009]/80 backdrop-blur-md p-1.5 rounded-full border border-[#3A2312]">
                    {look.palette.map((color, cIdx) => (
                      <span
                        key={cIdx}
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#F1D8C1] mb-1">
                      {look.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#BA371E] mb-3">
                      {look.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[#F1D8C1]/75 leading-relaxed mb-4">
                      {look.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#3A2312] text-[11px] text-[#F3A300] font-mono flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{look.suitableFor}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
