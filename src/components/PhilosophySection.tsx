import React, { useState } from 'react';
import { 
  Disc, 
  Sparkles,
  Volume2
} from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const PhilosophySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isVinylSpinning, setIsVinylSpinning] = useState<boolean>(true);

  const steps = [
    {
      num: '01',
      title: 'ВЫДОХНУТЬ',
      subtitle: 'Оставить будни за кадром',
      desc: 'Мягкий инструментальный лаунж и соул на встрече гостей. Снимаем рабочее напряжение и тревогу.',
      soundStyle: 'ballad' as const
    },
    {
      num: '02',
      title: 'УЛЫБНУТЬСЯ',
      subtitle: 'Первый контакт и уют',
      desc: 'Тёплые узнаваемые мелодии в авторском многоголосии. Гости переключаются в режим праздника.',
      soundStyle: 'pop' as const
    },
    {
      num: '03',
      title: 'ПОДПЕТЬ',
      subtitle: 'Единение зала',
      desc: 'Любимые хиты поколений. 6 вокалистов вовлекают гостей петь вместе — от тихих куплетов до хорового припева.',
      soundStyle: 'funk' as const
    },
    {
      num: '04',
      title: 'ТАНЦЕВАТЬ',
      subtitle: 'Неудержимый кач',
      desc: 'Плотный бас и мощные ударные без фонограмм. Танцпол наполняется за секунды.',
      soundStyle: 'disco' as const
    },
    {
      num: '05',
      title: 'КУЛЬМИНАЦИЯ',
      subtitle: 'Финал, который помнят годами',
      desc: 'Симфо-рок взрыв, конфетти, восторг и ощущение: «Это был наш лучший вечер».',
      soundStyle: 'rock' as const
    }
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    audioEngine.playTrack(`step-${index}`, steps[index].soundStyle, 120);
  };

  return (
    <section id="philosophy-section" className="py-24 bg-[#140B05] relative overflow-hidden border-t border-[#3A2312]">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Top: Japanese NAKAMA Concept & Vinyl Box */}
        <div className="rounded-3xl border border-[#3A2312] bg-[#23150B] p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden">
          
          {/* Subtle film marks */}
          <div className="absolute top-4 right-6 font-mono text-xs text-[#F1D8C1]/30">
            SCENE 01 / PHILOSOPHY / 07
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Text Explanation */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] mb-6 flex flex-wrap items-baseline gap-3">
                <span>NAKAMA</span>
                <span className="text-2xl sm:text-3xl text-[#9B2F19] font-mono">(仲間)</span>
              </h2>

              <p className="text-lg sm:text-xl text-[#F1D8C1] font-medium leading-relaxed mb-5">
                В основе бренда лежит японское понятие <strong className="text-[#F3A300]">NAKAMA (仲間)</strong> — это соратник, единомышленник и «свой» человек, с которым связывают общие ценности и глубокое доверие.
              </p>

              <p className="text-base sm:text-lg text-[#F1D8C1]/85 leading-relaxed mb-8">
                Этот принцип определяет отношение группы к каждому событию — <span className="text-[#F3A300] font-semibold">не приглашенные артисты, а часть вашей истории</span>. Мы создаем атмосферу, в которой каждый гость почувствует себя «своим».
              </p>

              {/* 3 Core Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#3A2312]">
                <div className="p-4 rounded-2xl bg-[#1A1009]/90 border border-[#3A2312]">
                  <div className="text-sm font-bold text-[#F1D8C1] mb-1">Живой звук</div>
                  <div className="text-xs text-[#F1D8C1]/70">Без исключений и фонограмм</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#1A1009]/90 border border-[#3A2312]">
                  <div className="text-sm font-bold text-[#F1D8C1] mb-1">Полный состав</div>
                  <div className="text-xs text-[#F1D8C1]/70">Всегда 10 музыкантов</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#1A1009]/90 border border-[#3A2312]">
                  <div className="text-sm font-bold text-[#F1D8C1] mb-1">Партнёрство</div>
                  <div className="text-xs text-[#F1D8C1]/70">Интеграция с ведущим</div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Vinyl Record Visual (from Brandbook Slide 07) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div 
                onClick={() => setIsVinylSpinning(!isVinylSpinning)}
                className="relative cursor-pointer group flex items-center justify-center"
                title="Нажмите, чтобы остановить/запустить вращение"
              >
                {/* Vinyl Sleeve with Kanji */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-[#3A2312] border-2 border-[#9B2F19]/40 p-4 shadow-2xl relative z-10 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#F1D8C1]/50">
                    <span>NAKAMA VINYL</span>
                    <span>33 RPM</span>
                  </div>
                  
                  <div className="text-center my-auto">
                    <span className="text-6xl sm:text-7xl font-display font-extrabold text-[#F1D8C1]/90 tracking-widest block drop-shadow-lg">
                      仲間
                    </span>
                    <span className="text-xs font-mono tracking-widest text-[#F3A300] uppercase mt-2 block">
                      ORIGINAL SOUNDTRACK
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-[#F1D8C1]/40 border-t border-[#F1D8C1]/10 pt-2">
                    <span>LIMITED EDITION</span>
                    <span>10 VOICES</span>
                  </div>
                </div>

                {/* Vinyl Record Disc sticking out */}
                <div 
                  className={`absolute -right-12 sm:-right-16 w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-[#110B07] border-4 border-[#2A180E] shadow-2xl flex items-center justify-center z-0 transition-transform duration-500 group-hover:translate-x-6 ${
                    isVinylSpinning ? 'animate-spin-slow' : ''
                  }`}
                  style={{
                    backgroundImage: 'radial-gradient(circle, #2A180E 2px, transparent 2px), radial-gradient(circle, #2A180E 2px, #110B07 2px)',
                    backgroundSize: '12px 12px'
                  }}
                >
                  {/* Vinyl Grooves Rings */}
                  <div className="w-40 h-40 rounded-full border border-[#3A2312]/60 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border border-[#3A2312]/80 flex items-center justify-center">
                      
                      {/* Vinyl Label */}
                      <div className="w-16 h-16 rounded-full bg-[#9B2F19] flex items-center justify-center text-center border-2 border-[#F1D8C1]">
                        <div className="w-4 h-4 rounded-full bg-[#110B07] border border-[#F1D8C1]" />
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              <span className="text-xs font-mono text-[#F1D8C1]/50 mt-6 flex items-center gap-1.5">
                <Disc className="w-3.5 h-3.5 text-[#F3A300]" />
                <span>Нажмите на пластинку для интерактива</span>
              </span>
            </div>

          </div>
        </div>

        {/* Bottom: 5-Step Emotional Storyline Arc (from Brandbook Slide 06) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F3A300]/40 bg-[#27170E] text-xs text-[#F3A300] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px] uppercase tracking-widest">
                Эмоциональная раскадровка
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#F1D8C1] mb-4">
              Как мы превращаем вечер в живую историю
            </h3>

            <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
              Люди редко приходят на мероприятие полностью расслабленными. За ними тянутся рабочие чаты, дедлайны и фоновая тревога. Мы выстраиваем вечер по 5 ступеням кинематографичной драматургии.
            </p>
          </div>

          {/* 5 Steps Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 xl:gap-5 w-full">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.num}
                  id={`step-card-${step.num}`}
                  onClick={() => handleStepClick(idx)}
                  className={`rounded-2xl border p-5 sm:p-6 lg:p-4 xl:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden box-border w-full ${
                    isSelected 
                      ? 'scale-[1.02] shadow-2xl border-[#F3A300] bg-[#2C190F]' 
                      : 'border-[#3A2312] bg-[#23150B]/90 hover:bg-[#2C190F] hover:border-[#9B2F19]/50'
                  }`}
                >
                  <div className="w-full overflow-hidden">
                    {/* Top Row: Number */}
                    <div className="mb-3">
                      <span className="font-mono text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-extrabold text-[#F3A300]">
                        {step.num}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base lg:text-[13px] xl:text-[16px] 2xl:text-lg font-display font-bold text-[#F1D8C1] mb-1.5 leading-none tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      {step.title}
                    </h4>

                    <div className="text-xs sm:text-[13px] xl:text-sm font-semibold text-[#F3A300] mb-3 leading-snug break-words">
                      {step.subtitle}
                    </div>

                    <p className="text-xs sm:text-[13px] xl:text-sm text-[#F1D8C1]/90 leading-relaxed font-normal text-justify hyphens-auto [text-align-last:left] break-words">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-4 border-t border-[#3A2312]/80 flex items-center justify-between text-xs font-mono text-[#F1D8C1]/60 shrink-0">
                    <span>АКТ {step.num}</span>
                    <span className="text-[#F3A300] font-medium flex items-center gap-1.5 whitespace-nowrap">
                      <Volume2 className="w-3.5 h-3.5" /> Слушать
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
