import React from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '../components/SafeImage';
import { LeadForm } from '../components/LeadForm';
import { PhotoSlotPlaceholder } from '../components/PhotoSlotPlaceholder';
import { MEDIA_LINKS, PHOTO_SLOTS_MAP } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const AboutPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'О группе NAKAMA — кавер-группа из Сибири для Новосибирска и России',
    'Кавер-группа NAKAMA из Сибири: история, философия и состав — 10 артистов, 6 вокалистов, 100% живой звук. Выступаем в Новосибирске и по всей России, работаем со сценарием вашего вечера.'
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
        {/* =========================================================================
            1. HERO-БЛОК (О группе)
           ========================================================================= */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="badge-violet px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest font-bold">
                  ИСТОРИЯ И ФИЛОСОФИЯ
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
                  NAKAMA
                  <span className="sr-only"> — кавер-группа из Сибири для Новосибирска и всей России</span>
                </h1>
                <p className="font-handwriting text-2xl sm:text-3xl text-[#8CA069] dark:text-[#A6BE7E] -rotate-1 select-none">
                  10 человек на сцене. Живое многоголосное звучание.
                </p>
              </div>

              <p
                className={`text-sm sm:text-base font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Энергия, которая поднимет любой зал.
              </p>

              <p className="pt-2 text-[11px] font-mono uppercase tracking-[0.15em] opacity-70">
                10 артистов · 6 вокалистов · 100% live
              </p>
            </div>

            <div className="lg:col-span-6">
              <SafeImage
                src={MEDIA_LINKS.lookbook1HeroAbout}
                alt="Кавер-группа NAKAMA фото состава"
                aspectRatio="landscape"
                caption="Кавер-группа NAKAMA — живой концертный состав"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. БЛОК «NAKAMA — ЭТО»
           ========================================================================= */}
        <section
          className={`pt-16 sm:pt-24 border-t ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-4">
                <div
                  className={`w-fit p-4 rounded-3xl font-serif text-4xl shadow-xl border ${
                    isDark
                      ? 'bg-[#A66CD9]/15 border-[#A66CD9]/40 text-[#C59BEE]'
                      : 'bg-[#A66CD9]/10 border-[#A66CD9]/30 text-[#6B2FA0]'
                  }`}
                >
                  仲間
                </div>
                <span className="badge-violet text-xs uppercase tracking-[0.25em] font-mono font-bold px-3 py-1 rounded-full w-fit block">
                  / СМЫСЛ НАЗВАНИЯ
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
                Кто мы
              </h2>
              <p
                className={`text-sm sm:text-base leading-relaxed font-sans font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                В основе бренда лежит японское понятие NAKAMA (仲間) — это соратник, единомышленник и «свой» человек, с которым связывают общие ценности и глубокое доверие.
              </p>
              <p
                className={`text-sm sm:text-base leading-relaxed font-sans font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Это слово определяет отношение группы к каждому событию — не приглашенные артисты, а часть вашей истории. Мы создаем атмосферу, в которой каждый гость почувствует себя «своим».
              </p>
            </div>

            <div className="lg:col-span-5">
              <PhotoSlotPlaceholder
                slot={PHOTO_SLOTS_MAP.ourIdeaAbout}
                allowPreviewToggle={true}
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. БЛОК «ЗАЧЕМ МЫ ВООБЩЕ НУЖНЫ»
           ========================================================================= */}
        <section
          className={`pt-16 sm:pt-24 border-t ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div className="max-w-3xl space-y-2 mb-10">
            <span
              className={`text-xs uppercase tracking-[0.25em] font-mono font-bold block ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              / НАША МИССИЯ
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
              Когда вы в последний раз отдыхали?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p
                className={`text-sm sm:text-base leading-relaxed font-light font-sans ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Современный человек почти разучился это делать. Рабочий чат, незакрытые задачи, фоновая тревога — всё это преследует нас даже после окончания рабочего дня. И ваши гости — не исключение.
              </p>
            </div>
            <div className="lg:col-span-6">
              <SafeImage
                src={MEDIA_LINKS.lookbook2WhyNeeded}
                alt="Эмоции и атмосфера на выступлении NAKAMA"
                aspectRatio="landscape"
              />
            </div>

            <div className="lg:col-span-6 lg:order-4 space-y-6">
              <p
                className={`text-sm sm:text-base leading-relaxed font-light font-sans ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Наша миссия — помогать людям по-настоящему отдыхать через живую музыку. Мы делаем так, чтобы гости не просто присутствовали физически, а действительно переключались в режим «здесь и сейчас», чувствовали себя частью вечера и проживали его вместе.
              </p>
              <Link
                to="/video"
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 ${
                  isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#141218] text-white hover:bg-black'
                }`}
              >
                Смотреть видео
              </Link>
            </div>
            <div className="lg:col-span-6 lg:order-3">
              <SafeImage
                src={MEDIA_LINKS.whyNeededSecond}
                alt="Живые моменты и настроение группы NAKAMA"
                aspectRatio="landscape"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            3.5 БЛОК «НАША ИДЕЯ» (музыкальная раскадровка)
           ========================================================================= */}
        <section
          className={`pt-16 sm:pt-24 border-t ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div className="max-w-3xl space-y-6">
            <span
              className={`text-xs uppercase tracking-[0.25em] font-mono font-bold block ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              / НАША ИДЕЯ
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
              Музыка, которая превращает вечер в историю
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed font-light font-sans ${
                isDark ? 'text-neutral-300' : 'text-[#4A4552]'
              }`}
            >
              Перед каждым мероприятием мы созваниваемся с организатором и ведущим и детально изучаем сценарий. После этого мы начинаем создавать саундтрек к вашему вечеру — подбираем музыку и выстраиваем эмоциональные сцены так, чтобы гости прожили этот праздник как хороший фильм: с завязкой, драйвом, кульминацией и финалом, после которого не хочется сразу вставать с места.
            </p>
          </div>
        </section>

        {/* =========================================================================
            4. БЛОК «НАШИ ПРИНЦИПЫ»
           ========================================================================= */}
        <section
          className={`pt-16 sm:pt-24 space-y-8 border-t ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div>
            <span
              className={`text-xs uppercase tracking-[0.25em] font-mono font-bold block mb-2 ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              / ПРИНЦИПЫ РАБОТЫ
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
              Как мы работаем
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x ${
              isDark ? 'divide-white/10' : 'divide-black/10'
            }`}
          >
            {/* Principle 1 */}
            <div className="py-6 md:py-0 md:px-6 first:md:pl-0 space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight">
                Живой звук без исключений
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed font-sans font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Никаких минусовок и записанных дорожек. Только живое исполнение — потому что именно оно рождает мурашки и настоящий отклик. Это не формат, это принципиальная позиция.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="py-6 md:py-0 md:px-6 space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight">
                Полный состав всегда
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed font-sans font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Мы не предлагаем «урезанную» версию себя. Если вы заказываете NAKAMA — на сцене будет 10 человек. Потому что именно в этом составе рождается то звучание, ради которого мы существуем.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="py-6 md:py-0 md:px-6 last:md:pr-0 space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight">
                Партнёрство, а не услуга
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed font-sans font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Мы работаем не только для гостей, но и вместе с командой события. Слышим задачи организатора, соблюдаем тайминг, не создаём сюрпризов. Наша цель — чтобы вы могли доверить нам музыкальную часть мероприятия и больше о ней не думать.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4.5 ВИДЕО-БЛОК: BACKSTAGE И РЕПЕТИЦИИ
           ========================================================================= */}
        <section
          className={`pt-16 sm:pt-24 space-y-6 border-t ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div>
            <span
              className={`text-xs uppercase tracking-[0.25em] font-mono font-bold block mb-2 ${
                isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
              }`}
            >
              / ЗА КУЛИСАМИ
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
              Backstage, репетиции и живые моменты
            </h2>
            <p
              className={`pt-3 text-sm sm:text-base leading-relaxed font-light font-sans max-w-2xl ${
                isDark ? 'text-neutral-300' : 'text-[#4A4552]'
              }`}
            >
              За сценой NAKAMA — те же живые люди, что и на сцене. Разбор партий, саундчек и настрой перед выходом к гостям.
            </p>
          </div>

          <div className="w-full aspect-video rounded-3xl overflow-hidden bg-black relative shadow-2xl">
            <video
              src="/video/nakama-backstage.mp4"
              controls
              preload="metadata"
              playsInline
              poster={MEDIA_LINKS.lookbook3}
              className="w-full h-full absolute inset-0"
            />
          </div>
        </section>

        {/* =========================================================================
            5. ФИНАЛЬНЫЙ БЛОК О ГРУППЕ (Из файла NAKAMA: ссылка rk0k45F9qGdK3)
           ========================================================================= */}
        <section
          className={`pt-16 sm:pt-24 border-t ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span
                className={`text-xs uppercase tracking-[0.2em] font-mono ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                / ФИНАЛЬНЫЙ АККОРД ВЕЧЕРА
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                «Когда зал поёт вместе — вечер удался»
              </h3>
              <p
                className={`text-xs sm:text-sm font-sans leading-relaxed font-light ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Концерт NAKAMA всегда завершается общей волной восторга. Мы выстраиваем треклист так, чтобы в кульминационный момент пели все поколения гостей.
              </p>
            </div>
            <div className="lg:col-span-6">
              <PhotoSlotPlaceholder
                slot={PHOTO_SLOTS_MAP.finalBlockAbout}
                allowPreviewToggle={true}
              />
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section>
          <LeadForm
            title="Хотите, чтобы мы стали частью вашего вечера?"
            subtitle="Оставьте заявку — ответим в течение нескольких часов и обсудим детали вашего мероприятия."
          />
        </section>
      </div>
    </div>
  );
};
