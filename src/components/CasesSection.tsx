import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/bandData';
import { CaseStudy } from '../types';
import { Briefcase, Building, Heart, MapPin, Users, Quote, CheckCircle, ChevronRight } from 'lucide-react';

export const CasesSection: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'corporate' | 'wedding'>('all');

  const filteredCases = CASE_STUDIES.filter(item => {
    if (filterType === 'all') return true;
    return item.eventType === filterType;
  });

  return (
    <section id="cases-section" className="py-24 bg-[#1A1009] relative overflow-hidden border-t border-[#3A2312]">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B2F19]/40 bg-[#27170E] text-xs text-[#F1D8C1] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#F3A300]" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Реальные истории событий
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Кейсы: От задачи к овациям
          </h2>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
            Показываем не просто «нам понравилось», а реальный процесс: как мы согласовываем сценарий с ведущим, решаем задачи площадки и добиваемся восторга гостей.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-3 mb-14">
          {[
            { id: 'all', label: 'Все события' },
            { id: 'corporate', label: 'Корпоративы & Юбилеи' },
            { id: 'wedding', label: 'Свадьбы' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id as any)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filterType === f.id
                  ? 'bg-[#9B2F19] text-white shadow-lg shadow-[#9B2F19]/30'
                  : 'border border-[#3A2312] bg-[#27170E] text-[#F1D8C1]/80 hover:text-white hover:bg-[#3A2312]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cases List */}
        <div className="space-y-12 w-full max-w-6xl 2xl:max-w-7xl mx-auto">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              id={`case-card-${cs.id}`}
              className="rounded-3xl border border-[#3A2312] bg-[#27170E] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 transition-all hover:border-[#9B2F19]/60"
            >
              {/* Left Photo Banner */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-black">
                <img
                  src={cs.image}
                  alt={`Кейс NAKAMA: ${cs.title}`}
                  className="w-full h-full object-cover brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#27170E] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#27170E]" />

                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#1A1009]/80 backdrop-blur-md text-[#F3A300] border border-[#3A2312]">
                    {cs.eventTypeName} &bull; {cs.year}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-xs font-mono text-white/80 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#9B2F19]" /> {cs.city}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#F3A300]" /> {cs.guestsCount} гостей
                  </span>
                </div>
              </div>

              {/* Right Storyline Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F1D8C1] mb-4 leading-tight">
                    {cs.title}
                  </h3>

                  {/* Task -> Solution -> Result Blocks without emojis */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-2xl bg-[#1A1009]/90 border border-[#3A2312]">
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#F3A300] block mb-1.5">
                        Задача:
                      </span>
                      <p className="text-sm sm:text-base text-[#F1D8C1]/90 leading-relaxed">
                        {cs.task}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#1A1009]/90 border border-[#3A2312]">
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#9BB368] block mb-1.5">
                        Что сделали:
                      </span>
                      <p className="text-sm sm:text-base text-[#F1D8C1]/90 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#1A1009]/90 border border-[#9B2F19]/50">
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#BA371E] block mb-1.5">
                        Результат:
                      </span>
                      <p className="text-sm sm:text-base text-[#F1D8C1] font-semibold leading-relaxed">
                        {cs.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Organizer Quote */}
                <div className="p-5 rounded-2xl bg-[#1F120A] border-l-4 border-[#9B2F19] flex items-start gap-4">
                  <Quote className="w-7 h-7 text-[#9B2F19] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm sm:text-base text-[#F1D8C1] italic leading-relaxed mb-2.5">
                      «{cs.quote}»
                    </p>
                    <div className="text-xs sm:text-sm font-semibold text-[#F3A300]">
                      {cs.organizer} <span className="text-[#F1D8C1]/60 font-normal">({cs.organizerRole})</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
