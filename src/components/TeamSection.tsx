import React, { useState } from 'react';
import { BAND_MEMBERS } from '../data/bandData';
import { BandMember } from '../types';
import { Users, Mic2, Music, Sliders, Sparkles } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'vocal' | 'rhythm' | 'sound'>('all');
  const [selectedMember, setSelectedMember] = useState<BandMember | null>(null);

  const filteredMembers = BAND_MEMBERS.filter(member => {
    if (activeCategory === 'all') return true;
    return member.category === activeCategory;
  });

  return (
    <section id="team-section" className="py-24 bg-[#1A1009] relative overflow-hidden border-t border-[#3A2312]">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B2F19]/40 bg-[#27170E] text-xs text-[#F1D8C1] mb-3">
            <Users className="w-3.5 h-3.5 text-[#F3A300]" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Ансамбль &bull; 10 Человек
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Состав группы NAKAMA
          </h2>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
            Настоящие живые люди, которым можно доверить важнейший вечер. Наведите курсор на участника, чтобы увидеть цветную фотографию, инструмент и роль в ансамбле.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
          {[
            { key: 'all', label: 'Весь состав (10)', icon: Users },
            { key: 'vocal', label: 'Вокальный ансамбль (6)', icon: Mic2 },
            { key: 'rhythm', label: 'Ритм-секция (3)', icon: Music },
            { key: 'sound', label: 'Звукорежиссёр (1)', icon: Sliders },
          ].map(cat => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                id={`team-cat-${cat.key}`}
                onClick={() => setActiveCategory(cat.key as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#9B2F19] text-white shadow-lg shadow-[#9B2F19]/30'
                    : 'border border-[#3A2312] bg-[#27170E]/70 text-[#F1D8C1]/70 hover:bg-[#3A2312] hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Members Grid (B&W to Color on hover) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              id={`member-card-${member.id}`}
              onClick={() => setSelectedMember(member)}
              className="group relative rounded-2xl overflow-hidden border border-[#3A2312] bg-[#27170E] aspect-[3/4] flex flex-col justify-end cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#9B2F19]/20 hover:border-[#9B2F19]/60 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Photo: Black & White by default, color on hover */}
              <img
                src={member.image}
                alt={`${member.name} — ${member.role} кавер-группы NAKAMA`}
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140B05] via-[#140B05]/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

              {/* Cinema Frame Corner Stamps */}
              <div className="absolute top-3 left-3 text-[9px] font-mono text-white/50 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                {member.category === 'vocal' ? 'VOCAL' : member.category === 'rhythm' ? 'RHYTHM' : 'SOUND'}
              </div>

              {/* Member Card Info */}
              <div className="relative z-10 p-4 text-left">
                <span className="text-[10px] font-mono text-[#F3A300] uppercase tracking-wider block mb-0.5">
                  {member.instrument}
                </span>
                <h3 className="text-sm sm:text-base font-display font-bold text-white leading-tight group-hover:text-[#F1D8C1] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] text-[#F1D8C1]/80 mt-1 line-clamp-2 leading-tight">
                  {member.role}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-[#9B2F19] text-white shadow-md">
                <Sparkles className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Member Details Modal / Banner */}
        {selectedMember && (
          <div 
            id="member-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
            onClick={() => setSelectedMember(null)}
          >
            <div 
              className="max-w-xl w-full bg-[#27170E] border border-[#9B2F19] rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-[#F1D8C1]/60 hover:text-white text-sm font-mono px-3 py-1 rounded-full border border-[#3A2312] bg-[#1A1009]"
              >
                ✕ Закрыть
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <img 
                  src={selectedMember.colorImage} 
                  alt={selectedMember.name} 
                  className="w-32 h-32 rounded-2xl object-cover border-2 border-[#9B2F19] shadow-xl"
                />
                <div>
                  <div className="text-xs font-mono uppercase text-[#F3A300] tracking-widest mb-1">
                    {selectedMember.instrument}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#F1D8C1] mb-1">
                    {selectedMember.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#BA371E] mb-4">
                    {selectedMember.role}
                  </div>
                  <p className="text-sm text-[#F1D8C1]/85 leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
