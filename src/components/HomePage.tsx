import React from 'react';
import { PageRoute, PackagePlan } from '../types';
import { HeroSection } from './HeroSection';
import { IntroManifestoSection } from './IntroManifestoSection';
import { WhyUsSection } from './WhyUsSection';
import { PACKAGES, REPERTOIRE_TRACKS } from '../data/bandData';
import { 
  ArrowRight, 
  Play, 
  Volume2, 
  Users, 
  Music, 
  Video, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Phone 
} from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
  onSelectPackage: (pkg: PackagePlan) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onSelectPackage,
}) => {
  const topTracks = REPERTOIRE_TRACKS.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* 1. Hero Landing Banner with Massive NAKAMA Logo */}
      <HeroSection
        onNavigate={onNavigate}
        onOpenBooking={onOpenBooking}
      />

      {/* 2. Stylized Intro Manifesto Block with Sound Philosophy & Direct Actions */}
      <IntroManifestoSection
        onNavigate={onNavigate}
        onOpenBooking={onOpenBooking}
      />

      {/* 3. Three Ticket Advantage Badges */}
      <WhyUsSection />

      {/* 3. Band Highlight & Multi-Vocal Preview (Short & Cinematic) */}
      <section className="py-20 bg-[#1A1009] border-t border-[#3A2312] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Preview */}
            <div className="relative rounded-3xl overflow-hidden border border-[#9B2F19]/40 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop"
                alt="Кавер-группа NAKAMA — 10 музыкантов на сцене"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1009] via-[#1A1009]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#F3A300] mb-1">
                    Ансамбль NAKAMA
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-[#F1D8C1]">
                    10 музыкантов. 6 вокалов.
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-4 py-2 rounded-full bg-[#9B2F19] text-white text-xs font-semibold hover:bg-[#BA371E] transition-colors cursor-pointer shrink-0"
                >
                  О группе &rarr;
                </button>
              </div>
            </div>

            {/* Text & Advantages */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B2F19]/40 bg-[#27170E] text-xs text-[#F1D8C1]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3A300]" />
                <span className="font-mono text-[11px] uppercase tracking-widest">
                  Почему нас 10 человек
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F1D8C1] leading-tight">
                Плотность звучания, которой нет у обычных групп
              </h2>

              <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
                Большинство кавер-групп выступают в составе из 4–5 человек и включают записанные бэк-вокалы (плейбеки). NAKAMA поёт в 6 живых голосов. Каждая гармония, терция и вокальный аккорд рождаются прямо на ваших глазах.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#27170E] border border-[#3A2312]">
                  <div className="text-2xl font-display font-bold text-[#F3A300] mb-1">6 вокалов</div>
                  <p className="text-xs text-[#F1D8C1]/60">Многоголосие без записанных фанер</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#27170E] border border-[#3A2312]">
                  <div className="text-2xl font-display font-bold text-[#BA371E] mb-1">Звукорежиссёр</div>
                  <p className="text-xs text-[#F1D8C1]/60">Штатный баланс звука в зале</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#3A2312] bg-[#27170E] hover:bg-[#3A2312] text-[#F1D8C1] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Познакомиться с составом и концепцией</span>
                  <ArrowRight className="w-4 h-4 text-[#F3A300]" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Packages Highlight Section with Single-Line Pricing */}
      <section className="py-20 bg-[#140B05] border-t border-[#3A2312] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#F3A300] mb-2">
                Прозрачные форматы
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F1D8C1]">
                Пакеты и стоимость вечера
              </h2>
            </div>
            <button
              onClick={() => onNavigate('packages')}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#F3A300] hover:text-white transition-colors cursor-pointer"
            >
              <span>Все подробности и калькулятор сметы</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="p-6 sm:p-8 rounded-3xl border border-[#3A2312] bg-[#23150B] hover:border-[#9B2F19]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F1D8C1] mb-1.5 whitespace-nowrap">{pkg.name}</h3>
                  <p className="text-xs sm:text-sm text-[#F1D8C1]/70 mb-4 min-h-[34px] leading-relaxed">{pkg.subtitle}</p>

                  <div className="flex items-baseline justify-between pb-4 border-b border-[#3A2312] mb-4">
                    <div className="text-3xl sm:text-4xl font-display font-black text-[#F3A300] whitespace-nowrap">
                      {pkg.priceNum.toLocaleString('ru-RU')}&nbsp;₽
                    </div>
                    <span className="text-xs text-[#F1D8C1]/50 font-mono">/ за весь вечер</span>
                  </div>

                  <ul className="space-y-2 text-xs text-[#F1D8C1]/80 mb-6">
                    {pkg.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#F3A300] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      onSelectPackage(pkg);
                      onOpenBooking();
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#9B2F19] hover:bg-[#BA371E] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Забронировать
                  </button>
                  <button
                    onClick={() => onNavigate('packages')}
                    className="px-4 py-3 rounded-xl border border-[#3A2312] bg-[#1A1009] hover:bg-[#27170E] text-[#F1D8C1] text-xs font-mono transition-colors cursor-pointer"
                  >
                    Детали
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Repertoire Teaser Section */}
      <section className="py-20 bg-[#1A1009] border-t border-[#3A2312] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#F3A300] mb-2">
                Живой плейлист
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F1D8C1]">
                100+ композиций с авторскими аранжировками
              </h2>
            </div>
            <button
              onClick={() => onNavigate('repertoire')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#27170E] border border-[#3A2312] hover:border-[#9B2F19] text-xs font-semibold text-[#F1D8C1] transition-colors cursor-pointer"
            >
              <span>Смотреть весь репертуар (100+)</span>
              <ArrowRight className="w-4 h-4 text-[#F3A300]" />
            </button>
          </div>

          {/* 4 Sample Tracks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {topTracks.map((track) => (
              <div
                key={track.id}
                className="p-5 rounded-2xl border border-[#3A2312] bg-[#23150B] hover:border-[#9B2F19]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#F1D8C1]/50 mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#1A1009] text-[#F3A300] border border-[#3A2312]">
                      {track.tag}
                    </span>
                    <span>{track.duration}</span>
                  </div>

                  <h3 className="text-sm font-display font-bold text-[#F1D8C1] group-hover:text-white mb-1">
                    {track.title}
                  </h3>
                  <p className="text-xs text-[#F1D8C1]/60 mb-4 font-mono">
                    {track.originalArtist}
                  </p>
                </div>

                <button
                  onClick={() => audioEngine.playTrack(track.id, track.audioStyle, track.bpm)}
                  className="w-full py-2.5 rounded-xl border border-[#9B2F19]/40 bg-[#9B2F19]/10 hover:bg-[#9B2F19] text-[#F1D8C1] hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-[#F3A300]" />
                  <span>Слушать демо</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Direct Booking & Consultation Banner */}
      <section className="py-16 bg-gradient-to-r from-[#23150B] via-[#2A170E] to-[#23150B] border-t border-b border-[#3A2312]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F1D8C1] mb-3">
            Проверьте свободна ли ваша дата
          </h2>
          <p className="text-sm text-[#F1D8C1]/75 max-w-xl mx-auto mb-6">
            Свяжитесь напрямую с концертным директором Анной или оставьте быструю заявку — мы ответим в течение 15 минут.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-[#9B2F19] hover:bg-[#BA371E] text-white text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer"
            >
              Забронировать дату
            </button>
            <a
              href="tel:+79069806525"
              className="px-8 py-3.5 rounded-full border border-[#3A2312] bg-[#1A1009] hover:bg-[#27170E] text-[#F1D8C1] text-xs font-mono flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#9B2F19]" />
              <span>8-906-980-65-25</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
