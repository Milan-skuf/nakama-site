import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Phone, Send, FileText, Disc3, Video } from 'lucide-react';
import { CONTACT_INFO, PACKAGES_DATA } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

// Промо-пакет пока не размещён (нет реальной ссылки на Яндекс.Диск) — блок скрыт, а не «скоро здесь будет».
const PROMO_PACK_URL: string | null = null;

export const AgenciesPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Event-агентствам | Кавер-группа NAKAMA — условия, райдер, материалы',
    'Кавер-группа NAKAMA для event-агентств: открытые цены от 92 000 ₽, свой звукорежиссёр, технический райдер и промо-материалы для КП. Ответ по датам — в течение нескольких часов.'
  );

  return (
    <div className="min-h-screen font-grotesk pt-28 sm:pt-32 pb-20 sm:pb-24 relative overflow-hidden bg-page-base">
      {/* Background ambient lighting — приглушено, страница строже клиентских */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-[#8CA069]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 relative z-10">
        {/* =========================================================================
            HERO
           ========================================================================= */}
        <div
          className={`glass-card-frosted rounded-[36px] p-7 sm:p-12 lg:p-14 shadow-2xl space-y-5 border ${
            isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
          }`}
        >
          <span className="badge-violet px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest font-bold">
            B2B сотрудничество
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
            Кавер-группа NAKAMA — event-агентствам и организаторам
          </h1>

          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans font-light ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Понимаем, как устроена ваша работа: у вас клиент, дедлайн и репутация, и подрядчик не должен добавлять рисков. На этой странице — условия, материалы, райдер и всё, что нужно, чтобы поставить нас в смету уже сегодня.
          </p>

          <Link
            to="/contacts"
            className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl ${
              isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#141218] text-white hover:bg-black'
            }`}
          >
            Проверить дату
          </Link>
        </div>

        {/* =========================================================================
            ЧТО МЫ БЕРЁМ НА СЕБЯ
           ========================================================================= */}
        <section className="space-y-8">
          <div className={`border-b pb-4 ${isDark ? 'border-white/15' : 'border-black/15'}`}>
            <span className="badge-olive text-xs uppercase tracking-[0.2em] font-mono font-bold px-3 py-1 rounded-full inline-block mb-2">
              / ПРЕИМУЩЕСТВА
            </span>
            <h2 className={`font-serif text-2xl sm:text-3xl font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
              Что мы берём на себя
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-7 rounded-[28px] border space-y-3 ${isDark ? 'border-white/15' : 'border-black/10 bg-white/90'}`}>
              <h3 className={`font-serif text-lg font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                1. Один контакт на весь проект
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-sans font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                С момента запроса до отчётных документов вы общаетесь с одним человеком, который в курсе всех договорённостей. Никаких «уточню у ребят и пропаду».
              </p>
            </div>
            <div className={`p-7 rounded-[28px] border space-y-3 ${isDark ? 'border-white/15' : 'border-black/10 bg-white/90'}`}>
              <h3 className={`font-serif text-lg font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                2. Свой звукорежиссёр и оборудование
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-sans font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                Инструменты, микрофоны, пульт — привозим сами. Вам не нужно докупать позиции в смету. Что нужно от площадки — в райдере ниже.
              </p>
            </div>
            <div className={`p-7 rounded-[28px] border space-y-3 ${isDark ? 'border-white/15' : 'border-black/10 bg-white/90'}`}>
              <h3 className={`font-serif text-lg font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                3. Исполняем ТЗ, а не «примерно так»
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-sans font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                Тайминг, репертуар, дресс-код, договорённости с ведущим — фиксируем на брифе и выполняем. Если формат площадки нам не подходит — скажем честно на старте, а не за день до события.
              </p>
            </div>
            <div className={`p-7 rounded-[28px] border space-y-3 ${isDark ? 'border-white/15' : 'border-black/10 bg-white/90'}`}>
              <h3 className={`font-serif text-lg font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                4. Приезжаем заранее
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed font-sans font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                Саундчек — до прихода гостей. Умеем перестраиваться, если программа вечера поплыла: для нас это штатная ситуация.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            РАБОТАЕМ ОФИЦИАЛЬНО
           ========================================================================= */}
        <section className="space-y-6">
          <div className={`border-b pb-4 ${isDark ? 'border-white/15' : 'border-black/15'}`}>
            <span className="badge-violet text-xs uppercase tracking-[0.2em] font-mono font-bold px-3 py-1 rounded-full inline-block mb-2">
              / ДОКУМЕНТЫ
            </span>
            <h2 className={`font-serif text-2xl sm:text-3xl font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
              Прозрачно и с документами
            </h2>
          </div>
          <ul className={`space-y-2.5 text-sm sm:text-base font-sans ${isDark ? 'text-neutral-200' : 'text-[#2B2733]'}`}>
            <li>— Работаем по договору и платим агентскую комиссию</li>
            <li>— Предоставляем закрывающие документы</li>
            <li>— Оплата официально на счёт</li>
            <li>— Предоплата 20%, остаток — не позднее чем за 1 день до мероприятия</li>
          </ul>
        </section>

        {/* =========================================================================
            ФОРМАТЫ И ЦЕНЫ
           ========================================================================= */}
        <section className="space-y-6">
          <div className={`border-b pb-4 ${isDark ? 'border-white/15' : 'border-black/15'}`}>
            <span className="badge-olive text-xs uppercase tracking-[0.2em] font-mono font-bold px-3 py-1 rounded-full inline-block mb-2">
              / ЦЕНЫ
            </span>
            <h2 className={`font-serif text-2xl sm:text-3xl font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
              Форматы и цены — без скрытых позиций
            </h2>
          </div>

          <p className={`text-sm sm:text-base leading-relaxed font-sans font-light max-w-3xl ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
            Цены на сайте — реальные, для прямых клиентов и агентств одинаково открытые. Комиссию агентства обсуждаем индивидуально — напишите нам.
          </p>

          <div className={`rounded-[24px] border divide-y ${isDark ? 'border-white/15 divide-white/10' : 'border-black/10 divide-black/10 bg-white/90'}`}>
            {PACKAGES_DATA.map((pkg) => (
              <div key={pkg.id} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className={`font-serif text-base sm:text-lg font-normal shrink-0 ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                  «{pkg.title}» — {pkg.price}
                </span>
                <span className={`text-xs sm:text-sm font-sans ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                  · {pkg.duration}, полный состав 10 человек, свой звукорежиссёр{pkg.id === 'maximum' ? ', до 5 каверов под мероприятие, работа со сценарием' : ''}
                </span>
              </div>
            ))}
          </div>

          <p className={`text-xs sm:text-sm leading-relaxed font-sans font-light max-w-3xl ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
            Дополнительно: песня-переделка под событие (текст, запись или живое исполнение) — детали на странице пакетов.
            <br />
            Выступление можно разбить на блоки под ваш тайминг — например, 2 выхода по 45 минут или 3 по 30. Согласуем с ведущим и сценарием вечера.
          </p>

          <Link
            to="/packages"
            className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider underline underline-offset-4 ${
              isDark ? 'text-[#D49D42] hover:text-white' : 'text-[#B88228] hover:text-[#141218]'
            }`}
          >
            Подробнее о пакетах →
          </Link>
        </section>

        {/* =========================================================================
            МАТЕРИАЛЫ ДЛЯ РАБОТЫ
           ========================================================================= */}
        <section className="space-y-6">
          <div className={`border-b pb-4 ${isDark ? 'border-white/15' : 'border-black/15'}`}>
            <span className="badge-violet text-xs uppercase tracking-[0.2em] font-mono font-bold px-3 py-1 rounded-full inline-block mb-2">
              / МАТЕРИАЛЫ
            </span>
            <h2 className={`font-serif text-2xl sm:text-3xl font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
              Всё для презентации клиенту — в одном месте
            </h2>
          </div>

          <p className={`text-sm sm:text-base leading-relaxed font-sans font-light max-w-3xl ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
            Не тратьте время на сбор материалов по крупицам — мы уже всё подготовили:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/files/nakama-rider.pdf"
              download
              className={`p-5 rounded-2xl border flex items-center gap-4 transition-all ${
                isDark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 bg-white/90 hover:bg-black/[0.02]'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-[#D49D42]/15 text-[#D49D42]' : 'bg-[#B88228]/15 text-[#B88228]'}`}>
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className={`font-display text-sm font-black uppercase tracking-wide ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                  Скачать райдер (PDF)
                </div>
                <p className={`text-xs font-sans ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Требования к площадке и звуку
                </p>
              </div>
              <Download className={`w-4 h-4 ml-auto shrink-0 ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`} />
            </a>

            {PROMO_PACK_URL && (
              <a
                href={PROMO_PACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-2xl border flex items-center gap-4 transition-all ${
                  isDark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 bg-white/90 hover:bg-black/[0.02]'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-[#A66CD9]/15 text-[#A66CD9]' : 'bg-[#A66CD9]/15 text-[#6E389B]'}`}>
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <div className={`font-display text-sm font-black uppercase tracking-wide ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                    Скачать промо-материалы
                  </div>
                  <p className={`text-xs font-sans ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                    Фото, логотип, описание группы для КП
                  </p>
                </div>
              </a>
            )}

            <Link
              to="/repertoire"
              className={`p-5 rounded-2xl border flex items-center gap-4 transition-all ${
                isDark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 bg-white/90 hover:bg-black/[0.02]'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-[#8CA069]/15 text-[#8CA069]' : 'bg-[#8CA069]/15 text-[#56643E]'}`}>
                <Disc3 className="w-5 h-5" />
              </div>
              <div>
                <div className={`font-display text-sm font-black uppercase tracking-wide ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                  Репертуар со сниппетами
                </div>
                <p className={`text-xs font-sans ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Покажите клиенту, как мы звучим
                </p>
              </div>
            </Link>

            <Link
              to="/video"
              className={`p-5 rounded-2xl border flex items-center gap-4 transition-all ${
                isDark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 bg-white/90 hover:bg-black/[0.02]'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-[#D49D42]/15 text-[#D49D42]' : 'bg-[#B88228]/15 text-[#B88228]'}`}>
                <Video className="w-5 h-5" />
              </div>
              <div>
                <div className={`font-display text-sm font-black uppercase tracking-wide ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                  Видео живых выступлений
                </div>
                <p className={`text-xs font-sans ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Как это выглядит на площадке
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* =========================================================================
            КАК МЫ РАБОТАЕМ (вертикальный процесс)
           ========================================================================= */}
        <section className="space-y-8">
          <div className={`border-b pb-4 ${isDark ? 'border-white/15' : 'border-black/15'}`}>
            <span className="badge-olive text-xs uppercase tracking-[0.2em] font-mono font-bold px-3 py-1 rounded-full inline-block mb-2">
              / ПРОЦЕСС
            </span>
            <h2 className={`font-serif text-2xl sm:text-3xl font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
              От запроса до выступления
            </h2>
          </div>

          <div className={`space-y-0 border-l-2 pl-6 sm:pl-8 ${isDark ? 'border-white/15' : 'border-black/15'}`}>
            {[
              'Оставляете заявку на сайте',
              'В течение нескольких часов отвечаем по дате и смете',
              'Обсуждаем сценарий, репертуар и другие важные детали, присылаем дополнительные материалы для клиента (при необходимости)',
              'День Х — приезжаем заранее, проводим саундчек до прихода гостей и отыгрываем, как в последний раз',
            ].map((step, idx) => (
              <div key={idx} className="relative pb-8 last:pb-0">
                <div
                  className={`absolute -left-[31px] sm:-left-[41px] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${
                    isDark ? 'bg-[#D49D42] text-black' : 'bg-[#B88228] text-white'
                  }`}
                >
                  {idx + 1}
                </div>
                <p className={`text-sm sm:text-base font-sans leading-relaxed ${isDark ? 'text-neutral-200' : 'text-[#2B2733]'}`}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            ФИНАЛЬНЫЙ CTA
           ========================================================================= */}
        <section
          className={`p-8 sm:p-12 rounded-[36px] glass-card-frosted shadow-2xl space-y-8 border ${
            isDark ? 'border-white/20' : 'border-black/10 bg-white/80'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className={`font-serif text-2xl sm:text-4xl font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
              Проверьте нас на ближайшем событии
            </h2>
            <p className={`text-sm sm:text-base font-sans font-light ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
              Пришлите дату и город — ответим по занятости и условиям в течение нескольких часов.
            </p>
            <div className="pt-2">
              <Link
                to="/contacts"
                className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl ${
                  isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#141218] text-white hover:bg-black'
                }`}
              >
                Запросить условия и даты
              </Link>
            </div>
          </div>

          {/* Прямые контакты под формой */}
          <div
            className={`p-6 sm:p-7 rounded-[28px] border max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 ${
              isDark ? 'border-white/15 bg-white/[0.03]' : 'border-black/10 bg-white'
            }`}
          >
            <div className="text-center sm:text-left">
              <div className={`font-display text-sm font-black uppercase tracking-wide ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                Менеджер {CONTACT_INFO.managerName}
              </div>
              <div className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                {CONTACT_INFO.phone} / MAX
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="w-11 h-11 rounded-full bg-[#8CA069] text-white flex items-center justify-center hover:bg-[#7B8F59] transition-all shadow-lg"
                aria-label="Позвонить"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all border ${
                  isDark ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white' : 'bg-black/5 hover:bg-black/10 border-black/15 text-[#141218]'
                }`}
                aria-label="Написать в Telegram"
              >
                <Send className="w-4 h-4 text-[#A66CD9]" />
              </a>
            </div>
          </div>
        </section>

        {/* Schema.org: Offer x2 — переиспользовано со страницы /packages */}
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
      </div>
    </div>
  );
};
