import React, { useState } from 'react';
import { Camera, ExternalLink, Image as ImageIcon, Eye, Info } from 'lucide-react';
import { PhotoSlotInfo } from '../types';

interface PhotoSlotPlaceholderProps {
  slot: PhotoSlotInfo;
  className?: string;
  allowPreviewToggle?: boolean;
}

export const PhotoSlotPlaceholder: React.FC<PhotoSlotPlaceholderProps> = ({
  slot,
  className = '',
  allowPreviewToggle = true,
}) => {
  const [showImage, setShowImage] = useState<boolean>(Boolean(slot.currentImage));
  const [imageError, setImageError] = useState(false);

  const getAspectClasses = () => {
    switch (slot.aspectRatio) {
      case 'portrait':
        return 'aspect-[3/4] min-h-[380px]';
      case 'square':
        return 'aspect-square min-h-[300px]';
      case 'wide':
        return 'aspect-[21/9] min-h-[260px]';
      case 'video':
        return 'aspect-video min-h-[240px]';
      case 'landscape':
      default:
        return 'aspect-[16/10] min-h-[260px]';
    }
  };

  const hasImage = Boolean(slot.currentImage) && !imageError;

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/20 bg-[#121118]/80 backdrop-blur-xl group transition-all duration-500 shadow-2xl flex flex-col justify-between ${getAspectClasses()} ${className}`}
    >
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

      {/* When image is present and visible */}
      {hasImage && showImage ? (
        <div className="relative w-full h-full flex flex-col justify-between">
          <img
            src={slot.currentImage}
            alt={slot.title}
            onError={() => setImageError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Moody vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 pointer-events-none" />

          {/* Top metadata badge */}
          <div className="relative z-10 p-5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-widest text-[#D49D42]">
              <Camera className="w-3 h-3 text-[#D49D42]" />
              <span>{slot.blockName}</span>
            </span>

            {allowPreviewToggle && (
              <button
                type="button"
                onClick={() => setShowImage(false)}
                className="px-2.5 py-1 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-[10px] font-mono text-neutral-300 hover:text-white transition-all flex items-center gap-1"
                title="Показать разметку слота"
              >
                <Info className="w-3 h-3" />
                <span>Слот</span>
              </button>
            )}
          </div>

          {/* Bottom caption */}
          <div className="relative z-10 p-5 space-y-1">
            <h4 className="font-serif text-lg text-white font-normal leading-snug">
              {slot.title}
            </h4>
            <p className="text-xs text-neutral-300 line-clamp-2 font-sans">
              {slot.description}
            </p>
            {slot.wfolioUrl && (
              <a
                href={slot.wfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#D49D42] hover:underline pt-1 font-mono uppercase tracking-wider"
              >
                <span>Оригинал на Wfolio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      ) : (
        /* Empty Slot / Placeholder State explicitly designed as requested */
        <div className="relative w-full h-full p-6 sm:p-7 flex flex-col justify-between border-2 border-dashed border-white/20 rounded-[28px] bg-gradient-to-br from-[#181622]/70 via-[#100F17]/90 to-[#0A0910] group-hover:border-[#D49D42]/60 transition-colors">
          {/* Subtle noise and light effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D49D42]/10 blur-2xl rounded-full pointer-events-none" />

          {/* Top header bar of the slot */}
          <div className="flex items-center justify-between relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
              <ImageIcon className="w-3 h-3 text-[#D49D42]" />
              <span>{slot.blockName}</span>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
              Слот под фото
            </span>
          </div>

          {/* Center visual icon and title */}
          <div className="my-auto py-4 space-y-3 text-center relative z-10">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-[#D49D42] group-hover:scale-110 group-hover:border-[#D49D42]/40 transition-all shadow-inner">
              <Camera className="w-6 h-6 stroke-[1.75]" />
            </div>

            <div className="space-y-1 max-w-sm mx-auto">
              <h4 className="font-serif text-lg sm:text-xl text-white font-normal tracking-tight">
                {slot.title}
              </h4>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {slot.description}
              </p>
            </div>

            {slot.recommendedFileName && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/10 text-[11px] font-mono text-neutral-300">
                <span className="text-[#D49D42]">📁 Файл:</span>
                <span className="text-white">{slot.recommendedFileName}</span>
              </div>
            )}
          </div>

          {/* Bottom control bar */}
          <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            {slot.wfolioUrl ? (
              <a
                href={slot.wfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-[#D49D42] hover:text-white transition-colors"
              >
                <span>Wfolio диск</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-[11px] text-neutral-500">Wfolio / Локальный диск</span>
            )}

            {slot.currentImage && allowPreviewToggle && (
              <button
                type="button"
                onClick={() => setShowImage(true)}
                className="inline-flex items-center gap-1 text-[11px] text-white hover:text-[#D49D42] transition-colors uppercase tracking-wider font-bold"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Предпросмотр</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
