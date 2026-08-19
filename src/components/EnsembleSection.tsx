import React, { useState } from 'react';
import { PageRoute } from '../types';
import { 
  Users, 
  Volume2, 
  VolumeX, 
  Sliders, 
  ArrowRight
} from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface EnsembleSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const EnsembleSection: React.FC<EnsembleSectionProps> = ({ onNavigate }) => {
  const [layers, setLayers] = useState({
    lead1: true,
    lead2: true,
    harmony: true,
    bass: true,
    drums: true,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleLayer = (layerKey: keyof typeof layers) => {
    const newState = !layers[layerKey];
    setLayers(prev => ({ ...prev, [layerKey]: newState }));
    
    // Map to audio engine layers
    if (layerKey === 'lead1' || layerKey === 'lead2') {
      audioEngine.setLayerVolume('vocal', (layers.lead1 || layers.lead2) ? 0.8 : 0);
    } else if (layerKey === 'harmony') {
      audioEngine.setLayerVolume('harmony', newState ? 0.6 : 0);
    } else if (layerKey === 'bass') {
      audioEngine.setLayerVolume('bass', newState ? 0.7 : 0);
    } else if (layerKey === 'drums') {
      audioEngine.setLayerVolume('drum', newState ? 0.6 : 0);
    }
  };

  const handleTestEnsembleSound = () => {
    if (isPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
    } else {
      audioEngine.playTrack('ensemble-demo', 'funk', 120);
      setIsPlaying(true);
    }
  };

  return (
    <section id="ensemble-section" className="py-24 bg-[#1A1009] relative overflow-hidden border-t border-[#3A2312]">
      
      {/* Background radial accent */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#9B2F19]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Concept & Positioning */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B2F19]/40 bg-[#27170E] text-xs text-[#F1D8C1] mb-4">
              <Users className="w-3.5 h-3.5 text-[#F3A300]" />
              <span className="font-mono text-[11px] uppercase tracking-widest">
                10 артистов на сцене &bull; 6 вокалов
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-6 leading-tight">
              Почему нас <span className="text-[#9B2F19]">так много</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#F1D8C1]/95 leading-relaxed mb-5 text-justify hyphens-auto [text-align-last:left]">
              Большинство кавер-групп — это один-два вокалиста и инструментальная база. Звучит хорошо, но не так, как звучит настоящий ансамбль.
            </p>

            <p className="text-base sm:text-lg text-[#F1D8C1]/85 leading-relaxed mb-8 text-justify hyphens-auto [text-align-last:left]">
              Когда на сцене шесть голосов, которые поют вместе — это не просто «больше людей». Это <strong className="text-[#F1D8C1] font-semibold">принципиально другое звучание</strong> — оно создает объём и глубину, которые не воспроизведёт ни один дуэт, насколько бы хорошо он ни пел.
            </p>

            {/* Visual Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 sm:p-5 rounded-xl border border-[#3A2312] bg-[#27170E]/70">
                <div className="text-3xl font-display font-bold text-[#F3A300] mb-1">6</div>
                <div className="text-sm font-semibold text-[#F1D8C1]">Разных вокальных тембров</div>
                <div className="text-xs text-[#F1D8C1]/70 mt-1">Сопрано, альт, баритон, соул, рэп</div>
              </div>
              
              <div className="p-4 sm:p-5 rounded-xl border border-[#3A2312] bg-[#27170E]/70">
                <div className="text-3xl font-display font-bold text-[#9B2F19] mb-1">100%</div>
                <div className="text-xs font-semibold text-[#F1D8C1]">Синхронность & драйв</div>
                <div className="text-xs text-[#F1D8C1]/70 mt-1">Без минусовок и плейбеков</div>
              </div>
            </div>

            <button
              id="ensemble-repertoire-btn"
              onClick={() => onNavigate('repertoire')}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#9B2F19] hover:bg-[#B3341C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl shadow-[#9B2F19]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Послушать, как мы звучим</span>
              <ArrowRight className="w-4 h-4 text-[#F3A300]" />
            </button>
          </div>

          {/* Right Column: Interactive Multi-Voice Audio Mixer Simulation */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-[#3A2312] bg-[#27170E] p-6 sm:p-8 shadow-2xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#3A2312] pb-4 mb-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#F3A300] flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Интерактивный микшер звука</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#F1D8C1] mt-0.5">
                    Ощутите разницу в слоях
                  </h3>
                </div>

                <button
                  onClick={handleTestEnsembleSound}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#9B2F19] bg-[#9B2F19]/20 hover:bg-[#9B2F19] text-[#F1D8C1] hover:text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-[#F3A300]" />
                  <span>{isPlaying ? 'Стоп' : 'Тест звука'}</span>
                </button>
              </div>

              {/* Mixer Channel Strips */}
              <div className="space-y-3 mb-6">
                
                {/* 1. Lead Vocal */}
                <div 
                  onClick={() => toggleLayer('lead1')}
                  className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    layers.lead1 
                      ? 'border-[#9B2F19]/70 bg-[#9B2F19]/15' 
                      : 'border-[#3A2312]/50 bg-[#1A1009]/40 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#F1D8C1]">Лид-вокал 1 (Анна & Илья)</div>
                      <div className="text-xs text-[#F1D8C1]/70 mt-0.5">Главная мелодическая линия</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase font-bold text-[#F3A300]">
                      {layers.lead1 ? 'ВКЛ' : 'MUTE'}
                    </span>
                    {layers.lead1 ? <Volume2 className="w-4 h-4 text-[#F3A300]" /> : <VolumeX className="w-4 h-4 text-[#F1D8C1]/40" />}
                  </div>
                </div>

                {/* 2. Female & Male Harmonies */}
                <div 
                  onClick={() => toggleLayer('harmony')}
                  className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    layers.harmony 
                      ? 'border-[#72734D]/70 bg-[#72734D]/15' 
                      : 'border-[#3A2312]/50 bg-[#1A1009]/40 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#F1D8C1]">4 бэк-вокала & Гармонии</div>
                      <div className="text-xs text-[#F1D8C1]/70 mt-0.5">Тот самый эффект концертного хора</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase font-bold text-[#9BB368]">
                      {layers.harmony ? 'ВКЛ' : 'MUTE'}
                    </span>
                    {layers.harmony ? <Volume2 className="w-4 h-4 text-[#9BB368]" /> : <VolumeX className="w-4 h-4 text-[#F1D8C1]/40" />}
                  </div>
                </div>

                {/* 3. Bass Groove */}
                <div 
                  onClick={() => toggleLayer('bass')}
                  className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    layers.bass 
                      ? 'border-[#F3A300]/50 bg-[#F3A300]/10' 
                      : 'border-[#3A2312]/50 bg-[#1A1009]/40 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#F1D8C1]">Бас-гитара & Синт-бас</div>
                      <div className="text-xs text-[#F1D8C1]/70 mt-0.5">Низкочастотный кач и грув</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase font-bold text-[#F3A300]">
                      {layers.bass ? 'ВКЛ' : 'MUTE'}
                    </span>
                    {layers.bass ? <Volume2 className="w-4 h-4 text-[#F3A300]" /> : <VolumeX className="w-4 h-4 text-[#F1D8C1]/40" />}
                  </div>
                </div>

                {/* 4. Live Drums */}
                <div 
                  onClick={() => toggleLayer('drums')}
                  className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    layers.drums 
                      ? 'border-[#61406F]/70 bg-[#61406F]/20' 
                      : 'border-[#3A2312]/50 bg-[#1A1009]/40 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#F1D8C1]">Ударная установка & Перкуссия</div>
                      <div className="text-xs text-[#F1D8C1]/70 mt-0.5">Живая динамика и акценты шоу</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase font-bold text-[#D8B4E2]">
                      {layers.drums ? 'ВКЛ' : 'MUTE'}
                    </span>
                    {layers.drums ? <Volume2 className="w-4 h-4 text-[#D8B4E2]" /> : <VolumeX className="w-4 h-4 text-[#F1D8C1]/40" />}
                  </div>
                </div>

              </div>

              {/* Interactive Tip */}
              <div className="p-4 rounded-xl bg-[#1A1009]/80 border border-[#3A2312] text-sm text-[#F1D8C1]/85 leading-relaxed text-justify hyphens-auto [text-align-last:left]">
                💡 <span className="font-semibold text-[#F1D8C1]">Эксперимент:</span> Отключите бэк-вокал — звук станет плоским как у стандартных дуэтов. Включите обратно — и вы почувствуете размах ансамбля NAKAMA.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
