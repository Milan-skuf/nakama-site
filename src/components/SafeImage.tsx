import React, { useState } from 'react';
import { ExternalLink, Disc3, Eye } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  caption?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'hero' | 'auto';
  darkOverlay?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  caption,
  aspectRatio = 'landscape',
  darkOverlay = false,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'video':
        return 'aspect-video';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'landscape':
        return 'aspect-[4/3]';
      case 'hero':
        return 'h-[75vh] min-h-[520px] max-h-[750px] w-full';
      default:
        return 'min-h-[220px]';
    }
  };

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-lg bg-[#1B1712] border border-[#B9852F]/20 group ${getAspectClass()} ${containerClassName}`}
      >
        {/* Vinyl backdrop grain */}
        <div className="absolute inset-0 opacity-10 vinyl-grooves pointer-events-none" />

        {!imageError ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${className}`}
          />
        ) : (
          /* High-craft fallback if browser blocks wfolio disk share iframe/img */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#2A2016] to-[#1B1712]">
            <Disc3 className="w-12 h-12 text-[#B9852F] mb-3 animate-spin-slow opacity-80" />
            <p className="font-serif-vintage text-lg text-[#F3EAD9] font-medium max-w-xs">
              {alt}
            </p>
            <p className="text-xs text-[#8A7A63] mt-1">Кадр с фотосессии NAKAMA</p>
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#B9852F]/20 text-[#B9852F] hover:bg-[#B9852F] hover:text-[#1B1712] transition-colors"
            >
              <span>Открыть оригинал (Wfolio)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* Dark overlay for text readability (e.g. Hero block or moody photo) */}
        {darkOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1712] via-[#1B1712]/70 to-[#1B1712]/40" />
        )}

        {/* Subtle quick view badge on hover */}
        <div className="absolute inset-0 bg-[#1B1712]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 pointer-events-none">
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto p-2.5 rounded-full bg-[#1B1712]/80 text-[#F3EAD9] border border-[#B9852F]/60 hover:bg-[#B9852F] hover:text-[#1B1712] transition-all shadow-lg text-xs flex items-center gap-1.5"
            title="Открыть фото в высоком разрешении"
          >
            <Eye className="w-4 h-4" />
            <span>Wfolio оригинал</span>
          </a>
        </div>

        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#1B1712]/85 text-[#F3EAD9] text-xs font-serif-vintage border-t border-[#B9852F]/20">
            {caption}
          </div>
        )}
      </div>
    </>
  );
};
