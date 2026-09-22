import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
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
              <span>152-ФЗ • СОГЛАСИЕ НА ОБРАБОТКУ ПД</span>
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight leading-tight">
            Согласие на обработку персональных данных
          </h1>

          <div
            className={`space-y-5 text-xs sm:text-sm font-sans leading-relaxed font-light ${
              isDark ? 'text-neutral-300' : 'text-[#3E3A45]'
            }`}
          >
            <p>
              Отмечая чекбокс «Даю согласие на обработку персональных данных» и нажимая кнопку отправки формы на сайте nakama.ru, я, действуя свободно, своей волей и в своём интересе, даю согласие Индивидуальному предпринимателю Дмитриенко Анне Дмитриевне (ОГРНИП 326420500043734, ИНН 421502347202) на обработку моих персональных данных.
            </p>

            <div className="space-y-1.5">
              <h2 className={`font-mono text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                Перечень данных
              </h2>
              <p>Имя; номер телефона; ник в мессенджере; адрес электронной почты; сведения о мероприятии, указанные мной в форме.</p>
            </div>

            <div className="space-y-1.5">
              <h2 className={`font-mono text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                Цели обработки
              </h2>
              <p>Связь со мной по оставленной заявке; подготовка договора на оказание услуг; отправка запрошенных мной материалов.</p>
            </div>

            <div className="space-y-1.5">
              <h2 className={`font-mono text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                Перечень действий
              </h2>
              <p>Сбор, запись, систематизация, накопление, хранение, уточнение, использование, удаление — с использованием средств автоматизации и без них.</p>
            </div>

            <div className="space-y-1.5">
              <h2 className={`font-mono text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                Срок действия
              </h2>
              <p>До достижения целей обработки или до отзыва согласия.</p>
            </div>

            <div className="space-y-1.5">
              <h2 className={`font-mono text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#141218]'}`}>
                Порядок отзыва
              </h2>
              <p>
                Согласие может быть отозвано в любой момент путём направления письма на robiland@mail.ru. Данные будут удалены в течение 30 дней с момента получения отзыва.
              </p>
            </div>

            <p>
              Подробнее о том, как мы обращаемся с данными, —{' '}
              <Link to="/privacy" className={`underline font-semibold ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`}>
                в Политике конфиденциальности
              </Link>
              .
            </p>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap gap-4 items-center justify-between">
            <span className="text-[11px] font-mono opacity-70">
              Кавер-группа NAKAMA
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
