import React from 'react';
import { 
  FileEdit, 
  MessageSquare, 
  Sparkles, 
  PartyPopper, 
  MapPin, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Заявка',
      subtitle: 'Быстрый расчет сметы',
      desc: 'Оставляете заявку на сайте или пишете напрямую менеджеру. Отвечаем в течение нескольких часов и подтверждаем свободна ли дата.',
      icon: FileEdit,
      accent: 'border-[#9B2F19] text-[#BA371E]'
    },
    {
      num: '02',
      title: 'Погружение в сценарий',
      subtitle: 'Созвон с ведущим',
      desc: 'Созваниваемся с вами и ведущим: разбираем структуру вечера, тайминг, ключевые моменты. Выстраиваем программу так, чтобы музыка усиливала важные эпизоды.',
      icon: MessageSquare,
      accent: 'border-[#72734D] text-[#9BB368]'
    },
    {
      num: '03',
      title: 'Подготовка',
      subtitle: 'Костюмы и партитуры',
      desc: 'Готовим программу под ваш вечер: треклист, спецномера, костюмы из Lookbook и технический райдер. Никаких сюрпризов в день праздника.',
      icon: Sparkles,
      accent: 'border-[#F3A300] text-[#F3A300]'
    },
    {
      num: '04',
      title: 'Выступление',
      subtitle: 'Драйв и 100% живой звук',
      desc: 'Приезжаем за 3 часа со своим звукорежиссёром, проводим саундчек и отыгрываем так, что ваши гости будут танцевать до утра и звать на бис.',
      icon: PartyPopper,
      accent: 'border-[#61406F] text-[#D8B4E2]'
    }
  ];

  return (
    <section id="workflow-section" className="py-24 bg-[#140B05] relative overflow-hidden border-t border-[#3A2312]">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B2F19]/40 bg-[#27170E] text-xs text-[#F1D8C1] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#F3A300]" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              План действий
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            От заявки до финального аккорда — 4 шага
          </h2>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
            Понятный, отлаженный процесс сотрудничества без суеты и лишней головной боли для организатора.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.num}
                id={`workflow-step-${step.num}`}
                className="rounded-3xl border border-[#3A2312] bg-[#23150B] p-6 sm:p-7 flex flex-col justify-between relative hover:border-[#9B2F19]/60 hover:bg-[#27170E] transition-all"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-extrabold text-[#F3A300]">
                      {step.num}
                    </span>
                    <div className={`p-3 rounded-2xl border bg-[#1A1009] ${step.accent}`}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#F1D8C1] mb-1">
                    {step.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#BA371E] mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#F1D8C1]/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#3A2312] text-[10px] font-mono text-[#F1D8C1]/40 flex items-center justify-between">
                  <span>ШАГ {step.num}</span>
                  <span className="text-[#F3A300]">ГАРАНТИЯ NAKAMA</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Russia-wide Coverage Banner */}
        <div className="rounded-3xl border border-[#9B2F19]/40 bg-gradient-to-r from-[#2A180E] via-[#23150B] to-[#1A1009] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl max-w-5xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#9B2F19]/30 text-[#F3A300] shrink-0">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-display font-bold text-[#F1D8C1] mb-1">
                Приедем в любую точку России
              </h4>
              <p className="text-xs sm:text-sm text-[#F1D8C1]/75">
                Работаем по всей стране: Новосибирск, Кемерово, Томск, Барнаул, Красноярск, Москва, Санкт-Петербург, Сочи и др.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A1009] border border-[#3A2312] text-xs font-mono text-[#F3A300]">
            <ShieldCheck className="w-4 h-4 text-[#9BB368]" />
            <span>Оптимизированный логистический райдер</span>
          </div>
        </div>

      </div>
    </section>
  );
};
