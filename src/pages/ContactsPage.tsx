import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/content';
import { LeadForm } from '../components/LeadForm';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const ContactsPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Контакты и бронь даты | Кавер-группа NAKAMA',
    'Свяжитесь с кавер-группой NAKAMA: оставьте заявку или напишите напрямую менеджеру Анне. Ответим в течение нескольких часов и поможем выбрать формат.'
  );

  return (
    <div
      className={`min-h-screen font-grotesk pt-28 sm:pt-32 pb-20 sm:pb-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-page-base text-white' : 'bg-[#F8F6F0] text-[#141218]'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-[#D49D42]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 relative z-10">
        {/* Header */}
        <div
          className={`glass-card-frosted rounded-[36px] p-7 sm:p-12 lg:p-14 shadow-2xl space-y-5 border ${
            isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest backdrop-blur-md border ${
                isDark
                  ? 'text-[#D49D42] bg-[#D49D42]/10 border-[#D49D42]/25'
                  : 'text-[#B88228] bg-[#B88228]/10 border-[#B88228]/30'
              }`}
            >
              <span>СВЯЗЬ С ГРУППОЙ & БРОНЬ ДАТ</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
            Контакты и бронь даты
          </h1>

          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans font-light ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Минимальный барьер для связи. Ответим в течение часа и зафиксируем доступность вашей даты в концертном календаре.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone */}
          <div
            className={`p-7 sm:p-8 rounded-[32px] glass-card-frosted glass-card-hover space-y-5 shadow-xl flex flex-col justify-between border ${
              isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
            }`}
          >
            <div className="space-y-3">
              <span
                className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                Концертный менеджер
              </span>
              <div className="font-serif text-2xl font-normal">
                Анна
              </div>
            </div>
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className={`inline-block pt-3 text-xl sm:text-2xl font-mono font-bold transition-colors ${
                isDark ? 'text-white hover:text-[#D49D42]' : 'text-[#141218] hover:text-[#B88228]'
              }`}
            >
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Card 2: Messengers */}
          <div
            className={`p-7 sm:p-8 rounded-[32px] glass-card-frosted glass-card-hover space-y-5 shadow-xl flex flex-col justify-between border ${
              isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
            }`}
          >
            <div className="space-y-3">
              <span
                className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                Мессенджеры
              </span>
              <div className="font-serif text-2xl font-normal">
                Быстрый диалог
              </div>
            </div>
            <div className="flex gap-2.5 pt-3">
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 py-3 px-4 rounded-full border transition-all text-xs text-center font-mono font-bold uppercase tracking-wider ${
                  isDark
                    ? 'border-white/20 bg-white/10 hover:bg-white/20 text-white'
                    : 'border-black/15 bg-black/5 hover:bg-black/10 text-[#141218]'
                }`}
              >
                WhatsApp
              </a>
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 py-3 px-4 rounded-full transition-all text-xs text-center font-display font-black uppercase tracking-wider shadow-lg ${
                  isDark
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-[#141218] text-white hover:bg-neutral-800'
                }`}
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Card 3: Geography */}
          <div
            className={`p-7 sm:p-8 rounded-[32px] glass-card-frosted glass-card-hover space-y-5 shadow-xl flex flex-col justify-between border ${
              isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
            }`}
          >
            <div className="space-y-3">
              <span
                className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                География выездов
              </span>
              <div className="font-serif text-2xl font-normal">
                Вся Россия
              </div>
            </div>
            <p
              className={`text-xs sm:text-sm font-sans font-light leading-relaxed pt-2 ${
                isDark ? 'text-neutral-300' : 'text-[#4A4552]'
              }`}
            >
              Базируемся в Новосибирске. Выезжаем в Томск, Кемерово, Барнаул, Москву, СПб и любые города мира.
            </p>
          </div>
        </div>

        {/* Short "How we work" 4 steps block */}
        <section
          className={`p-8 sm:p-10 rounded-[36px] glass-card-frosted space-y-6 shadow-xl border ${
            isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
          }`}
        >
          <div
            className={`pb-4 border-b ${
              isDark ? 'border-white/15' : 'border-black/10'
            }`}
          >
            <span
              className={`text-xs uppercase tracking-[0.2em] font-mono font-bold block mb-1 ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              / ЭТАПЫ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight">
              Порядок работы
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className={`space-y-2 p-6 rounded-[24px] glass-card-frosted border ${
                isDark ? 'border-white/15' : 'border-black/10'
              }`}
            >
              <div
                className={`font-mono text-sm font-bold ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                01. Заявка
              </div>
              <p
                className={`text-xs sm:text-sm font-sans font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Оставляете запрос на сайте или пишете менеджеру в мессенджер.
              </p>
            </div>
            <div
              className={`space-y-2 p-6 rounded-[24px] glass-card-frosted border ${
                isDark ? 'border-white/15' : 'border-black/10'
              }`}
            >
              <div
                className={`font-mono text-sm font-bold ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                02. Созвон
              </div>
              <p
                className={`text-xs sm:text-sm font-sans font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Обсуждаем задачи вечера, тайминг и формат площадки.
              </p>
            </div>
            <div
              className={`space-y-2 p-6 rounded-[24px] glass-card-frosted border ${
                isDark ? 'border-white/15' : 'border-black/10'
              }`}
            >
              <div
                className={`font-mono text-sm font-bold ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                03. Согласование
              </div>
              <p
                className={`text-xs sm:text-sm font-sans font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Утверждаем трек-лист, костюмы и детали сценария.
              </p>
            </div>
            <div
              className={`space-y-2 p-6 rounded-[24px] glass-card-frosted border ${
                isDark ? 'border-white/15' : 'border-black/10'
              }`}
            >
              <div
                className={`font-mono text-sm font-bold ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                04. Выступление
              </div>
              <p
                className={`text-xs sm:text-sm font-sans font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Приезжаем со звукорежиссёром и зажигаем зал с первой ноты.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section>
          <LeadForm
            title="Оставить заявку на мероприятие"
            subtitle="Заполните несколько полей, и менеджер свяжется с вами для расчёта и бронирования даты."
          />
        </section>
      </div>
    </div>
  );
};
