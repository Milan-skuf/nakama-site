import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, CheckCircle2, MapPin, Heart, MessageSquare, Send, X, Music } from 'lucide-react';
import { CONTACT_INFO, MEDIA_LINKS } from '../data/content';
import { LeadFormData } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../utils/favorites';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  defaultEventType?: string;
  className?: string;
  theme?: 'light' | 'dark';
  redirectTo?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  title = 'забронировать дату выступления',
  subtitle = 'Бережная организация и 100% живой звук. Оставьте контакты — менеджер Анна свяжется с вами в течение часа для расчёта и согласования сценария.',
  defaultEventType = 'Свадьба',
  className = '',
  redirectTo,
}) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const { favoriteTracks, count: favoritesCount, clearFavorites } = useFavorites();
  const [formData, setFormData] = useState<LeadFormData & { phone: string; comment: string }>({
    name: '',
    phone: '',
    eventType: defaultEventType,
    eventDate: '',
    city: 'Новосибирск',
    budget: '',
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentTimestamp, setConsentTimestamp] = useState<string | null>(null);
  const [showSelectedTracks, setShowSelectedTracks] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      return;
    }
    setConsentTimestamp(new Date().toLocaleString('ru-RU'));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (redirectTo) {
        navigate(redirectTo);
      } else {
        setSubmitted(true);
      }
    }, 500);
  };

  // Build prefilled message for Telegram & WhatsApp
  const selectedSongsText = favoriteTracks.length > 0
    ? `\nВыбранные песни (${favoriteTracks.length}): ${favoriteTracks.map((t) => t.title).join(', ')}`
    : '';

  const leadMessage = `Здравствуйте! Оставил(а) заявку на группу NAKAMA:\n` +
    `Имя: ${formData.name || 'Заказчик'}\n` +
    `Телефон/Мессенджер: ${formData.phone || 'Не указан'}\n` +
    `Событие: ${formData.eventType}\n` +
    `Дата: ${formData.eventDate || 'Уточняется'}\n` +
    `Город: ${formData.city}\n` +
    (formData.budget ? `Бюджет: ${formData.budget}\n` : '') +
    (formData.comment ? `Комментарий: ${formData.comment}\n` : '') +
    (consentTimestamp ? `Согласие на обработку ПД: получено ${consentTimestamp}\n` : '') +
    selectedSongsText;

  const encodedTelegramMsg = encodeURIComponent(leadMessage);
  const telegramUrl = `${CONTACT_INFO.telegram}?text=${encodedTelegramMsg}`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodedTelegramMsg}`;

  return (
    <div
      id="booking-section"
      className={`glass-card-frosted glass-card-hover rounded-[36px] shadow-2xl overflow-hidden relative transition-colors duration-300 ${
        isDark ? 'border border-white/20 text-white' : 'border border-black/15 text-[#141218]'
      } ${className}`}
    >
      {/* Warm amber stage glow */}
      <div
        className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[110px] pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.22)_0%,rgba(217,119,6,0.12)_50%,transparent_100%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(212,157,66,0.25)_0%,rgba(197,78,14,0.15)_50%,transparent_100%)]'
        }`}
      />

      {/* Section Header */}
      <div
        className={`p-6 sm:p-10 border-b relative z-10 ${
          isDark ? 'border-white/15 bg-white/[0.03]' : 'border-black/10 bg-black/[0.02]'
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`text-[11px] font-display font-black uppercase tracking-widest px-3.5 py-1 rounded-full border backdrop-blur-md ${
              isDark
                ? 'bg-white/10 text-neutral-200 border-white/20'
                : 'bg-black/5 text-[#141218] border-black/15'
            }`}
          >
            БРОНИРОВАНИЕ 2025–2026
          </span>
          <span
            className={`text-xs font-display font-bold uppercase tracking-wider hidden sm:inline ${
              isDark ? 'text-neutral-400' : 'text-[#686370]'
            }`}
          >
            10 музыкантов • 6 голосов
          </span>
        </div>
        <h3
          className={`font-display text-2xl sm:text-4xl font-black uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-[#141218]'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-xs sm:text-sm max-w-2xl mt-2 leading-relaxed font-sans ${
            isDark ? 'text-neutral-300' : 'text-[#4A4552]'
          }`}
        >
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
        {/* Left Side: Atmosphere Visual & Direct Contacts */}
        <div
          className={`lg:col-span-5 relative border-b lg:border-b-0 lg:border-r min-h-[340px] sm:min-h-[440px] overflow-hidden flex flex-col justify-end p-6 transition-colors duration-300 ${
            isDark ? 'border-white/15 bg-[#0D0C10]' : 'border-black/10 bg-[#EFECE6]'
          }`}
        >
          <img
            src={MEDIA_LINKS.finalCtaGroupPhoto}
            alt="Живое выступление кавер-группы NAKAMA"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isDark ? 'opacity-60 filter brightness-90' : 'opacity-85 filter brightness-100'
            }`}
          />
          <div
            className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
              isDark
                ? 'bg-gradient-to-t from-black via-black/70 to-transparent'
                : 'bg-gradient-to-t from-[#F8F6F0] via-[#F8F6F0]/65 to-transparent'
            }`}
          />

          <div
            className={`relative z-10 space-y-4 rounded-[26px] p-6 shadow-2xl backdrop-blur-xl transition-colors duration-300 border ${
              isDark
                ? 'bg-[#0D0C10]/85 border-white/20 text-white'
                : 'bg-white/95 border-black/10 text-[#141218] shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <span
                  className={`text-[10px] uppercase tracking-widest font-display font-black block ${
                    isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                  }`}
                >
                  КОНЦЕРТНЫЙ МЕНЕДЖЕР
                </span>
                <span
                  className={`font-display text-base sm:text-lg font-black uppercase tracking-wider block ${
                    isDark ? 'text-white keep-white' : 'text-[#141218]'
                  }`}
                >
                  {CONTACT_INFO.managerName}
                </span>
              </div>
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all shadow-md shrink-0 ${
                  isDark
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-[#141218] text-white keep-white hover:bg-black'
                }`}
              >
                <Phone
                  className={`w-3.5 h-3.5 ${isDark ? 'text-black' : 'text-white keep-white'}`}
                />
                <span className={isDark ? 'text-black' : 'text-white keep-white'}>
                  {CONTACT_INFO.phone}
                </span>
              </a>
            </div>

            <div
              className={`text-xs flex items-center gap-2 pt-3 border-t font-sans ${
                isDark ? 'text-neutral-300 border-white/15' : 'text-[#4A4552] border-black/10'
              }`}
            >
              <MapPin
                className={`w-4 h-4 shrink-0 ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`}
              />
              <span className={isDark ? 'text-neutral-300' : 'text-[#2D2933]'}>
                {CONTACT_INFO.geography}
              </span>
            </div>

            <div className="flex gap-2.5 pt-1">
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 py-2.5 text-center text-xs font-display font-bold uppercase tracking-wider rounded-full transition-all backdrop-blur-md border ${
                  isDark
                    ? 'bg-white/10 text-white keep-white border-white/20 hover:bg-white/20'
                    : 'bg-black/5 text-[#141218] border-black/15 hover:bg-black/10'
                }`}
              >
                WhatsApp
              </a>
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 py-2.5 text-center text-xs font-display font-black uppercase tracking-wider rounded-full shadow-lg transition-all ${
                  isDark
                    ? 'bg-gradient-to-r from-[#D49D42] to-[#E8590C] text-[#0D0C10] hover:brightness-110'
                    : 'bg-gradient-to-r from-[#D49D42] to-[#E8590C] text-white keep-white hover:opacity-95 shadow-md'
                }`}
              >
                <span className={isDark ? 'text-[#0D0C10]' : 'text-white keep-white'}>
                  Telegram
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div
          className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center ${
            isDark ? 'bg-black/40' : 'bg-white/70'
          }`}
        >
          {submitted ? (
            <div
              className={`p-7 sm:p-9 text-center space-y-5 rounded-[28px] border backdrop-blur-xl animate-fadeIn ${
                isDark
                  ? 'border-white/20 bg-white/[0.05] text-white'
                  : 'border-black/15 bg-white/90 text-[#141218]'
              }`}
            >
              <CheckCircle2
                className={`w-12 h-12 mx-auto ${isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}`}
              />
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-500 font-bold border border-emerald-500/30 inline-block">
                  СТАТУС: ПЕРЕДАНО В РАБОТУ
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-black uppercase pt-1">
                  ДАННЫЕ ПРИНЯТЫ, {formData.name || 'ГОСТЬ'}!
                </h4>
              </div>

              <p
                className={`text-xs max-w-md mx-auto leading-relaxed font-sans ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Менеджер {CONTACT_INFO.managerName} свяжется с вами в течение 1 часа для подтверждения даты ({formData.eventDate || 'согласуется'}), расчёта сметы и обсуждения сценария для города {formData.city}.
              </p>

              {favoriteTracks.length > 0 && (
                <div
                  className={`p-3.5 rounded-2xl text-xs text-left max-w-md mx-auto border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                  }`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-wider font-bold text-rose-500 flex items-center gap-1.5 mb-1.5">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>Прикреплено {favoriteTracks.length} треков из репертуара:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {favoriteTracks.map((t) => (
                      <span
                        key={t.id}
                        className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                          isDark ? 'bg-white/10 text-neutral-200' : 'bg-black/5 text-[#141218]'
                        }`}
                      >
                        {t.title}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct messenger links with prefilled data */}
              <div className="space-y-2 pt-2 max-w-md mx-auto">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Ускорить диалог в мессенджере:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                      isDark
                        ? 'border-white/20 bg-white/10 hover:bg-white/20 text-white'
                        : 'border-black/15 bg-black/5 hover:bg-black/10 text-[#141218]'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                    isDark
                      ? 'border-white/20 hover:bg-white/10 text-neutral-300'
                      : 'border-black/15 hover:bg-black/5 text-[#4A4552]'
                  }`}
                >
                  ОТПРАВИТЬ ЕЩЁ ОДНУ ЗАЯВКУ
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* ФИО */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-name"
                  className={`block text-xs font-display font-black uppercase tracking-wider ${
                    isDark ? 'text-neutral-300' : 'text-[#2D2933]'
                  }`}
                >
                  Имя / Контактное лицо
                </label>
                <input
                  type="text"
                  id="form-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Константин и Мария"
                  className={`w-full px-4 py-3 rounded-2xl outline-none text-sm font-sans transition-all ${
                    isDark
                      ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] focus:bg-white/[0.1] text-white placeholder:text-neutral-500'
                      : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] placeholder:text-neutral-400 shadow-sm'
                  }`}
                />
              </div>

              {/* Номер телефона / Мессенджер */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-phone"
                  className={`block text-xs font-display font-black uppercase tracking-wider ${
                    isDark ? 'text-neutral-300' : 'text-[#2D2933]'
                  }`}
                >
                  Телефон / Мессенджер
                </label>
                <input
                  type="text"
                  id="form-phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (999) 000-00-00 или @telegram"
                  className={`w-full px-4 py-3 rounded-2xl outline-none text-sm font-sans transition-all ${
                    isDark
                      ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] focus:bg-white/[0.1] text-white placeholder:text-neutral-500'
                      : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] placeholder:text-neutral-400 shadow-sm'
                  }`}
                />
              </div>

              {/* Дата и город */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="form-date"
                    className={`block text-xs font-display font-black uppercase tracking-wider ${
                      isDark ? 'text-neutral-300' : 'text-[#2D2933]'
                    }`}
                  >
                    Дата мероприятия
                  </label>
                  <input
                    type="date"
                    id="form-date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl outline-none text-sm font-sans transition-all ${
                      isDark
                        ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] focus:bg-white/[0.1] text-white'
                        : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] shadow-sm'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="form-city"
                    className={`block text-xs font-display font-black uppercase tracking-wider ${
                      isDark ? 'text-neutral-300' : 'text-[#2D2933]'
                    }`}
                  >
                    Город проведения
                  </label>
                  <input
                    type="text"
                    id="form-city"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Новосибирск, Москва..."
                    className={`w-full px-4 py-3 rounded-2xl outline-none text-sm font-sans transition-all ${
                      isDark
                        ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] focus:bg-white/[0.1] text-white placeholder:text-neutral-500'
                        : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] placeholder:text-neutral-400 shadow-sm'
                    }`}
                  />
                </div>
              </div>

              {/* Формат события */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-event-type"
                  className={`block text-xs font-display font-black uppercase tracking-wider ${
                    isDark ? 'text-neutral-300' : 'text-[#2D2933]'
                  }`}
                >
                  Тип события
                </label>
                <select
                  id="form-event-type"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className={`w-full px-4 py-3 rounded-2xl outline-none text-sm font-sans transition-all cursor-pointer ${
                    isDark
                      ? 'bg-neutral-900 border border-white/15 focus:border-[#D49D42] text-white'
                      : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] shadow-sm'
                  }`}
                >
                  <option value="Свадьба">Свадьба</option>
                  <option value="Корпоратив">Корпоратив</option>
                  <option value="День рождения / Юбилей">День рождения / Юбилей</option>
                  <option value="Выпускной">Выпускной</option>
                  <option value="Частный праздник">Частный праздник</option>
                  <option value="Фестиваль">Фестиваль / Городское событие</option>
                  <option value="Другое">Другое</option>
                </select>
              </div>

              {/* Бюджет (необязательно) */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-budget"
                  className={`block text-xs font-display font-black uppercase tracking-wider ${
                    isDark ? 'text-neutral-300' : 'text-[#2D2933]'
                  }`}
                >
                  Бюджет <span className="normal-case font-sans font-normal opacity-60">(необязательно)</span>
                </label>
                <input
                  type="text"
                  id="form-budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="например, до 100 000 ₽"
                  className={`w-full px-4 py-3 rounded-2xl outline-none text-sm font-sans transition-all ${
                    isDark
                      ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] focus:bg-white/[0.1] text-white placeholder:text-neutral-500'
                      : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] placeholder:text-neutral-400 shadow-sm'
                  }`}
                />
              </div>

              {/* Комментарий */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-comment"
                  className={`block text-xs font-display font-black uppercase tracking-wider ${
                    isDark ? 'text-neutral-300' : 'text-[#2D2933]'
                  }`}
                >
                  Комментарий или пожелания к вечеру
                </label>
                <textarea
                  id="form-comment"
                  rows={2}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Особые пожелания по песням, дресс-коду или таймингу..."
                  className={`w-full px-4 py-3 rounded-2xl outline-none text-sm font-sans transition-all resize-none ${
                    isDark
                      ? 'bg-white/[0.06] border border-white/15 focus:border-[#D49D42] focus:bg-white/[0.1] text-white placeholder:text-neutral-500'
                      : 'bg-white border border-black/15 focus:border-[#B88228] text-[#141218] placeholder:text-neutral-400 shadow-sm'
                  }`}
                />
              </div>

              {/* Selected Repertoire Banner inside Form */}
              {favoriteTracks.length > 0 && (
                <div
                  className={`p-3.5 rounded-2xl border flex flex-col gap-2 ${
                    isDark
                      ? 'bg-rose-950/20 border-rose-500/30 text-rose-200'
                      : 'bg-rose-50/80 border-rose-200 text-rose-900'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-bold font-mono uppercase tracking-wider">
                      <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                      <span>Выбранные песни в заявку: {favoriteTracks.length}</span>
                    </div>
                    <button
                      type="button"
                      onClick={clearFavorites}
                      className="text-[10px] font-mono underline hover:opacity-75 cursor-pointer"
                    >
                      Очистить
                    </button>
                  </div>
                  <div className="text-[11px] font-sans truncate opacity-90">
                    {favoriteTracks.map((t) => t.title).join(', ')}
                  </div>
                </div>
              )}

              {/* Mandatory 152-FZ Consent Checkbox */}
              <div className="pt-2 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="leadform-consent-checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-gray-400 text-[#D49D42] focus:ring-[#D49D42] cursor-pointer accent-[#D49D42]"
                />
                <label
                  htmlFor="leadform-consent-checkbox"
                  className={`text-xs font-sans leading-snug cursor-pointer select-none ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  Даю согласие на{' '}
                  <Link
                    to="/consent"
                    target="_blank"
                    className="underline hover:opacity-80 transition-opacity font-medium text-[#D49D42] dark:text-[#E0AD52]"
                  >
                    обработку персональных данных
                  </Link>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex justify-center text-center">
                <button
                  type="submit"
                  id="submit-booking-lead"
                  disabled={loading || !consent}
                  className={`w-full sm:w-auto inline-flex items-center justify-center font-display font-black text-xs sm:text-sm uppercase tracking-wider px-9 py-4 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                    isDark
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-[#141218] text-white hover:bg-black'
                  }`}
                >
                  {loading ? 'ОТПРАВКА...' : 'ОСТАВИТЬ ЗАЯВКУ'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
