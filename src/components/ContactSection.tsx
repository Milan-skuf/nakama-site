import React, { useState } from 'react';
import { BookingFormData, PackagePlan } from '../types';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Users, 
  Clock, 
  HeartHandshake 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialPackage?: PackagePlan | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPackage }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    eventType: 'corporate',
    date: '',
    city: 'Новосибирск',
    packageType: initialPackage ? initialPackage.name : 'Роскошный максимум (98 000 ₽)',
    comment: '',
    guestsCount: '100-200'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#9B2F19', '#F3A300', '#F1D8C1', '#72734D']
      });
    }, 800);
  };

  return (
    <section id="contacts-section" className="py-24 bg-[#1A1009] relative overflow-hidden border-t border-[#3A2312]">
      
      {/* Background Atmosphere Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000&auto=format&fit=crop"
          alt="Живое выступление кавер-группы NAKAMA"
          className="w-full h-full object-cover opacity-15 filter brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1009] via-[#1A1009]/90 to-[#1A1009]/80" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B2F19]/40 bg-[#27170E] text-xs text-[#F1D8C1] mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#F3A300]" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Бронирование дат 2025/2026
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Готовы сделать свой вечер незабываемым?
          </h2>

          <p className="text-sm sm:text-base text-[#F1D8C1]/75 leading-relaxed">
            Оставьте заявку — ответим в течение нескольких часов, зафиксируем свободную дату и обсудим драматургию вашего праздника.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-start">
          
          {/* Left Column: Direct Contacts & Manager Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="rounded-3xl border border-[#3A2312] bg-[#23150B] p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                  alt="Концертный директор Анна"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#9B2F19] shadow-lg"
                />
                <div>
                  <h3 className="text-lg font-display font-bold text-[#F1D8C1]">
                    Менеджер Анна
                  </h3>
                  <p className="text-xs text-[#F3A300] font-mono">
                    Концертный директор группы NAKAMA
                  </p>
                  <p className="text-[11px] text-[#F1D8C1]/60 mt-0.5">
                    Отвечает за 15 минут
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 mb-8 text-xs sm:text-sm">
                <a
                  href="tel:+79069806525"
                  className="flex items-center gap-3 p-3.5 rounded-2xl border border-[#3A2312] bg-[#1A1009] hover:border-[#9B2F19] hover:bg-[#27170E] transition-all text-[#F1D8C1] group"
                >
                  <div className="p-2 rounded-xl bg-[#9B2F19]/20 text-[#BA371E] group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#F1D8C1]/50 font-mono">Телефон для связи:</div>
                    <div className="font-bold text-sm text-[#F1D8C1] font-mono">8-906-980-65-25</div>
                  </div>
                </a>

                <a
                  href="https://t.me/nakamaband"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl border border-[#3A2312] bg-[#1A1009] hover:border-[#0088cc] hover:bg-[#27170E] transition-all text-[#F1D8C1] group"
                >
                  <div className="p-2 rounded-xl bg-[#0088cc]/20 text-[#0088cc] group-hover:scale-110 transition-transform">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#F1D8C1]/50 font-mono">Telegram:</div>
                    <div className="font-bold text-sm text-[#F1D8C1]">@nakamaband</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/79069806525"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl border border-[#3A2312] bg-[#1A1009] hover:border-[#25D366] hover:bg-[#27170E] transition-all text-[#F1D8C1] group"
                >
                  <div className="p-2 rounded-xl bg-[#25D366]/20 text-[#25D366] group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#F1D8C1]/50 font-mono">WhatsApp:</div>
                    <div className="font-bold text-sm text-[#F1D8C1]">Написать в WhatsApp</div>
                  </div>
                </a>
              </div>

              {/* Working Hours & Geography */}
              <div className="pt-4 border-t border-[#3A2312] space-y-2 text-xs text-[#F1D8C1]/70">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#9B2F19]" />
                  <span>Базирование: Новосибирск / Выезд по всей России</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#F3A300]" />
                  <span>Прием заявок: ежедневно с 09:00 до 23:00</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#9B2F19]/50 bg-[#27170E] p-6 sm:p-10 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-[#72734D]/30 border-2 border-[#9BB368] text-[#9BB368] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#F1D8C1] mb-2">
                    Спасибо, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#F1D8C1]/80 max-w-md mx-auto mb-6">
                    Ваша заявка принята. Концертный менеджер Анна свяжется с вами в течение 2-3 часов по номеру <strong className="text-[#F3A300]">{formData.phone}</strong> для подтверждения даты.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ ...formData, name: '', phone: '', comment: '' });
                    }}
                    className="px-6 py-2.5 rounded-full border border-[#3A2312] bg-[#1A1009] text-xs font-mono text-[#F1D8C1] hover:bg-[#3A2312]"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-mono uppercase text-[#F3A300] block mb-1.5">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Например, Александр"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#3A2312] bg-[#1A1009] text-sm text-[#F1D8C1] focus:outline-none focus:border-[#9B2F19]"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs font-mono uppercase text-[#F3A300] block mb-1.5">
                        Номер телефона / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#3A2312] bg-[#1A1009] text-sm text-[#F1D8C1] focus:outline-none focus:border-[#9B2F19]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Event Type */}
                    <div>
                      <label className="text-xs font-mono uppercase text-[#F3A300] block mb-1.5">
                        Тип события
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border border-[#3A2312] bg-[#1A1009] text-xs text-[#F1D8C1] focus:outline-none focus:border-[#9B2F19]"
                      >
                        <option value="corporate">Корпоратив</option>
                        <option value="wedding">Свадьба</option>
                        <option value="birthday">День рождения / Юбилей</option>
                        <option value="festival">Городской фестиваль</option>
                        <option value="agency">Для event-агентства</option>
                        <option value="other">Другое событие</option>
                      </select>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="text-xs font-mono uppercase text-[#F3A300] block mb-1.5">
                        Дата мероприятия
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border border-[#3A2312] bg-[#1A1009] text-xs text-[#F1D8C1] focus:outline-none focus:border-[#9B2F19]"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="text-xs font-mono uppercase text-[#F3A300] block mb-1.5">
                        Город
                      </label>
                      <input
                        type="text"
                        placeholder="Новосибирск, Кемерово..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border border-[#3A2312] bg-[#1A1009] text-xs text-[#F1D8C1] focus:outline-none focus:border-[#9B2F19]"
                      />
                    </div>
                  </div>

                  {/* Package Type Preference */}
                  <div>
                    <label className="text-xs font-mono uppercase text-[#F3A300] block mb-1.5">
                      Интересующий пакет
                    </label>
                    <select
                      value={formData.packageType}
                      onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#3A2312] bg-[#1A1009] text-xs text-[#F1D8C1] focus:outline-none focus:border-[#9B2F19]"
                    >
                      <option value="Роскошный максимум (98 000 ₽)">Роскошный максимум (98 000 ₽ — 90 мин + Welcome 30 мин + 5 каверов)</option>
                      <option value="Базовый минимум (83 000 ₽)">Базовый минимум (83 000 ₽ — 60 мин живого драйва)</option>
                      <option value="Индивидуальный формат">Индивидуальный формат / Фестиваль</option>
                    </select>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="text-xs font-mono uppercase text-[#F3A300] block mb-1.5">
                      Пожелания или сценарий (необязательно)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Расскажите о площадке, пожеланиях по песням или концепции вечера..."
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#3A2312] bg-[#1A1009] text-xs text-[#F1D8C1] focus:outline-none focus:border-[#9B2F19]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#9B2F19] to-[#BA371E] hover:from-[#BA371E] hover:to-[#9B2F19] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl shadow-[#9B2F19]/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4 text-[#F3A300]" />
                    <span>{isSubmitting ? 'Отправка заявки...' : 'Оставить заявку и зафиксировать дату'}</span>
                  </button>

                  <p className="text-[10px] font-mono text-[#F1D8C1]/40 text-center mt-2">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Бронирование даты фиксируется договором.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
