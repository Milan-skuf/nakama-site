import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  Download,
  Send,
  MessageCircle,
  Disc3,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { CONTACT_INFO, PACKAGES_DATA } from '../data/content';
import { CONTENT_IMAGES } from '../content';
import { useTheme } from '../context/ThemeContext';

interface EditorialTariffsGridProps {
  onSelectTariff?: (tariffTitle: string) => void;
  showSectionHeader?: boolean;
}

export const EditorialTariffsGrid: React.FC<EditorialTariffsGridProps> = ({
  onSelectTariff,
  showSectionHeader = true,
}) => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'all' | 'basic' | 'maximum'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES_DATA[1]); // Default to Maximum (Hit)

  const handleOpenDetails = (pkgIndex: number) => {
    setSelectedPackage(PACKAGES_DATA[pkgIndex]);
    setIsModalOpen(true);
    if (onSelectTariff) {
      onSelectTariff(PACKAGES_DATA[pkgIndex].title);
    }
  };

  const handleDownloadFile = (fileName: string, title: string) => {
    const textContent = `КАВЕР-ГРУППА NAKAMA • ОФИЦИАЛЬНЫЙ ПРАЙС-ЛИСТ И ТАРИФЫ
Состав: 10 человек (6 вокалистов, барабаны, бас, гитары, клавиши)
Штатный звукорежиссёр: Включён во все форматы
Телефон: ${CONTACT_INFO.phone}
Telegram: ${CONTACT_INFO.telegram}

==================================================
ТАРИФ 01: «БАЗОВЫЙ МИНИМУМ» — 92 000 ₽
• 60 минут живого выступления (1 сет или разбивка на блоки)
• 100+ готовых мировых и российских хитов
• Штатный звукорежиссёр за пультом
• Идеально: корпоративы, дни рождения, клубные вечеринки

ТАРИФ 02: «РОСКОШНЫЙ МАКСИМУМ» — 109 000 ₽ (ХИТ СЕЗОНА)
• 90 минут живого выступления (2 или 3 сета)
• До 5 персональных каверов под ваш вечер
• Интерактивы с залом и сценарий кульминаций
• Персональный звуковой тракт и мониторинг
• Идеально: свадьбы, масштабные корпоративы, статусные гала-вечера
==================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* =========================================================================
          TOP EDITORIAL HEADERS (PARENTHESES STYLE MATCHING REFERENCE)
         ========================================================================= */}
      {showSectionHeader && (
        <div
          className={`flex items-center justify-between text-xs font-mono tracking-widest border-b pb-3 ${
            isDark ? 'text-neutral-400 border-white/15' : 'text-[#686370] border-black/10'
          }`}
        >
          <div className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-[#141218]'}`}>
            <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>&#40;</span>
            <span className="font-bold uppercase tracking-[0.2em]">ТАРИФЫ</span>
            <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>&#41;</span>
          </div>

          <div
            className={`flex items-center gap-2 text-[11px] sm:text-xs ${
              isDark ? 'text-neutral-400' : 'text-[#686370]'
            }`}
          >
            <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>&#40;</span>
            <span
              className={`uppercase tracking-[0.2em] ${
                isDark ? 'text-neutral-300' : 'text-[#4A4652]'
              }`}
            >
              LIVE MUSIC &amp; SERVICE PACKAGES
            </span>
            <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>&#41;</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          THE 3x3 EDITORIAL BENTO GRID ENCLOSURE
         ========================================================================= */}
      <div
        className={`relative rounded-[32px] sm:rounded-[40px] border overflow-hidden shadow-2xl transition-colors duration-300 ${
          isDark
            ? 'border-white/20 bg-[#0A090D]'
            : 'border-black/10 bg-white shadow-xl'
        }`}
      >
        {/* Subtle interior ambient glow */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[130px] pointer-events-none rounded-full ${
            isDark ? 'bg-[#D49D42]/10' : 'bg-[#B88228]/15'
          }`}
        />

        {/* 3x3 Grid with hairline borders */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x relative z-10 ${
            isDark ? 'divide-white/15' : 'divide-black/10'
          }`}
        >
          {/* =====================================================================
              ROW 1, CELL 1 & 2: MACRO ATMOSPHERIC CONCERT CELL (ТАРИФ 01)
              Spans 2 columns on desktop for dramatic editorial scale
             ===================================================================== */}
          <div
            className={`lg:col-span-2 relative min-h-[440px] sm:min-h-[480px] flex flex-col justify-between p-7 sm:p-10 overflow-hidden group border-b ${
              isDark ? 'border-white/15' : 'border-black/10'
            }`}
          >
            {/* Background concert photo with adaptive vignette */}
            <div className="absolute inset-0 z-0">
              <img
                src={CONTENT_IMAGES.dsc00649}
                alt="Концерт NAKAMA — Тариф 01"
                className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ${
                  isDark
                    ? 'brightness-[0.38] contrast-125'
                    : 'brightness-[0.98] contrast-110 saturate-[1.05] opacity-90'
                }`}
              />
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? 'bg-gradient-to-t from-[#0A090D] via-[#0A090D]/65 to-transparent'
                    : 'bg-gradient-to-t from-white via-white/80 to-white/30'
                }`}
              />
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? 'bg-gradient-to-r from-[#0A090D]/90 via-[#0A090D]/50 to-transparent'
                    : 'bg-gradient-to-r from-white/95 via-white/70 to-white/20'
                }`}
              />
              {!isDark && (
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none" />
              )}
            </div>

            {/* Top metadata row inside cell */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm backdrop-blur-md whitespace-nowrap ${
                      isDark
                        ? 'bg-black/60 border-white/15 text-white/90'
                        : 'bg-[#8CA069]/20 border-[#6C8647]/40 text-[#2D4216] font-bold'
                    }`}
                  >
                    <span className="inline-block w-2 h-2 min-w-[8px] min-h-[8px] rounded-full bg-[#6C8647] animate-pulse shrink-0 aspect-square" />
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold inline-flex items-center gap-1.5">
                      <span>[ 35MM</span>
                      <span className="inline-block w-1 h-1 rounded-full bg-current shrink-0 aspect-square opacity-70" />
                      <span>SCENE 01 / TAKE 01 ]</span>
                    </span>
                  </div>

                  {/* Mobile-only tariff label */}
                  <div
                    className={`sm:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono tracking-widest uppercase shadow-sm backdrop-blur-md whitespace-nowrap ${
                      isDark
                        ? 'badge-olive font-bold'
                        : 'bg-[#8CA069]/25 border-[#6C8647]/50 text-[#2D4216] font-bold shadow-xs'
                    }`}
                  >
                    <span className="font-bold">ТАРИФ \01</span>
                    <span className={`inline-block w-1.5 h-1.5 rounded-full shrink-0 aspect-square ${isDark ? 'bg-[#8CA069]' : 'bg-[#6C8647]'}`} />
                    <span>60 МИНУТ</span>
                  </div>
                </div>

                <div>
                  <span
                    className={`text-[11px] font-sans font-medium tracking-wide inline-flex items-center px-3 py-1 rounded-full backdrop-blur-md border whitespace-nowrap ${
                      isDark
                        ? 'text-neutral-200 bg-black/40 border-white/10'
                        : 'text-[#141218] bg-white/85 border-black/10 shadow-sm'
                    }`}
                  >
                    Драйв, живая полифония и плотный саунд
                  </span>
                </div>
              </div>

              <div className="hidden sm:block text-right space-y-1 shrink-0">
                <div
                  className={`inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border text-[10px] font-mono tracking-widest uppercase shadow-sm backdrop-blur-md whitespace-nowrap ${
                    isDark
                      ? 'badge-olive font-bold'
                      : 'bg-[#8CA069]/25 border-[#6C8647]/50 text-[#2D4216] font-bold shadow-xs'
                  }`}
                >
                  <span className="font-bold">ТАРИФ \01</span>
                  <span className={`inline-block w-1.5 h-1.5 rounded-full shrink-0 aspect-square ${isDark ? 'bg-[#8CA069]' : 'bg-[#6C8647]'}`} />
                  <span>60 МИНУТ</span>
                </div>
                <div
                  className={`text-[11px] font-mono ${
                    isDark ? 'text-neutral-400' : 'text-[#686370]'
                  }`}
                >
                  est. 2024
                </div>
              </div>
            </div>

            {/* Center / Bottom content with explicit parameters from file */}
            <div className="relative z-10 space-y-6 pt-8 sm:pt-12">
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-5">
                  <h3
                    className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight ${
                      isDark ? 'text-white' : 'text-[#141218]'
                    }`}
                  >
                    «Базовый минимум»
                  </h3>
                  <span
                    className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#8CA069]"
                  >
                    92 000 ₽
                  </span>
                </div>

                {/* Handwritten director comment */}
                <p className="font-handwriting text-xl sm:text-2xl text-[#8CA069] dark:text-[#A6BE7E] -rotate-1 select-none">
                  «чистая энергия 10 артистов на сцене»
                </p>

                <p
                  className={`text-xs sm:text-sm md:text-base max-w-2xl font-sans font-light leading-relaxed pt-1 ${
                    isDark ? 'text-neutral-200' : 'text-[#2B2733]'
                  }`}
                >
                  Подойдёт для корпоративов и дней рождения, где главное — драйв и живой звук. Формат, в котором музыка работает на атмосферу вечера, не перетягивая на себя сценарий.
                </p>
              </div>

              {/* Action buttons inside Cell 1 */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-7 py-3.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2 whitespace-nowrap ${
                    isDark
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-[#141218] text-white hover:bg-black'
                  }`}
                >
                  <span>Забронировать 92 000 ₽</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleOpenDetails(0)}
                  className={`px-5 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all backdrop-blur-md cursor-pointer inline-flex items-center gap-2 whitespace-nowrap ${
                    isDark
                      ? 'bg-black/70 hover:bg-black/95 text-white border border-[#8CA069]/40 hover:border-[#8CA069] hover:shadow-[0_0_15px_rgba(140,160,105,0.25)]'
                      : 'bg-white/90 hover:bg-white text-[#141218] border border-[#8CA069]/40 shadow-sm hover:border-[#8CA069] hover:shadow-[0_0_15px_rgba(140,160,105,0.25)]'
                  }`}
                >
                  <span>Полный паспорт тарифа</span>
                  <ExternalLink
                    className="w-3.5 h-3.5 text-[#8CA069]"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* =====================================================================
              ROW 1, CELL 3: MINIMALIST SMM/RATES LIST (MATCHING REFERENCE EXACTLY)
              Dark card with clean hairline horizontal dividers
             ===================================================================== */}
          <div
            className={`p-7 sm:p-8 flex flex-col justify-between space-y-6 border-b transition-colors ${
              isDark ? 'bg-black/40 border-white/15' : 'bg-[#FAF8F5] border-black/10'
            }`}
          >
            <div className="space-y-6">
              {/* Header */}
              <div
                className={`flex items-center justify-between text-[11px] font-mono uppercase tracking-widest border-b pb-3 ${
                  isDark
                    ? 'text-neutral-400 border-white/10'
                    : 'text-[#686370] border-black/10'
                }`}
              >
                <span className={`flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                  <Globe className={`w-3.5 h-3.5 ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`} />
                  <span>SERVICES / RATES</span>
                </span>
                <span>\ 01-02</span>
              </div>

              {/* Stacked hairline table items with olive & violet brand indicators */}
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => handleOpenDetails(0)}
                  className="w-full text-left group cursor-pointer block"
                >
                  <div className="flex items-center justify-between text-xs font-mono pb-1">
                    <span className="flex items-center gap-1.5 text-[#8CA069] dark:text-[#A6BE7E] font-bold">
                      <span className="inline-block w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full bg-[#8CA069] shrink-0 aspect-square" />
                      <span className="inline-flex items-center gap-1.5">
                        <span>01</span>
                        <span className="inline-block w-1 h-1 rounded-full bg-current shrink-0 aspect-square opacity-70" />
                        <span>БАЗОВЫЙ</span>
                      </span>
                    </span>
                    <span className="font-bold text-[#8CA069]">
                      92 000 ₽
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm sm:text-base font-serif tracking-wide transition-colors text-[#141218] dark:text-white group-hover:text-[#8CA069]"
                  >
                    <span>Базовый минимум</span>
                  </div>
                  <div
                    className={`w-full h-px mt-2 transition-colors ${
                      isDark
                        ? 'bg-white/10 group-hover:bg-[#8CA069]/60'
                        : 'bg-black/10 group-hover:bg-[#8CA069]/60'
                    }`}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenDetails(1)}
                  className="w-full text-left group cursor-pointer block"
                >
                  <div className="flex items-center justify-between text-xs font-mono pb-1">
                    <span className="flex items-center gap-1.5 text-[#A66CD9] dark:text-[#C08DF0] font-bold">
                      <span className="inline-block w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full bg-[#A66CD9] shrink-0 aspect-square" />
                      <span className="inline-flex items-center gap-1.5">
                        <span>02</span>
                        <span className="inline-block w-1 h-1 rounded-full bg-current shrink-0 aspect-square opacity-70" />
                        <span>ХИТ</span>
                      </span>
                    </span>
                    <span className={`font-bold ${isDark ? 'text-[#A66CD9]' : 'text-[#6E389B]'}`}>
                      109 000 ₽
                    </span>
                  </div>
                  <div
                    className={`flex items-center justify-between text-sm sm:text-base font-serif tracking-wide transition-colors ${
                      isDark
                        ? 'text-white group-hover:text-[#A66CD9]'
                        : 'text-[#141218] group-hover:text-[#6E389B]'
                    }`}
                  >
                    <span>Роскошный максимум</span>
                  </div>
                  <div
                    className={`w-full h-px mt-2 transition-colors ${
                      isDark
                        ? 'bg-white/10 group-hover:bg-[#A66CD9]/60'
                        : 'bg-black/10 group-hover:bg-[#A66CD9]/60'
                    }`}
                  />
                </button>

                <div className="pt-1">
                  <div
                    className={`flex items-center justify-between text-xs font-mono pb-1 ${
                      isDark ? 'text-neutral-400' : 'text-[#686370]'
                    }`}
                  >
                    <span className={isDark ? 'text-neutral-500' : 'text-neutral-400'}>03</span>
                    <span className={isDark ? 'text-neutral-300' : 'text-[#4A4652]'}>ВКЛЮЧЕНО</span>
                  </div>
                  <div
                    className={`flex items-center justify-between text-xs font-mono uppercase tracking-wider ${
                      isDark ? 'text-neutral-300' : 'text-[#2B2733]'
                    }`}
                  >
                    <span>Штатный звукорежиссёр</span>
                    <Check className={`w-3.5 h-3.5 ${isDark ? 'text-[#8CA069]' : 'text-[#56643E]'}`} />
                  </div>
                  <div className={`w-full h-px mt-2 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                </div>

                <div className="pt-1">
                  <div
                    className={`flex items-center justify-between text-xs font-mono pb-1 ${
                      isDark ? 'text-neutral-400' : 'text-[#686370]'
                    }`}
                  >
                    <span className={isDark ? 'text-neutral-500' : 'text-neutral-400'}>04</span>
                    <span className={isDark ? 'text-neutral-300' : 'text-[#4A4652]'}>РАСЧЁТ</span>
                  </div>
                  <div
                    className={`flex items-center justify-between text-xs font-mono uppercase tracking-wider ${
                      isDark ? 'text-neutral-300' : 'text-[#2B2733]'
                    }`}
                  >
                    <span>Выезд по всей России</span>
                  </div>
                  <div className={`w-full h-px mt-2 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                </div>
              </div>
            </div>

            {/* Bottom note in Cell 3: Tactile Paper Card with Director Tape */}
            <div className="pt-3 space-y-3">
              <div className="paper-texture director-tape p-4 rounded-xl relative">
                <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest uppercase opacity-70 mb-1">
                  <span className="inline-block w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full bg-[#8CA069] shrink-0 aspect-square" />
                  <span>Директорская заметка</span>
                </div>
                <p className="font-handwriting text-base sm:text-lg leading-snug text-[#1A1820] dark:text-[#F4F1EA]">
                  «Фиксированная смета по договору. Без скрытых доплат за звук и райдер»
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleDownloadFile('NAKAMA_Price_List.txt', 'Прайс-лист')}
                className={`w-full py-2.5 rounded-full border text-[10px] font-mono uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  isDark
                    ? 'border-white/20 bg-white/5 hover:bg-white/15 text-white hover:border-[#A66CD9]/40'
                    : 'border-black/15 bg-white hover:bg-neutral-100 text-[#141218] shadow-sm hover:border-[#6E389B]/40'
                }`}
              >
                <Download className={`w-3 h-3 ${isDark ? 'text-[#A66CD9]' : 'text-[#6E389B]'}`} />
                <span>СКАЧАТЬ ПРАЙС (.TXT)</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ROW 2: 3 DISTINCT CELLS (CONCEPT, CENTER PORTRAIT, CONSULTATION)
           ========================================================================= */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x relative z-10 border-b ${
            isDark
              ? 'divide-white/15 border-white/15'
              : 'divide-black/10 border-black/10'
          }`}
        >
          {/* CELL 4: VISUAL CONCEPT & STANDARD SPECS */}
          <div
            className={`p-7 sm:p-8 flex flex-col justify-between space-y-6 ${
              isDark ? 'bg-black/20' : 'bg-white'
            }`}
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <span
                  className={`text-[10px] font-mono tracking-widest uppercase block ${
                    isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                  }`}
                >
                  &#40; В КАЖДОМ ТАРИФЕ &#41;
                </span>
                <h4
                  className={`font-serif text-xl sm:text-2xl font-normal ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  Концертный стандарт
                </h4>
              </div>

              <p
                className={`text-xs font-sans font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#2B2733]'
                }`}
              >
                Мы принципиально не играем урезанными составами под минусовки. Вы платите за полновесный живой концерт:
              </p>

              <ul
                className={`space-y-2 text-xs font-mono ${
                  isDark ? 'text-neutral-300' : 'text-[#2B2733]'
                }`}
              >
                <li className="flex items-center gap-2">
                  <span
                    className={`inline-block w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full shrink-0 aspect-square ${
                      isDark ? 'bg-[#D49D42]' : 'bg-[#B88228]'
                    }`}
                  />
                  <span>10 человек на сцене (6 вокалов)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className={`inline-block w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full shrink-0 aspect-square ${
                      isDark ? 'bg-[#D49D42]' : 'bg-[#B88228]'
                    }`}
                  />
                  <span>100% живой звук без плейбеков</span>
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className={`inline-block w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full shrink-0 aspect-square ${
                      isDark ? 'bg-[#D49D42]' : 'bg-[#B88228]'
                    }`}
                  />
                  <span>Штатный звукорежиссёр за пультом</span>
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className={`inline-block w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full shrink-0 aspect-square ${
                      isDark ? 'bg-[#D49D42]' : 'bg-[#B88228]'
                    }`}
                  />
                  <span>Персональный in-ear мониторинг</span>
                </li>
              </ul>
            </div>

            {/* Small Polaroid / Inset photo thumbnail */}
            <div
              className={`pt-3 border-t flex items-center gap-3 ${
                isDark ? 'border-white/10' : 'border-black/10'
              }`}
            >
              <div
                className={`w-16 h-16 rounded-xl overflow-hidden border shrink-0 ${
                  isDark ? 'border-white/20' : 'border-black/15'
                }`}
              >
                <img
                  src={CONTENT_IMAGES.dsc00852}
                  alt="Живой звук"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5 text-[11px] font-mono">
                <span
                  className={`block font-bold ${isDark ? 'text-white' : 'text-[#141218]'}`}
                >
                  Live Stage
                </span>
                <span
                  className={`block font-light ${
                    isDark ? 'text-neutral-400' : 'text-[#686370]'
                  }`}
                >
                  Саундчек до прихода первых гостей
                </span>
              </div>
            </div>
          </div>

          {/* CELL 5: CENTER ROUNDED EDITORIAL PORTRAIT */}
          <div
            className={`p-7 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden ${
              isDark ? 'bg-black/50' : 'bg-[#FAF8F5]'
            }`}
          >
            <div
              className={`w-full max-w-[260px] aspect-[4/5] rounded-[28px] overflow-hidden border shadow-2xl relative group ${
                isDark ? 'border-white/25' : 'border-black/15'
              }`}
            >
              <img
                src={CONTENT_IMAGES.dsc09924}
                alt="Вокалисты NAKAMA"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute bottom-4 inset-x-4 text-center">
                <div
                  className={`p-2.5 rounded-2xl backdrop-blur-xl border shadow-lg space-y-1 transition-colors ${
                    isDark
                      ? 'bg-black/75 border-white/20 text-white'
                      : 'bg-white/95 border-white/80 text-[#141218]'
                  }`}
                >
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold border ${
                      isDark
                        ? 'text-[#D49D42] bg-[#D49D42]/15 border-[#D49D42]/30'
                        : 'text-[#B88228] bg-[#B88228]/15 border-[#B88228]/30'
                    }`}
                  >
                    ( 6 ВОКАЛОВ )
                  </span>
                  <p
                    className={`text-[11px] font-serif italic ${
                      isDark ? 'text-neutral-200 keep-white' : 'text-[#3E3A45]'
                    }`}
                  >
                    Мужская и женская полифония
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 text-center space-y-1">
              <span
                className={`font-mono text-[10px] uppercase tracking-widest ${
                  isDark ? 'text-neutral-400' : 'text-[#686370]'
                }`}
              >
                / АВТОРСКИЕ АРАНЖИРОВКИ
              </span>
              <p
                className={`text-xs font-sans font-light max-w-xs ${
                  isDark ? 'text-neutral-300' : 'text-[#2B2733]'
                }`}
              >
                Любимые хиты звучат свежо и кинематографично
              </p>
            </div>
          </div>

          {/* CELL 6: CONSULTATION & DIRECT BOOKING */}
          <div
            className={`p-7 sm:p-8 flex flex-col justify-between space-y-6 ${
              isDark ? 'bg-black/30' : 'bg-white'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-mono tracking-widest uppercase ${
                    isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                  }`}
                >
                  &#40; БРОНЬ ДАТЫ &#41;
                </span>
              </div>

              <div className="space-y-2">
                <h4
                  className={`font-serif text-2xl font-normal leading-snug ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  Консультация и фиксация даты
                </h4>
                <p
                  className={`text-xs font-sans font-light leading-relaxed ${
                    isDark ? 'text-neutral-300' : 'text-[#2B2733]'
                  }`}
                >
                  Не уверены, какой хронометраж лучше впишется в сценарий? Концертный менеджер Анна рассчитает точный тайминг под вашу площадку за 15 минут.
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl border space-y-2 ${
                  isDark
                    ? 'bg-white/[0.04] border-white/10'
                    : 'bg-[#F4F1EA] border-black/10'
                }`}
              >
                <div
                  className={`text-[11px] font-mono flex items-center justify-between ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  <span>Концертный директор:</span>
                  <span
                    className={`font-bold ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`}
                  >
                    Анна
                  </span>
                </div>
                <div
                  className={`text-[11px] font-mono ${
                    isDark ? 'text-neutral-400' : 'text-[#686370]'
                  }`}
                >
                  {CONTACT_INFO.phone}
                </div>
              </div>
            </div>

            {/* Messenger quick action buttons */}
            <div
              className={`space-y-2 pt-2 border-t ${
                isDark ? 'border-white/10' : 'border-black/10'
              }`}
            >
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-full font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                  isDark
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-[#141218] text-white hover:bg-black'
                }`}
              >
                <Send className={`w-3.5 h-3.5 ${isDark ? 'text-[#0A090D]' : 'text-white'}`} />
                <span>Написать в Telegram</span>
              </a>

              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-full border font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                    : 'bg-white hover:bg-neutral-100 text-[#141218] border-black/15 shadow-sm'
                }`}
              >
                <MessageCircle
                  className={`w-3.5 h-3.5 ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`}
                />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ROW 3: FULL 3-COLUMN PANORAMIC BANNER (ТАРИФ 02: «РОСКОШНЫЙ МАКСИМУМ»)
            Clean single-line title and luxurious editorial layout
           ========================================================================= */}
        <div className="relative min-h-[420px] sm:min-h-[460px] px-6 sm:px-10 lg:px-12 pt-3 sm:pt-4 lg:pt-5 pb-7 sm:pb-10 lg:pb-12 flex flex-col justify-between overflow-hidden group">
          {/* Background image with adaptive vignette */}
          <div className="absolute inset-0 z-0">
            <img
              src={CONTENT_IMAGES.dsc00684}
              alt="Концерт NAKAMA — Тариф Роскошный максимум"
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ${
                isDark
                  ? 'brightness-[0.4] contrast-125'
                  : 'brightness-[0.98] contrast-110 saturate-[1.05] opacity-90'
              }`}
            />
            <div
              className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-t from-[#0A090D] via-[#0A090D]/60 to-[#0A090D]/40'
                  : 'bg-gradient-to-t from-white via-white/80 to-white/30'
              }`}
            />
            <div
              className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-r from-[#0A090D]/95 via-[#0A090D]/60 to-transparent'
                  : 'bg-gradient-to-r from-white/90 via-white/45 to-transparent'
              }`}
            />
            {!isDark && (
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none" />
            )}
          </div>

          {/* Top metadata row inside Row 3 */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
            <div className="max-w-full">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm backdrop-blur-md max-w-full ${
                  isDark
                    ? 'bg-black/60 border-white/15 text-[#D4A5FF]'
                    : 'bg-[#A66CD9]/20 border-[#9150C7]/40 text-white font-bold'
                }`}
              >
                <span className="inline-block w-2 h-2 min-w-[8px] min-h-[8px] rounded-full bg-[#A66CD9] animate-pulse shrink-0 aspect-square" />
                <span className="text-[9px] sm:text-[10px] font-mono tracking-wider sm:tracking-widest uppercase font-bold truncate inline-flex items-center gap-1.5">
                  <span>[ 2.39:1 CINEMASCOPE</span>
                  <span className="inline-block w-1 h-1 rounded-full bg-current shrink-0 aspect-square opacity-70" />
                  <span>MASTER SOUNDTRACK ]</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase shadow-sm border backdrop-blur-md font-bold whitespace-nowrap ${
                  isDark
                    ? 'badge-violet'
                    : 'bg-[#A66CD9]/25 border-[#9150C7]/50 text-white shadow-xs'
                }`}
              >
                ★ ХИТ СЕЗОНА
              </span>
              <span
                className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border text-[10px] font-mono tracking-widest uppercase backdrop-blur-md font-bold whitespace-nowrap ${
                  isDark
                    ? 'bg-black/70 border-white/20 text-white'
                    : 'bg-[#A66CD9]/20 border-[#9150C7]/40 text-white shadow-xs'
                }`}
              >
                <span>ТАРИФ \02</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-current shrink-0 aspect-square opacity-70" />
                <span>90 МИНУТ</span>
              </span>
            </div>
          </div>

          {/* Main Panoramic Content with single-line title and clear action buttons */}
          <div className="relative z-10 pt-6 sm:pt-14 space-y-6">
            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 sm:gap-8">
              <div className="space-y-2 max-w-3xl min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-4 lg:gap-5">
                  <h3
                    className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight ${
                      isDark ? 'text-white' : 'text-[#141218]'
                    }`}
                  >
                    «Роскошный максимум»
                  </h3>
                  <span
                    className="font-mono text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#A66CD9]"
                  >
                    109 000 ₽
                  </span>
                </div>

                {/* Handwritten director comment */}
                <p className="font-handwriting text-xl sm:text-2xl text-[#A66CD9] dark:text-[#C08DF0] -rotate-1 select-none">
                  «высшая точка драматургии вашего вечера»
                </p>

                <p
                  className={`text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed pt-1 ${
                    isDark ? 'text-neutral-200' : 'text-[#2B2733]'
                  }`}
                >
                  Подойдёт для свадеб и статусных мероприятий, где каждый момент вечера важен. Когда музыка должна не просто звучать фоном, а попадать точно в нужную секунду праздника.
                </p>
              </div>

              {/* Action buttons inside Row 3 - positioned on the right, aligned with text */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 pb-1 w-full sm:w-auto">
                <a
                  href={CONTACT_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-display font-black text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap ${
                    isDark
                      ? 'bg-gradient-to-r from-[#A66CD9] to-[#8CA069] text-black font-bold hover:brightness-110'
                      : 'btn-tariff-vip-light'
                  }`}
                >
                  <span>Забронировать 109 000 ₽</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleOpenDetails(1)}
                  className={`w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all backdrop-blur-md cursor-pointer text-center inline-flex items-center justify-center gap-2 whitespace-nowrap ${
                    isDark
                      ? 'bg-black/70 hover:bg-black/95 text-white border border-[#A66CD9]/40 hover:border-[#A66CD9]'
                      : 'bg-white/90 hover:bg-white text-[#141218] border border-[#A66CD9]/40 shadow-sm hover:border-[#A66CD9] hover:shadow-[0_0_15px_rgba(166,108,217,0.25)]'
                  }`}
                >
                  <span>Полный паспорт тарифа</span>
                  <ExternalLink
                    className="w-3.5 h-3.5 text-[#A66CD9]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM EDITORIAL BAR (MATCHING REFERENCE BOTTOM OF CANVAS)
         ========================================================================= */}
      <div
        className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border text-xs font-mono transition-colors ${
          isDark
            ? 'border-white/15 bg-white/[0.03] text-neutral-300'
            : 'border-black/10 bg-white text-[#2B2733] shadow-md'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 min-w-[10px] min-h-[10px] rounded-full bg-[#8CA069] shadow-[0_0_10px_rgba(140,160,105,0.6)] animate-pulse shrink-0 aspect-square" />
          <span>СЕЗОН 2025/2026: ИДЁТ БРОНИРОВАНИЕ СВАДЕБ И КОРПОРАТИВОВ</span>
        </div>

        <div className="flex items-center gap-4">
          <span className={isDark ? 'text-neutral-400' : 'text-[#686370]'}>
            ДАТЫ ФИКСИРУЮТСЯ ПО ДОГОВОРУ
          </span>
          <Link
            to="/contacts"
            className={`font-bold flex items-center gap-1 transition-colors ${
              isDark
                ? 'text-[#D49D42] hover:text-white'
                : 'text-[#B88228] hover:text-black'
            }`}
          >
            <span>ПРОВЕРИТЬ ДАТУ</span>
          </Link>
        </div>
      </div>

      {/* =========================================================================
          DETAILED COMPARISON TABLE (СВОДНАЯ ТАБЛИЦА СРАВНЕНИЯ ТАРИФОВ)
         ========================================================================= */}
      <div className="space-y-4 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span
              className={`text-[10px] font-mono uppercase tracking-widest block ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              &#40; СРАВНЕНИЕ ТАРИФОВ &#41;
            </span>
            <h4
              className={`font-serif text-xl sm:text-3xl font-normal ${
                isDark ? 'text-white' : 'text-[#141218]'
              }`}
            >
              Сводная таблица параметров
            </h4>
          </div>
          <span
            className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}
          >
            Всё зафиксировано в официальном договоре
          </span>
        </div>

        <div
          className={`overflow-x-auto rounded-[24px] sm:rounded-[32px] border transition-colors ${
            isDark
              ? 'border-white/15 bg-black/40'
              : 'border-black/10 bg-white shadow-lg'
          }`}
        >
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr
                className={`border-b text-xs font-mono uppercase tracking-wider ${
                  isDark
                    ? 'border-white/15 bg-white/[0.03] text-neutral-400'
                    : 'border-black/10 bg-[#F4F1EA] text-[#141218]'
                }`}
              >
                <th className="p-4 sm:p-5 font-semibold">Параметр / Опция</th>
                <th className={`p-4 sm:p-5 font-semibold border-l ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  «Базовый минимум»
                </th>
                <th
                  className={`p-4 sm:p-5 font-semibold border-l ${
                    isDark
                      ? 'border-white/10 bg-[#D49D42]/10 text-[#D49D42]'
                      : 'border-black/10 bg-[#B88228]/10 text-[#B88228]'
                  }`}
                >
                  «Роскошный максимум» ★
                </th>
              </tr>
            </thead>
            <tbody
              className={`divide-y font-sans ${
                isDark
                  ? 'divide-white/10 text-neutral-200'
                  : 'divide-black/10 text-[#2B2733]'
              }`}
            >
              <tr className={isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}>
                <td className={`p-4 sm:p-5 font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Стоимость выступления
                </td>
                <td className={`p-4 sm:p-5 font-mono font-bold text-base border-l ${isDark ? 'border-white/10 text-[#D49D42]' : 'border-black/10 text-[#B88228]'}`}>
                  92 000 ₽
                </td>
                <td className={`p-4 sm:p-5 font-mono font-bold text-base border-l ${isDark ? 'border-white/10 bg-[#D49D42]/5 text-[#D49D42]' : 'border-black/10 bg-[#B88228]/5 text-[#B88228]'}`}>
                  109 000 ₽
                </td>
              </tr>
              <tr className={isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}>
                <td className={`p-4 sm:p-5 font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Хронометраж на сцене
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  60 минут (1 сет или разбивка на блоки)
                </td>
                <td className={`p-4 sm:p-5 border-l font-medium ${isDark ? 'border-white/10 bg-[#D49D42]/5 text-white' : 'border-black/10 bg-[#B88228]/5 text-[#141218]'}`}>
                  90 минут (2 или 3 отделения)
                </td>
              </tr>
              <tr className={isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}>
                <td className={`p-4 sm:p-5 font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Репертуарная программа
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  Выбор из 100+ готовых мировых и РФ хитов
                </td>
                <td className={`p-4 sm:p-5 border-l font-medium ${isDark ? 'border-white/10 bg-[#D49D42]/5 text-white' : 'border-black/10 bg-[#B88228]/5 text-[#141218]'}`}>
                  100+ хитов + <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>до 5 каверов под заказ</span>
                </td>
              </tr>
              <tr className={isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}>
                <td className={`p-4 sm:p-5 font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Специальная песня (первый танец/интро)
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10 text-neutral-400' : 'border-black/10 text-[#686370]'}`}>
                  По доп. согласованию
                </td>
                <td className={`p-4 sm:p-5 border-l font-medium ${isDark ? 'border-white/10 bg-[#D49D42]/5 text-[#D49D42]' : 'border-black/10 bg-[#B88228]/5 text-[#B88228]'}`}>
                  Включено до 5 треков
                </td>
              </tr>
              <tr className={isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}>
                <td className={`p-4 sm:p-5 font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Штатный звукорежиссёр за пультом
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  Включён в смету
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10 bg-[#D49D42]/5' : 'border-black/10 bg-[#B88228]/5'}`}>
                  Включён в смету
                </td>
              </tr>
              <tr className={isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}>
                <td className={`p-4 sm:p-5 font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Состав на сцене
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  10 человек (6 вокалистов + ритм-секция)
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10 bg-[#D49D42]/5' : 'border-black/10 bg-[#B88228]/5'}`}>
                  10 человек (6 вокалистов + ритм-секция)
                </td>
              </tr>
              <tr className={isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}>
                <td className={`p-4 sm:p-5 font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Драматургия и интерактивы
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  Синхронизация по таймингу с ведущим
                </td>
                <td className={`p-4 sm:p-5 border-l font-medium ${isDark ? 'border-white/10 bg-[#D49D42]/5 text-white' : 'border-black/10 bg-[#B88228]/5 text-[#141218]'}`}>
                  Срежиссированные кульминации, интерактивы и смена динамики
                </td>
              </tr>
              <tr className={isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}>
                <td className={`p-4 sm:p-5 font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Идеальный формат события
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  Корпоративы, дни рождения, частные вечеринки
                </td>
                <td className={`p-4 sm:p-5 border-l font-medium ${isDark ? 'border-white/10 bg-[#D49D42]/5 text-[#D49D42]' : 'border-black/10 bg-[#B88228]/5 text-[#B88228]'}`}>
                  Свадьбы, масштабные корпоративы, статусные гала-вечера
                </td>
              </tr>
              <tr className={isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}>
                <td className={`p-4 sm:p-5 font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Саундчек на площадке
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  За 2 часа до сбора гостей
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10 bg-[#D49D42]/5' : 'border-black/10 bg-[#B88228]/5'}`}>
                  За 2 часа до сбора гостей
                </td>
              </tr>
              <tr className={isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'}>
                <td className={`p-4 sm:p-5 font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Условия бронирования
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  Официальный договор, 20% аванс / 80% в день шоу
                </td>
                <td className={`p-4 sm:p-5 border-l ${isDark ? 'border-white/10 bg-[#D49D42]/5' : 'border-black/10 bg-[#B88228]/5'}`}>
                  Официальный договор, 20% аванс / 80% в день шоу
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* =========================================================================
          FULL DETAILS MODAL (OPENS ON CLICK WITH FULL CHECKLIST & SPECIFICATION)
         ========================================================================= */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xl animate-in fade-in duration-200">
          <div
            className={`relative w-full max-w-2xl rounded-[36px] border p-7 sm:p-10 shadow-2xl space-y-6 overflow-hidden ${
              isDark
                ? 'glass-card-frosted border-white/25 text-white'
                : 'bg-white border-black/15 text-[#141218] shadow-2xl'
            }`}
          >
            {/* Header */}
            <div
              className={`flex items-start justify-between gap-4 border-b pb-4 ${
                isDark ? 'border-white/15' : 'border-black/10'
              }`}
            >
              <div className="space-y-1">
                <span
                  className={`text-xs font-mono uppercase tracking-widest ${
                    isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                  }`}
                >
                  {selectedPackage.duration}
                </span>
                <h3
                  className={`font-serif text-3xl font-normal ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  «{selectedPackage.title}»
                </h3>
              </div>

              <div className="text-right">
                <div
                  className={`font-mono text-3xl font-bold ${
                    isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                  }`}
                >
                  {selectedPackage.price}
                </div>
                <span
                  className={`text-xs font-mono ${
                    isDark ? 'text-neutral-400' : 'text-[#686370]'
                  }`}
                >
                  фикс. смета
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-[#2B2733]'
              }`}
            >
              {selectedPackage.description}
            </p>

            {/* Features Checklist */}
            <div className="space-y-3 pt-2">
              <div
                className={`text-xs font-mono font-bold uppercase tracking-wider ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                В состав тарифа включено:
              </div>
              <ul
                className={`space-y-2.5 text-xs sm:text-sm font-sans ${
                  isDark ? 'text-neutral-200' : 'text-[#2B2733]'
                }`}
              >
                {selectedPackage.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isDark
                          ? 'bg-[#D49D42]/20 border-[#D49D42]/40 text-[#D49D42]'
                          : 'bg-[#B88228]/15 border-[#B88228]/35 text-[#B88228]'
                      }`}
                    >
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div
              className={`pt-4 border-t flex flex-col sm:flex-row gap-3 ${
                isDark ? 'border-white/15' : 'border-black/10'
              }`}
            >
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-3.5 text-center text-xs font-display font-black tracking-wider uppercase rounded-full transition-all shadow-xl ${
                  isDark
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-[#141218] text-white hover:bg-black'
                }`}
              >
                Забронировать в Telegram
              </a>

              <Link
                to="/contacts"
                onClick={() => setIsModalOpen(false)}
                className={`px-6 py-3.5 text-center text-xs font-mono font-bold tracking-wider rounded-full border transition-all ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200 border-black/15 text-[#141218]'
                }`}
              >
                Контакты
              </Link>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className={`px-6 py-3.5 text-center text-xs font-mono transition-colors cursor-pointer ${
                  isDark
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-[#686370] hover:text-black'
                }`}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
