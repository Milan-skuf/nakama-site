import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Disc, Sparkles, Eye, Volume2, Music, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { NAKAMA_REAL_PHOTOS } from '../assets/nakamaPhotos';
import { audioEngine } from '../utils/audioEngine';

export const RetroVinylParallaxSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);

  // Motion scroll hooks for smooth retro parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  // Different parallax speeds & rotations for retro multi-layered floating effect
  const yLayerSlow = useTransform(smoothProgress, [0, 1], [-60, 60]);
  const yLayerMedium = useTransform(smoothProgress, [0, 1], [-120, 120]);
  const yLayerFast = useTransform(smoothProgress, [0, 1], [-180, 180]);
  const rotateVinyl1 = useTransform(smoothProgress, [0, 1], [0, 360]);
  const rotateVinyl2 = useTransform(smoothProgress, [0, 1], [360, 0]);
  const rotateCardLeft = useTransform(smoothProgress, [0, 1], [-6, 6]);
  const rotateCardRight = useTransform(smoothProgress, [0, 1], [6, -6]);

  const handlePlaySample = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      audioEngine.playTrack(`retro-photo-${id}`, 'funk', 124);
    }
  };

  const featuredPhotos = NAKAMA_REAL_PHOTOS.slice(0, 12);

  return (
    <section 
      ref={containerRef}
      id="retro-vinyl-parallax-section" 
      className="py-28 bg-[#120A04] relative overflow-hidden border-t border-b border-[#3A2312]"
    >
      {/* Background Decorative Vinyl Grooves Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #F1D8C1 1px, transparent 1px), radial-gradient(circle at 50% 50%, #9B2F19 2px, transparent 2px)`,
          backgroundSize: '40px 40px, 80px 80px'
        }}
      />

      {/* Floating Retro Vinyl Disc 1 (Left background Parallax) */}
      <motion.div 
        style={{ y: yLayerSlow, rotate: rotateVinyl1 }}
        className="absolute -left-28 top-20 w-96 h-96 rounded-full border-8 border-[#2A180E] bg-[#0E0704] shadow-2xl opacity-40 pointer-events-none hidden lg:flex items-center justify-center z-0"
      >
        <div className="w-64 h-64 rounded-full border border-[#3A2312]/60 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border border-[#3A2312] flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#9B2F19] border-4 border-[#F1D8C1] flex items-center justify-center text-center">
              <span className="font-mono text-[9px] text-[#F1D8C1] font-bold">NAKAMA 33 RPM</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Retro Vinyl Disc 2 (Right background Parallax) */}
      <motion.div 
        style={{ y: yLayerMedium, rotate: rotateVinyl2 }}
        className="absolute -right-24 bottom-10 w-[420px] h-[420px] rounded-full border-8 border-[#2A180E] bg-[#0D0704] shadow-2xl opacity-35 pointer-events-none hidden lg:flex items-center justify-center z-0"
      >
        <div className="w-72 h-72 rounded-full border border-[#3A2312]/60 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-[#3A2312] flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#F3A300] border-4 border-[#120A04] flex items-center justify-center text-center">
              <span className="font-mono text-[9px] text-[#120A04] font-bold">LIMITED STEREO</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        {/* Header Title Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#F3A300]/40 bg-[#27170E] text-xs text-[#F3A300] mb-4 shadow-lg"
          >
            <Disc className="w-4 h-4 text-[#F3A300] animate-spin-slow" />
            <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">
              Retro Vinyl Parallax Showcase
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#9B2F19]" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-[#F1D8C1] tracking-tight mb-5 leading-tight"
          >
            Живые моменты в стиле <span className="text-[#9B2F19] italic">Retro Vinyl</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#F1D8C1]/80 leading-relaxed font-normal"
          >
            При скроллинге фотографии и виниловые пластинки группы плавно перемещаются в пространстве, создавая объёмный эффект ретро-пластинки.
          </motion.p>
        </div>

        {/* Dynamic Parallax Grid with Asymmetric Floating Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 relative">
          
          {featuredPhotos.map((photo, index) => {
            // Assign floating behavior based on column index
            const motionY = index % 3 === 0 ? yLayerSlow : index % 3 === 1 ? yLayerMedium : yLayerFast;
            const motionRotate = index % 2 === 0 ? rotateCardLeft : rotateCardRight;

            return (
              <motion.div
                key={photo.id}
                style={{ y: motionY, rotate: motionRotate }}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer"
              >
                {/* Vinyl Record Peeking Out Behind the Album Cover */}
                <div 
                  className="absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#110B07] border-4 border-[#2A180E] shadow-2xl flex items-center justify-center z-0 transition-all duration-500 group-hover:translate-x-12 group-hover:rotate-45"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #2A180E 2px, transparent 2px), radial-gradient(circle, #2A180E 2px, #110B07 2px)',
                    backgroundSize: '10px 10px'
                  }}
                >
                  <div className="w-28 h-28 rounded-full border border-[#3A2312]/80 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#9B2F19] border-2 border-[#F1D8C1] flex items-center justify-center text-[8px] font-mono text-[#F1D8C1] font-bold">
                      VOL. 0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Retro Album Sleeve Card */}
                <div className="relative z-10 rounded-2xl border-2 border-[#3A2312] bg-[#1E110A] p-3.5 shadow-2xl transition-all duration-500 group-hover:border-[#F3A300]/70 group-hover:shadow-[#9B2F19]/20 overflow-hidden">
                  
                  {/* Image Container with Vintage Vignette */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 brightness-95 group-hover:brightness-105"
                    />
                    
                    {/* Retro Film Overlay & Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140B05] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Top Tag & Audio Preview Button */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#1A1009]/85 text-[#F3A300] border border-[#F3A300]/30 backdrop-blur-md">
                        {photo.categoryName}
                      </span>

                      <button
                        onClick={(e) => handlePlaySample(e, photo.id)}
                        className={`p-2 rounded-full border backdrop-blur-md transition-all cursor-pointer ${
                          playingId === photo.id 
                            ? 'bg-[#9B2F19] text-white border-white animate-pulse' 
                            : 'bg-black/60 text-[#F1D8C1] border-white/20 hover:bg-[#F3A300] hover:text-[#120A04]'
                        }`}
                        title="Воспроизвести фрагмент"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom Title & Details */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#F3A300] mb-1">
                        <Music className="w-3 h-3" />
                        <span>NAKAMA LIVE AUDIO</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-display font-bold text-[#F1D8C1] group-hover:text-white leading-tight">
                        {photo.title}
                      </h3>
                      <p className="text-[11px] font-mono text-[#F1D8C1]/60 mt-0.5">
                        {photo.location}
                      </p>
                    </div>

                    {/* Zoom Icon Hover Effect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <div className="p-3 rounded-full bg-[#9B2F19] text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>

                  </div>

                  {/* Album Bottom Track Spec */}
                  <div className="mt-3 pt-2.5 border-t border-[#3A2312] flex items-center justify-between text-[10px] font-mono text-[#F1D8C1]/50">
                    <span>TRACK #0{index + 1}</span>
                    <span className="text-[#F3A300]">HI-FI STEREO</span>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && featuredPhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-[#9B2F19] z-20 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + featuredPhotos.length) % featuredPhotos.length); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-[#9B2F19] z-20 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % featuredPhotos.length); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-[#9B2F19] z-20 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] relative flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={featuredPhotos[lightboxIndex].src}
              alt={featuredPhotos[lightboxIndex].title}
              className="max-h-[72vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <h4 className="text-lg sm:text-xl font-display font-bold text-[#F1D8C1]">
                {featuredPhotos[lightboxIndex].title}
              </h4>
              <p className="text-xs font-mono text-[#F3A300] mt-1">
                {featuredPhotos[lightboxIndex].location} &bull; NAKAMA RETRO VINYL GALLERY ({lightboxIndex + 1}/{featuredPhotos.length})
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
