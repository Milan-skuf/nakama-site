import React, { useState } from 'react';
import { 
  Building2, 
  FileText, 
  Download, 
  CheckCircle2, 
  Phone, 
  Send, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  PackageCheck,
  Headphones
} from 'lucide-react';

interface AgencySectionProps {
  onOpenBooking: () => void;
  onOpenRider: () => void;
}

export const AgencySection: React.FC<AgencySectionProps> = ({
  onOpenBooking,
  onOpenRider,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownloadFile = (fileName: string) => {
    setDownloadSuccess(fileName);
    setTimeout(() => setDownloadSuccess(null), 3000);

    const blob = new Blob([
      `ТЕХНИЧЕСКИЙ И БЫТОВОЙ РАЙДЕР КАВЕР-ГРУППЫ NAKAMA 2025/2026\n\n` +
      `Состав: 10 человек на сцене (6 вокалистов, гитара, бас, барабаны, клавиши/секвенсор).\n` +
      `Звукорежиссёр: штатный (приезжает с собственным цифровым микшером и ушным мониторингом).\n` +
      `Радиосистемы: 6 вокальных радиомикрофонов Shure/Sennheiser (собственный комплект).\n` +
      `Контакты директора: +7-906-980-65-25 (Анна)\n`
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="agency-section" className="py-24 bg-[#140B05] relative overflow-hidden border-t border-[#3A2312]">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#72734D]/50 bg-[#27170E] text-xs text-[#9BB368] mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              B2B &bull; Event-Partnership
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Для event-агентств и организаторов
          </h2>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
            Мы говорим с вами на одном профессиональном языке. Прозрачный тайминг, свой звукорежиссёр, готовые райдеры и ноль сюрпризов в день события.
          </p>
        </div>

        {/* 4 B2B Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 rounded-2xl border border-[#3A2312] bg-[#23150B] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-[#9B2F19]/20 text-[#BA371E] w-fit mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-base font-display font-bold text-[#F1D8C1] mb-2">
                Свой звукорежиссёр
              </h3>
              <p className="text-xs text-[#F1D8C1]/70 leading-relaxed">
                Штатный звукорежиссёр на пульте. Мы не нагружаем звуковика площадки и сами отвечаем за 10 входных каналов и мониторинг.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#3A2312] text-[11px] font-mono text-[#F3A300]">
              ✓ Минус 90% проблем с райдером
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[#3A2312] bg-[#23150B] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-[#F3A300]/20 text-[#F3A300] w-fit mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-display font-bold text-[#F1D8C1] mb-2">
                Приезд за 3 часа
              </h3>
              <p className="text-xs text-[#F1D8C1]/70 leading-relaxed">
                Четкий тайминг прибытия и саундчека до сбора первых гостей. Никогда не настраиваемся перед зрителями.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#3A2312] text-[11px] font-mono text-[#F3A300]">
              ✓ Соблюдение тайминга 100%
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[#3A2312] bg-[#23150B] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-[#72734D]/20 text-[#9BB368] w-fit mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-display font-bold text-[#F1D8C1] mb-2">
                Агентская комиссия
              </h3>
              <p className="text-xs text-[#F1D8C1]/70 leading-relaxed">
                Специальные условия и агентское вознаграждение для проверенных партнеров и постоянных организаторов.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#3A2312] text-[11px] font-mono text-[#9BB368]">
              ✓ Выгодные условия B2B
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[#3A2312] bg-[#23150B] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-[#61406F]/25 text-[#D8B4E2] w-fit mb-4">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-display font-bold text-[#F1D8C1] mb-2">
                Все документы и ИП
              </h3>
              <p className="text-xs text-[#F1D8C1]/70 leading-relaxed">
                Официальный договор, безналичный расчет с НДС/без НДС, акты и своевременный документооборот через ЭДО.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#3A2312] text-[11px] font-mono text-[#D8B4E2]">
              ✓ Чистая бухгалтерия
            </div>
          </div>

        </div>

        {/* Downloadable Materials Bar */}
        <div className="rounded-3xl border border-[#3A2312] bg-[#27170E] p-8 sm:p-10 mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-2xl font-display font-bold text-[#F1D8C1] mb-2">
                Скачайте материалы для презентации заказчику
              </h3>
              <p className="text-xs sm:text-sm text-[#F1D8C1]/70">
                Технический и бытовой райдер, медиапапка в высоком разрешении и фирменный прайс-лист для включения в смету.
              </p>
            </div>

            {/* 3 Download Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              <button
                onClick={() => handleDownloadFile('NAKAMA_Tech_Rider_2025.pdf')}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#3A2312] bg-[#1A1009] hover:bg-[#3A2312] text-xs font-mono text-[#F1D8C1] hover:text-white transition-colors cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4 text-[#9B2F19]" />
                <span>Тех. райдер (PDF)</span>
              </button>

              <button
                onClick={() => handleDownloadFile('NAKAMA_Hospitality_Rider.pdf')}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#3A2312] bg-[#1A1009] hover:bg-[#3A2312] text-xs font-mono text-[#F1D8C1] hover:text-white transition-colors cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4 text-[#72734D]" />
                <span>Быт. райдер (PDF)</span>
              </button>

              <button
                onClick={() => handleDownloadFile('NAKAMA_Media_Kit_HighRes.zip')}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#9B2F19] bg-[#9B2F19]/20 hover:bg-[#9B2F19] text-xs font-mono text-white transition-colors cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4 text-[#F3A300]" />
                <span>Медиапапка (ZIP)</span>
              </button>
            </div>
          </div>

          {downloadSuccess && (
            <div className="mt-4 p-3 rounded-xl bg-[#72734D]/30 border border-[#72734D] text-xs text-[#9BB368] text-center font-mono animate-in fade-in">
              ✓ Файл {downloadSuccess} успешно сформирован и загружен!
            </div>
          )}
        </div>

        {/* Live Manager Contact Card */}
        <div className="max-w-2xl mx-auto rounded-3xl border border-[#9B2F19]/60 bg-gradient-to-br from-[#2A180E] to-[#1C1008] p-6 sm:p-8 text-center shadow-2xl flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
            alt="Менеджер группы NAKAMA — Анна"
            className="w-20 h-20 rounded-full object-cover border-2 border-[#9B2F19] mb-4 shadow-xl"
          />
          <h4 className="text-lg font-display font-bold text-[#F1D8C1] mb-0.5">
            Анна — Директор & Концертный менеджер
          </h4>
          <p className="text-xs text-[#F3A300] font-mono mb-4">
            Прямой контакт без посредников и долгих согласований
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href="tel:+79069806525"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9B2F19] hover:bg-[#BA371E] text-white text-xs font-semibold shadow-md cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>8-906-980-65-25</span>
            </a>

            <a
              href="https://t.me/nakamaband"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#3A2312] bg-[#27170E] hover:bg-[#3A2312] text-[#F1D8C1] text-xs font-semibold cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#0088cc]" />
              <span>Telegram</span>
            </a>

            <a
              href="https://wa.me/79069806525"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#3A2312] bg-[#27170E] hover:bg-[#3A2312] text-[#F1D8C1] text-xs font-semibold cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={onOpenBooking}
            className="text-xs font-mono uppercase tracking-widest text-[#F1D8C1]/70 hover:text-white underline decoration-[#9B2F19]"
          >
            Или оставьте заявку на созвон с ведущим →
          </button>
        </div>

      </div>
    </section>
  );
};
