import React from 'react';
import { REVIEWS } from '../data/bandData';
import { PageRoute } from '../types';
import { Star, Quote, ArrowRight, Sparkles, MessageSquareHeart } from 'lucide-react';

interface ReviewsSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onNavigate }) => {
  return (
    <section id="reviews-section" className="py-24 bg-[#1A1009] relative overflow-hidden border-t border-[#3A2312]">
      
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F1D8C1] tracking-tight mb-4">
            Что говорят организаторы
          </h2>

          <p className="text-base sm:text-lg text-[#F1D8C1]/80 leading-relaxed">
            Отзывы от ведущих, продюсеров агентств и молодоженов, которые доверили группе NAKAMA кульминационные моменты своих событий.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="rounded-3xl border border-[#3A2312] bg-[#23150B] p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:border-[#9B2F19]/60 hover:bg-[#27170E] transition-all"
            >
              <div>
                {/* Rating Stars & City Date */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#F3A300] text-[#F3A300]" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-[#F1D8C1]/60">
                    {review.city} &bull; {review.eventDate}
                  </span>
                </div>

                {/* Review Text */}
                <div className="relative mb-6">
                  <Quote className="w-9 h-9 text-[#9B2F19]/30 absolute -top-4 -left-2 -z-0" />
                  <p className="relative z-10 text-sm sm:text-base text-[#F1D8C1]/90 italic leading-relaxed">
                    «{review.text}»
                  </p>
                </div>
              </div>

              {/* Author Card Info */}
              <div className="pt-5 border-t border-[#3A2312] flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#9B2F19]/60 shadow-md"
                />
                <div>
                  <h4 className="text-base font-display font-bold text-[#F1D8C1] leading-tight">
                    {review.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F3A300] mt-0.5 leading-tight font-medium">
                    {review.role}
                  </p>
                  <p className="text-xs text-[#F1D8C1]/60 leading-tight mt-0.5">
                    {review.companyOrEvent}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View Cases CTA Button */}
        <div className="text-center">
          <button
            id="reviews-view-cases-btn"
            onClick={() => onNavigate('cases')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-[#9B2F19] bg-[#9B2F19]/20 hover:bg-[#9B2F19] text-[#F1D8C1] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg"
          >
            <span>Смотреть подробнее о мероприятиях (Кейсы)</span>
            <ArrowRight className="w-4 h-4 text-[#F3A300]" />
          </button>
        </div>

      </div>
    </section>
  );
};
