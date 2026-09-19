import React from 'react';
import { Play, Pause, Disc3 } from 'lucide-react';
import { TrackItem } from '../types';
import { getTrackArt } from './CoverFlowPlayer';
import { useTheme } from '../context/ThemeContext';

interface NowPlayingArtProps {
  track: TrackItem;
  trackIndex: number;
  isPlaying: boolean;
  onTogglePlay: () => void;
  className?: string;
}

/**
 * Photographic "now playing" visual, sharing the same art/color mapping as
 * CoverFlowPlayer on the homepage so the listening experience feels like one
 * player across the site instead of two unrelated widgets.
 */
export const NowPlayingArt: React.FC<NowPlayingArtProps> = ({
  track,
  trackIndex,
  isPlaying,
  onTogglePlay,
  className = '',
}) => {
  const { isDark } = useTheme();
  const art = getTrackArt(track, trackIndex);

  return (
    <div
      className={`relative rounded-[28px] overflow-hidden border shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-full min-h-[320px] ${
        isDark ? 'border-white/15' : 'border-black/15'
      } ${className}`}
    >
      {/* Ambient color wash matching the track's art palette */}
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 20%, ${art.bgGlow} 0%, transparent 65%)` }}
      />

      <img
        src={art.image}
        alt={`${track.title} — NAKAMA`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

      {/* Brand mark — a single restrained nod to vinyl, not a hardware simulator */}
      <Disc3
        className={`absolute top-4 right-4 w-5 h-5 text-white/60 ${isPlaying ? 'animate-spin-slow' : ''}`}
      />

      <button
        type="button"
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
        className="absolute inset-0 flex items-end justify-center pb-7 cursor-pointer group"
      >
        <span className="w-16 h-16 rounded-full bg-white/95 group-hover:bg-white text-black flex items-center justify-center shadow-xl transition-all group-hover:scale-105 active:scale-95">
          {isPlaying ? (
            <Pause className="w-6 h-6 fill-current" />
          ) : (
            <Play className="w-6 h-6 fill-current ml-0.5" />
          )}
        </span>
      </button>
    </div>
  );
};
