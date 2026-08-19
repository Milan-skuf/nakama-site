import React, { useState } from 'react';
import { PACKAGES, FAQ_ITEMS } from '../data/bandData';
import { PackagePlan } from '../types';
import { 
  Check, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  ShieldCheck, 
  Users, 
  Radio, 
  ArrowRight 
} from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackagePlan) => void;
  onOpenBooking: () => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  onOpenBooking,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Interactive Calculator State
  const [selectedBasePkg, setSelectedBasePkg] = useState<string>('luxury');
  const [extraHours, setExtraHours] = useState<number>(0);
  const [cityDistance, setCityDistance] = useState<string>('nsk');
  const [addWelcomeDJ, setAddWelcomeDJ] = useState<boolean>(false);

  const calculateTotal = () => {
    let base = selectedBasePkg === 'luxury' ? 98000 : 83000;
    base += extraHours * 25000;
    if (cityDistance === 'kemerovo_tomsk') base += 20000; // Transfer & logistics
    if (cityDistance === 'krasnoyarsk_altay') base += 35000;
    if (cityDistance === 'russia_flight') base += 60000;
    if (addWelcomeDJ) base += 15000;
    return base;
  };

  return (
    <section id="packages-section" className="py-20 bg-[#1A1009] relative overflow-hidden">
      
      {/* Decorative ambient spots */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#9B2F19]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F3A300]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#9B2F19]/40 bg-[#27170E] text-xs text-[#F1D8C1] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3A300]" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Честные и фиксированные цены
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Пакеты и стоимость вечера
          </h1>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
            Никаких скрытых условий и цен «по запросу». В каждый пакет уже включены 10 музыкантов на сцене, собственный звукорежиссёр и выезд со своим концертным оборудованием.
          </p>
        </div>

        {/* 2 Main Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 w-full">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            // Clean single line price with non-breaking space
            const formattedPrice = pkg.priceNum.toLocaleString('ru-RU') + '\u00A0₽';

            return (
              <div
                key={pkg.id}
                id={`package-card-${pkg.id}`}
                className="group relative rounded-3xl border border-[#3A2312] bg-[#23150B] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#9B2F19] hover:bg-gradient-to-b hover:from-[#2A170E] hover:to-[#1F1109] hover:shadow-2xl hover:shadow-[#9B2F19]/25"
              >
                {/* Package Title & Price (Strictly on One Line) */}
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-display font-bold text-[#F1D8C1] mb-2 group-hover:text-white transition-colors whitespace-nowrap">
                    {pkg.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F1D8C1]/75 mb-6 min-h-[38px] leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  {/* Price Box with non-breaking single line formatting */}
                  <div className="flex flex-wrap sm:flex-nowrap items-baseline justify-between gap-3 pb-6 border-b border-[#3A2312]">
                    <div className="whitespace-nowrap font-display font-black text-4xl sm:text-5xl text-[#F1D8C1] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F1D8C1] group-hover:via-[#F3A300] group-hover:to-[#BA371E] transition-all">
                      {formattedPrice}
                    </div>
                    <span className="text-xs text-[#F1D8C1]/60 font-mono shrink-0">
                      / за всё выступление
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8 flex-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#F3A300] mb-2">
                    Что входит в пакет:
                  </div>
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F1D8C1]/90 leading-snug">
                      <div className="p-0.5 rounded-full bg-[#3A2312] group-hover:bg-[#9B2F19]/40 text-[#F3A300] shrink-0 mt-0.5 transition-colors">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended For Box */}
                <div className="p-4 rounded-2xl bg-[#1A1009]/80 border border-[#3A2312] text-xs text-[#F1D8C1]/80 leading-relaxed mb-8 group-hover:border-[#9B2F19]/40 transition-colors">
                  <span className="font-semibold text-[#F3A300] block mb-1">Идеально для:</span>
                  {pkg.recommendedFor}
                </div>

                {/* Booking CTA Button */}
                <button
                  id={`pkg-select-btn-${pkg.id}`}
                  onClick={() => {
                    onSelectPackage(pkg);
                    onOpenBooking();
                  }}
                  className="w-full py-4 rounded-2xl font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center justify-center transition-all cursor-pointer border border-[#3A2312] bg-[#27170E] text-[#F1D8C1] hover:bg-[#9B2F19] hover:border-[#9B2F19] hover:text-white hover:shadow-xl hover:shadow-[#9B2F19]/40"
                >
                  Забронировать этот пакет
                </button>
              </div>
            );
          })}
        </div>

        {/* Both Packages Guarantee Bar */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-[#3A2312] bg-[#27170E]/80 p-6 sm:p-8 mb-16">
          <h3 className="text-base sm:text-lg font-display font-bold text-[#F1D8C1] text-center mb-6">
            Гарантировано в обоих пакетах NAKAMA
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-xl bg-[#9B2F19]/20 text-[#BA371E] mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-[#F1D8C1] mb-1">Полный состав 10 человек</div>
              <p className="text-xs text-[#F1D8C1]/60">Никаких урезанных составов и экономии на звуке</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-3 rounded-xl bg-[#F3A300]/20 text-[#F3A300] mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-[#F1D8C1] mb-1">Штатный звукорежиссёр</div>
              <p className="text-xs text-[#F1D8C1]/60">Личный цифровой пульт, мониторинг и баланс зала</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-3 rounded-xl bg-[#72734D]/20 text-[#9BB368] mb-3">
                <Radio className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-[#F1D8C1] mb-1">Живой звук 100%</div>
              <p className="text-xs text-[#F1D8C1]/60">Только живая энергетика без записанных фонограмм</p>
            </div>
          </div>
        </div>

        {/* Interactive Event Cost Calculator */}
        <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto rounded-3xl border border-[#9B2F19]/40 bg-[#23150B] p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F1D8C1] mb-2">
              Калькулятор сметы выступления
            </h3>
            <p className="text-sm sm:text-base text-[#F1D8C1]/80">
              Рассчитайте точную стоимость с учётом города и дополнительных опций
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            
            {/* Step 1: Base Package Selection */}
            <div>
              <label className="text-xs sm:text-sm font-mono uppercase text-[#F3A300] block mb-2.5 font-bold">
                1. Базовый формат
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedBasePkg('basic')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedBasePkg === 'basic'
                      ? 'border-[#9B2F19] bg-[#9B2F19]/25 text-white font-bold shadow-lg shadow-[#9B2F19]/30'
                      : 'border-[#3A2312] bg-[#1A1009] text-[#F1D8C1]/80 hover:border-[#9B2F19]/50'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-semibold mb-1">Базовый минимум (60 мин)</div>
                  <div className="text-base sm:text-lg text-[#F3A300] font-extrabold whitespace-nowrap">83 000 ₽</div>
                </button>

                <button
                  onClick={() => setSelectedBasePkg('luxury')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedBasePkg === 'luxury'
                      ? 'border-[#9B2F19] bg-[#9B2F19]/25 text-white font-bold shadow-lg shadow-[#9B2F19]/30'
                      : 'border-[#3A2312] bg-[#1A1009] text-[#F1D8C1]/80 hover:border-[#9B2F19]/50'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-semibold mb-1">Роскошный максимум (90 мин)</div>
                  <div className="text-base sm:text-lg text-[#F3A300] font-extrabold whitespace-nowrap">98 000 ₽</div>
                </button>
              </div>
            </div>

            {/* Step 2: City / Location */}
            <div>
              <label className="text-xs sm:text-sm font-mono uppercase text-[#F3A300] block mb-2.5 font-bold">
                2. Город мероприятия
              </label>
              <select
                value={cityDistance}
                onChange={(e) => setCityDistance(e.target.value)}
                className="w-full p-4 rounded-xl border border-[#3A2312] bg-[#1A1009] text-[#F1D8C1] text-xs sm:text-sm focus:outline-none focus:border-[#9B2F19] cursor-pointer"
              >
                <option value="nsk">Новосибирск и область (Без доплат за трансфер)</option>
                <option value="kemerovo_tomsk">Кемерово / Томск / Барнаул (+ 20 000 ₽)</option>
                <option value="krasnoyarsk_altay">Красноярск / Горный Алтай (+ 35 000 ₽)</option>
                <option value="russia_flight">Москва / СПб / Сочи / Другие города (+ 60 000 ₽)</option>
              </select>
            </div>

            {/* Step 3: Extra Performance Sets */}
            <div>
              <label className="text-xs sm:text-sm font-mono uppercase text-[#F3A300] block mb-2.5 font-bold">
                3. Дополнительные блоки: {extraHours > 0 ? `+${extraHours * 30} мин` : 'Нет'}
              </label>
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={extraHours}
                onChange={(e) => setExtraHours(parseInt(e.target.value))}
                className="w-full accent-[#9B2F19] cursor-pointer h-2.5 bg-[#1A1009] rounded-lg"
              />
              <div className="flex justify-between text-xs font-mono text-[#F1D8C1]/70 mt-1.5">
                <span>0</span>
                <span>+30 мин (+25k)</span>
                <span>+60 мин (+50k)</span>
                <span>+90 мин (+75k)</span>
              </div>
            </div>

            {/* Step 4: DJ / Light Addon */}
            <div className="flex flex-col justify-end">
              <label 
                onClick={() => setAddWelcomeDJ(!addWelcomeDJ)}
                className="flex items-center gap-3.5 p-4 rounded-xl border border-[#3A2312] bg-[#1A1009] cursor-pointer hover:border-[#9B2F19] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={addWelcomeDJ}
                  onChange={(e) => setAddWelcomeDJ(e.target.checked)}
                  className="accent-[#9B2F19] w-5 h-5 cursor-pointer"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#F1D8C1]">Спецсет сценического света & DJ-сопровождение</div>
                  <div className="text-xs text-[#F3A300] font-semibold whitespace-nowrap">+15 000 ₽</div>
                </div>
              </label>
            </div>

          </div>

          {/* Calculator Result Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1009] border border-[#9B2F19] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="text-xs sm:text-sm font-mono uppercase text-[#F1D8C1]/70 mb-1">Итоговая ориентировочная стоимость:</div>
              <div className="text-4xl sm:text-5xl font-display font-black text-[#F3A300] whitespace-nowrap tracking-tight">
                {calculateTotal().toLocaleString('ru-RU')}&nbsp;₽
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#9B2F19] hover:bg-[#BA371E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl shadow-[#9B2F19]/40 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Зафиксировать эту цену</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-[#F1D8C1] mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#F3A300]" />
              <span>Часто задаваемые вопросы</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#F1D8C1]/70">
              Всё, что важно знать организаторам и заказчикам перед бронированием
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  id={`faq-item-${idx}`}
                  className="rounded-2xl border border-[#3A2312] bg-[#23150B] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#F1D8C1]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F3A300] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#F1D8C1]/80 leading-relaxed border-t border-[#3A2312]/50 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
