import React from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Users,
  Sliders,
  MapPin,
} from 'lucide-react';
import {
  PACKAGES_DATA,
  SONG_REMAKE_DATA,
  FAQ_DATA,
} from '../data/content';
import { CONTENT_IMAGES } from '../content';
import { LeadForm } from '../components/LeadForm';
import { EditorialTariffsGrid } from '../components/EditorialTariffsGrid';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const PackagesPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Пакеты и цены | Кавер-группа NAKAMA — Новосибирск',
    'Два формата выступления от 92 000 ₽. Полный состав 10 человек, живой звук, работа со сценарием. Подберём программу под ваш вечер в Новосибирске и по всей России →'
  );

  return (
    <div
      className={`min-h-screen font-grotesk pt-28 sm:pt-32 pb-20 sm:pb-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-page-base text-white' : 'bg-[#F8F6F0] text-[#141218]'
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-[#D49D42]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 relative z-10">
        {/* =========================================================================
            HEADER: ПАКЕТЫ И ЦЕНЫ
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest backdrop-blur-md border ${
                  isDark
                    ? 'text-[#D49D42] bg-[#D49D42]/10 border-[#D49D42]/25'
                    : 'text-[#B88228] bg-[#B88228]/10 border-[#B88228]/30'
                }`}
              >
                <span>ОФИЦИАЛЬНЫЙ ПРАЙС-ЛИСТ & СТАНДАРТЫ</span>
              </span>
              <span
                className={`text-xs font-mono ${
                  isDark ? 'text-neutral-400' : 'text-[#686370]'
                }`}
              >
                ФИКСИРОВАННАЯ СМЕТА • БЕЗ СКРЫТЫХ ДОПЛАТ
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
              Пакеты и цены на выступление кавер-группы NAKAMA
            </h1>

            <p
              className={`text-sm sm:text-base max-w-3xl leading-relaxed font-sans font-light ${
                isDark ? 'text-neutral-300' : 'text-[#4A4552]'
              }`}
            >
              Мы предлагаем два формата: состав всегда полный, звук — только живой. Дальше выбираете сами: готовая программа или история вашего вечера, продуманная вместе с нами до мелочей.
            </p>

            <Link
              to="/repertoire"
              className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider underline underline-offset-4 ${
                isDark ? 'text-neutral-400 hover:text-white' : 'text-[#686370] hover:text-[#141218]'
              }`}
            >
              Хотите сначала услышать, как мы звучим? → Слушать репертуар
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div
              className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border ${
                isDark ? 'border-white/15' : 'border-black/15'
              }`}
            >
              <img
                src={CONTENT_IMAGES.dsc00772}
                alt="Кавер-группа NAKAMA — полный состав"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* =========================================================================
            1. ТАРИФЫ ВЫСТУПЛЕНИЯ
           ========================================================================= */}
        <section className="space-y-8">
          <EditorialTariffsGrid showSectionHeader={true} />
        </section>

        {/* =========================================================================
            2. ЧТО ВКЛЮЧЕНО В КАЖДЫЙ ТАРИФ (КОМПАКТНЫЙ СТАНДАРТ NAKAMA)
           ========================================================================= */}
        <section
          className={`pt-16 sm:pt-20 border-t ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-current/10">
              <div>
                <span
                  className={`text-xs uppercase tracking-[0.2em] font-mono font-bold block mb-1 ${
                    isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                  }`}
                >
                  / БАЗОВЫЙ СТАНДАРТ
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-normal">
                  Это есть в каждом пакете — без исключений
                </h2>
              </div>
              <span className="text-xs font-mono opacity-70">
                без доплат и скрытых пунктов
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#8CA069]/20 text-[#8CA069] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-normal text-base">Полный состав всегда</h3>
                  <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                    Мы не предлагаем NAKAMA в «сокращённом виде» — именно полный ансамбль создаёт то многоголосое звучание, за которым к нам обращаются.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#D49D42]/20 text-[#D49D42] flex items-center justify-center shrink-0 mt-0.5">
                  <Sliders className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-normal text-base">Свой звукорежиссёр</h3>
                  <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                    На каждом выступлении, независимо от формата — качество звука под нашей ответственностью.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#A66CD9]/20 text-[#A66CD9] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-normal text-base">Выезд по всей России</h3>
                  <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                    Базис в Новокузнецке, регулярные выступления в Новосибирске, Москве, Сочи и любых регионах страны.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ДОПОЛНИТЕЛЬНАЯ УСЛУГА: «ПЕСНЯ-ПЕРЕДЕЛКА»
           ========================================================================= */}
        <section
          className={`pt-16 sm:pt-20 border-t space-y-8 ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="badge-violet text-[10px] font-mono px-3 py-0.5 rounded-full uppercase font-bold inline-block">
                ЭКСКЛЮЗИВ ДЛЯ ПЕРВОГО ТАНЦА ИЛИ ГИМНА
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight">
                Хотите песню, которая будет только вашей?
              </h2>
              <p className={`text-sm sm:text-base font-light leading-relaxed ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                Присылаете любую песню — переписываем текст под ваш повод: первый танец, поздравление, трогательный момент для родителей. Можно добавить к любому из пакетов.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div
                className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border ${
                  isDark ? 'border-white/15' : 'border-black/15'
                }`}
              >
                <img
                  src={CONTENT_IMAGES.dsc01041}
                  alt="Вокалист кавер-группы NAKAMA записывает голос в студии"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SONG_REMAKE_DATA.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-[28px] glass-card-frosted flex flex-col justify-between space-y-4 border ${
                  isDark ? 'border-white/15' : 'border-black/10 bg-white/90'
                }`}
              >
                <div className="space-y-2">
                  {item.badge && (
                    <span className="badge-violet text-[9px] font-mono uppercase px-2 py-0.5 rounded-full font-bold inline-block">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="font-serif text-lg font-normal tracking-tight">{item.title}</h3>
                  <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                    {item.description}
                  </p>
                </div>
                <div
                  className={`font-mono text-xl font-bold pt-2 border-t ${
                    isDark ? 'border-white/10 text-[#D49D42]' : 'border-black/10 text-[#B88228]'
                  }`}
                >
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="#booking-section"
              className={`px-8 py-3.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all shadow-md ${
                isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#141218] text-white hover:bg-black'
              }`}
            >
              Заказать услугу
            </a>
          </div>
        </section>

        {/* =========================================================================
            4. КЛЮЧЕВЫЕ УСЛОВИЯ И ГАРАНТИИ (ЧЁТКО И ПО СУЩЕСТВУ)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4 border-current/10">
            <div>
              <span
                className={`text-xs uppercase tracking-[0.2em] font-mono font-bold block mb-1 ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                / ГАРАНТИИ
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal">
                Условия сотрудничества
              </h2>
            </div>
            <Link
              to="/agencies"
              className={`text-xs font-mono hover:underline inline-flex items-center gap-1.5 ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              <span>Технический райдер</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x ${
              isDark ? 'divide-white/10' : 'divide-black/10'
            }`}
          >
            <div className="py-5 sm:py-0 sm:px-5 first:sm:pl-0 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>01. ДОГОВОР</span>
                <span className="opacity-50">20%</span>
              </div>
              <h3 className="font-serif text-base font-normal">Фиксация даты и цены</h3>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                Работаем по договору ИП или самозанятых. Предоплата 20% гарантирует бронь даты и неизменность сметы.
              </p>
            </div>

            <div className="py-5 sm:py-0 sm:px-5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>02. ТАЙМИНГ</span>
                <span className="opacity-50">-3 ЧАСА</span>
              </div>
              <h3 className="font-serif text-base font-normal">Прибытие на площадку</h3>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                Приезжаем за 3 часа до первых гостей, проводим спокойный саундчек и готовы к таймингу мероприятия.
              </p>
            </div>

            <div className="py-5 sm:py-0 sm:px-5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>03. ЗВУК</span>
                <span className="opacity-50">IN-EAR</span>
              </div>
              <h3 className="font-serif text-base font-normal">Звук «под ключ»</h3>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                Штатный звукорежиссёр за пультом отвечает за баланс 6 вокалов и акустику зала без сюрпризов для вас.
              </p>
            </div>

            <div className="py-5 sm:py-0 sm:px-5 last:sm:pr-0 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>04. РАЙДЕР</span>
                <span className="opacity-50">СТАНДАРТ</span>
              </div>
              <h3 className="font-serif text-base font-normal">Понятные требования</h3>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                Адекватный технический и бытовой райдер. Помогаем согласовать бэклайн со звуковым прокатчиком площадки.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ (ТОЛЬКО ГЛАВНОЕ)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b pb-4 border-current/10">
            <span
              className={`text-xs uppercase tracking-[0.2em] font-mono font-bold block mb-1 ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              / ВОПРОСЫ И ОТВЕТЫ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal">
              Отвечаем заранее
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 divide-y ${
              isDark ? 'divide-white/10' : 'divide-black/10'
            }`}
          >
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className="py-5 space-y-2">
                <h3 className="font-mono text-xs sm:text-sm font-semibold">{faq.q}</h3>
                <p
                  className={`text-xs font-sans leading-relaxed ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  {faq.a}
                </p>
              </div>
            ))}
            <div className="py-5 space-y-2">
              <h3 className="font-mono text-xs sm:text-sm font-semibold">Работаете ли вы с event-агентствами?</h3>
              <p
                className={`text-xs font-sans leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Да, у нас есть отдельные условия для агентств: договор с агентской комиссией, закрывающие документы и технический райдер.{' '}
                <Link
                  to="/agencies"
                  className={`underline underline-offset-2 font-semibold ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`}
                >
                  Смотреть условия для агентств →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. ФИНАЛЬНЫЙ CTA-БЛОК
           ========================================================================= */}
        <section>
          <LeadForm
            title="Остались вопросы?"
            subtitle="Расскажите нам о своём мероприятии — поможем выбрать пакет и соберём программу под ваш вечер."
          />
        </section>

        {/* Schema.org: Offer x2 + FAQPage — конкретные цены и вопрос-ответ для расширенных сниппетов */}
        {PACKAGES_DATA.map((pkg) => (
          <script
            key={pkg.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Offer',
                name: pkg.title,
                price: String(pkg.priceNum),
                priceCurrency: 'RUB',
                description: `${pkg.duration} кавер-группы NAKAMA, полный состав, свой звукорежиссёр`,
              }),
            }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQ_DATA.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </div>
    </div>
  );
};
