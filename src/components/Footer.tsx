import React from 'react';
import { PageRoute } from '../types';
import { 
  Phone, 
  Send, 
  Disc, 
  MapPin, 
  ArrowUp
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBrandbook: () => void;
  onOpenRider: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBrandbook,
  onOpenRider,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#110B07] text-[#F1D8C1] border-t border-[#3A2312] pt-16 pb-24 relative overflow-hidden">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3A2312]">
          
          {/* Col 1: Brand & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" />

            <p className="text-sm sm:text-base text-[#F1D8C1]/80 leading-relaxed max-w-sm">
              Премиальная кавер-группа для свадеб, корпоративов и масштабных событий. 10 музыкантов на сцене, 6 уникальных вокалов и 100% живой звук без фонограмм.
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#F3A300]">
              <MapPin className="w-4 h-4 text-[#9B2F19]" />
              <span>Новосибирск &bull; Выезд по всей России</span>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#F3A300] font-bold">
              Навигация
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#F1D8C1]/85">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Главная & Шоу
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('repertoire')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Репертуар (100+ хитов с аудио)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Состав ансамбля (10 человек)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Форматы и цены вечера
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cases')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Кейсы и отзывы
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('media')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Медиагалерея (Видео, Фото, Образы)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Media & Gallery (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#F3A300] font-bold">
              Медиа
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#F1D8C1]/85">
              <li>
                <button onClick={() => onNavigate('video')} className="hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap block">
                  Видеоархив концертов
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('photo')} className="hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap block">
                  Фотогалерея
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('looks')} className="hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap block">
                  Lookbook костюмов
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('philosophy')} className="hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap block">
                  Философия 仲間
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F3A300]">
              Прямая связь
            </h4>
            <div className="space-y-2">
              <a
                href="tel:+79069806525"
                className="text-base font-bold text-[#F1D8C1] hover:text-white flex items-center gap-2 font-mono"
              >
                <Phone className="w-4 h-4 text-[#9B2F19]" />
                <span>8-906-980-65-25</span>
              </a>
              <p className="text-[11px] text-[#F1D8C1]/60">
                Концертный директор — Анна (с 09:00 до 23:00)
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://t.me/nakamaband"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-[#3A2312] bg-[#1A1009] hover:bg-[#0088cc] hover:text-white text-[#F1D8C1] transition-colors"
                title="Telegram канал группы NAKAMA"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/79069806525"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-[#3A2312] bg-[#1A1009] hover:bg-[#25D366] hover:text-white text-[#F1D8C1] transition-colors font-mono font-bold text-xs"
                title="WhatsApp чат менеджера"
              >
                WA
              </a>

              <a
                href="https://vk.com/nakamaband"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-[#3A2312] bg-[#1A1009] hover:bg-[#4c75a3] hover:text-white text-[#F1D8C1] transition-colors font-mono font-bold text-xs"
                title="ВКонтакте NAKAMA Band"
              >
                VK
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F1D8C1]/50">
          <div>
            &copy; {new Date().getFullYear()} NAKAMA Band (仲間). Все права защищены.
          </div>

          <div className="flex items-center gap-6">
            <span>Официальный сайт кавер-группы: nakamaband.ru</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#F1D8C1]/70 hover:text-white cursor-pointer"
            >
              <span>Наверх</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F3A300]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
