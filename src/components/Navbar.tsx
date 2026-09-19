import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Disc3, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const NAV_LEFT_LINKS = [
  { path: '/about', label: 'о группе' },
  { path: '/repertoire', label: 'репертуар' },
  { path: '/packages', label: 'пакеты и цены' },
  { path: '/video', label: 'видео' },
  { path: '/photo', label: 'фото' },
];

const NAV_RIGHT_LINKS = [
  { path: '/cases', label: 'кейсы' },
  { path: '/agencies', label: 'агентствам' },
  { path: '/contacts', label: 'контакты' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark } = useTheme();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div
        className={`w-full transition-all duration-500 ${
          scrolled || !isHome
            ? isDark
              ? 'bg-[#0D0C10]/85 backdrop-blur-2xl border-b border-white/10 py-3 sm:py-3.5 px-4 sm:px-8 lg:px-12 shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
              : 'bg-white/90 backdrop-blur-2xl border-b border-black/10 py-3 sm:py-3.5 px-4 sm:px-8 lg:px-12 shadow-[0_10px_35px_rgba(0,0,0,0.06)]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-6 px-4 sm:px-8 lg:px-12'
        }`}
      >
        <div className="max-w-[1600px] mx-auto">
          {/* =========================================================================
              DESKTOP NAVIGATION
              - On HOME PAGE: No logo at all, clean split layout (Left links & Right links)
              - On OTHER PAGES (about, repertoire, etc.): Clickable NAKAMA logo placed directly IN THE CENTER
             ========================================================================= */}
          {isHome ? (
            /* 1. HOME PAGE: No logo, clean spread across the screen */
            <div className="hidden lg:flex items-center justify-between w-full font-mono text-[11px] uppercase tracking-[0.2em]">
              {/* Left navigation links */}
              <nav className="flex items-center gap-6 xl:gap-8">
                {NAV_LEFT_LINKS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    id={`nav-link-${item.path.replace('/', '')}`}
                    className={`transition-colors duration-200 whitespace-nowrap ${
                      !scrolled
                        ? 'text-white/85 hover:text-white keep-white'
                        : isDark
                        ? 'text-white/80 hover:text-white'
                        : 'text-[#141218]/80 hover:text-[#141218]'
                    }`}
                  >
                    <span className={!scrolled ? 'keep-white' : ''}>{item.label}</span>
                  </Link>
                ))}
              </nav>

              {/* Right navigation links + Theme Toggle + Contacts */}
              <div className="flex items-center gap-5 xl:gap-7">
                <nav className="flex items-center gap-6 xl:gap-8">
                  {NAV_RIGHT_LINKS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      id={`nav-link-${item.path.replace('/', '')}`}
                      className={`transition-colors duration-200 whitespace-nowrap ${
                        !scrolled
                          ? 'text-white/85 hover:text-white keep-white'
                          : isDark
                          ? 'text-white/80 hover:text-white'
                          : 'text-[#141218]/80 hover:text-[#141218]'
                      }`}
                    >
                      <span className={!scrolled ? 'keep-white' : ''}>{item.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Theme Toggle Button */}
                <ThemeToggle forceDark={!scrolled && isHome} />

                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  id="nav-phone-link"
                  className={`transition-colors hidden xl:inline-block tracking-widest text-[11px] ${
                    !scrolled
                      ? 'text-white/90 hover:text-[#D49D42] keep-white'
                      : isDark
                      ? 'text-white/90 hover:text-[#D49D42]'
                      : 'text-[#141218]/90 hover:text-[#B88228]'
                  }`}
                >
                  <span className={!scrolled ? 'keep-white' : ''}>{CONTACT_INFO.phone}</span>
                </a>

                <Link
                  to="/contacts"
                  id="nav-booking-cta"
                  className={`inline-flex items-center gap-1 font-bold underline underline-offset-4 transition-colors tracking-[0.2em] ${
                    !scrolled
                      ? 'text-[#D49D42] hover:text-white'
                      : isDark
                      ? 'text-[#D49D42] hover:text-white'
                      : 'text-[#B88228] hover:text-black'
                  }`}
                >
                  <span>БРОНЬ</span>
                </Link>
              </div>
            </div>
          ) : (
            /* 2. OTHER PAGES (about, repertoire, packages, video, photo, etc.):
                  Center logo that clicks and redirects to home page */
            <div className="hidden lg:flex items-center justify-between w-full font-mono text-[11px] uppercase tracking-[0.16em] xl:tracking-[0.2em]">
              {/* Left navigation links */}
              <nav className="flex items-center gap-4 xl:gap-7">
                {NAV_LEFT_LINKS.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      id={`nav-link-${item.path.replace('/', '')}`}
                      className={`transition-colors duration-200 whitespace-nowrap ${
                        isActive
                          ? isDark
                            ? 'text-[#D49D42] font-bold border-b border-[#D49D42] pb-0.5'
                            : 'text-[#B88228] font-bold border-b border-[#B88228] pb-0.5'
                          : isDark
                          ? 'text-white/80 hover:text-white'
                          : 'text-[#141218]/80 hover:text-[#141218]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* CENTER: Logo on inner pages — click to return to home page */}
              <Link
                to="/"
                id="nav-center-logo"
                className="flex items-center gap-2.5 px-3 py-1 group cursor-pointer transition-all hover:scale-105 shrink-0"
                title="Нажмите, чтобы вернуться на главную страницу"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-white/10 border border-white/20 group-hover:border-[#D49D42] group-hover:bg-[#D49D42]/20'
                      : 'bg-black/5 border border-black/15 group-hover:border-[#B88228] group-hover:bg-[#B88228]/15'
                  }`}
                >
                  <Disc3
                    className={`w-4 h-4 transition-transform duration-700 group-hover:rotate-180 ${
                      isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                    }`}
                  />
                </div>
                <span
                  className={`font-display text-base xl:text-lg font-black tracking-[0.25em] uppercase leading-none transition-colors ${
                    isDark
                      ? 'text-white group-hover:text-[#D49D42]'
                      : 'text-[#141218] group-hover:text-[#B88228]'
                  }`}
                >
                  NAKAMA
                </span>
              </Link>

              {/* Right navigation links + Theme Toggle + Contacts */}
              <div className="flex items-center gap-4 xl:gap-7">
                <nav className="flex items-center gap-4 xl:gap-7">
                  {NAV_RIGHT_LINKS.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        id={`nav-link-${item.path.replace('/', '')}`}
                        className={`transition-colors duration-200 whitespace-nowrap ${
                          isActive
                            ? isDark
                              ? 'text-[#D49D42] font-bold border-b border-[#D49D42] pb-0.5'
                              : 'text-[#B88228] font-bold border-b border-[#B88228] pb-0.5'
                            : isDark
                            ? 'text-white/80 hover:text-white'
                            : 'text-[#141218]/80 hover:text-[#141218]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Theme Toggle Button */}
                <ThemeToggle />

                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  id="nav-phone-link"
                  className={`transition-colors hidden 2xl:inline-block tracking-widest text-[11px] ${
                    isDark ? 'text-white/90 hover:text-[#D49D42]' : 'text-[#141218]/90 hover:text-[#B88228]'
                  }`}
                >
                  {CONTACT_INFO.phone}
                </a>

                <Link
                  to="/contacts"
                  id="nav-booking-cta"
                  className={`inline-flex items-center gap-1 font-bold underline underline-offset-4 transition-colors tracking-[0.2em] ${
                    isDark ? 'text-[#D49D42] hover:text-white' : 'text-[#B88228] hover:text-black'
                  }`}
                >
                  <span>БРОНЬ</span>
                </Link>
              </div>
            </div>
          )}

          {/* =========================================================================
              MOBILE BAR:
              - On HOME: clean booking + theme toggle + hamburger
              - On OTHER PAGES: clickable center logo that redirects to home
             ========================================================================= */}
          <div className="flex lg:hidden justify-between items-center w-full">
            {isHome ? (
              <div className="flex items-center gap-2">
                <span
                  className={`font-display text-sm font-black tracking-widest uppercase ${
                    !scrolled
                      ? 'text-white keep-white'
                      : isDark
                      ? 'text-white'
                      : 'text-[#141218]'
                  }`}
                >
                  NAKAMA
                </span>
              </div>
            ) : (
              <Link
                to="/"
                id="nav-mobile-logo"
                className="flex items-center gap-2 group cursor-pointer"
                title="На главную"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-white/10 border border-white/20 group-hover:border-[#D49D42]'
                      : 'bg-black/5 border border-black/15 group-hover:border-[#B88228]'
                  }`}
                >
                  <Disc3
                    className={`w-3.5 h-3.5 ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`}
                  />
                </div>
                <span
                  className={`font-display text-sm font-black tracking-widest uppercase group-hover:text-[#D49D42] ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  NAKAMA
                </span>
              </Link>
            )}

            <div className="flex items-center gap-2 ml-auto">
              <ThemeToggle forceDark={!scrolled && isHome} />

              <Link
                to="/contacts"
                className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-colors ${
                  !scrolled && isHome
                    ? 'bg-[#D49D42] text-[#0D0C10]'
                    : isDark
                    ? 'bg-[#D49D42] text-[#0D0C10]'
                    : 'bg-[#141218] text-white keep-white'
                }`}
              >
                бронь
              </Link>

              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-1.5 focus:outline-none cursor-pointer transition-colors ${
                  !scrolled && isHome
                    ? 'text-white keep-white hover:text-[#D49D42]'
                    : isDark
                    ? 'text-white hover:text-[#D49D42]'
                    : 'text-[#141218] hover:text-[#B88228]'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Frosted Glass Panel) */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden mx-4 mt-2 rounded-3xl backdrop-blur-2xl p-6 space-y-6 shadow-2xl animate-fadeIn ${
            isDark
              ? 'bg-[#0D0C10]/95 border border-white/15 text-white'
              : 'bg-white/95 border border-black/15 text-[#141218]'
          }`}
        >
          <div className="text-center pb-2 border-b border-white/10">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block cursor-pointer"
            >
              <span
                className={`font-display text-lg font-black tracking-[0.3em] uppercase transition-colors ${
                  isDark ? 'text-white hover:text-[#D49D42]' : 'text-[#141218] hover:text-[#B88228]'
                }`}
              >
                NAKAMA
              </span>
            </Link>
            <p
              className={`text-[10px] tracking-widest uppercase font-mono mt-0.5 ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              6 голосов • живой звук
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 font-mono text-xs uppercase tracking-wider">
            {/* Always have "на главную" as first option in mobile drawer */}
            <Link
              to="/"
              id="mobile-nav-home"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-xl text-center transition-all ${
                isHome
                  ? isDark
                    ? 'bg-[#D49D42]/20 text-[#D49D42] font-bold border border-[#D49D42]/40'
                    : 'bg-[#B88228]/15 text-[#B88228] font-bold border border-[#B88228]/40'
                  : isDark
                  ? 'text-white/80 hover:bg-white/[0.06] hover:text-white'
                  : 'text-[#141218]/80 hover:bg-black/5 hover:text-[#141218]'
              }`}
            >
              на главную
            </Link>

            {[...NAV_LEFT_LINKS, ...NAV_RIGHT_LINKS].map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  id={`mobile-nav-${item.path.replace('/', '')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-center transition-all ${
                    isActive
                      ? isDark
                        ? 'bg-[#D49D42]/20 text-[#D49D42] font-bold border border-[#D49D42]/40'
                        : 'bg-[#B88228]/15 text-[#B88228] font-bold border border-[#B88228]/40'
                      : isDark
                      ? 'text-white/80 hover:bg-white/[0.06] hover:text-white'
                      : 'text-[#141218]/80 hover:bg-black/5 hover:text-[#141218]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div
            className={`pt-4 border-t space-y-3 font-mono ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}
          >
            <div className="flex items-center justify-between text-xs">
              <span className={isDark ? 'text-[#9E9AA2]' : 'text-[#686370]'}>
                менеджер {CONTACT_INFO.managerName}
              </span>
              <span
                className={`flex items-center gap-1 ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                100% живой звук
              </span>
            </div>

            <div className="flex items-center justify-between">
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className={`flex items-center gap-2 text-sm font-semibold ${
                  isDark ? 'text-white hover:text-[#D49D42]' : 'text-[#141218] hover:text-[#B88228]'
                }`}
              >
                <Phone className={`w-4 h-4 ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`} />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <ThemeToggle showLabel />
            </div>

            <div className="flex gap-2 pt-1">
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 py-2 text-center text-xs font-semibold rounded-xl border transition-all ${
                  isDark
                    ? 'bg-white/[0.06] text-white border-white/10 hover:bg-white/15'
                    : 'bg-black/5 text-[#141218] border-black/10 hover:bg-black/10'
                }`}
              >
                WhatsApp
              </a>
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 text-center text-xs font-semibold rounded-xl bg-gradient-to-r from-[#D49D42] to-[#E8590C] text-[#0D0C10] font-bold shadow-md"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
