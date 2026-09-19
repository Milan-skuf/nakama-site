import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const PrivacyPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Политика конфиденциальности | NAKAMA',
    'Политика обработки персональных данных на сайте кавер-группы NAKAMA: какие данные собираются, с какой целью и как их можно отозвать.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`min-h-screen font-grotesk pt-28 sm:pt-32 pb-20 sm:pb-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-page-base text-white' : 'bg-[#F8F6F0] text-[#141218]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors ${
            isDark ? 'text-neutral-400 hover:text-white' : 'text-[#686370] hover:text-black'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Вернуться на главную</span>
        </Link>

        <div
          className={`glass-card-frosted rounded-[36px] p-8 sm:p-12 lg:p-14 shadow-2xl space-y-6 border ${
            isDark ? 'border-white/20 text-white' : 'border-black/10 text-[#141218]'
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border ${
                isDark
                  ? 'text-[#D49D42] bg-[#D49D42]/10 border-[#D49D42]/25'
                  : 'text-[#B88228] bg-[#B88228]/10 border-[#B88228]/30'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>152-ФЗ • ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight leading-tight">
            Политика конфиденциальности
          </h1>

          <div
            className={`space-y-6 text-xs sm:text-sm font-sans leading-relaxed font-light ${
              isDark ? 'text-neutral-300' : 'text-[#3E3A45]'
            }`}
          >
            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                1. Общие положения
              </h2>
              <p>
                Настоящая Политика определяет порядок обработки персональных данных посетителей сайта nakama.ru (далее — Сайт) и меры по обеспечению их безопасности.
              </p>
              <p>
                Оператор персональных данных: Индивидуальный предприниматель Дмитриенко Анна Дмитриевна. ОГРНИП: 326420500043734 · ИНН: 421502347202. E-mail для обращений по вопросам персональных данных: robiland@mail.ru.
              </p>
              <p>
                Используя Сайт и отправляя данные через формы, вы соглашаетесь с настоящей Политикой.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                2. Какие данные мы собираем
              </h2>
              <p>Данные, которые вы передаёте сами (через формы на Сайте): имя; номер телефона и/или ник в мессенджере; сведения о мероприятии (тип, дата, город, комментарий).</p>
              <p>Данные, собираемые автоматически: файлы cookie; данные сервиса веб-аналитики Яндекс.Метрика (IP-адрес в обезличенном виде, тип устройства и браузера, страницы посещения, источник перехода).</p>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                3. Цели обработки
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>связь с вами по оставленной заявке (звонок, сообщение в мессенджере);</li>
                <li>подготовка и заключение договора на выступление;</li>
                <li>отправка материалов, которые вы запросили (райдер, репертуар, презентация);</li>
                <li>информационная рассылка о репертуаре и свободных датах — только при отдельном согласии;</li>
                <li>улучшение работы Сайта на основе обезличенной статистики.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                4. Правовые основания
              </h2>
              <p>
                Обработка осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» на основании вашего согласия, которое вы даёте, отмечая чекбокс при отправке формы.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                5. Cookie и аналитика
              </h2>
              <p>
                Сайт использует cookie и сервис Яндекс.Метрика для сбора обезличенной статистики посещений. Вы можете отключить cookie в настройках браузера — Сайт останется работоспособным, кроме отдельных функций (например, сохранение выбранных треков в разделе «Репертуар»).
              </p>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                6. Передача данных третьим лицам
              </h2>
              <p>Мы не продаём и не передаём ваши данные третьим лицам, за исключением: случаев, предусмотренных законодательством РФ; технических сервисов, обеспечивающих работу Сайта (хостинг, аналитика), — в объёме, необходимом для их работы.</p>
              <p>Данные хранятся на серверах, расположенных на территории Российской Федерации.</p>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                7. Сроки хранения и защита
              </h2>
              <p>
                Данные обрабатываются до достижения целей обработки либо до отзыва согласия, после чего удаляются в течение 30 дней. Мы применяем организационные и технические меры защиты: ограничение доступа, защищённое соединение (HTTPS), хранение на защищённых серверах.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                8. Ваши права
              </h2>
              <p>Вы вправе в любой момент: запросить сведения об обработке ваших данных; потребовать их уточнения, блокирования или удаления; отозвать согласие на обработку.</p>
              <p>Для этого напишите на robiland@mail.ru — ответим в течение 10 рабочих дней.</p>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                9. Изменения Политики
              </h2>
              <p>Актуальная версия всегда размещена на этой странице. При существенных изменениях дата публикации обновляется.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap gap-4 items-center justify-between">
            <span className="text-[11px] font-mono opacity-70">
              Редакция от 2026 г. • Кавер-группа NAKAMA
            </span>
            <Link
              to="/consent"
              className={`px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md ${
                isDark
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-[#141218] text-white hover:bg-black'
              }`}
            >
              Согласие на обработку данных
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
