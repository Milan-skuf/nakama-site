import React from 'react';
import { Download, Phone, Send } from 'lucide-react';
import { CONTACT_INFO, PHOTO_SLOTS_MAP } from '../data/content';
import { LeadForm } from '../components/LeadForm';
import { PhotoSlotPlaceholder } from '../components/PhotoSlotPlaceholder';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const AgenciesPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Для event-агентств | Кавер-группа NAKAMA — партнёрство',
    'Кавер-группа NAKAMA для event-агентств: открытые цены от 92 000 ₽, свой звукорежиссёр, технический райдер и промо-материалы для КП. Ответ по датам — в течение нескольких часов.'
  );

  const handleDownloadFile = (fileName: string, title: string) => {
    const textContent = `ДОКУМЕНТ: ${title}\nКАВЕР-ГРУППА NAKAMA (10 ЧЕЛОВЕК)\n\n` +
      `Контакты для организаторов:\nМенеджер Анна: ${CONTACT_INFO.phone}\nTelegram: ${CONTACT_INFO.telegram}\n\n` +
      `1. СОСТАВ: 10 человек на сцене (6 вокалистов, гитары, бас, клавиши, ударные) + звукорежиссёр.\n` +
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

  return (
    <div className="min-h-screen font-grotesk pt-28 sm:pt-32 pb-20 sm:pb-24 relative overflow-hidden bg-page-base">
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-[#8CA069]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-96 right-1/4 w-[400px] h-[400px] bg-[#A66CD9]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 relative z-10">
        {/* Header */}
        <div
          className={`glass-card-frosted rounded-[36px] p-7 sm:p-12 lg:p-14 shadow-2xl space-y-5 border ${
            isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
          }`}
        >
          <span className="badge-violet px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest font-bold">
            B2B сотрудничество
          </span>

          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
              Для event-агентств и организаторов
            </h1>
            <p className="font-handwriting text-2xl sm:text-3xl text-[#8CA069] dark:text-[#A6BE7E] -rotate-1 select-none">
              «чёткий тайминг и прозрачные партнёрские условия»
            </p>
          </div>

          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans font-light ${
              isDark ? 'text-neutral-300' : 'text-[#4A4552]'
            }`}
          >
            Надёжный музыкальный хедлайнер для ваших событий. Понятный райдер, свой звукорежиссёр, уважение к таймингу и прозрачные партнёрские условия.
          </p>
        </div>

        {/* Why work with us */}
        <section className="space-y-8">
          <div
            className={`border-b pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 ${
              isDark ? 'border-white/15' : 'border-black/15'
            }`}
          >
            <div>
              <span className="badge-olive text-xs uppercase tracking-[0.2em] font-mono font-bold px-3 py-1 rounded-full inline-block mb-2">
                / ПРЕИМУЩЕСТВА
              </span>
              <h2
                className={`font-serif text-2xl sm:text-3xl font-normal tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                Почему с нами удобно работать
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className={`p-7 rounded-[32px] glass-card-frosted glass-card-hover space-y-4 shadow-xl border transition-all ${
                isDark ? 'border-white/20 hover:border-[#8CA069]/50' : 'border-black/10 bg-white/90 hover:border-[#8CA069]/60'
              }`}
            >
              <h3
                className={`font-serif text-xl font-normal tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                Понятный райдер
              </h3>
              <p
                className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Чёткие технический и бытовой райдеры без завышенных требований. Адаптируемся к площадке.
              </p>
            </div>

            <div
              className={`p-7 rounded-[32px] glass-card-frosted glass-card-hover space-y-4 shadow-xl border transition-all ${
                isDark ? 'border-white/20 hover:border-[#A66CD9]/50' : 'border-black/10 bg-white/90 hover:border-[#A66CD9]/60'
              }`}
            >
              <h3
                className={`font-serif text-xl font-normal tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                Свой звукорежиссёр
              </h3>
              <p
                className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Наш штатный специалист полностью отвечает за настройку тракта и баланс 6 вокалов в миксе.
              </p>
            </div>

            <div
              className={`p-7 rounded-[32px] glass-card-frosted glass-card-hover space-y-4 shadow-xl border transition-all ${
                isDark ? 'border-white/20 hover:border-[#8CA069]/50' : 'border-black/10 bg-white/90 hover:border-[#8CA069]/60'
              }`}
            >
              <h3
                className={`font-serif text-xl font-normal tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                Чёткий тайминг
              </h3>
              <p
                className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Приезжаем заранее на саундчек, не задерживаем программу ведущего, плавно встраиваемся в ход вечера.
              </p>
            </div>

            <div
              className={`p-7 rounded-[32px] glass-card-frosted glass-card-hover space-y-4 shadow-xl border transition-all ${
                isDark ? 'border-white/20 hover:border-[#A66CD9]/50' : 'border-black/10 bg-white/90 hover:border-[#A66CD9]/60'
              }`}
            >
              <h3
                className={`font-serif text-xl font-normal tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                Ноль сюрпризов
              </h3>
              <p
                className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Все треки, образы и акценты согласуются до начала мероприятия. Вы спокойны за финал.
              </p>
            </div>
          </div>
        </section>

        {/* Downloadable Materials Grid */}
        <section
          className={`p-8 sm:p-12 rounded-[36px] glass-card-frosted shadow-2xl space-y-10 border ${
            isDark ? 'border-white/20' : 'border-black/10 bg-white/80'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="badge-violet text-xs uppercase tracking-[0.2em] font-mono font-bold px-3 py-1 rounded-full inline-block">
              ДОКУМЕНТЫ И ПРОМО-МАТЕРИАЛЫ
            </span>
            <h2
              className={`font-serif text-3xl sm:text-4xl font-normal tracking-tight ${
                isDark ? 'text-white' : 'text-[#141218]'
              }`}
            >
              Материалы для скачивания
            </h2>
            <p
              className={`text-xs sm:text-sm font-sans font-light ${
                isDark ? 'text-neutral-300' : 'text-[#4A4552]'
              }`}
            >
              Всё необходимое для составления сметы, согласования с площадкой и презентации клиенту
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tech Rider */}
            <div
              className={`p-6 rounded-[28px] glass-card-frosted flex flex-col justify-between space-y-6 border ${
                isDark ? 'border-white/15' : 'border-black/10 bg-white/90'
              }`}
            >
              <div className="space-y-2">
                <span className="badge-olive text-[9px] font-mono uppercase px-2 py-0.5 rounded-full font-bold">PDF</span>
                <h3
                  className={`font-serif text-lg font-normal tracking-tight ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  Технический райдер
                </h3>
                <p
                  className={`text-xs font-sans font-light ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  Спецификация по звуку, стейдж-план, коммутация и микрофонный парк.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadFile('NAKAMA_Tech_Rider.txt', 'Технический райдер')}
                className={`w-full py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                    : 'bg-black/5 hover:bg-black/10 text-[#141218] border-black/15'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Скачать PDF</span>
              </button>
            </div>

            {/* Hospitality Rider */}
            <div
              className={`p-6 rounded-[28px] glass-card-frosted flex flex-col justify-between space-y-6 border ${
                isDark ? 'border-white/15' : 'border-black/10 bg-white/90'
              }`}
            >
              <div className="space-y-2">
                <span className="badge-olive text-[9px] font-mono uppercase px-2 py-0.5 rounded-full font-bold">PDF</span>
                <h3
                  className={`font-serif text-lg font-normal tracking-tight ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  Бытовой райдер
                </h3>
                <p
                  className={`text-xs font-sans font-light ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  Требования к гримёрной комнате, питанию и логистике на выезде.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadFile('NAKAMA_Hospitality_Rider.txt', 'Бытовой райдер')}
                className={`w-full py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                    : 'bg-black/5 hover:bg-black/10 text-[#141218] border-black/15'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Скачать PDF</span>
              </button>
            </div>

            {/* Media Pack */}
            <div
              className={`p-6 rounded-[28px] glass-card-frosted flex flex-col justify-between space-y-6 border ${
                isDark ? 'border-white/15' : 'border-black/10 bg-white/90'
              }`}
            >
              <div className="space-y-2">
                <span className="badge-violet text-[9px] font-mono uppercase px-2 py-0.5 rounded-full font-bold">ZIP</span>
                <h3
                  className={`font-serif text-lg font-normal tracking-tight ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  Медиапапка
                </h3>
                <p
                  className={`text-xs font-sans font-light ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  Фото в высоком разрешении, логотипы, промо-ролики для афиш и соцсетей.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadFile('NAKAMA_Media_Kit.txt', 'Медиапапка')}
                className={`w-full py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                    : 'bg-black/5 hover:bg-black/10 text-[#141218] border-black/15'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Скачать ZIP</span>
              </button>
            </div>

            {/* Price list */}
            <div
              className={`p-6 rounded-[28px] glass-card-frosted flex flex-col justify-between space-y-6 border ${
                isDark ? 'border-white/15' : 'border-black/10 bg-white/90'
              }`}
            >
              <div className="space-y-2">
                <span className="badge-olive text-[9px] font-mono uppercase px-2 py-0.5 rounded-full font-bold">PRICES</span>
                <h3
                  className={`font-serif text-lg font-normal tracking-tight ${
                    isDark ? 'text-white' : 'text-[#141218]'
                  }`}
                >
                  Прайс-лист
                </h3>
                <p
                  className={`text-xs font-sans font-light ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  Форматы «Базовый минимум» 92 000 ₽ и «Роскошный максимум» 109 000 ₽.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadFile('NAKAMA_Price_List.txt', 'Прайс-лист')}
                className="w-full py-2.5 rounded-full text-xs font-display font-black uppercase tracking-wider bg-[#8CA069] text-white hover:bg-[#7B8F59] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Скачать прайс</span>
              </button>
            </div>
          </div>
        </section>

        {/* Visual Backstage & Rider Coordination Slot */}
        <section
          className={`glass-card-frosted rounded-[36px] p-7 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border ${
            isDark ? 'border-white/20' : 'border-black/10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="badge-olive text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full font-bold inline-block">
                Комфорт организатора
              </span>
              <h2
                className={`font-serif text-2xl sm:text-4xl font-normal leading-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                Спокойствие координатора в день события
              </h2>
              <p
                className={`text-xs sm:text-sm font-sans leading-relaxed font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Мы знаем цену спокойствия организатора в день праздника. Музыканты приезжают строго по графику, не спорят с банкетной службой, а наш звукорежиссёр берёт всю техническую суету по звуку и коммутации на себя.
              </p>
              <div
                className={`flex flex-wrap gap-4 text-xs font-mono pt-1 ${
                  isDark ? 'text-neutral-400' : 'text-[#686370]'
                }`}
              >
                <span>саундчек до гостей</span>
                <span>•</span>
                <span>без задержек программы</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <PhotoSlotPlaceholder
                slot={PHOTO_SLOTS_MAP.agenciesRider}
                allowPreviewToggle={true}
              />
            </div>
          </div>
        </section>

        {/* Manager Card */}
        <section
          className={`p-8 sm:p-10 rounded-[36px] glass-card-frosted max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl border paper-texture director-tape ${
            isDark ? 'border-white/20' : 'border-black/10'
          }`}
        >
          <div className="space-y-2 text-center sm:text-left">
            <span className="badge-violet text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block">
              ПРЯМАЯ B2B СВЯЗЬ
            </span>
            <h3
              className={`font-serif text-2xl sm:text-3xl font-normal leading-snug ${
                isDark ? 'text-white' : 'text-[#141218]'
              }`}
            >
              Концертный менеджер: Анна
            </h3>
            <p
              className={`text-xs sm:text-sm font-sans font-light ${
                isDark ? 'text-neutral-300' : 'text-[#4A4552]'
              }`}
            >
              Согласование условий, бронирование дат, райдеры и официальные договоры
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#8CA069] text-white font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#7B8F59] transition-all shadow-lg"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a
              href={CONTACT_INFO.telegram}
              target="_blank"
              rel="noreferrer"
              className={`w-full sm:w-auto px-6 py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border ${
                isDark
                  ? 'bg-white/10 text-white hover:bg-white/20 border-white/20'
                  : 'bg-black/5 text-[#141218] hover:bg-black/10 border-black/15'
              }`}
            >
              <Send className="w-4 h-4 text-[#A66CD9]" />
              <span>Telegram</span>
            </a>
          </div>
        </section>

        {/* B2B CTA Form */}
        <section>
          <LeadForm
            title="Обсудить сотрудничество с NAKAMA"
            subtitle="Заполните короткую форму — менеджер Анна свяжется для обсуждения условий партнёрства."
            defaultEventType="Корпоратив"
          />
        </section>
      </div>
    </div>
  );
};
