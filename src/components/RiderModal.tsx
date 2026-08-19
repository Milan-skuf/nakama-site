import React, { useState } from 'react';
import { X, FileText, Download, Check, ShieldCheck, Headphones, Zap, Coffee, Phone } from 'lucide-react';

interface RiderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RiderModal: React.FC<RiderModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'tech' | 'hospitality'>('tech');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);

    const content = `ТЕХНИЧЕСКИЙ И БЫТОВОЙ РАЙДЕР КАВЕР-ГРУППЫ NAKAMA (2025/2026)\n\n` +
      `СОСТАВ ГРУППЫ: 10 человек на сцене + 1 звукорежиссёр.\n\n` +
      `1. ТЕХНИЧЕСКИЙ РАЙДЕР:\n` +
      `- FOH акустическая система: согласовывается под площадь зала (не менее 10 кВт на 300 чел).\n` +
      `- Микрофоны: Группа привозит собственный рэк с 6 радиомикрофонами Shure Beta 58 / QLXD.\n` +
      `- Мониторинг: Персональные ушные мониторы (In-Ear) для всех 10 музыкантов (привозим свои).\n` +
      `- Барабанная установка: DW / Yamaha / Tama (бочка, 3 тома, стойки под тарелки, малый барабан).\n` +
      `- Басовый стек: Ampeg / Markbass (от 300 Вт) или прямой DI-out в пульт.\n` +
      `- Электропитание: 3 независимые фазы 220V на сцене, 16A.\n\n` +
      `2. БЫТОВОЙ РАЙДЕР:\n` +
      `- Гримёрная комната: чистая, теплая, закрывающаяся на ключ, рассчитанная на 10 человек.\n` +
      `- Зеркала в полный рост, вешалки для костюмов, гладильная доска/отпариватель.\n` +
      `- Питание: горячий обед/ужин на 10 персон при нахождении на площадке более 4 часов.\n` +
      `- Напитки: негазированная вода (20 бутылок по 0.5 л), чай, кофе, фрукты, легкие закуски.\n\n` +
      `КОНТАКТЫ ДИРЕКТОРА: +7 (906) 980-65-25 (Анна)`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NAKAMA_Full_Rider_${tab === 'tech' ? 'Technical' : 'Hospitality'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="max-w-3xl w-full bg-[#1A1009] border border-[#9B2F19] rounded-3xl p-6 sm:p-8 relative shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-[#3A2312] bg-[#27170E] text-[#F1D8C1] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[#9B2F19]/20 text-[#BA371E]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-[#F1D8C1]">
              Райдер кавер-группы NAKAMA
            </h3>
            <p className="text-xs text-[#F3A300] font-mono">
              Оптимизирован для площадок любого масштаба
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 p-1 rounded-2xl bg-[#23150B] border border-[#3A2312] mb-6">
          <button
            onClick={() => setTab('tech')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              tab === 'tech' ? 'bg-[#9B2F19] text-white shadow-md' : 'text-[#F1D8C1]/70 hover:text-white'
            }`}
          >
            Технический райдер (Звук & Свет)
          </button>
          <button
            onClick={() => setTab('hospitality')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              tab === 'hospitality' ? 'bg-[#9B2F19] text-white shadow-md' : 'text-[#F1D8C1]/70 hover:text-white'
            }`}
          >
            Бытовой райдер (Гримёрка & Логистика)
          </button>
        </div>

        {/* Tab Content */}
        {tab === 'tech' ? (
          <div className="space-y-4 text-xs sm:text-sm text-[#F1D8C1]/85">
            <div className="p-4 rounded-2xl bg-[#23150B] border border-[#3A2312]">
              <h4 className="font-bold text-[#F3A300] mb-2 flex items-center gap-2">
                <Headphones className="w-4 h-4" />
                <span>Что мы привозим с собой (Включено в стоимость):</span>
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-xs text-[#F1D8C1]/80">
                <li>Штатный звукорежиссёр группы с многоканальным цифровым микшером</li>
                <li>6 профессиональных радиомикрофонов Shure / Sennheiser</li>
                <li>Полный комплект ушного персонального мониторинга (In-Ear) для 10 музыкантов</li>
                <li>Все инструментальные кабели, директ-боксы (D.I.), коммутация и бэк-лайн обработки</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#23150B] border border-[#3A2312]">
              <h4 className="font-bold text-[#BA371E] mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Требования к площадке / Прокатчикам:</span>
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-xs text-[#F1D8C1]/80">
                <li>Портальная FOH акустическая система, соответствующая размеру зала</li>
                <li>Ударная установка: стандартная 5-компонентная (бочка, 3 тома, малый, стойки)</li>
                <li>Басовый комбик / усилитель или прямой XLR-канал в звуковой пульт</li>
                <li>Сцена размером не менее 5 × 3 метра, 3 независимые розетки 220V</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-[#F1D8C1]/85">
            <div className="p-4 rounded-2xl bg-[#23150B] border border-[#3A2312]">
              <h4 className="font-bold text-[#9BB368] mb-2 flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                <span>Гримёрная комната и удобства:</span>
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-xs text-[#F1D8C1]/80">
                <li>Отдельная тёплая гримёрка на 10 человек с замком на двери</li>
                <li>Зеркало в полный рост, вешалка для 10 костюмов, отпариватель или утюг</li>
                <li>20 бутылок негазированной питьевой воды по 0.5 л, горячий чай/кофе</li>
                <li>Горячее питание на 10 человек при нахождении на площадке свыше 4 часов</li>
              </ul>
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-[#3A2312] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#9B2F19] hover:bg-[#BA371E] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Download className="w-4 h-4 text-[#F3A300]" />
            <span>Скачать райдер (.TXT/.PDF)</span>
          </button>

          <a
            href="tel:+79069806525"
            className="text-xs font-mono text-[#F1D8C1]/70 hover:text-white flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#F3A300]" />
            <span>Вопросы по райдеру: 8-906-980-65-25 (Анна)</span>
          </a>
        </div>

        {downloaded && (
          <div className="mt-3 p-2 rounded-lg bg-[#72734D]/30 text-center text-xs text-[#9BB368] font-mono">
            ✓ Райдер успешно сохранен на ваше устройство!
          </div>
        )}

      </div>
    </div>
  );
};
