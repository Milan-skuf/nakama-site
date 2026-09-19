import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  Star,
  Download,
  ChevronDown,
} from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { AudioTrackPlayer } from '../components/AudioTrackPlayer';
import { CoverFlowPlayer } from '../components/CoverFlowPlayer';
import { EditorialGalleryBlock } from '../components/EditorialGalleryBlock';
import { EditorialTariffsGrid } from '../components/EditorialTariffsGrid';
import {
  MEDIA_LINKS,
  PACKAGES_DATA,
  REVIEWS_DATA,
  TRACKS_DATA,
  CONTACT_INFO,
  FAQ_DATA,
} from '../data/content';
import { CONTENT_IMAGES } from '../content';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const HomePage: React.FC = () => {
  const { isDark } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  usePageMeta(
    'NAKAMA — Кавер-группа 10 человек, 6 голосов, 100% живой звук | Новосибирск и вся Россия',
    'Официальный сайт кавер-группы NAKAMA: 10 человек на сцене, живое многоголосое звучание, свой звукорежиссёр. Корпоративы, свадьбы, частные мероприятия по всей России.'
  );

  const handleDownloadRider = (fileName: string, title: string) => {
    const textContent = `ДОКУМЕНТ: ${title}\nКАВЕР-ГРУППА NAKAMA (10 ЧЕЛОВЕК НА СЦЕНЕ)\n\n` +
      `Контакты для организаторов:\nМенеджер Анна: ${CONTACT_INFO.phone}\nTelegram: ${CONTACT_INFO.telegram}\n\n` +
      `1. СОСТАВ: 10 человек на сцене (6 вокалистов, гитары, бас, клавиши, ударные) + штатный звукорежиссёр.\n` +
      `2. ТЕХНИЧЕСКИЙ РАЙДЕР: In-Ear мониторинг, мультикор / цифровой стейджбокс, микрофонный парк вокального ансамбля.\n` +
      `3. БЫТОВОЙ РАЙДЕР: Отдельная тёплая гримёрная комната с зеркалом и водой, трансфер и питание.\n` +
      `4. ТАЙМИНГ: Саундчек за 2 часа до сбора гостей.\n\n` +
      `Полная версия документа передаётся при согласовании договора.`;

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

  const handleDownloadMediaPack = () => {
    const textContent = `МЕДИАПАКЕТ КАВЕР-ГРУППЫ NAKAMA\n\n` +
      `В пакет входят:\n` +
      `- Промо-фото в высоком разрешении (Wfolio HQ)\n` +
      `- Логотипы (вектор/PNG)\n` +
      `- Технический и бытовой райдеры\n` +
      `- Пресс-релиз и анонс для ведущего\n\n` +
      `Контакты: Менеджер Анна (${CONTACT_INFO.phone})\n` +
      `Wfolio галерея: https://zxcvbnmkjhg.wfolio.pro/`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NAKAMA_Media_Pack_Info.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`min-h-screen font-grotesk relative selection:bg-white selection:text-black overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-black text-[#F4F1EA]' : 'bg-[#F8F6F0] text-[#141218]'
      }`}
    >
      {/* Warm amber/golden-orange atmospheric glows throughout the whole page matching Block 2 */}
      <div
        className={`absolute top-[18%] left-[-5%] w-[650px] h-[650px] blur-[140px] pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.18)_0%,rgba(217,119,6,0.10)_45%,transparent_100%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(212,157,66,0.16)_0%,rgba(197,78,14,0.08)_45%,transparent_100%)]'
        }`}
      />
      <div
        className={`absolute top-[42%] right-[-6%] w-[720px] h-[720px] blur-[150px] pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.22)_0%,rgba(245,158,11,0.14)_40%,transparent_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(212,157,66,0.18)_0%,rgba(197,78,14,0.10)_40%,transparent_100%)]'
        }`}
      />
      <div
        className={`absolute top-[68%] left-[8%] w-[650px] h-[650px] blur-[140px] pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.16)_0%,rgba(217,119,6,0.10)_50%,transparent_100%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(212,157,66,0.14)_0%,rgba(197,78,14,0.08)_50%,transparent_100%)]'
        }`}
      />
      <div
        className={`absolute bottom-[4%] right-[12%] w-[600px] h-[600px] blur-[130px] pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18)_0%,rgba(217,119,6,0.10)_50%,transparent_100%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(212,157,66,0.14)_0%,rgba(197,78,14,0.08)_50%,transparent_100%)]'
        }`}
      />

      {/* =========================================================================
          1. HERO-БЛОК (AMIRI EDITORIAL COMPOSITION - EXACT REPLICA)
         ========================================================================= */}
      <section className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden flex flex-col justify-between bg-black hero-dark-scope">
        {/* Background Full-Bleed Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src={MEDIA_LINKS.heroMain}
            alt="Кавер-группа NAKAMA"
            className="w-full h-full object-cover object-center transition-all duration-1000 transform scale-100 filter brightness-[0.88] contrast-[1.05]"
          />
          {/* Top subtle vignette for header clarity */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/50 to-transparent pointer-events-none" />
          {/* Bottom subtle vignette for editorial text readability */}
          <div className="absolute inset-x-0 bottom-0 h-84 bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none" />
          {/* Subtle noise grain */}
          <div className="absolute inset-0 opacity-10 vinyl-grooves pointer-events-none" />
        </div>

        {/* Top spacer (height preserved for the fixed navbar to sit over the hero photo) */}
        <div className="pt-24 sm:pt-28" />

        {/* =========================================================================
            CENTER MASSIVE EDITORIAL TYPOGRAPHY (Like "NEW ARRIVALS" in reference)
           ========================================================================= */}
        <div className="relative z-10 w-full px-4 sm:px-8 text-center flex flex-col items-center justify-center my-auto space-y-2">
          <h1 className="hero-title-warm font-serif-vintage text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-normal uppercase tracking-tight leading-none select-none text-[#D6C2A5]/90">
            NAKAMA
          </h1>
          <p className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-[#E8DCC8] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] -rotate-1 select-none">
            «саундтрек к вашему вечеру»
          </p>
        </div>

        {/* =========================================================================
            BOTTOM EDITORIAL BAR (Like "SS21" / Paragraph / "SHOP NOW" in reference)
           ========================================================================= */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 pb-8 sm:pb-12 grid grid-cols-1 lg:grid-cols-12 items-end gap-8">
          {/* Left Editorial Text & Direct Underlined CTA (Exact AMIRI layout with PDF strategy text) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#D9C9A8] keep-white pb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              100% живой звук · 6&nbsp;вокалистов
            </p>

            <p className="text-xs sm:text-sm text-white/90 keep-white max-w-2xl font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Кавер-группа из Сибири. 10 человек на сцене. Живое многоголосое звучание,<br />которого нет ни у одного конкурента на российском рынке.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8">
              <Link
                to="/packages"
                id="hero-cost-link"
                className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white keep-white hover:text-[#8CA069] underline underline-offset-8 decoration-1 transition-colors font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                УЗНАТЬ СТОИМОСТЬ
              </Link>

              <Link
                to="/contacts"
                id="hero-book-now-link"
                className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white keep-white hover:text-[#A66CD9] underline underline-offset-8 decoration-1 transition-colors font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                ЗАБРОНИРОВАТЬ ДАТУ
              </Link>
            </div>
          </div>

          {/* Right Editorial Typography (Aligned exactly with CTA links on the left) */}
          <div className="lg:col-span-5 flex flex-col lg:items-end justify-end space-y-3 text-left lg:text-right">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#D49D42] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              / МУЗЫКАЛЬНАЯ РАСКАДРОВКА
            </span>

            <p className="text-xs sm:text-sm text-white/90 keep-white max-w-sm font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Мы не просто играем — мы выстраиваем драматургию вечера. Живой звук без компромиссов.
            </p>

            <div className="pt-2 flex items-center lg:justify-end">
              <a
                href="#audio-section"
                id="hero-listen-soundtrack"
                className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white keep-white hover:text-[#A66CD9] underline underline-offset-8 decoration-1 transition-colors inline-flex items-center gap-2 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                <span className="keep-white">СЛУШАТЬ РЕПЕРТУАР</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BLOCK 2: EDITORIAL GALLERY & CONCEPT SHOWCASE (From Strategy & Reference)
         ========================================================================= */}
      <EditorialGalleryBlock />

      {/* =========================================================================
          PAGE CONTENT (Audio, Packages, Reviews, Booking)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 sm:pt-2 pb-16 sm:pb-24 space-y-12 sm:space-y-20 relative z-10 font-grotesk">
        {/* =========================================================================
            3. РАЗДЕЛ ГДЕ КАВЕРЫ МОЖНО ПОСЛУШАТЬ
           ========================================================================= */}
        <section id="audio-section" className="space-y-4 scroll-mt-28">
          <CoverFlowPlayer
            tracks={TRACKS_DATA}
            title="Послушайте, как звучит живой состав NAKAMA"
          />
        </section>

        {/* =========================================================================
            4. ВЫБЕРИТЕ ФОРМАТ ВАШЕГО ВЕЧЕРА (Пакеты и цены)
           ========================================================================= */}
        <section id="packages-section" className="space-y-8 scroll-mt-28">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 ${
              isDark ? 'border-white/15' : 'border-black/15'
            }`}
          >
            <div className="space-y-2.5">
              <span className="badge-olive text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full font-bold">
                / ПРОЗРАЧНАЯ СТОИМОСТЬ
              </span>
              <h2
                className={`font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                ВЫБЕРИТЕ ФОРМАТ ВАШЕГО ВЕЧЕРА
              </h2>
              <p className="font-handwriting text-xl sm:text-2xl text-[#8CA069] dark:text-[#A6BE7E] -rotate-1 select-none">
                «честные условия без скрытых доплат»
              </p>
            </div>
            <Link
              to="/packages"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all shadow-lg backdrop-blur-md shrink-0 border ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  : 'bg-black/5 hover:bg-black/10 border-black/15 text-[#141218]'
              }`}
            >
              <span>ВСЕ УСЛОВИЯ ТАРИФОВ</span>
            </Link>
          </div>

          {/* Editorial Bento Grid (Matching Reference Aesthetics) */}
          <EditorialTariffsGrid showSectionHeader={false} />

          {/* Special song banner with tactile paper director tape style */}
          <div
            className={`paper-texture director-tape rounded-[32px] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl border ${
              isDark ? 'border-white/20' : 'border-black/10'
            }`}
          >
            <div className="space-y-2">
              <h4
                className={`font-display text-lg sm:text-xl font-black uppercase ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                Нужна особенная песня для первого танца или интро события?
              </h4>
              <p
                className={`text-xs sm:text-sm max-w-3xl leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                В тарифе «Роскошный максимум» мы разучиваем и аранжируем до 5 специальных треков для вашего праздника (первый танец молодожёнов, корпоративный гимн компании или любимый трек именинника).
              </p>
            </div>
            <a
              href={CONTACT_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center font-display font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 shrink-0 ${
                isDark
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-[#141218] text-white hover:bg-black'
              }`}
            >
              ОБСУДИТЬ ПЕСНЮ
            </a>
          </div>
        </section>

        {/* =========================================================================
            5. ДЛЯ EVENT-АГЕНТСТВ И ОРГАНИЗАТОРОВ (B2B Блок)
           ========================================================================= */}
        <section id="agencies-section" className="space-y-8 scroll-mt-28">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 ${
              isDark ? 'border-white/15' : 'border-black/15'
            }`}
          >
            <div className="space-y-2.5">
              <span className="badge-violet text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full font-bold">
                / EVENT-ПАРТНЁРСТВО
              </span>
              <h2
                className={`font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                ДЛЯ EVENT-АГЕНТСТВ И ОРГАНИЗАТОРОВ
              </h2>
              <p className="font-handwriting text-xl sm:text-2xl text-[#A66CD9] dark:text-[#C59BEE] -rotate-1 select-none">
                «надёжный хедлайнер без головной боли для команды»
              </p>
            </div>
            <Link
              to="/agencies"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all shadow-lg backdrop-blur-md shrink-0 border ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  : 'bg-black/5 hover:bg-black/10 border-black/15 text-[#141218]'
              }`}
            >
              <span>УСЛОВИЯ ДЛЯ АГЕНТСТВ</span>
            </Link>
          </div>

          <p
            className={`text-xs sm:text-sm max-w-3xl leading-relaxed ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Надёжный музыкальный хедлайнер для ваших событий. Понятный райдер, свой звукорежиссёр, уважение к таймингу и прозрачные партнёрские условия.
          </p>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x ${
              isDark ? 'divide-white/10' : 'divide-black/10'
            }`}
          >
            {/* 1. Понятный райдер */}
            <div className="py-6 sm:py-0 sm:px-6 first:sm:pl-0 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h3
                  className={`font-display text-lg font-black uppercase tracking-tight ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  Понятный райдер
                </h3>
                <p
                  className={`text-xs leading-relaxed font-sans ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  Чёткие технический и бытовой райдеры без завышенных требований. Адаптируемся к техническим возможностям любой площадки.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadRider('NAKAMA_Tech_Rider.txt', 'ТЕХНИЧЕСКИЙ РАЙДЕР')}
                className={`inline-flex items-center gap-2 text-[11px] font-display font-black uppercase tracking-wider pt-2 ${
                  isDark ? 'text-neutral-300 hover:text-white' : 'text-[#4A4552] hover:text-[#141218]'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>СКАЧАТЬ ТЕХРАЙДЕР</span>
              </button>
            </div>

            {/* 2. Свой звукорежиссёр */}
            <div className="py-6 sm:py-0 sm:px-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h3
                  className={`font-display text-lg font-black uppercase tracking-tight ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  Свой звукорежиссёр
                </h3>
                <p
                  className={`text-xs leading-relaxed font-sans ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  Штатный звукорежиссёр группы полностью отвечает за тракт, частотный баланс и идеальную читаемость 6 вокалов в общем миксе.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadRider('NAKAMA_Stage_Plan.txt', 'СТЕЙДЖ-ПЛАН И РАССТАНОВКА')}
                className={`inline-flex items-center gap-2 text-[11px] font-display font-black uppercase tracking-wider pt-2 ${
                  isDark ? 'text-neutral-300 hover:text-white' : 'text-[#4A4552] hover:text-[#141218]'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>СКАЧАТЬ СТЕЙДЖ-ПЛАН</span>
              </button>
            </div>

            {/* 3. Чёткий тайминг */}
            <div className="py-6 sm:py-0 sm:px-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h3
                  className={`font-display text-lg font-black uppercase tracking-tight ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  Чёткий тайминг
                </h3>
                <p
                  className={`text-xs leading-relaxed font-sans ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  Приезжаем за 2 часа до сбора гостей на саундчек. Не затягиваем паузы и строго соблюдаем общий тайминг сценария ведущего.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadRider('NAKAMA_Hospitality_Rider.txt', 'БЫТОВОЙ РАЙДЕР')}
                className={`inline-flex items-center gap-2 text-[11px] font-display font-black uppercase tracking-wider pt-2 ${
                  isDark ? 'text-neutral-300 hover:text-white' : 'text-[#4A4552] hover:text-[#141218]'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>СКАЧАТЬ БЫТОВОЙ РАЙДЕР</span>
              </button>
            </div>

            {/* 4. Ноль сюрпризов */}
            <div className="py-6 sm:py-0 sm:px-6 last:sm:pr-0 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h3
                  className={`font-display text-lg font-black uppercase tracking-tight ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  Ноль сюрпризов
                </h3>
                <p
                  className={`text-xs leading-relaxed font-sans ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  Все треклисты, дресс-код и смысловые акценты согласуются заранее до события. Вы на 100% уверены в стабильном результате.
                </p>
              </div>
              <button
                type="button"
                onClick={handleDownloadMediaPack}
                className={`inline-flex items-center gap-2 text-[11px] font-display font-black uppercase tracking-wider pt-2 ${
                  isDark ? 'text-neutral-300 hover:text-white' : 'text-[#4A4552] hover:text-[#141218]'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>СКАЧАТЬ МЕДИАПАКЕТ</span>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. ИСТОРИИ СОБЫТИЙ И КЕЙСЫ
           ========================================================================= */}
        <section id="cases-section" className="space-y-8 scroll-mt-28">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 ${
              isDark ? 'border-white/15' : 'border-black/15'
            }`}
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border backdrop-blur-md ${
                    isDark
                      ? 'bg-white/10 text-[#D49D42] border-white/15'
                      : 'bg-black/5 text-[#B88228] border-black/15 font-semibold'
                  }`}
                >
                  <span>/ РЕАЛЬНЫЕ ВПЕЧАТЛЕНИЯ & КЕЙСЫ</span>
                </span>
              </div>
              <h2
                className={`font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                ИСТОРИИ СОБЫТИЙ И ОТЗЫВЫ
              </h2>
            </div>
            <Link
              to="/cases"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all shadow-lg backdrop-blur-md shrink-0 border ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  : 'bg-black/5 hover:bg-black/10 border-black/15 text-[#141218]'
              }`}
            >
              <span>ВСЕ КЕЙСЫ</span>
            </Link>
          </div>

          {/* Structured Case Studies from file */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Case 1 */}
            <div
              className={`glass-card-frosted glass-card-hover rounded-[32px] p-6 sm:p-8 flex flex-col justify-between space-y-5 shadow-2xl border ${
                isDark ? 'border-white/20' : 'border-black/10 bg-white/90'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] uppercase font-display font-black tracking-wider border ${
                      isDark
                        ? 'bg-white/10 border-white/20 text-white'
                        : 'bg-black/5 border-black/10 text-[#141218]'
                    }`}
                  >
                    КОРПОРАТИВ IT-КОМПАНИИ
                  </span>
                  <span
                    className={`text-xs font-sans ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}
                  >
                    200 гостей • Новосибирск
                  </span>
                </div>

                <div
                  className={`p-4 rounded-2xl italic font-sans text-sm leading-relaxed border ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white/95'
                      : 'bg-black/[0.03] border-black/10 text-[#141218]'
                  }`}
                >
                  «Гости не хотели отпускать группу со сцены, финальный трек пели все 200 человек хором. Работа звукорежиссёра и тайминг — на высшем уровне.»
                </div>

                <div className="space-y-2 text-xs leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className={`font-display font-black uppercase tracking-wider shrink-0 ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                      Задача:
                    </span>
                    <span className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>
                      Создать клубную атмосферу и объединить разные отделы компании на танцполе.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className={`font-display font-black uppercase tracking-wider shrink-0 ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                      Решение:
                    </span>
                    <span className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>
                      Программа от лаунж-старта во время сбора до хорового финала с живым звуком 10 артистов.
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-white/10' : 'border-black/10'
                }`}
              >
                <span className={`text-xs font-sans ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Event-директор IT-холдинга
                </span>
                <Link
                  to="/cases"
                  className={`font-display text-xs font-black underline underline-offset-2 uppercase tracking-wider ${
                    isDark ? 'text-neutral-300 hover:text-white' : 'text-[#4A4552] hover:text-[#141218]'
                  }`}
                >
                  Все кейсы
                </Link>
              </div>
            </div>

            {/* Case 2 */}
            <div
              className={`glass-card-frosted glass-card-hover rounded-[32px] p-6 sm:p-8 flex flex-col justify-between space-y-5 shadow-2xl border ${
                isDark ? 'border-white/20' : 'border-black/10 bg-white/90'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] uppercase font-display font-black tracking-wider border ${
                      isDark
                        ? 'bg-white/10 border-white/20 text-white'
                        : 'bg-black/5 border-black/10 text-[#141218]'
                    }`}
                  >
                    СВАДЕБНОЕ ТОРЖЕСТВО
                  </span>
                  <span
                    className={`text-xs font-sans ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}
                  >
                    120 гостей • Загородный клуб
                  </span>
                </div>

                <div
                  className={`p-4 rounded-2xl italic font-sans text-sm leading-relaxed border ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white/95'
                      : 'bg-black/[0.03] border-black/10 text-[#141218]'
                  }`}
                >
                  «Танцевали абсолютно все — от друзей до бабушек. Звук был чистый и комфортный, не глушил общение за столами.»
                </div>

                <div className="space-y-2 text-xs leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className={`font-display font-black uppercase tracking-wider shrink-0 ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                      Задача:
                    </span>
                    <span className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>
                      Эмоциональный первый танец и вовлечение гостей всех поколений в общий танцпол.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className={`font-display font-black uppercase tracking-wider shrink-0 ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                      Решение:
                    </span>
                    <span className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>
                      Авторская аранжировка песни молодых и проверенный танцевальный плейлист хитов.
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-white/10' : 'border-black/10'
                }`}
              >
                <span className={`text-xs font-sans ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Свадебный организатор Анна
                </span>
                <Link
                  to="/cases"
                  className={`font-display text-xs font-black underline underline-offset-2 uppercase tracking-wider ${
                    isDark ? 'text-neutral-300 hover:text-white' : 'text-[#4A4552] hover:text-[#141218]'
                  }`}
                >
                  Все кейсы
                </Link>
              </div>
            </div>
          </div>

          {/* Guest Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Review 1 */}
            <div
              className={`glass-card-frosted glass-card-hover rounded-[36px] p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-2xl border ${
                isDark ? 'border-white/20' : 'border-black/10 bg-white/90'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] uppercase font-display font-black tracking-wider px-3.5 py-1 rounded-full border ${
                      isDark
                        ? 'text-neutral-200 bg-white/10 border-white/20'
                        : 'text-[#141218] bg-black/5 border-black/10'
                    }`}
                  >
                    ВЫПУСКНОЙ ВЕЧЕР
                  </span>
                  <div className="flex text-[#D49D42]">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <p
                  className={`font-sans text-sm sm:text-base leading-relaxed font-normal ${
                    isDark ? 'text-neutral-200' : 'text-[#2B2733]'
                  }`}
                >
                  «{REVIEWS_DATA[0].text}»
                </p>
              </div>

              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-white/15' : 'border-black/15'
                }`}
              >
                <div>
                  <div
                    className={`font-display text-sm font-black uppercase tracking-wider ${
                      isDark ? 'text-white' : 'text-[#141218]'
                    }`}
                  >
                    {REVIEWS_DATA[0].author}
                  </div>
                  <div
                    className={`text-xs font-sans ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}
                  >
                    {REVIEWS_DATA[0].role}
                  </div>
                </div>
                <Link
                  to="/cases"
                  className={`font-display text-xs font-black underline underline-offset-2 uppercase tracking-wider ${
                    isDark ? 'text-neutral-300 hover:text-white' : 'text-[#4A4552] hover:text-[#141218]'
                  }`}
                >
                  Подробнее о кейсе
                </Link>
              </div>
            </div>

            {/* Review 2 */}
            <div
              className={`glass-card-frosted glass-card-hover rounded-[36px] p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-2xl border ${
                isDark ? 'border-white/20' : 'border-black/10 bg-white/90'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] uppercase font-display font-black tracking-wider px-3.5 py-1 rounded-full border ${
                      isDark
                        ? 'text-neutral-200 bg-white/10 border-white/20'
                        : 'text-[#141218] bg-black/5 border-black/10'
                    }`}
                  >
                    СВАДЕБНОЕ ТОРЖЕСТВО
                  </span>
                  <div className="flex text-[#D49D42]">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <p
                  className={`font-sans text-sm sm:text-base leading-relaxed font-normal ${
                    isDark ? 'text-neutral-200' : 'text-[#2B2733]'
                  }`}
                >
                  «Энергия живого звука просто взорвала зал! Все 100 гостей пели хором каждую песню. Ребята приехали со своим звуком и настроили потрясающий баланс.»
                </p>
              </div>

              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-white/15' : 'border-black/15'
                }`}
              >
                <div>
                  <div
                    className={`font-display text-sm font-black uppercase tracking-wider ${
                      isDark ? 'text-white' : 'text-[#141218]'
                    }`}
                  >
                    {REVIEWS_DATA[1]?.author || 'Виктория'}
                  </div>
                  <div
                    className={`text-xs font-sans ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}
                  >
                    {REVIEWS_DATA[1]?.role || 'невеста'}
                  </div>
                </div>
                <Link
                  to="/cases"
                  className={`font-display text-xs font-black underline underline-offset-2 uppercase tracking-wider ${
                    isDark ? 'text-neutral-300 hover:text-white' : 'text-[#4A4552] hover:text-[#141218]'
                  }`}
                >
                  Подробнее о кейсе
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ (FAQ)
           ========================================================================= */}
        <section id="faq-section" className="space-y-8 scroll-mt-28">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 ${
              isDark ? 'border-white/15' : 'border-black/15'
            }`}
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-2 text-xs font-display font-black tracking-widest uppercase px-4 py-1.5 rounded-full border backdrop-blur-md ${
                    isDark
                      ? 'bg-white/10 text-neutral-200 border-white/15'
                      : 'bg-black/5 text-[#141218] border-black/10'
                  }`}
                >
                  <span>/ ОТВЕТЫ НА ВОПРОСЫ</span>
                </span>
              </div>
              <h2
                className={`font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
              </h2>
            </div>
            <Link
              to="/packages"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all shadow-lg backdrop-blur-md shrink-0 border ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  : 'bg-black/5 hover:bg-black/10 border-black/15 text-[#141218]'
              }`}
            >
              <span>ВСЕ ВОПРОСЫ В ТАРИФАХ</span>
            </Link>
          </div>

          <p
            className={`text-xs sm:text-sm max-w-3xl leading-relaxed ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Всё, что важно знать перед бронированием даты выступления NAKAMA.
          </p>

          <div className="space-y-4">
            {FAQ_DATA.slice(0, 4).map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className={`glass-card-frosted rounded-[28px] overflow-hidden transition-all shadow-xl border ${
                    isDark ? 'border-white/15' : 'border-black/10 bg-white/90'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className={`w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer transition-colors ${
                      isDark ? 'hover:bg-white/[0.04]' : 'hover:bg-black/[0.03]'
                    }`}
                  >
                    <span
                      className={`font-display text-base sm:text-lg font-black uppercase tracking-tight ${
                        isDark ? 'text-white' : 'text-[#141218]'
                      }`}
                    >
                      {item.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? isDark
                            ? 'rotate-180 bg-white text-black border-white'
                            : 'rotate-180 bg-[#141218] text-white border-[#141218]'
                          : isDark
                          ? 'bg-white/10 border-white/20 text-white'
                          : 'bg-black/5 border-black/10 text-[#141218]'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 ${
                          isOpen
                            ? isDark
                              ? 'text-black'
                              : 'text-white'
                            : isDark
                            ? 'text-white'
                            : 'text-[#141218]'
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      className={`px-6 pb-6 sm:px-7 sm:pb-7 pt-2 text-xs sm:text-sm leading-relaxed font-sans border-t ${
                        isDark
                          ? 'text-neutral-200 border-white/10'
                          : 'text-[#2B2733] border-black/10'
                      }`}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            8. ФОТОГАЛЕРЕЯ И СЦЕНИЧЕСКИЕ ОБРАЗЫ
           ========================================================================= */}
        <section id="photo-section" className="space-y-8 scroll-mt-28">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 ${
              isDark ? 'border-white/15' : 'border-black/15'
            }`}
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border backdrop-blur-md ${
                    isDark
                      ? 'bg-white/10 text-[#D49D42] border-white/15'
                      : 'bg-black/5 text-[#B88228] border-black/15 font-semibold'
                  }`}
                >
                  <span>/ ЖИВЫЕ КАДРЫ</span>
                </span>
              </div>
              <h2
                className={`font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                ФОТОГАЛЕРЕЯ И СЦЕНИЧЕСКИЕ ОБРАЗЫ
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleDownloadMediaPack}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all shadow-lg backdrop-blur-md shrink-0 border ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                    : 'bg-black/5 hover:bg-black/10 border-black/15 text-[#141218]'
                }`}
              >
                <Download className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-[#141218]'}`} />
                <span>МЕДИАПАКЕТ</span>
              </button>
              <Link
                to="/photo"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all shadow-lg shrink-0 ${
                  isDark
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-[#141218] text-white hover:bg-black'
                }`}
              >
                <span>ВСЕ ФОТО</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Photo 1: Large Featured */}
            <div
              className={`sm:col-span-2 relative aspect-[16/9] rounded-[32px] overflow-hidden group shadow-2xl border ${
                isDark ? 'border-white/20' : 'border-black/15'
              }`}
            >
              <img
                src={CONTENT_IMAGES.dsc00649}
                alt="Полный состав NAKAMA на сцене"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
                  isDark
                    ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                    : 'bg-gradient-to-t from-black/35 via-transparent to-transparent'
                }`}
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div
                  className={`rounded-[22px] p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 border ${
                    isDark
                      ? 'bg-[#0D0C10]/85 border-white/20 text-white shadow-2xl'
                      : 'bg-white/95 border-white/80 text-[#141218] shadow-xl'
                  }`}
                >
                  <span
                    className={`text-[10px] font-display font-black uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-md mb-2 inline-block ${
                      isDark
                        ? 'text-[#D49D42] bg-[#D49D42]/15 border-[#D49D42]/30'
                        : 'text-[#B88228] bg-[#B88228]/15 border-[#B88228]/30'
                    }`}
                  >
                    LIVE CONCERT
                  </span>
                  <h4
                    className={`font-display text-base sm:text-xl font-black uppercase tracking-wider ${
                      isDark ? 'text-white keep-white' : 'text-[#141218]'
                    }`}
                  >
                    Большой концертный состав
                  </h4>
                  <p
                    className={`text-xs sm:text-sm font-sans mt-1 ${
                      isDark ? 'text-neutral-300 keep-white' : 'text-[#4A4552]'
                    }`}
                  >
                    Живое полифоническое многоголосие и контакт с залом
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div
              className={`relative aspect-[4/3] sm:aspect-auto rounded-[32px] overflow-hidden group shadow-2xl border ${
                isDark ? 'border-white/20' : 'border-black/15'
              }`}
            >
              <img
                src={CONTENT_IMAGES.dsc09924}
                alt="Вокальный ансамбль NAKAMA"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
                  isDark
                    ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                    : 'bg-gradient-to-t from-black/35 via-transparent to-transparent'
                }`}
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div
                  className={`rounded-[20px] p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-300 border ${
                    isDark
                      ? 'bg-[#0D0C10]/85 border-white/20 text-white shadow-2xl'
                      : 'bg-white/95 border-white/80 text-[#141218] shadow-xl'
                  }`}
                >
                  <span
                    className={`text-[10px] font-display font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border backdrop-blur-md mb-1.5 inline-block ${
                      isDark
                        ? 'text-[#D49D42] bg-[#D49D42]/15 border-[#D49D42]/30'
                        : 'text-[#B88228] bg-[#B88228]/15 border-[#B88228]/30'
                    }`}
                  >
                    VOCAL ENSEMBLE
                  </span>
                  <h4
                    className={`font-display text-sm sm:text-base font-black uppercase tracking-wider ${
                      isDark ? 'text-white keep-white' : 'text-[#141218]'
                    }`}
                  >
                    6 вокалистов
                  </h4>
                  <p
                    className={`text-xs font-sans mt-0.5 ${
                      isDark ? 'text-neutral-300 keep-white' : 'text-[#4A4552]'
                    }`}
                  >
                    Мощная полифония и сольные партии
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 3 */}
            <div
              className={`relative aspect-[4/3] rounded-[32px] overflow-hidden group shadow-2xl border ${
                isDark ? 'border-white/20' : 'border-black/15'
              }`}
            >
              <img
                src={CONTENT_IMAGES.dsc00684}
                alt="Кино-концепт NAKAMA"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
                  isDark
                    ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                    : 'bg-gradient-to-t from-black/35 via-transparent to-transparent'
                }`}
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div
                  className={`rounded-[20px] p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-300 border ${
                    isDark
                      ? 'bg-[#0D0C10]/85 border-white/20 text-white shadow-2xl'
                      : 'bg-white/95 border-white/80 text-[#141218] shadow-xl'
                  }`}
                >
                  <span
                    className={`text-[10px] font-display font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border backdrop-blur-md mb-1.5 inline-block ${
                      isDark
                        ? 'text-[#D49D42] bg-[#D49D42]/15 border-[#D49D42]/30'
                        : 'text-[#B88228] bg-[#B88228]/15 border-[#B88228]/30'
                    }`}
                  >
                    CINEMA CONCEPT
                  </span>
                  <h4
                    className={`font-display text-sm sm:text-base font-black uppercase tracking-wider ${
                      isDark ? 'text-white keep-white' : 'text-[#141218]'
                    }`}
                  >
                    Стильный кино-образ
                  </h4>
                  <p
                    className={`text-xs font-sans mt-0.5 ${
                      isDark ? 'text-neutral-300 keep-white' : 'text-[#4A4552]'
                    }`}
                  >
                    Единый дресс-код и эстетика вечернего кино
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 4 */}
            <div
              className={`relative aspect-[4/3] rounded-[32px] overflow-hidden group shadow-2xl border ${
                isDark ? 'border-white/20' : 'border-black/15'
              }`}
            >
              <img
                src={CONTENT_IMAGES.dsc00852}
                alt="Живые инструменты NAKAMA"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
                  isDark
                    ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                    : 'bg-gradient-to-t from-black/35 via-transparent to-transparent'
                }`}
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div
                  className={`rounded-[20px] p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-300 border ${
                    isDark
                      ? 'bg-[#0D0C10]/85 border-white/20 text-white shadow-2xl'
                      : 'bg-white/95 border-white/80 text-[#141218] shadow-xl'
                  }`}
                >
                  <span
                    className={`text-[10px] font-display font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border backdrop-blur-md mb-1.5 inline-block ${
                      isDark
                        ? 'text-[#D49D42] bg-[#D49D42]/15 border-[#D49D42]/30'
                        : 'text-[#B88228] bg-[#B88228]/15 border-[#B88228]/30'
                    }`}
                  >
                    LIVE INSTRUMENTS
                  </span>
                  <h4
                    className={`font-display text-sm sm:text-base font-black uppercase tracking-wider ${
                      isDark ? 'text-white keep-white' : 'text-[#141218]'
                    }`}
                  >
                    Живая ритм-секция
                  </h4>
                  <p
                    className={`text-xs font-sans mt-0.5 ${
                      isDark ? 'text-neutral-300 keep-white' : 'text-[#4A4552]'
                    }`}
                  >
                    100% живой звук без плейбеков и фонограмм
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 5 */}
            <div
              className={`relative aspect-[4/3] rounded-[32px] overflow-hidden group shadow-2xl border ${
                isDark ? 'border-white/20' : 'border-black/15'
              }`}
            >
              <img
                src={CONTENT_IMAGES.dsc09942}
                alt="Концертный драйв NAKAMA"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
                  isDark
                    ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                    : 'bg-gradient-to-t from-black/35 via-transparent to-transparent'
                }`}
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div
                  className={`rounded-[20px] p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-300 border ${
                    isDark
                      ? 'bg-[#0D0C10]/85 border-white/20 text-white shadow-2xl'
                      : 'bg-white/95 border-white/80 text-[#141218] shadow-xl'
                  }`}
                >
                  <span
                    className={`text-[10px] font-display font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border backdrop-blur-md mb-1.5 inline-block ${
                      isDark
                        ? 'text-[#D49D42] bg-[#D49D42]/15 border-[#D49D42]/30'
                        : 'text-[#B88228] bg-[#B88228]/15 border-[#B88228]/30'
                    }`}
                  >
                    STAGE LIGHT & SOUND
                  </span>
                  <h4
                    className={`font-display text-sm sm:text-base font-black uppercase tracking-wider ${
                      isDark ? 'text-white keep-white' : 'text-[#141218]'
                    }`}
                  >
                    Энергия и эмоции
                  </h4>
                  <p
                    className={`text-xs font-sans mt-0.5 ${
                      isDark ? 'text-neutral-300 keep-white' : 'text-[#4A4552]'
                    }`}
                  >
                    Кульминации вечера, где поёт весь зал
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8.5. КАК МЫ РАБОТАЕМ (ПОШАГОВЫЙ ПРОЦЕСС)
           ========================================================================= */}
        <section
          className={`p-8 sm:p-12 lg:p-14 rounded-[36px] glass-card-frosted shadow-2xl space-y-8 border ${
            isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
          }`}
        >
          <div className="border-b pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-white/15 dark:border-white/15">
            <div>
              <span
                className={`text-xs uppercase tracking-[0.2em] font-mono font-bold block mb-1.5 ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                / ПРОЗРАЧНЫЙ ПРОЦЕСС
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight">
                Как мы готовимся к вашему вечеру
              </h2>
            </div>
            <p
              className={`text-xs font-mono uppercase tracking-wider ${
                isDark ? 'text-neutral-400' : 'text-[#686370]'
              }`}
            >
              4 простых шага до оваций
            </p>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x ${
              isDark ? 'divide-white/10' : 'divide-black/10'
            }`}
          >
            <div className="py-6 sm:py-0 sm:px-6 first:sm:pl-0 space-y-3">
              <div
                className={`font-mono text-2xl font-black ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                01
              </div>
              <h3 className="font-serif text-lg font-normal tracking-tight">
                Заявка и дата
              </h3>
              <p
                className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Оставляете запрос на сайте или в Telegram. Фиксируем дату в концертном графике группы.
              </p>
            </div>

            <div className="py-6 sm:py-0 sm:px-6 space-y-3">
              <div
                className={`font-mono text-2xl font-black ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                02
              </div>
              <h3 className="font-serif text-lg font-normal tracking-tight">
                Подбор репертуара
              </h3>
              <p
                className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Утверждаем любимые песни из 100+ треков или разучиваем персональный спецкавер под вас.
              </p>
            </div>

            <div className="py-6 sm:py-0 sm:px-6 space-y-3">
              <div
                className={`font-mono text-2xl font-black ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                03
              </div>
              <h3 className="font-serif text-lg font-normal tracking-tight">
                Саундчек за 2 часа
              </h3>
              <p
                className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Приезжаем заранее. Наш звукорежиссёр идеально отстраивает тракт до появления первого гостя.
              </p>
            </div>

            <div className="py-6 sm:py-0 sm:px-6 last:sm:pr-0 space-y-3">
              <div
                className={`font-mono text-2xl font-black ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                04
              </div>
              <h3 className="font-serif text-lg font-normal tracking-tight">
                Живое шоу и овации
              </h3>
              <p
                className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                10 музыкантов на сцене, 6 вокалов, чистый драйв и хоровое пение зала до финального аккорда.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. ФОРМА БРОНИРОВАНИЯ И ПРЯМЫЕ КОНТАКТЫ
           ========================================================================= */}
        <section>
          <LeadForm
            title="ЗАБРОНИРОВАТЬ ДАТУ ВЫСТУПЛЕНИЯ"
            subtitle="Оставьте контакты и дату события — менеджер Анна свяжется с вами в течение часа для расчёта сметы и согласования трек-листа."
          />
        </section>
      </div>
    </div>
  );
};
