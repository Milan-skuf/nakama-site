import React from 'react';
import { Phone, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, PHOTO_SLOTS_MAP } from '../data/content';
import { LeadForm } from '../components/LeadForm';
import { PhotoSlotPlaceholder } from '../components/PhotoSlotPlaceholder';
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
            Свяжитесь с NAKAMA
          </h1>

          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans font-light ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Расскажите о вашем событии — ответим в течение нескольких часов, подскажем по датам и поможем выбрать формат.
          </p>
        </div>

        {/* =========================================================================
            ПРЯМЫЕ КОНТАКТЫ
           ========================================================================= */}
        <section className="space-y-8">
          <div className={`border-b pb-4 ${isDark ? 'border-white/15' : 'border-black/15'}`}>
            <span className="badge-olive text-xs uppercase tracking-[0.2em] font-mono font-bold px-3 py-1 rounded-full inline-block mb-2">
              / НАПРЯМУЮ
            </span>
            <h2 className={`font-serif text-2xl sm:text-3xl font-normal tracking-tight ${isDark ? 'text-white' : 'text-[#141218]'}`}>
              Напишите нам напрямую
            </h2>
          </div>

          <div
            className={`p-7 sm:p-10 rounded-[36px] glass-card-frosted shadow-xl border grid grid-cols-1 sm:grid-cols-12 gap-8 items-center ${
              isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
            }`}
          >
            <div className="sm:col-span-4">
              <PhotoSlotPlaceholder slot={PHOTO_SLOTS_MAP.managerAnnaPhoto} allowPreviewToggle={true} />
            </div>

            <div className="sm:col-span-8 space-y-5">
              <div>
                <span
                  className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1 ${
                    isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                  }`}
                >
                  Концертный менеджер
                </span>
                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className={`font-serif text-2xl sm:text-3xl font-normal transition-colors ${
                    isDark ? 'text-white hover:text-[#D49D42]' : 'text-[#141218] hover:text-[#B88228]'
                  }`}
                >
                  Анна — {CONTACT_INFO.phone}
                </a>
                <p className={`text-xs sm:text-sm font-sans pt-1 ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}>
                  Telegram / WhatsApp / MAX — как вам удобнее
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href={CONTACT_INFO.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 py-2.5 px-5 rounded-full transition-all text-xs font-display font-black uppercase tracking-wider shadow-lg ${
                    isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#141218] text-white hover:bg-neutral-800'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 py-2.5 px-5 rounded-full border transition-all text-xs font-mono font-bold uppercase tracking-wider ${
                    isDark
                      ? 'border-white/20 bg-white/10 hover:bg-white/20 text-white'
                      : 'border-black/15 bg-black/5 hover:bg-black/10 text-[#141218]'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className={`inline-flex items-center gap-2 py-2.5 px-5 rounded-full border transition-all text-xs font-mono font-bold uppercase tracking-wider ${
                    isDark
                      ? 'border-white/20 bg-white/10 hover:bg-white/20 text-white'
                      : 'border-black/15 bg-black/5 hover:bg-black/10 text-[#141218]'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Позвонить</span>
                </a>
              </div>

              <p className={`text-xs sm:text-sm font-sans leading-relaxed ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
                Отвечаем каждый день с 10:00 до 21:00 (МСК+4). Если написали ночью — обязательно ответим утром.
              </p>
            </div>
          </div>

          {/* Geography card */}
          <div
            className={`p-6 sm:p-7 rounded-[28px] glass-card-frosted shadow-xl border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 ${
              isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
            }`}
          >
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider shrink-0 ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              Куда вы выезжаете?
            </span>
            <p className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
              Вся Россия. Базируемся в Новокузнецке, регулярно выступаем в Новосибирске, Томске, Кемерово, Барнауле, Москве, СПб и других городах.
            </p>
          </div>
        </section>

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
            title="Или оставьте заявку — мы перезвоним"
            subtitle="Заполните несколько полей, и менеджер свяжется с вами для расчёта и бронирования даты."
            redirectTo="/thanks"
          />
        </section>
      </div>
    </div>
  );
};
