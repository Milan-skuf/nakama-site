import React from 'react';
import { X, Sparkles, Palette, Type, Disc, Ticket, HeartHandshake, Check } from 'lucide-react';

interface BrandbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandbookModal: React.FC<BrandbookModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const colors = [
    { name: 'Terracotta Red', hex: '#9B2F19', rgb: '155, 47, 25', role: 'Главный брендовый акцент, энергия, страсть' },
    { name: 'Night Brown', hex: '#1A1009', rgb: '26, 16, 9', role: 'Глубокий кинематографичный фон сцены' },
    { name: 'Warm Beige', hex: '#F1D8C1', rgb: '241, 216, 193', role: 'Основной контрастный текст и заголовки' },
    { name: 'Golden Yellow', hex: '#F3A300', rgb: '243, 163, 0', role: 'Свет софитов, теги, интерактивные бейджи' },
    { name: 'Sage Olive', hex: '#72734D', rgb: '114, 115, 77', role: 'Спокойствие, лаунж-блок, гармония' },
    { name: 'Velvet Purple', hex: '#61406F', rgb: '97, 64, 111', role: 'Спектакль, диско-драйв, рок-кульминация' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="max-w-4xl w-full bg-[#1A1009] border border-[#9B2F19] rounded-3xl p-6 sm:p-10 relative shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full border border-[#3A2312] bg-[#27170E] text-[#F1D8C1] hover:text-white hover:border-[#9B2F19] cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-[#3A2312] pb-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F3A300]/40 bg-[#27170E] text-xs text-[#F3A300] mb-2 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BRANDBOOK NAKAMA 2025/2026</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-[#F1D8C1] flex items-baseline gap-3">
            <span>Фирменный стиль NAKAMA</span>
            <span className="text-xl text-[#9B2F19] font-mono">(仲間)</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#F1D8C1]/70 mt-1">
            Руководство по айдентике, колористике, типографике и визуальным метафорам кавер-группы.
          </p>
        </div>

        {/* 1. Brand Concept */}
        <div className="mb-10">
          <h3 className="text-lg font-display font-bold text-[#F1D8C1] mb-3 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#9B2F19]" />
            <span>1. Смысловое ядро: Японский концепт NAKAMA (仲間)</span>
          </h3>
          <div className="p-5 rounded-2xl bg-[#23150B] border border-[#3A2312] text-xs sm:text-sm text-[#F1D8C1]/85 leading-relaxed space-y-2">
            <p>
              В японской культуре <strong>NAKAMA</strong> — это больше, чем друг. Это соратник и единомышленник, с которым связывает глубокое внутреннее доверие и общий путь.
            </p>
            <p className="text-[#F3A300]">
              Позиционирование на рынке: «Не приглашенные музыканты на фоне, а неотъемлемая эмоциональная часть вашей личной истории».
            </p>
          </div>
        </div>

        {/* 2. Color Palette */}
        <div className="mb-10">
          <h3 className="text-lg font-display font-bold text-[#F1D8C1] mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5 text-[#F3A300]" />
            <span>2. Фирменная палитра</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {colors.map((c, i) => (
              <div key={i} className="p-3.5 rounded-2xl border border-[#3A2312] bg-[#23150B] flex flex-col justify-between">
                <div>
                  <div 
                    className="w-full h-14 rounded-xl mb-3 shadow-inner border border-white/10" 
                    style={{ backgroundColor: c.hex }} 
                  />
                  <div className="text-xs font-bold text-[#F1D8C1] mb-0.5">{c.name}</div>
                  <div className="text-[11px] font-mono text-[#F3A300]">{c.hex}</div>
                </div>
                <div className="text-[10px] text-[#F1D8C1]/60 mt-2 border-t border-[#3A2312] pt-2">
                  {c.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Typography Hierarchy */}
        <div className="mb-10">
          <h3 className="text-lg font-display font-bold text-[#F1D8C1] mb-4 flex items-center gap-2">
            <Type className="w-5 h-5 text-[#9BB368]" />
            <span>3. Типографика</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#23150B] border border-[#3A2312]">
              <div className="text-xs font-mono text-[#F3A300] uppercase mb-1">Заголовки / Display</div>
              <div className="text-xl font-display font-bold text-[#F1D8C1] mb-2">Unbounded</div>
              <p className="text-[11px] text-[#F1D8C1]/60">
                Геометричный, кинематографичный акцидентный шрифт с выразительной динамикой.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#23150B] border border-[#3A2312]">
              <div className="text-xs font-mono text-[#F3A300] uppercase mb-1">Акценты / Рукописный</div>
              <div className="text-2xl font-script text-[#BA371E] mb-2">Caveat / Hamiltoneska</div>
              <p className="text-[11px] text-[#F1D8C1]/60">
                Живой рукописный почерк для персональных цитат, подписей и эмоций.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#23150B] border border-[#3A2312]">
              <div className="text-xs font-mono text-[#F3A300] uppercase mb-1">Основной текст / Body</div>
              <div className="text-lg font-sans font-medium text-[#F1D8C1] mb-2">Manrope</div>
              <p className="text-[11px] text-[#F1D8C1]/60">
                Ультра-читаемый современный гротеск для больших абзацев и описания райдера.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Visual Devices: Tickets & Film Badges */}
        <div>
          <h3 className="text-lg font-display font-bold text-[#F1D8C1] mb-3 flex items-center gap-2">
            <Ticket className="w-5 h-5 text-[#D8B4E2]" />
            <span>4. Графические паттерны: Билеты и винил</span>
          </h3>
          <div className="p-5 rounded-2xl bg-[#23150B] border border-[#3A2312] text-xs text-[#F1D8C1]/80 leading-relaxed">
            Сайт использует метафору винтажного кинобилета с круглыми боковыми вырезами, таймкодами («SCENE 01 / 07»), виниловыми пластинками (33 RPM) и эффектом зернистой киноленты (Film Grain).
          </div>
        </div>

      </div>
    </div>
  );
};
