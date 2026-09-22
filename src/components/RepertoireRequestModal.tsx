import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Send, MessageSquare, CheckCircle2, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../utils/favorites';

interface RepertoireRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export const RepertoireRequestModal: React.FC<RepertoireRequestModalProps> = ({ open, onClose }) => {
  const { isDark } = useTheme();
  const { favoriteTracks, toggleFavorite, clearFavorites } = useFavorites();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Свадьба');
  const [eventDate, setEventDate] = useState('');
  const [city, setCity] = useState('');
  const [comment, setComment] = useState('');
  const [consent, setConsent] = useState(false);
  const [consentTimestamp, setConsentTimestamp] = useState<string | null>(null);
  const [wantsNews, setWantsNews] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const trackListText = favoriteTracks.length > 0
    ? favoriteTracks.map((t) => `${t.title} — ${t.originalArtist}`).join('\n')
    : 'Список не выбран';

  const leadMessage =
    `Здравствуйте! Собрал(а) плейлист на сайте NAKAMA:\n\n` +
    `Имя: ${name || 'Заказчик'}\n` +
    `Телефон/Мессенджер: ${phone || 'Не указан'}\n` +
    `Событие: ${eventType}\n` +
    `Дата: ${eventDate || 'Уточняется'}\n` +
    `Город: ${city || 'Не указан'}\n` +
    (comment ? `Комментарий: ${comment}\n` : '') +
    (wantsNews ? `Хочет получать новости о репертуаре и свободных датах\n` : '') +
    (consentTimestamp ? `Согласие на обработку ПД: получено ${consentTimestamp}\n` : '') +
    `\nВыбранные треки (${favoriteTracks.length}):\n${trackListText}`;

  const encodedMsg = encodeURIComponent(leadMessage);
  const telegramUrl = `${CONTACT_INFO.telegram}?text=${encodedMsg}`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodedMsg}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setConsentTimestamp(new Date().toLocaleString('ru-RU'));
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[32px] border p-6 sm:p-8 shadow-2xl space-y-5 ${
          isDark ? 'glass-card-frosted border-white/25 text-white' : 'bg-white border-black/15 text-[#141218]'
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
            isDark ? 'hover:bg-white/10 text-neutral-300' : 'hover:bg-black/5 text-[#4A4552]'
          }`}
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center space-y-4 py-6">
            <CheckCircle2 className={`w-12 h-12 mx-auto ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`} />
            <h3 className="font-display text-xl font-black uppercase">Спасибо!</h3>
            <p className={`text-sm leading-relaxed max-w-sm mx-auto ${isDark ? 'text-neutral-300' : 'text-[#4A4552]'}`}>
              Ваш список у нас — ответим в течение нескольких часов и обсудим программу.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 max-w-sm mx-auto">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-full text-xs font-display font-black uppercase tracking-wider shadow-md bg-gradient-to-r from-[#D49D42] to-[#E8590C] text-white hover:opacity-95 transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={`py-2.5 px-4 rounded-full text-xs font-display font-bold uppercase tracking-wider border transition-all text-center flex items-center justify-center gap-1.5 ${
                  isDark ? 'border-white/20 bg-white/10 hover:bg-white/20 text-white' : 'border-black/15 bg-black/5 hover:bg-black/10 text-[#141218]'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className={`text-xs font-mono uppercase tracking-wider underline ${isDark ? 'text-neutral-400' : 'text-[#686370]'}`}
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight">
                Ваш плейлист готов — осталось познакомиться
              </h3>
            </div>

            {favoriteTracks.length > 0 && (
              <div className={`p-3.5 rounded-2xl border space-y-2 max-h-32 overflow-y-auto ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/[0.03] border-black/10'}`}>
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-bold text-rose-500">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Выбрано треков: {favoriteTracks.length}</span>
                </div>
                {favoriteTracks.map((t) => (
                  <div key={t.id} className="flex items-center justify-between gap-2 text-xs">
                    <span className="truncate">{t.title} — {t.originalArtist}</span>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(t.id)}
                      className={`shrink-0 p-1 rounded-full cursor-pointer ${isDark ? 'hover:bg-white/10 text-neutral-400' : 'hover:bg-black/5 text-[#686370]'}`}
                      aria-label={`Убрать ${t.title}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={clearFavorites}
                  className="text-[10px] font-mono underline opacity-70 hover:opacity-100"
                >
                  Очистить всё
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
                className={`w-full px-4 py-2.5 rounded-xl outline-none text-sm ${
                  isDark ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] text-white placeholder:text-neutral-500' : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] placeholder:text-neutral-400'
                }`}
              />
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Телефон или мессенджер"
                className={`w-full px-4 py-2.5 rounded-xl outline-none text-sm ${
                  isDark ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] text-white placeholder:text-neutral-500' : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] placeholder:text-neutral-400'
                }`}
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-xl outline-none text-sm ${
                    isDark ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] text-white' : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218]'
                  }`}
                />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Город"
                  className={`w-full px-3 py-2.5 rounded-xl outline-none text-sm ${
                    isDark ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] text-white placeholder:text-neutral-500' : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] placeholder:text-neutral-400'
                  }`}
                />
              </div>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl outline-none text-sm cursor-pointer ${
                  isDark ? 'bg-neutral-900 border border-white/15 focus:border-[#D49D42] text-white' : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218]'
                }`}
              >
                <option value="Свадьба">Свадьба</option>
                <option value="Корпоратив">Корпоратив</option>
                <option value="Частный праздник">Частный праздник</option>
                <option value="Другое">Другое</option>
              </select>
              <textarea
                rows={2}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Комментарий (необязательно)"
                className={`w-full px-4 py-2.5 rounded-xl outline-none text-sm resize-none ${
                  isDark ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] text-white placeholder:text-neutral-500' : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] placeholder:text-neutral-400'
                }`}
              />

              <div className="space-y-2 pt-1">
                <label className="flex items-start gap-2.5 text-xs cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#D49D42] cursor-pointer"
                  />
                  <span className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>
                    Даю согласие на{' '}
                    <Link to="/consent" target="_blank" className="underline text-[#D49D42] dark:text-[#E0AD52]">
                      обработку персональных данных
                    </Link>
                  </span>
                </label>
                <label className="flex items-start gap-2.5 text-xs cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={wantsNews}
                    onChange={(e) => setWantsNews(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#D49D42] cursor-pointer"
                  />
                  <span className={isDark ? 'text-neutral-300' : 'text-[#4A4552]'}>
                    Хочу получать новости о репертуаре и свободных датах (необязательно)
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!consent}
                className={`w-full py-3.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${
                  isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#141218] text-white hover:bg-black'
                }`}
              >
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
