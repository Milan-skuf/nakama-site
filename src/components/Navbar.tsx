import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Menu, X, Phone } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenBooking: () => void;
  onOpenBrandbook?: () => void;
  onOpenRider?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onRouteChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((playing) => {
      setIsAudioPlaying(playing);
    });
    return unsubscribe;
  }, []);

  // Merged and streamlined navigation items (zero horizontal scrollbar)
  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О группе' },
    { id: 'packages', label: 'Пакеты и цены' },
    { id: 'repertoire', label: 'Репертуар' },
    { id: 'media', label: 'Медиа' },
    { id: 'cases', label: 'Кейсы' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const handleNavClick = (id: PageRoute) => {
    onRouteChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isNavActive = (id: PageRoute) => {
    if (currentRoute === id) return true;
    if (id === 'media' && (currentRoute === 'video' || currentRoute === 'photo')) return true;
    if (id === 'about' && (currentRoute === 'team' || currentRoute === 'looks' || currentRoute === 'philosophy')) return true;
    if (id === 'contacts' && (currentRoute === 'agency' || currentRoute === 'agencies')) return true;
    return false;
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#180E07]/95 backdrop-blur-md border-b border-[#3A2312] py-2 shadow-2xl'
          : 'bg-gradient-to-b from-[#140B05]/95 via-[#180E07]/85 to-transparent py-3.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between md:justify-center gap-2 sm:gap-3 lg:gap-4">
        
        {/* Desktop Navigation Links — Centered */}
        <nav 
          id="desktop-nav" 
          className="hidden md:flex items-center gap-1.5 lg:gap-2 justify-center"
        >
          {navItems.map((item) => {
            const active = isNavActive(item.id);
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`h-[38px] px-4.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  active
                    ? 'bg-[#9B2F19] text-white shadow-md shadow-[#9B2F19]/40 font-semibold'
                    : 'text-[#F1D8C1]/90 hover:text-white hover:bg-[#3A2312]/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions — Seamlessly grouped in center */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Sound State Indicator if playing */}
          {isAudioPlaying && (
            <div 
              onClick={() => audioEngine.stop()}
              className="h-[38px] flex items-center gap-2 px-3.5 rounded-full bg-[#9B2F19]/20 border border-[#9B2F19]/50 text-[#F3A300] text-xs cursor-pointer animate-pulse"
              title="Музыка играет. Нажмите, чтобы остановить"
            >
              <span className="text-[11px] font-mono font-bold uppercase">LIVE</span>
              <div className="flex gap-0.5 items-center h-3.5">
                <span className="w-0.5 bg-[#F3A300] wave-bar-1 inline-block" />
                <span className="w-0.5 bg-[#F3A300] wave-bar-2 inline-block" />
                <span className="w-0.5 bg-[#F3A300] wave-bar-3 inline-block" />
              </div>
            </div>
          )}

          {/* Main Booking Button */}
          <button
            id="nav-book-cta-btn"
            onClick={onOpenBooking}
            className="h-[38px] px-5 sm:px-6 rounded-full bg-[#9B2F19] hover:bg-[#BA371E] text-white text-xs sm:text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#9B2F19]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center"
          >
            ЗАБРОНИРОВАТЬ
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center justify-between w-full md:hidden">
          <button
            id="mobile-book-cta-btn"
            onClick={onOpenBooking}
            className="px-3.5 py-1.5 rounded-full bg-[#9B2F19] text-white text-xs font-bold uppercase tracking-wider"
          >
            БРОНЬ
          </button>
          
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[#3A2312] bg-[#27170E] text-[#F1D8C1] focus:outline-none ml-auto"
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="md:hidden bg-[#180E07] border-b border-[#3A2312] px-4 pt-3 pb-6 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-xs tracking-wider transition-colors ${
                  isNavActive(item.id)
                    ? 'bg-[#9B2F19] text-white font-semibold'
                    : 'text-[#F1D8C1]/80 hover:bg-[#3A2312]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-[#3A2312] pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-[#9B2F19] text-white text-xs font-bold uppercase tracking-wider shadow-lg text-center cursor-pointer"
            >
              ЗАБРОНИРОВАТЬ ДАТУ
            </button>

            <a
              href="tel:+79069806525"
              className="flex items-center justify-center gap-2 py-2 text-xs text-[#F1D8C1]/70 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#9B2F19]" />
              <span>8-906-980-65-25 (Анна Морозова)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
