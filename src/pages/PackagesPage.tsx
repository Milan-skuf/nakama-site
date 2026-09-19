import React from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Users,
  Sliders,
  MapPin,
} from 'lucide-react';
import {
  CONTACT_INFO,
} from '../data/content';
import { LeadForm } from '../components/LeadForm';
import { EditorialTariffsGrid } from '../components/EditorialTariffsGrid';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const PackagesPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Форматы и ваши условия | Кавер-группа NAKAMA',
    'Два формата живого выступления кавер-группы NAKAMA — от 92 000 ₽. Полный состав 10 человек, свой звукорежиссёр, работа со сценарием вечера.'
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
            HEADER: ФОРМАТЫ И ВАШИ УСЛОВИЯ
           ========================================================================= */}
        <div className="space-y-5">
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
            Форматы и ваши условия
          </h1>

          <p
            className={`text-sm sm:text-base max-w-3xl leading-relaxed font-sans font-light ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Два выверенных формата живого выступления под задачи вашего вечера. Каждый пакет включает штатного звукорежиссёра, полный состав бэнда и гарантию чистого полифонического звука.
          </p>
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
                  В каждый тариф уже включено
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
                  <h3 className="font-serif font-normal text-base">Полный состав — 10 человек</h3>
                  <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                    6 вокалистов и 4 музыканта (барабаны, бас, гитары, клавиши). Только 100% живой звук без плейбеков.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#D49D42]/20 text-[#D49D42] flex items-center justify-center shrink-0 mt-0.5">
                  <Sliders className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-normal text-base">Штатный звукорежиссёр</h3>
                  <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                    Свой специалист за цифровым пультом контролирует акустику каждого вокала и баланс в зале весь вечер.
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
            3. ДОПОЛНИТЕЛЬНАЯ ОПЦИЯ: «ПЕСНЯ-ПЕРЕДЕЛКА»
           ========================================================================= */}
        <section>
          <div
            className={`rounded-[28px] p-6 sm:p-8 border shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
              isDark
                ? 'bg-gradient-to-r from-purple-950/20 via-black/40 to-black/20 border-white/15 text-white'
                : 'bg-gradient-to-r from-[#A66CD9]/10 via-white to-white border-black/10 text-[#141218]'
            }`}
          >
            <div className="space-y-2 max-w-2xl">
              <span className="badge-violet text-[10px] font-mono px-3 py-0.5 rounded-full uppercase font-bold">
                ЭКСКЛЮЗИВ ДЛЯ ПЕРВОГО ТАНЦА ИЛИ ГИМНА
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-normal">
                Особенная песня-переделка под ваш вечер
              </h2>
              <p className={`text-xs sm:text-sm font-light leading-relaxed ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                Перепишем слова любимого трека под вашу историю (от 5 000 ₽), запишем в студии (от 15 000 ₽) или споём вместе с вами на сцене.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`${CONTACT_INFO.telegram}?text=${encodeURIComponent('Здравствуйте! Хочу узнать про услугу «Песня-переделка» для нашего события.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all shadow-md ${
                  isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#141218] text-white hover:bg-black'
                }`}
              >
                Обсудить песню в Telegram
              </a>
            </div>
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
              Частые вопросы по бронированию
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 divide-y ${
              isDark ? 'divide-white/10' : 'divide-black/10'
            }`}
          >
            {[
              {
                q: 'Как забронировать дату и какая предоплата?',
                a: 'Бронь фиксируется официальным договором и предоплатой 20%. Оставшаяся сумма оплачивается в день мероприятия после завершения выступления.',
              },
              {
                q: 'Что делать, если на площадке нет нужного звукового оборудования?',
                a: 'У нас есть стандартный технический райдер. Мы напрямую связываемся с прокатчиком площадки или организатором и помогаем скомплектовать оптимальный комплект без лишних затрат.',
              },
              {
                q: 'Выезжаете ли вы в другие города и как считается логистика?',
                a: 'Да, группа регулярно гастролирует. Дорога и проживание 10 артистов рассчитываются индивидуально по фактической себестоимости и фиксируются в смете до подписания договора.',
              },
              {
                q: 'Можно ли выбрать песни, которые будут звучать?',
                a: 'Да! В нашем репертуаре более 100 хитов — вы можете отметить любимые и исключить нежелательные. В тарифе «Роскошный максимум» мы также разучиваем до 5 специальных треков под ваш вечер.',
              },
            ].map((faq, index) => (
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
          </div>
        </section>

        {/* =========================================================================
            4. ФОРМА ЗАЯВКИ
           ========================================================================= */}
        <section>
          <LeadForm
            title="Забронировать выбранный формат"
            subtitle="Укажите дату мероприятия и город — менеджер Анна зафиксирует дату по фиксированной смете."
          />
        </section>
      </div>
    </div>
  );
};
