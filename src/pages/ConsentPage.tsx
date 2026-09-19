import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { usePageMeta } from '../utils/usePageMeta';

export const ConsentPage: React.FC = () => {
  const { isDark } = useTheme();

  usePageMeta(
    'Согласие на обработку персональных данных | Кавер-группа NAKAMA',
    'Текст согласия на обработку персональных данных при отправке заявки на сайте кавер-группы NAKAMA.'
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
            Согласие на обработку персональных данных
          </h1>

          <div
            className={`space-y-6 text-xs sm:text-sm font-sans leading-relaxed font-light ${
              isDark ? 'text-neutral-300' : 'text-[#3E3A45]'
            }`}
          >
            <p>
              Настоящим, оставляя свои персональные данные в любой из форм обратной связи на сайте кавер-группы NAKAMA, вы подтверждаете своё согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».
            </p>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                1. Оператор персональных данных
              </h2>
              <p>
                Обработку персональных данных осуществляет Индивидуальный предприниматель Дмитриенко Анна Дмитриевна (ОГРНИП 326420500043734, ИНН 421502347202). Контакты: телефон {CONTACT_INFO.phone}, Telegram: {CONTACT_INFO.telegram}, e-mail: robiland@mail.ru.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                2. Цели обработки персональных данных
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Обработка входящих запросов на бронирование даты живого выступления коллектива NAKAMA;</li>
                <li>Консультирование по стоимости, тарифам, райдерам и репертуару;</li>
                <li>Согласование деталей тайминга, сценария и треклиста мероприятия;</li>
                <li>Заключение официального договора оказания музыкальных и концертных услуг;</li>
                <li>Оперативная коммуникация по телефону и в мессенджерах (Telegram, WhatsApp).</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                3. Перечень обрабатываемых данных
              </h2>
              <p>
                Оператор обрабатывает следующие категории данных: имя заказчика или представителя агентства, контактный номер телефона, логин / номер в мессенджерах, город и дата планируемого мероприятия, формат события, список выбранных из репертуара композиций и комментарии к заявке.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                4. Условия и конфиденциальность
              </h2>
              <p>
                Оператор гарантирует, что полученные персональные данные не передаются третьим лицам, за исключением случаев, прямо предусмотренных действующим законодательством РФ либо необходимых для исполнения договора (например, оформление пропусков на концертную площадку или билетов для трансфера).
              </p>
            </div>

            <div className="space-y-2">
              <h2 className={`font-mono text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                5. Срок действия согласия и порядок отзыва
              </h2>
              <p>
                Согласие действует с момента отправки формы до момента достижения целей обработки или до отзыва согласия. Отозвать согласие можно в любой момент, направив письменное уведомление в Telegram {CONTACT_INFO.telegram} или по телефону {CONTACT_INFO.phone}.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap gap-4 items-center justify-between">
            <span className="text-[11px] font-mono opacity-70">
              Редакция от 2026 г. • Кавер-группа NAKAMA
            </span>
            <Link
              to="/privacy"
              className={`px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md ${
                isDark
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-[#141218] text-white hover:bg-black'
              }`}
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
