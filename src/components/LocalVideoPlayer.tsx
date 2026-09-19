import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LocalVideoPlayerProps {
  src: string;
  poster?: string;
  caption?: string;
  showCaption?: boolean;
  className?: string;
  heading?: string;
}

export const LocalVideoPlayer: React.FC<LocalVideoPlayerProps> = ({
  src,
  poster,
  caption = 'Каждый кавер NAKAMA — самостоятельное произведение. Мы не копируем оригинал, а создаем версию, которая звучит интереснее.',
  showCaption = true,
  className = '',
  heading = 'Живое выступление NAKAMA',
}) => {
  const { isDark } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setHasStarted(true);
    requestAnimationFrame(() => {
      videoRef.current?.play();
    });
  };

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto font-mono ${className}`}>
      {/* Video Container */}
      <div className="relative aspect-video overflow-hidden bg-[#1B1712] rounded-xl group">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="metadata"
          playsInline
          controls={hasStarted}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />

        {!hasStarted && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 cursor-pointer"
            aria-label="Воспроизвести промо-ролик NAKAMA"
          >
            <span className="w-16 h-16 rounded-full bg-white/95 group-hover:bg-white text-black flex items-center justify-center pl-1 transition-all group-hover:scale-105 shadow-lg">
              <Play className="w-6 h-6 fill-current" />
            </span>

            <span className="absolute bottom-4 left-4 text-xs text-white/90 font-sans">
              {heading}
            </span>
          </button>
        )}

        {hasStarted && !isPlaying && (
          <button
            type="button"
            onClick={handleTogglePlay}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
            aria-label="Возобновить воспроизведение"
          >
            <span className="w-14 h-14 rounded-full bg-white/95 text-black flex items-center justify-center pl-0.5 shadow-lg">
              <Play className="w-5 h-5 fill-current" />
            </span>
          </button>
        )}
      </div>

      {showCaption && (
        <p
          className={`mt-3 text-xs leading-relaxed font-sans ${
            isDark ? 'text-neutral-400' : 'text-[#686370]'
          }`}
        >
          {caption}
        </p>
      )}
    </div>
  );
};
